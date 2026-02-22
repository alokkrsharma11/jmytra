/**
 * Helper to update page metadata for SEO
 */
export const updatePageSEO = (pageData) => {
  const {
    title = 'Jmytra4u - Learn Java, React, Spring & More',
    description = 'Free tutorials on Java, ReactJS, Spring Boot, Databases with interview prep.',
    keywords = 'Java, React, Spring Boot, tutorials, coding interviews',
    url = 'https://jmytra4u.com/',
    image = 'https://jmytra4u.com/og-image.png',
  } = pageData;

  // Update title
  document.title = title;

  // Update or create meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('og:title', title, 'property');
  updateMetaTag('og:description', description, 'property');
  updateMetaTag('og:image', image, 'property');
  updateMetaTag('og:url', url, 'property');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);

  // Update or create canonical link
  updateCanonicalLink(url);
};

const updateMetaTag = (name, content, attribute = 'name') => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateCanonicalLink = (url) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
};

/**
 * Pre-defined SEO configs for each page
 */
export const pageSEOData = {
  home: {
    title: 'Jmytra4u - Learn Java, React, Spring & More',
    description:
      'Your friendly guide to Java programming, ReactJS, Spring Boot, Databases, and coding interviews. Free tutorials with step-by-step examples.',
    keywords: 'Java tutorials, ReactJS, Spring Boot, SQL, MongoDB, coding interview prep, learn programming',
    url: 'https://jmytra4u.com/',
  },
  java: {
    title: 'Java Programming Language Tutorials - Jmytra4u',
    description:
      'Master Java programming with comprehensive tutorials, MCQ questions, and interview prep. Learn collections, streams, threads, and more.',
    keywords: 'Java tutorials, Java programming, collections, streams, threads, Java interview questions',
    url: 'https://jmytra4u.com/JavaTutorial',
  },
  react: {
    title: 'ReactJS Tutorials & Components - Learn React - Jmytra4u',
    description:
      'Learn ReactJS with practical tutorials, hooks, state management, and component patterns. Perfect for beginners and advanced developers.',
    keywords: 'React tutorials, ReactJS, React hooks, CSS-in-JS, React components, frontend development',
    url: 'https://jmytra4u.com/ReactTutorial',
  },
  spring: {
    title: 'Spring Boot & Spring Framework Tutorials - Jmytra4u',
    description:
      'Master Spring Boot and Spring Framework with practical examples, dependency injection, microservices, and interview questions.',
    keywords: 'Spring Boot, Spring Framework, Java frameworks, microservices, dependency injection, REST APIs',
    url: 'https://jmytra4u.com/SpringTutorial',
  },
  database: {
    title: 'Database Tutorials - SQL, MongoDB & More - Jmytra4u',
    description:
      'Learn SQL, MongoDB, database design, ACID properties, and interview questions for database professionals.',
    keywords: 'SQL tutorials, MongoDB, database design, NoSQL, RDBMS, database interview questions',
    url: 'https://jmytra4u.com/DbTutorial',
  },
  about: {
    title: 'About Jmytra4u - Your Learning Companion',
    description:
      'Learn about Jmytra4u mission to provide free, high-quality programming tutorials and interview preparation.',
    keywords: 'About Jmytra4u, programming education, coding tutorials',
    url: 'https://jmytra4u.com/About',
  },
  support: {
    title: 'Support & Contact - Jmytra4u',
    description: 'Contact us for support, feedback, or questions about Jmytra4u tutorials and resources.',
    keywords: 'contact, support, feedback, Jmytra4u',
    url: 'https://jmytra4u.com/Support',
  },
};
