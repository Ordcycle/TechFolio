import emoji from "react-easy-emoji";

import OptinShark from "./assets/imgs/optinshark.png";
import Glitz from "./assets/imgs/glitzwebsites.png";
import HairCase from "./assets/imgs/haircase.png";
import Picoin from "./assets/imgs/pi-coin.png";
import Foodie from "./assets/imgs/foodie.png";
import dots from "./assets/imgs/2dots.png";
import oof from "./assets/imgs/oof.png";

const projectsSection = {
  projects: [
    {
      projectName: "Optin Shark",
      projectBio:
        "A Website for Generating Email Templates for none developers, to be used on other websites",
      projectImg: OptinShark,
      projectUrl: "https://www.optinshark.io/",
      stackList: ["Vue js", "Vuex", "Nuxtjs", "Tailwindcss", "Animista"],
    },
    {
      projectName: "Glitzwebsites",
      projectBio:
        "An Education Platform for GlitzWebsite used for training students on how to build websites without coding",
      projectImg: Glitz,

      projectUrl: "https://glitzwebsites.xyz/",
      stackList: ["React js", "AOS", "Tailwindcss", "Tailwind Blocks"],
    },
    {
      projectName: "Hair Case",
      projectImg: HairCase,
      projectBio: "Ecommerce Website for selling Wigs for My hair case Website",
      projectUrl: "https://myhaircase.com/",
      stackList: ["WordPress", "Elementor", "HTML", "CSS", "Javascript"],
    },

    {
      projectName: "Pi Coin",
      projectBio: "A clone of Flutter wave Barter but for bitcoins",
      projectImg: Picoin,
      projectUrl: "/",
      stackList: [
        "React js",
        "Reach Router",
        "Strapi Js",
        "coingecko",
        "Node js",
      ],
    },
    {
      projectName: "Foodie",
      projectBio:
        "Simple React application to show nice foods all over the world",
      projectImg: Foodie,
      projectUrl: "https://orthocovid-19.netlify.app/",
      stackList: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "Reach router",
      ],
    },

    {
      projectName: "2dots",
      projectBio:
        "A webapp for estate management and looking for houses for sale or rent all over Nigeria ",
      projectImg: dots,
      projectUrl: "/",
      stackList: ["Electron", "Python", "Open Cv", "OCR", "Flask"],
    },
    {
      projectName: "Oof Shop",
      projectBio: "A Nigerian Made Footware brand",
      projectImg: oof,
      projectUrl: "https://oofshop.co",
      stackList: ["WordPress", "HTML", "CSS", "Javascript"],
    },
  ],
};

const name = "Jonathan Atiene";

const app = {
  title: name,
  icon: "ayin_qoph.png",
  description:
    "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/bemijonathan",
  linkden: null,
  facebook: "https://www.facebook.com/profile.php?id=100006896625330",
  instagram: "https://www.instagram.com/_ayin_qoph/",
  twitter: null,
};

const bannerSection = {
  username: name,
  bannerHeading: "Mixed_Code.",
  bannerTagLine: emoji(
    `Not your average Software Developer,
  Human Anatomist by Day, Developer by Night 😀 Who loves to play with different stacks and love to Implement nice Ui/Ux designs.`
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpeg",
  resumeLink:
    "https://drive.google.com/file/d/1C9wylYtAU9NbZaBwmQ6uGmNWmWS8_I6F/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command
    line concept so it asked you to add the admin of the command line
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "mixed_code@mixed_code",
  firstCommand: " node mixed_code.exe",
  secondCommand: `opening........ `,
  about: `3 years experienced freelancer, dynamic, and detail-oriented Full Stack Web Developer with a track record of leading teams to user-centric solutions for achieving breakthrough efficiency and driving client satisfaction. Built dozens of websites and applications using javascript technologies like Nodejs and Vuejs this has led me to acquire lots of skills which include writing clean and efficient code, quick prototyping, and Large codebase migrations. `,
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css and Scss.",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like WordPress development, python scripting, and Dev-Ops.",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section
==========================*/
const openSourceSection = {
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "Bemijonathan",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 9,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "React Boot Camper",
      experienceDesc:
        "Successfully learned to React from 0%. Developed and Implement different React projects in the group. Improved communication skills while interacting with people of a different caliber.",
      // Recommended : don't add full date.
      experienceDuration: "12/18-05/19",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Panacloud", "5 months", "karachi"],
    },
    {
      experienceTitle: "Wordpress Intern",
      experienceDesc:
        "Improved remotely managing skills by giving 20+ hours per week. Expanded knowledge of creating static and responsive sites using WordPress.",
      experienceDuration: "10/19-11/19",
      experienceTags: ["Interns Pk", "1.5 month", "Remote"],
    },
    {
      experienceTitle: "Competition Manager",
      experienceDesc:
        "Manages the competition team and Ensures everyone is satisfied. Design and develop innovative competition for ITEC and reexamines it.",
      experienceDuration: "Current",
      experienceTags: ["ACM", "12/2018-5/2019", "NEDUET"],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["03461826315", "a.qadir67@outlook.com"],
};

// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
