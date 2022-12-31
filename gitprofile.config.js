// gitprofile.config.js

const config = {
  github: {
    username: 'kylesinlynn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kyle-sin-lynn',
    twitter: 'kylesinlynn',
    facebook: 'kylesinlynn',
    instagram: 'kylesinlynn',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'kylesinlynn',
    stackoverflow: '', // format: userid/username
    website: 'https://kylesinlynn.ml',
    phone: '',
    email: 'kylesinlynn@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'C',
    'Bash',
    'Python',
    'JavaScript',
    'MySQL',
    'PostgreSQL',
    'CSS3',
    'HTML5',
    'Bootstrap',
    'Django',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Myanmar Information Technoloty Pte. Ltd.',
      position: 'Software Developer',
      from: 'April 2022',
      to: 'Now',
      companyLink: 'https://www.mit.com.mm',
    },
  ],
  /* certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: ''
    },
  ], */
  education: [
    {
      institution: 'University of West Yangon',
      degree: 'B.Sc(Phyics)',
      from: '2018',
      to: 'Now',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'kylesinlynn', // to hide blog section, keep it empty
  //   limit: 0, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      // primary: '#fc055b',
      // secondary: '#219aaf',
      // accent: '#e8d03a',
      // neutral: '#2A2730',
      // 'base-100': '#E3E3ED',
      // '--rounded-box': '3rem',
      // '--rounded-btn': '3rem',
    },
  },
};

export default config;
