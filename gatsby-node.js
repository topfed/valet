const fs = require("fs");
const path = require("path");

const admin = require("firebase-admin");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const places = await db.collection("S_places").get();
  const placesSort = places?.docs?.map((e) => {
    const data = e?.data();
    return {
      id: e.id,
      count: data?.places?.length,
    };
  });
  const groupedByCity = placesSort?.reduce((acc, item) => {
    const parts = item.id.split("-");
    const city = parts.pop();
    const service = parts.join("-");
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(service);
    return acc;
  }, {});
  const collections = process.env.COLLECTIONS_NODE.split(",");
  for (const collection of collections) {
    try {
      const snapshot = await db
        .collection(collection)
        .where("s", "==", parseInt(process.env.SUBID))
        .get();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (collection.endsWith("settings") && data.settings) {
          data.settings.groupedByCity = groupedByCity;
          data.settings = JSON.stringify(data.settings);
        }
        createNode({
          ...data,
          id: createNodeId(`${collection}-${doc.id}`),
          parent: null,
          children: [],
          internal: {
            type: collection.replace("S_", "S"),
            contentDigest: createContentDigest(data),
          },
        });
      });
    } catch (error) {
      console.error(
        `Error fetching from '${collection}':`,
        error.message || error
      );
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSpages {
        nodes {
          slug
          type
          category
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const template = path.resolve(`./src/templates/index.js`);
  const pages = result.data.allSpages.nodes;
  const keywords = pages?.filter(
    (e) => e?.type === "keyword" && e?.category !== null
  );
  const cities = pages?.filter((e) => e?.type === "city");
  const categories = pages?.filter((e) => e?.type === "category");

  pages.forEach((content) => {
    if (content.slug !== "/" && content.slug !== "404") {
      if (!(content?.type === "keyword" && content?.category === null)) {
        createPage({
          path: `/${content.slug}/`,
          component: template,
          context: {
            slug: content.slug,
            type: content.type,
          },
        });
      }
    }
  });

  for (const category of categories) {
    for (const city of cities) {
      createPage({
        path: `/${category.slug}/${city.slug}/`,
        component: template,
        context: {
          category: category.slug,
          city: city.slug,
          type: "categoryPlace",
        },
      });
    }
  }

  const places = await db.collection("S_places").get();
  const placesSort = places?.docs
    ?.map((e, i) => {
      const data = e?.data();
      return {
        id: e.id,
        count: data?.places?.length,
        places: data?.places,
        update: data?.update,
      };
    })
    .sort((a, b) => b.count - a.count);
  let c = 0;

  function getRandomCount(n) {
    const map = {
      3: 2,
      4: 3,
      5: 4,
      6: 4,
      7: 5,
      8: 6,
      9: 7,
      10: 7,
      11: 8,
      12: 9,
      13: 10,
      14: 10,
      15: 11,
      16: 12,
      17: 13,
      18: 14,
      19: 15,
      20: 15,
    };

    if (n <= 2) return n; // show all if 0,1,2
    if (n >= 20) return map[20]; // cap rule at 20 -> 15
    return map[n] ?? Math.min(n, 15); // fallback safety
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  for (const doc of placesSort) {
    c++;
    const parts = doc.id.split("-");
    const city = parts.pop();
    const service = parts.join("-");
    const featured = (doc?.places || []).filter((e) => e?.status === 3);
    const normalAll = (doc?.places || []).filter((e) => e?.status === 2);
    const take = getRandomCount(normalAll.length);
    const normalRandom = shuffle(normalAll).slice(0, take);
    const placesFinal = [...featured, ...normalRandom].slice(0, 20);

    createPage({
      path: `/${service}/${city}/`,
      component: template,
      context: {
        keyword: service,
        city,
        type: "place",
        update: Date.now(),
        places: placesFinal,
      },
    });
  }
};

exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    {
      allSpages {
        nodes {
          slug
          type
          name
          category
        }
      }
    }
  `);

  const pages = result.data.allSpages.nodes;
  const keywords = pages?.filter(
    (e) => e?.type === "keyword" && e?.category !== null
  );

  const index = keywords?.map((node) => ({
    name: node.name,
    slug: node.slug,
  }));

  fs.writeFileSync(
    path.join(__dirname, "public/search-index.json"),
    JSON.stringify(index)
  );
};
