/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Oliver Huynh",
  logo_name: "OliverHuynh",
  nickname: "( FrontEnd dude )",
  subTitle:
    "I am a technical and highly motivated front end developer, with skills in end-to-end software development. I have experience in web application design and possess knowledge in various software languages and tools. I have a fierce passion for user experience, integrating software, and enhancing the working ability of IT systems.",
  resumeLink:
    "https://drive.google.com/file/d/1Twr9Ndi0wxRVvFV59ZABu7UHHckHUpKt/view?usp=sharing",
  portfolio_repository: "https://github.com/HaiOliver",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/HaiOliver",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oliver-huynh-429300110/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "haioliver993@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/hoanghai.huynh.7",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Front End Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Implementing web design and development principles to build stable software",
        "⚡ Ensured scalability of front end elements by optimizing them for loading speed and performance",
        "⚡ Creating the web application with fully functionalities to optimize user experience",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    }

    ,

    {
      title: "Android  &  IOS Developer",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface and robust contents for mobile and web applications",
        "⚡ Developing cross-platform mobile applications with Flutter, React Native and Swift",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "green",
          },
        },
      ],
    },
// machine Learning&& AI
{
  title: "Back End && Machine Learning",
  fileName: "DataScienceImg",
  skills: [
    "⚡ Design and implement Restful API on multiple backend technologies: Node.js, Express & MongoDB",

    "⚡ Design and configuration of the fully automated CI/CD lifecycle Web app",
    "⚡ Passionate in Python Data Analytic and Data Visualization",
    "⚡ Beginner level learning  Computer Vision and NLP projects",

  ],
  softwareSkills: [
    {
      skillName: "My SQL",
      fontAwesomeClassname: "simple-icons:mysql",
      style: {
        color: "#4285F4",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        color: "#339933",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: {
        color: "#47A248",
      },
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "simple-icons:heroku",
      style: {
        color: "#FF9900",
      },
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "simple-icons:microsoftazure",
      style: {
        color: "#0089D6",
      },
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "simple-icons:firebase",
      style: {
        color: "#FFCA28",
      },
    },

    {
      skillName: "Docker",
      fontAwesomeClassname: "simple-icons:docker",
      style: {
        color: "#1488C6",
      },
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "Python",
      fontAwesomeClassname: "ion-logo-python",
      style: {
        backgroundColor: "transparent",
        color: "#3776AB",
      },
    },
  ],
},
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " British Columbia Institute of Technology",
      subtitle: "Computer Systems Technology Diploma Program",
      logo_path: "iiitk_logo.png",
      alt_name: "BCIT",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have gained basic foundation about programming and learn how to solve real-world problem in industry",
        "⚡ Apart from this, I have done courses on Udemy at high advanced level in JavaScript, CSS, React, Cyber Security, Full Stack Development.",

      ],
      website_link: "https://www.bcit.ca/study/programs/5500dipma",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [


        {
          title: "Sale Association",
          company: "Winner && Homesense",
          company_url: "https://www.homesense.ca/en",
          logo_path: "winner.png",
          duration: "July 2019 - now",
          location: "Vancouver, Canada",
          description:
            "Experienced with greeting customers, responding to questions, improving engagement with merchandise, and providing outstanding customer service. I also have experience with operating cash registers, managing financial transactions, and balancing drawers. ",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Shackfolio",
          company: "Shackfolio. Ltd.",
          company_url: "http://shackfolio.com/",
          logo_path: "shackfolioLogo.png",
          duration: "Sept 2020 - now",
          location: "Vancouver, Canada",
          description:
            "I worked with Shackfolio as part of my internship during my last term at BCIT. Our goal was to build a real web/mobile application in the real estate field. This application is focused on helping everyday people with home ownership. I assisted senior front-end developers in the design process and gained skills in aligning designs with client requirements. I also gained experience in resolving conflicts with colleagues professionally, interacting with clients, and presenting designs and handling feedback on my work.",

          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Jerome Outreach Society Community",
          company: "JOS Community",
          company_url: "https://jeromeoutreach.com/",
          logo_path: "josLogo.jpg",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "I volunteered to rebuild the existing Jerome Outreach Society (JOS) website using React and Node.js. I collaborated with web designers, back end developers and UX designers to design, build, test and improve the JOS website.",
          color: "#4285F4",
        },
        {
          title: "Downtown Eastside Neighbourhood House",
          company: "Eastside Neighbourhood Community",
          company_url: "https://www.dtesnhouse.ca/",
          logo_path: "vonlunteer.png",
          duration: "Aug 2018 - Jan 2019",
          location: "Hyderabad, Telangana",
          description:
            "I helped take care children as nanny in this community 3 times/week",
          color: "#D83B01",
        }

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools from FrontEnd to BackEnd. My best experience is to create Full Stack projects solving real-world problem in JOS community and Shackfolio and deploy by using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Hello Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me , I will reply within 24 hours. I am looking forward to meet you soon",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Email",
    subtitle:
      "Haioliver993@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.ca/maps/place/BCIT+Downtown+Campus/@49.2834546,-123.1174435,17z/data=!3m1!4b1!4m5!3m4!1s0x54867178c6f02ee1:0xb4e03bf432e66714!8m2!3d49.2834511!4d-123.1152548",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "604-652-8049",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
