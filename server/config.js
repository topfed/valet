const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "spirit-92da0",
      clientEmail:
        "firebase-adminsdk-d5ah8@spirit-92da0.iam.gserviceaccount.com",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYrmnQ1CQet27Y\ndENHxsPgTojLJzHIAQwSYs06xzH6+hs2PWiHT9YMiUTvNp7cc4vzMUf3rM4OZSTN\nBOXHK71XKcy1odGQsROLbgAWev4EdyQ14i62V0uPkhdX0B3QLtGs8KLNIcRffXky\nmFxNS2jo/zQKrcnIxGtlylLV0IHgSDIUpQozqg3GyW+N8+zydA3pB0csITpz0glT\naGerIAfwHp7tshDeH9xj0MkuH/Ue93PYXGHN+pqFQ8pr2PzCszUhwoecsuO16zlc\njsmXwkJ6D9+2oZGhpHv4n8KPeIv0DmQLMDxx48EJFwxHUtQy0TRZvyxbo1jHmNrU\nW/JeESfTAgMBAAECggEACHQLpsTAFTVJvVE+kmBGYwpmF31di7nHHdN7kmgJ89/a\nFtgyi99XNg15lBb9l64MDxRo7CUUqYZfEbzWLf9Vddh6HYpOjIjJULxv486+dqfU\nCOmzdWQC6nmHslRy+h5FfKI8GUhn03OifLMj1SG6NsA+dOLnW6bIXXPkvzLSpgSz\nWVonqf8BV2bbC5xIG7q6zNNzw+vgUnSwe7dbYCYMd6TkLeMiB33OA+Fgnl9VTQc+\naHGiT+eNaR3t0SuujtsnNiUKCgPc5a8EGK6j9SCrgty0N+MR0slJL2Uf6xPvm1va\nkwxajoa5H28V7afXmXKwK7bBppK8tEQ2yB2p3sKaJQKBgQDQGtaIcZqNQboKDR5h\n9EO0ID0uRUoTmlculAOecmsWraxMwRy6HWnzGeTK0WDMy3wiM2ur3MMSWqtsRoYE\nDXSaUyg4RUzz4iMwG1wMh14hqWmpekhojKUVWAEpygi6/GQ8Wl/Njmn+f9UUV4uQ\nN77g3zW2YASFSgrO6idjYUZ77wKBgQC70h7ddzpEsp+KBEAh53J01lpe7x7Q5KBb\ng0JHgp2v6g3d2T0eaGP2yVjtRVynZqs6hmxfDdXmcq0LWGd8dlUAGXoE55RLyg0f\nZOqWsyWb20CTQLzNF3WUFfY8eWQyhVZF0tNaiumTQT58Yc65446qpzy1kBIo9vJD\nWI2q3HH+XQKBgCD5777lSZlSrflDxOm+vC/B4BAB+NAMZ/5AhCZKeT+5u5DaFQRE\n/vH/y2p8LTumjwAYZ9pu/BZfecSJlFj2DOEbhkcMbDpFPlA0Nazikn8BCnZJo0m1\n577vGBgYJLQEpJmPtJitFYy3kvtLOBldTAj0Nd21b2HzrqzFHAK6emHPAoGBAJz+\nGYaMrkvV8rzuqJyuVWGL+qX3wg5hzBgyMyiK6TutrEGP4CKWp1gVHRvXKodSrjWR\nPuyFKBIkMLiXAIlsb8hRg0iuOarQDP/83olw3TLVpbhwGGBmB4XshZIu9a20/lQG\n0VuRWYQYuR5GswF2UD4c5AXvkv5izEW2s1PqR+6RAoGATOnaHmKSLuy3mTsk8OQL\njocbzjYirTzuphDPUCw2/qyzmdl0bMkHiiDC3xIU3p5VbJCbhKitL7u2sKyefZdt\nDIXX5Q1snvUbklG5QUgt4urtYZ3B3vo+IBbSC2rxIT22tI1wJRYtAPi48zgHvJ0g\nb98Z2RIR9w+EVJC98070B04=\n-----END PRIVATE KEY-----\n".replace(
          /\\n/g,
          "\n"
        ),
    }),
  });
}
const db = admin.firestore();

