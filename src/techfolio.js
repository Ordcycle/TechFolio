import emoji from "react-easy-emoji";

import OptinShark from "./assets/imgs/optinshark.png";
import Glitz from "./assets/imgs/glitzwebsites.png";
import HairCase from "./assets/imgs/haircase.png";
import Picoin from "./assets/imgs/pi-coin.png";
import Foodie from "./assets/imgs/foodie.png";
import lender from "./assets/imgs/lender.png";
import foodiet from "./assets/imgs/foodDiet.png"
import oof from "./assets/imgs/oof.png";
import BTC from "./assets/imgs/btc.png";

import AvatarImage from "./assets/imgs/jona.png";

const projectsSection = {
	projects: [
		{
			projectName: "Lendsqr",
			projectBio: "Cloud based Multi Vendor Lending system",
			projectImg: lender,
			projectUrl: "https://lendsqr.com/",
			stackList: ["AWS", "Nodejs", "Mysql", "Javascript"],
		},
		{
			projectName: "FoodDiet",
			projectBio: "A website for buying and delivering food from different places in Nigeria",
			projectImg: foodiet,
			projectUrl: "https://foodiet.netlify.com/",
			stackList: ["AWS", "Nodejs", "Mysql", "Javascript"],
		},
		{
			projectName: "Optin Shark",
			projectBio:
				"A Website for Generating Email Templates for none developers, to be used on other websites",
			projectImg: OptinShark,
			projectUrl: "https://app.optinshark.io/",
			stackList: ["Vue js", "Vuex", "Nuxtjs", "Tailwindcss", "Animista"],
		},
		{
			projectName: "Foodie",
			projectBio:
				"Simple React application to show nice foods all over the world",
			projectImg: Foodie,
			projectUrl: "#",
			stackList: [
				"React",
				"Typescript",
				"Tailwindcss",
				"Redux",
				"Reach router",
			],
		},
		{
			projectName: "BTC Saver",
			projectBio: "A btc on-line wallet for storing bitcoins",
			projectImg: BTC,
			projectUrl: "https://telegraphbtc.netlify.app/home",
			stackList: ["React js", "Redux", "Tailwindcss", "Nodejs", "Typescript"],
		},
		{
			projectName: "Glitzwebsites",
			projectBio:
				"An Education Platform for GlitzWebsiteFlask used for training students on how to build websites without coding",
			projectImg: Glitz,

			projectUrl: "https://glitzwebsites.xyz/",
			stackList: [
				"React js",
				"AOS",
				"Tailwindcss",
				"Tailwind Blocks",
				"Nodejs",
			],
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
			projectUrl: "http://b-clone.netlify.app/",
			stackList: [
				"React js",
				"Reach Router",
				"Strapi Js",
				"coingecko",
				"Node js",
			],
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
	description: "FullStack Software Engineer",
};

const socialNetworks = {
	//Note : if you dont need or have any social network just add null value
	github: "https://github.com/bemijonathan",
	linkden: "https://www.linkedin.com/in/bemijonathan",
	facebook: null,
	instagram: null,
	twitter: "https://twitter.com/bemijonathan",
};

const bannerSection = {
	username: name,
	bannerHeading: `Hi I'm Jonathan.`,
	bannerTagLine: emoji(
		`Full Stack Web Developer focused on building user-centric solutions
		 for achieving breakthrough efficiency and driving client satisfaction. 
		 Built dozens of websites and applications using latest and cutting edge technologies 
		 my experience has led me to acquire lots of skills which include writing clean and efficient code, 
		 quick prototyping, and Large codebase migrations. 
		 By Day i am a Human Anatomist who loves sitting by his Laptop 💻, 
		 At Night 😎 i am a developer Who loves to play with different stacks.`
	),
	//Note:Simply add you avatar image in src/assets/imgs folder
	//and add the name along with extention e.g xyz.png , abc.svg
	//Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
	bannerAvatar: AvatarImage,
	resumeLink:
		"https://drive.google.com/file/d/10VMZihaQbEIEg6HgCEN0YO7ZK-PDgqB6/view?usp=sharing",
};

/*=====================
	4. About Section
	Desc: It's all about you!. this section is designed using the command
	line concept so it asked you to add the admin of the command line
	and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
	admin: "mixed_code@mixed_code",
	firstCommand: "node index.ts",
	secondCommand: `opening........ `,
	about: `Detailed oriented FullStack Developer,  
	Proficient in understanding and transforming client requirements to exceptional engineering ideas 
	and well-researched responsive solutions. An innovative individual who possesses strong communication 
	skills and the ability to present solutions to both technical and non-technical audiences. 
`,
};

/*=====================
	5. Skils Section
	Desc: This section hep you set your skills
==========================*/

const skillsSection = {
	// Recommended : don't add more than 3 skill taglines.
	skillsTagLines: [
		"Plan on learning more about DevOps and Mobile App developmennt.",
		"Getting more into Javascript animations ",
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
			fontAwesomeClassname: "fab fa-aws",
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
			experienceTitle: "Teacher and Webdeveloper @ GlitzWebsites",
			experienceDesc:
				"Converted Blocks of UI from PSD to HTML5 Templates, Teach Clients how to manage their wordpress e-commerce websites",
			experienceDuration: "09/17-06/18",
			// Recommended : don't add more than 3 tags.
			experienceTags: ["Remote", "Nigeria", "Word Press", "9 months"],
		},
		{
			experienceTitle: "Software Dev. @ AMANi art Webdesign Agency",
			experienceDesc:
				"Built websites using Javascript technologies such as Vue React and Ruby on Rails, successfully built and lauched two two startups here",
			experienceDuration: "09/18-06/20",
			experienceTags: ["Port Harcourt", "Nigeria", "1year, 9months"],
		},
		{
			experienceTitle: "Front End Developer @ IzzyLeads",
			experienceDesc:
				"Built IzzyLeads Platform Remotely, including Client Dashboard",
			experienceDuration: "06/18-08/20",
			experienceTags: ["New Jersey", "USA", "Remote"],
		},
		{
			experienceTitle: "Full Stack Developer @ Lendsqr",
			experienceDesc:
				"Built and optimized code Performance and architecture by building extensive Microservices",
			experienceDuration: "Current",
			experienceTags: ["Lagos", "Nigeria", "Remote"],
		},
		{
			experienceTitle: "Contract Front End Developer",
			experienceDesc:
				"Built Reusable front end Components using React and Typescript for the InPlat dashboard",
			experienceDuration: "Current",
			experienceTags: ["Italy", "Udine", "Remote"],
		},
	],
};

/*=====================
	9. Contact Section
	Desc: This section help you configure your contact.
==========================*/

const contactSection = {
	contactTagline: "Got something to discuss dont fail to reach out to me.",
	// Note : add your all contacts in the contactList seperating with *,* .
	contactList: ["+2348159540602", "+2348141838266", "bemijonathan@gmail.com"],
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