const site = 1;
const settings = {
  404: [],
  header: {
    logo: {
      src: "TrustValet.svg",
      width: "150px",
      height: "30px",
      alt: "Logo",
      loading: "eager",
      fetchpriority: "high",
    },
    logoLabel: "Home Page",
    searchIcon: {
      src: "icons/search.svg",
      width: "28px",
      height: "28px",
      alt: "search",
      loading: "eager",
      fetchpriority: "high",
    },
    searchTitle: "Type to Filter...",
    menuLabel: "Mobile Menu",
    nav: [
      { name: "Business", url: "/business/" },
      { name: "Lifestyle", url: "/lifestyle/" },
      { name: "Home Improvement", url: "/home-improvement/" },
      { name: "Health & Wellness", url: "/health-wellness/" },
      { name: "Legal", url: "/legal/" },
      { name: "Other Services", url: "/other-business/" },
    ],

    promoTop: [
      {
        icon: "",
        title: `Choose with <strong class="text-black">Confidence</strong>`,
      },
      {
        icon: "",
        title: `Verified Professionals <strong class="text-black">Near You</strong>`,
      },
      {
        icon: "",
        title: `<strong class="text-black">Trusted</strong> & Vetted Services`,
      },
      {
        icon: "",
        title: `Find the <strong class="text-black">Right Expert</strong> Fast`,
      },
    ],
    delivery: `Find verified professionals in <strong class="location">UK</strong>`,
    deliveryIcon: "location",
    labelLogo: "Logo",
    labelMenu: "Menu",
    labelSearch: "Search",

    labelClose: "Close",
    logoActive: false,
    logoType: "svg",
    logoData: "TrustValet.svg",
    socialActivate: true,
    socialContent:
      "Join our online community for expert tips, product updates, exclusive deals, and exciting new bike arrivals.",
    socialTitle: `Folow Us`,
    socialList: [
      {
        name: "facebook2",
        link: "https://www.facebook.com/trustvaletuk/",
      },
      {
        name: "linkedin2",
        link: "https://www.linkedin.com/",
      },
    ],
    activeCompare: false,
    compareLabels: [],
    searchTitle: "Search Services",
    activeSearchBrands: false,
    searchresults: "Results for your search",
    searchNoresult: "We didn’t find any products. Try another search term.",
  },
  footerAbove: {
    bgColor: "bg-light",
    title: "Discover Trusted Professionals & New Services",
    subTitle: "",
    content:
      "Join the TrustValet newsletter to stay informed about newly vetted professionals, expanded services, and expert recommendations in your area. We only share useful updates—no spam, just trusted insights to help you choose with confidence.",
    inputPlaceholder: "Enter your email address",
    inputLabel: "Email address",
    buttonText: "Get Updates",
    buttonLink: "/#subscribed",
    featureLink: "How TrustValet works",
    thankMesage: "You're all set—welcome to TrustValet.",
    thankMessage2: "Check your inbox to confirm your subscription.",
    thankMessage3: "Don’t fill this out if you’re human:",
  },
  index: [
    {
      id: `Hero`,
      imgDesktop: "hero.webp",
      imgMobile: "heroMobile.webp",
      imgAlt: "TrustValet trusted professional services",
      videoMp4: "trustValet.mp4",
      title:
        "Find <span>Trusted Professionals</span> You Can <span>Rely On</span>",
      shortContent:
        "TrustValet helps you discover carefully vetted professionals across key services—saving you time and giving you confidence in every choice.",
      displayButton: true,
      buttonText: `Request a Quote`,
      buttonTextLink: `/services/`,
      buttonSubText: `Vetted. Reliable. Simple.`,
    },
    {
      id: "Keywords",
      title: "Browse Trusted Services for What You Need",
      subTitle: "BUSINESSES ORGANIZED BY CATEGORY",
      content:
        "Browse by category to find trusted professionals across the UK. From finance and health to home improvement and legal help, we’ve got you covered. Each provider is reviewed for expertise, service quality, and real customer feedback. Quickly connect with the right business for your needs.",
      buttonText: "More ### Services",
    },
    {
      id: "Cities",
      title: "Find Trusted Local Services Near You",
      subTitle: "BROWSE BY CITY ACROSS THE UK",
      content:
        "Looking for reliable services in your area? Choose a city to explore top-rated professionals, verified for quality and trust. Each listing is carefully reviewed to ensure real customer satisfaction and strong local reputation. Discover the best businesses near you, fast, simple, and trusted.",
    },
    {
      id: "Selection",
      title: "A Transparent and Trusted Selection Process",
      subTitle: "HOW WE CHOOSE",
      content:
        "At TrustValet, every business featured on our platform is selected through a careful, data-driven evaluation process. We don’t accept listings at random — we research, verify, and assess businesses based on their credibility, customer engagement, and public reputation.###Our selection process prioritizes transparency, accuracy, and trust. From analyzing service quality to reviewing credentials and public feedback, we aim to highlight only those businesses that consistently meet high standards across the United Kingdom.",
      list: [
        {
          icon: {
            src: "search",
            width: "48px",
            height: "48px",
            alt: "Evaluate Local Experts",
          },
          title: "How We Discover and Evaluate Local Experts",
          content:
            "We identify businesses from across the UK using a combination of public directories, local insights, review platforms, and user recommendations. Only those with an active online presence, clear service information, and consistent customer engagement are considered.",
        },
        {
          icon: {
            src: "verification",
            width: "48px",
            height: "48px",
            alt: "Real Reviews",
          },
          title: "Real Reviews, No Manipulation",
          content:
            'To protect our users from fake or misleading listings, we use trusted <a href="https://en.wikipedia.org/wiki/API" target="_blank" rel="noopener noreferrer">APIs</a> and AI-driven tools that scan for signs of manipulation. We analyze review patterns, detect sudden changes in reputation, and flag businesses with suspicious behavior.',
        },
        {
          icon: {
            src: "reputation",
            width: "48px",
            height: "48px",
            alt: "Credential Verification",
          },
          title: "Strict Credential Verification",
          content:
            'Each business is carefully reviewed using public data, including relevant licenses, certifications, and industry-specific memberships. We verify this information through trusted sources such as <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer">Companies House</a>, <a href="https://www.thegazette.co.uk/" target="_blank" rel="noopener noreferrer">The Gazette</a>, and official trade associations.',
        },
        {
          icon: {
            src: "evaluating",
            width: "48px",
            height: "48px",
            alt: "Trusted Platforms",
          },
          title: "Reputation Across Trusted Platforms",
          content:
            'We analyze reviews and public reputation from platforms like <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google</a>, <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer">Trustpilot</a>, and <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer">Yelp</a>. We don’t just look at star ratings — we consider volume, tone, and how the business responds to customers.',
        },
        {
          icon: {
            src: "focus",
            width: "48px",
            height: "48px",
            alt: "Professional Focus",
          },
          title: "Experience and Professional Focus",
          content:
            "In the final step, we evaluate each provider’s specific services, industry focus, and performance history. We highlight those with clear expertise, reliable delivery, and a commitment to long-term client satisfaction.",
        },
      ],
    },
    {
      id: "Source",
      title: "Where Our Data Comes From",
      subTitle: "SOURCES OF INFORMATION",
      content:
        "We rely on trusted platforms and official records to keep our listings accurate and up to date. Every business is reviewed using public data, verified credentials, and real customer feedback. This ensures our recommendations are transparent, reliable, and backed by recognized sources.",
      list: [
        {
          img: {
            src: "companies-house.png",
            width: "100%",
            height: "100px",
            alt: "Companies House",
          },
          link: "https://www.gov.uk/",
        },
        {
          img: {
            src: "the-gazette.png",
            width: "100%",
            height: "100px",
            alt: "Gazette",
          },
          link: "https://www.thegazette.co.uk/",
        },
        {
          img: {
            src: "experian.svg",
            width: "100%",
            height: "100px",
            alt: "Experian",
          },
          link: "https://www.experian.co.uk/",
        },
        {
          img: {
            src: "google.svg",
            width: "100%",
            height: "100px",
            alt: "Google",
          },
          link: "https://www.google.co.uk/",
        },
        {
          img: {
            src: "facebook.svg",
            width: "100%",
            height: "100px",
            alt: "Facebook",
          },
          link: "https://www.facebook.com/",
        },
        {
          img: {
            src: "trustpilot.svg",
            width: "100%",
            height: "100px",
            alt: "Trustpilot",
          },
          link: "https://www.trustpilot.com/",
        },
        {
          img: {
            src: "linkedin.svg",
            width: "100%",
            height: "100px",
            alt: "Linkedin",
          },
          link: "https://www.linkedin.com/",
        },
        {
          img: {
            src: "yelp.svg",
            width: "100%",
            height: "100px",
            alt: "Yelp",
          },
          link: "https://www.yelp.com/",
        },
      ],
    },
  ],
  content: [{ id: "Content" }],
  form: [{ id: "Content" }],
  category: [
    {
      id: "CategoryKeywords",
      title: "Top-Rated ### Services Across the UK",
      subTitle: "Experts You Trust",
    },
    {
      id: "CategoryCities",
      title: "Find ### Services by City",
      subTitle: "Local Experts Only",
      content:
        "Explore top-rated professionals across major cities. Whether you're in London, Manchester, or beyond, we list the best local ### experts to meet your needs.",
    },
  ],
  categoryPlace: [
    {
      id: "CategoryPlacesKeywords",
      title: "Popular ### Services Available in ##",
      subTitle: "Browse Services",
      shortDescription:
        "Explore a wide range of trusted ### services in ##, all reviewed and ready to meet your local needs.",
    },
    {
      id: "CategoryPlacesCities",
      title: "Explore ### Services in Other UK Cities",
      subTitle: "More Locations",
      content:
        "Looking for ### services outside ##? Discover trusted providers in nearby cities offering the same great service.",
    },
  ],
  keyword: [
    {
      id: "KeywordCity",
      title: "Find ### in Cities Across the UK",
      subTitle: "Local Experts Near You",
    },
    {
      id: "KeywordFaq",
      title: "About ### (FAQ)",
      subTitle: "What You Need to Know",
      content:
        "Have questions about ###? This section covers the most common concerns and helpful insights so you can better understand what to expect when working with professional ###.",
    },
    {
      id: "KeywordCategory",
      title: "Other Services Related to ###",
      subTitle: "You May Also Need",
      content:
        "Looking beyond ###? Explore similar services that may also match your needs — all trusted and available across the UK.",
    },
  ],
  city: [
    {
      id: "CityKeywords",
      title: "Explore Services Available in ###",
      subTitle: "Services by Category",
      buttonText: "More ### Services",
      content:
        "Browse all service categories available in ###. From legal help to home repairs, we connect you with local professionals ready to assist.",
    },
    {
      id: "CityCities",
      title: "Explore Services in Other UK Cities",
      subTitle: "More Locations",
      content:
        "Looking for services outside of ###? Explore other cities to find trusted professionals wherever you are—from London to Glasgow and beyond.",
    },
  ],
  place: [
    {
      id: "Places",
      titleHero: "Trusted <span>###</span> in ##",
      titleSEO: "Recommended ## Trusted #### in ### - #",
      descSEO:
        "Explore trusted local ### in ##. Find the right professional # for your needs today.",
      title: "Recommended ## ### by Trusted Sources",
      content:
        "Looking for trusted ### in ##? We've curated a list of top-rated professionals who are known for reliability, expertise, and excellent service. Whether you're starting a project or need ongoing support, discover the best ### serving ## today.",
      crumbHero1: "Evaluated",
      crumbHero2: "Selected",
      checkTitle1: "Reviews",
      checkTitle2: "Complaints",
      checkTitle3: "Transparency",
      checkTitle4: "Engagement",
      checkTitle5: "Registration",
      lernText: "Learn about our",
      lernLinkText: "selection process",
      lernLink: "/selection-process/",
      metaTitle1: "Get Direction",
      metaTitle2: "Visit Website",
      whyChoose: "Why choose this ###?",
      clientSay: "Clients say:",
      sourceTitle: " Source:",
    },
    {
      id: "PlacesCity",
      title: "Find ### in Other Cities",
      subTitle: "Explore Nearby Locations",
      content:
        "Looking for a trusted ### outside your area? Browse nearby cities to discover experienced professionals offering reliable services wherever you need them.",
    },
    {
      id: "PlacesFaq",
      title: "About ### (FAQ)",
      subTitle: "What You Need to Know",
      content:
        "Understand what ### do and how to find the best fit for your needs.",
    },
    {
      id: "PlacesKeywords",
      title: "Explore More ### Services in ##",
      subTitle: "More Trusted Experts Nearby",
      content:
        "Looking for similar professionals? Discover more services related to ### in ##, all reviewed and trusted locally.",
      moreCategory: "More ### Services",
    },
  ],
  selection: [
    {
      id: "Selection",
      title: "A Transparent and Trusted Selection Process",
      subTitle: "HOW WE CHOOSE",
      content:
        "At TrustValet, every business featured on our platform is selected through a careful, data-driven evaluation process. We don’t accept listings at random — we research, verify, and assess businesses based on their credibility, customer engagement, and public reputation.###Our selection process prioritizes transparency, accuracy, and trust. From analyzing service quality to reviewing credentials and public feedback, we aim to highlight only those businesses that consistently meet high standards across the United Kingdom.",
      list: [
        {
          icon: {
            src: "search",
            width: "48px",
            height: "48px",
            alt: "Evaluate Local Experts",
          },
          title: "How We Discover and Evaluate Local Experts",
          content:
            "We identify businesses from across the UK using a combination of public directories, local insights, review platforms, and user recommendations. Only those with an active online presence, clear service information, and consistent customer engagement are considered.",
        },
        {
          icon: {
            src: "verification",
            width: "48px",
            height: "48px",
            alt: "Real Reviews",
          },
          title: "Real Reviews, No Manipulation",
          content:
            'To protect our users from fake or misleading listings, we use trusted <a href="https://en.wikipedia.org/wiki/API" target="_blank" rel="noopener noreferrer">APIs</a> and AI-driven tools that scan for signs of manipulation. We analyze review patterns, detect sudden changes in reputation, and flag businesses with suspicious behavior.',
        },
        {
          icon: {
            src: "reputation",
            width: "48px",
            height: "48px",
            alt: "Credential Verification",
          },
          title: "Strict Credential Verification",
          content:
            'Each business is carefully reviewed using public data, including relevant licenses, certifications, and industry-specific memberships. We verify this information through trusted sources such as <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer">Companies House</a>, <a href="https://www.thegazette.co.uk/" target="_blank" rel="noopener noreferrer">The Gazette</a>, and official trade associations.',
        },
        {
          icon: {
            src: "evaluating",
            width: "48px",
            height: "48px",
            alt: "Trusted Platforms",
          },
          title: "Reputation Across Trusted Platforms",
          content:
            'We analyze reviews and public reputation from platforms like <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google</a>, <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer">Trustpilot</a>, and <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer">Yelp</a>. We don’t just look at star ratings — we consider volume, tone, and how the business responds to customers.',
        },
        {
          icon: {
            src: "focus",
            width: "48px",
            height: "48px",
            alt: "Professional Focus",
          },
          title: "Experience and Professional Focus",
          content:
            "In the final step, we evaluate each provider’s specific services, industry focus, and performance history. We highlight those with clear expertise, reliable delivery, and a commitment to long-term client satisfaction.",
        },
      ],
    },
    {
      id: "Source",
      title: "Where Our Data Comes From",
      subTitle: "SOURCES OF INFORMATION",
      content:
        "We rely on trusted platforms and official records to keep our listings accurate and up to date. Every business is reviewed using public data, verified credentials, and real customer feedback. This ensures our recommendations are transparent, reliable, and backed by recognized sources.",
      list: [
        {
          img: {
            src: "companies-house.png",
            width: "100%",
            height: "100px",
            alt: "Companies House",
          },
          link: "https://www.gov.uk/",
        },
        {
          img: {
            src: "the-gazette.png",
            width: "100%",
            height: "100px",
            alt: "Gazette",
          },
          link: "https://www.thegazette.co.uk/",
        },
        {
          img: {
            src: "experian.svg",
            width: "100%",
            height: "100px",
            alt: "Experian",
          },
          link: "https://www.experian.co.uk/",
        },
        {
          img: {
            src: "google.svg",
            width: "100%",
            height: "100px",
            alt: "Google",
          },
          link: "https://www.google.co.uk/",
        },
        {
          img: {
            src: "facebook.svg",
            width: "100%",
            height: "100px",
            alt: "Facebook",
          },
          link: "https://www.facebook.com/",
        },
        {
          img: {
            src: "trustpilot.svg",
            width: "100%",
            height: "100px",
            alt: "Trustpilot",
          },
          link: "https://www.trustpilot.com/",
        },
        {
          img: {
            src: "linkedin.svg",
            width: "100%",
            height: "100px",
            alt: "Linkedin",
          },
          link: "https://www.linkedin.com/",
        },
        {
          img: {
            src: "yelp.svg",
            width: "100%",
            height: "100px",
            alt: "Yelp",
          },
          link: "https://www.yelp.com/",
        },
      ],
    },
  ],
  footer: {
    logoData: "TrustValetFooter.svg",
    labelLogo: "Logo Footer",
    text: "Tell us what you’re looking for and we’ll point you to vetted professionals in your area. TrustValet is a concierge-style directory. Listed providers are independent businesses.",
    socialTitle: "Follow Us",
    phoneTitle: "Questions or need help?",
    phoneNumber: "+1 (720) 312 7878",
    addresCompany: "48A Boundary Road, Rowley Way, London NW8 0HJ",
    phoneNumberLink: "https://wa.me/17203127878",
    emailData: "info@trustvalet.uk",
    activatePartners: true,
    partnersTitle: "Trusted Sources",
    partnersContent:
      "We work only with carefully vetted service providers and partners we trust, ensuring every listing on TrustValet meets our standards for reliability, professionalism, and quality.",
    partners: [
      {
        name: "experian",
        src: "experian.svg",
        url: "https://www.experian.co.uk",
      },
      { name: "google", src: "google.svg", url: "https://www.google.com/" },
      {
        name: "trustpilot",
        src: "trustpilot.svg",
        url: "https://www.trustpilot.com/",
      },
      {
        name: "facebook",
        src: "facebook.svg",
        url: "https://www.facebook.com/",
      },
      {
        name: "linkedin",
        src: "linkedin.svg",
        url: "https://www.linkedin.com/",
      },
      {
        name: "yelp",
        src: "yelp.svg",
        url: "https://www.yelp.com/",
      },
      {
        name: "instagram",
        src: "instagram.svg",
        url: "https://www.instagram.com/",
      },
      {
        name: "youtube",
        src: "youtube.svg",
        url: "https://www.youtube.com/",
      },
    ],
    nav1Title: "Help & Trust",
    nav1: [
      { name: "Contact Us", url: "/contact-us/" },
      { name: "Selection Process", url: "/selection-process/" },
      { name: "How TrustValet Works", url: "/" },
      { name: "FAQs", url: "/" },
      { name: "Report a Listing", url: "/" },
      { name: "Recommend a Business", url: "/" },
    ],
    nav2Title: "Information",
    nav2: [
      { name: "Privacy & Policy", url: "/privacy-and-policy/" },
      { name: "Terms & Conditions", url: "/terms-and-conditions/" },
      { name: "Cookie Policy", url: "/" },
      { name: "Disclaimer", url: "/" },
      { name: "Accessibility", url: "/" },
      { name: "Reviews Policy", url: "/" },
    ],
    socialActivate: true,
    socialList: [
      {
        name: "facebook",
        link: "https://www.facebook.com/trustvaletuk",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    copyright: "© 2025 TrustValet. All rights reserved.",
  },
};

const pages = [
  {
    s: 1,
    name: "Selection Process",
    type: "selection",
    display: true,
    faq: null,
    slug: "selection-process",
    shortContent:
      "Our transparent selection process combines data analysis, credential checks, and real customer reviews to ensure every listing meets our quality standards.",
    seoDesc:
      "Learn how TrustValet selects verified UK professionals. We use public data, customer reviews, and credential checks to ensure every listing is trustworthy.",
    content: "",
    seoTitle: "Our Selection Process for Trusted UK Professionals",
    title: "Selection Process",
  },
  {
    s: 1,
    slug: "privacy-and-policy",
    type: "content",
    display: true,
    faq: null,
    name: "Privacy & Policy",
    shortContent: "Your Data, Our Commitment.",
    seoDesc:
      "See how TrustValet protects your data, respects your privacy, and gives you control over your personal information.",
    seoTitle: "Understanding Our Privacy & Policy: What You Need to Know",
    title: "Privacy & Policy",
    content:
      "<p>\n" +
      '  This Privacy Policy explains how Topfed Inc. ("TrustValet," "we," "our," or "us") handles personal information in connection with your use of our website TrustValet.co.uk.\n' +
      "</p>\n" +
      "<p>\n" +
      "  TrustValet is a read-only, informational platform. We do not collect, store, or process any personal data from visitors. Our pages are static and are intended solely for viewing purposes. We do not offer user accounts, forms, newsletters, tracking scripts, or data submission features.\n" +
      "</p>\n" +
      "\n" +
      "<h3>1. No Data Collection</h3>\n" +
      "<p>\n" +
      "  TrustValet does not collect any personal information, either directly or automatically. This means:\n" +
      "</p>\n" +
      "<ul>\n" +
      "  <li>We do not use contact forms or signup features.</li>\n" +
      "  <li>We do not store IP addresses, cookies, or usage data.</li>\n" +
      "  <li>We do not run analytics, tracking pixels, or advertising scripts.</li>\n" +
      "</ul>\n" +
      "\n" +
      "<h3>2. No Use of Cookies or Tracking Technologies</h3>\n" +
      "<p>\n" +
      "  Our website does not use cookies, web beacons, or any similar tracking tools. You can browse our pages without concern for hidden data collection.\n" +
      "</p>\n" +
      "\n" +
      "<h3>3. No Third-Party Data Sharing</h3>\n" +
      "<p>\n" +
      "  Since we do not collect or process any user data, we do not share information with third parties under any circumstances.\n" +
      "</p>\n" +
      "\n" +
      "<h3>4. External Links</h3>\n" +
      "<p>\n" +
      "  Our site may contain links to third-party websites. We are not responsible for the privacy practices of those external sites. We encourage you to review their privacy policies if you choose to visit them.\n" +
      "</p>\n" +
      "\n" +
      "<h3>5. Updates to This Policy</h3>\n" +
      "<p>\n" +
      "  If our website features or functionality change in the future to include forms or interactive services, this policy will be updated accordingly. Any such updates will be clearly communicated on this page.\n" +
      "</p>\n" +
      "\n" +
      "<h3>6. Contact Us</h3>\n" +
      "<p>\n" +
      "  If you have any questions about this Privacy Policy or our approach to data protection, feel free to contact us:\n" +
      "</p>\n" +
      "<p>\n" +
      '  Email: <a href="mailto:info@trustvalet.co.uk">info@trustvalet.co.uk</a>\n' +
      "</p>\n" +
      "<p>\n" +
      "  Thank you for visiting TrustValet. Your privacy matters — and that’s why we don’t collect your data.\n" +
      "</p>\n",
  },
  {
    s: 1,
    slug: "404",
    type: "404",
    display: true,
    faq: null,
    name: "404 Page Not Found",
    shortContent:
      "We’re sorry, but the page you’re looking for doesn’t exist. Let us help you find your way back to something useful.",
    seoDesc:
      "Page not found on TrustValet.co.uk. The link may be broken or outdated. Return to the homepage or explore trusted local services near you.",
    content: "",
    seoTitle: "404 Page Not Found – Explore Trusted Services on TrustValet",
    title: "404 Page Not Found",
  },
  {
    s: 1,
    type: "form",
    display: true,
    faq: null,
    name: "Contact Us",
    slug: "contact-us",
    title: "Contact Us",
    seoDesc:
      "Get in touch with TrustValet for questions, support, or feedback. We're here to help you connect, grow, and stay visible to local customers.",
    seoTitle: "Contact TrustValet – We're Here to Help",
    content:
      "<section>\n" +
      "  <p>\n" +
      "    At <strong>TrustValet</strong>, we’re committed to helping users and business owners connect with clarity and confidence. Whether you’re looking to update your listing, ask a question, report an issue, or simply get in touch, our team is here to help you every step of the way.\n" +
      "  </p>\n" +
      "\n" +
      "  <h3>How to Reach Us</h3>\n" +
      "  <p>\n" +
      "    The best way to contact us is through one of the following trusted methods:\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li><strong>Phone:</strong> +44 20 3807 8434</li>\n" +
      '    <li><strong>Email:</strong> <a href="mailto:info@trustvalet.co.uk">info@trustvalet.co.uk</a></li>\n' +
      "  </ul>\n" +
      "  <p>\n" +
      "    We recommend using email for general inquiries, business updates, or support requests. For urgent matters, please feel free to call us directly. Whichever method you choose, our team aims to respond promptly and provide the assistance you need.\n" +
      "  </p>\n" +
      "\n" +
      "  <h3>Why Contact Us?</h3>\n" +
      "  <p>\n" +
      "    Our platform is designed to maintain high standards of trust and quality, and your feedback plays a vital role in that mission. You might want to reach out if you:\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Need to update or correct your business listing</li>\n" +
      "    <li>Want to request removal or verification of a listing</li>\n" +
      "    <li>Have a question about how TrustValet works</li>\n" +
      "    <li>Wish to report inaccurate or outdated information</li>\n" +
      "    <li>Are interested in partnership or promotional opportunities</li>\n" +
      "    <li>Simply want to share a suggestion or comment</li>\n" +
      "  </ul>\n" +
      "\n" +
      "  <h3>Your Information Matters</h3>\n" +
      "  <p>\n" +
      "    If you're a business owner, it's important to ensure your listing reflects accurate and up-to-date details. Let us know what needs to be updated, and we’ll handle the rest. We review all requests manually to protect the quality of our directory.\n" +
      "  </p>\n" +
      "\n" +
      "  <h3>Our Commitment to You</h3>\n" +
      "  <p>\n" +
      "    At TrustValet, we value every message we receive. Whether you're a customer, a business owner, or a visitor looking for support, we take the time to listen and respond with care. Your trust is our priority, and we strive to deliver helpful, timely communication at all times.\n" +
      "  </p>\n" +
      "\n" +
      "  <h3>Thank You</h3>\n" +
      "  <p>\n" +
      "    Thank you for being part of the TrustValet community. We’re proud to connect people across the UK with services they can trust — and your input helps us make the platform even better. We look forward to hearing from you.\n" +
      "  </p>\n" +
      "\n" +
      "  <p><strong>Contact us today:</strong><br>\n" +
      "    Phone: +44 20 3807 8434<br>\n" +
      '    Email: <a href="mailto:info@trustvalet.co.uk">info@trustvalet.co.uk</a>\n' +
      "  </p>\n" +
      "</section>\n",
    shortContent: "Get Support Fast With Real People",
  },
  {
    s: 1,
    name: "Terms & Conditions",
    slug: "terms-and-conditions",
    type: "content",
    display: true,
    faq: null,
    shortContent: "A Comprehensive Guide to Our Policies",
    content:
      "<p>\n" +
      '  Welcome to TrustValet! These Terms of Use ("Terms") outline the rules, guidelines, and expectations for accessing and using our website, social media accounts, and all other online services (collectively referred to as the "Services") provided by Topfed Inc. ("TrustValet," "we," "our," or "us"). These Terms ensure a safe, fair, and transparent experience for all users of our Services.\n' +
      "</p>\n" +
      "<p>\n" +
      "  By using our Services, you acknowledge that you have read, understood, and agreed to comply with these Terms and any related policies, including our Privacy Policy. Continued use of the Services confirms your acceptance of these Terms. If you do not agree with them, you must not access or use the Services.\n" +
      "</p>\n" +
      "<p>\n" +
      "  We may update these Terms periodically. Please review them regularly, as your continued use signifies acceptance of any changes. Thank you for choosing TrustValet—we're excited to support your journey.\n" +
      "</p>\n" +
      "\n" +
      "<h3>1. Our Services</h3>\n" +
      "<p>\n" +
      "  TrustValet is committed to helping users discover and connect with trusted local professionals across the UK. Our platform simplifies the search for reliable services, from tradespeople to consultants and everything in between.\n" +
      "</p>\n" +
      "<p>\n" +
      "  While we facilitate these connections, we are not involved in transactions or agreements between users and listed businesses. Users must perform their own due diligence and communicate directly with service providers.\n" +
      "</p>\n" +
      "\n" +
      "<h3>2. Privacy Policy</h3>\n" +
      "<p>\n" +
      "  Your privacy matters to us. For details on how we collect, use, and protect your personal information—including data such as your name, contact information, and browsing behavior—please review our Privacy Policy.\n" +
      "</p>\n" +
      "<p>\n" +
      "  The policy outlines your rights and our security practices, including how to access or delete your data. We encourage you to read it and reach out with any questions.\n" +
      "</p>\n" +
      "\n" +
      "<h3>3. Updates to These Terms</h3>\n" +
      "<p>\n" +
      '  We reserve the right to modify these Terms at any time due to changes in our services, technology, or legal requirements. We will update the "last revised" date and may notify you through email or within the platform when significant changes are made.\n' +
      "</p>\n" +
      "<p>\n" +
      "  Continued use after updates means you accept the revised Terms. If you disagree with any changes, please stop using our Services.\n" +
      "</p>\n" +
      "\n" +
      "<h3>4. User Conduct</h3>\n" +
      "<ul>\n" +
      "  <li>Do not engage in illegal, harmful, or fraudulent activities on the platform.</li>\n" +
      "  <li>Respect other users’ rights and refrain from harassment, impersonation, or abuse.</li>\n" +
      "  <li>Avoid posting offensive, misleading, or unlawful content.</li>\n" +
      "  <li>Follow all applicable laws and our community standards while using our Services.</li>\n" +
      "</ul>\n" +
      "\n" +
      "<h3>5. Business Listings and Content</h3>\n" +
      "<p>\n" +
      "  Businesses are solely responsible for the accuracy of their listings on TrustValet.co.uk. This includes service descriptions, contact details, pricing, and availability.\n" +
      "</p>\n" +
      "<p>\n" +
      "  We do not endorse or guarantee the performance of any business listed. We reserve the right to edit, suspend, or remove content that violates our guidelines or misleads users.\n" +
      "</p>\n" +
      "\n" +
      "<h3>6. Intellectual Property</h3>\n" +
      "<p>\n" +
      "  All content on TrustValet, including text, logos, graphics, and platform code, is the intellectual property of Topfed Inc. or its licensors and is protected by law.\n" +
      "</p>\n" +
      "<p>\n" +
      "  You may not copy, reproduce, modify, or distribute any part of the site without our prior written permission. Violations may result in legal action.\n" +
      "</p>\n" +
      "\n" +
      "<h3>7. Termination</h3>\n" +
      "<p>\n" +
      "  We reserve the right to suspend or terminate your access to TrustValet at any time without prior notice if you violate these Terms or misuse the platform.\n" +
      "</p>\n" +
      "<p>\n" +
      "  Upon termination, your rights to use our Services will immediately cease, and any associated content or data may no longer be accessible.\n" +
      "</p>\n" +
      "\n" +
      "<h3>8. Contact Us</h3>\n" +
      "<p>\n" +
      "  Have questions about these Terms? Our team is here to help. Reach out to us anytime:\n" +
      "</p>\n" +
      "<p>\n" +
      '  Email: <a href="mailto:info@trustvalet.co.uk">info@trustvalet.co.uk</a>\n' +
      "</p>\n" +
      "<p>\n" +
      "  We strive to respond promptly and ensure your experience with TrustValet remains positive and secure. Thank you for being part of our trusted community.\n" +
      "</p>",
    seoDesc:
      "Review the Terms of Use for TrustValet.co.uk. Learn the rules, rights, and responsibilities for using our trusted local services platform.",
    seoTitle: "Understanding Our Terms & Conditions: What You Need to Know",
    title: "Terms & Conditions",
  },
  {
    s: 1,
    name: "Home",
    slug: "/",
    content: "",
    display: true,
    faq: null,
    type: "index",
    title: "Your Trusted <span>Concierge Services</span> Across the UK",
    shortContent:
      "Professional help is just a request away, fast, trusted, and locally curated by your dedicated concierge team.",
    seoDesc:
      "Get fast, reliable help from trusted UK professionals. TrustValet connects you with local, quality services, curated by our concierge team. Call now!",
    seoTitle: "Trusted Quality Concierge Services Across the UK",
  },
];

async function firebaseAddData() {
  // Pages;
  // for (const doc of pages) {
  //   await db
  //     .collection("S_pages")
  //     .doc(doc.slug)
  //     .set({ ...doc }, { merge: true });
  // }
  // Settings
  const snapshot = await db
    .collection("S_settings")
    .where("s", "==", site)
    .get();
  for (const doc of snapshot.docs) {
    const data = doc.data();
    // console.dir(data, {
    //   depth: null, // show all nested levels
    //   colors: true, // colorize output
    //   maxArrayLength: null, // show full arrays
    // });
    // console.log(settings);
    await db.collection("S_settings").doc(doc.id).update({
      settings: settings,
    });
  }
}

firebaseAddData()
  .then(() =>
    console.log("------- All Documents processed successfully! --------")
  )
  .catch((error) =>
    console.error("Error processing Documents:", error.message)
  );
