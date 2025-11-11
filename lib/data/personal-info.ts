import type { PersonalInfo, SocialLinks } from "@/types";

// ========================================
// Social Links
// ========================================

export const socialLinks: SocialLinks = {
	github: "https://github.com/mmpotulo28",
	linkedin: "https://linkedin.com/in/mmpotulo",
	email: "mailto:mpotulom28@gmail.com",
	twitter: "https://twitter.com/manelisi_m",
};

// ========================================
// Personal Information
// ========================================

export const personalInfo: PersonalInfo = {
	name: "Manelisi Mpotulo",
	title: "Software Developer",
	tagline: "B.Eng Tech in Computer Engineering | Next.JS/React/Java/TypeScript",
	bio: "Hi, I'm Manelisi Mpotulo, a versatile and ambitious Software Developer with a strong foundation in both front-end and back-end technologies. My expertise spans the Java Stack for robust server-side solutions, SQL for efficient data management, and modern front-end frameworks like Next.js, React, and TypeScript. Having recently completed my BET in Computer Engineering at CPUT, I'm well-equipped to design, develop, and deploy scalable applications that meet the demands of today's digital landscape. I'm passionate about leveraging technology to drive innovation and growth, and I'm excited to collaborate with forward-thinking teams to shape the future of tech.",
	location: "22 Busira court, leiden, Delft, 7100, Cape Town",
	email: "mpotulom28@gmail.com",
	social: socialLinks,
	image: "/images/favicon-192x192.png",
};

// ========================================
// About Highlights
// ========================================

export const aboutHighlights = [
	{
		icon: "Award",
		title: "Award Winner",
		description:
			"2019 District's Top Achiever Award, Class of 2019's 2nd Place Top Achiever, and multiple hackathon victories including Blockchain Hackathon Winner.",
	},
	{
		icon: "Rocket",
		title: "Innovation Driven",
		description:
			"Experienced in modern tech stack including Quarkus, SpringBoot, and React Native, with proven ability to deliver scalable enterprise solutions.",
	},
	{
		icon: "Users",
		title: "Team Player",
		description:
			"Collaborate effectively across different roles from Software Engineering to coordination, with experience in both technical and leadership positions.",
	},
	{
		icon: "TrendingUp",
		title: "Continuous Learner",
		description:
			"Constantly expanding skillset with certifications in React Native, CompTIA Network+, and modern development frameworks.",
	},
];

// ========================================
// Core Competencies
// ========================================

export const coreCompetencies = [
	"Full-Stack Development",
	"System Architecture",
	"Performance Optimization",
	"SDK Integration",
	"Database Design",
	"API Development",
	"Production Debugging",
	"Agile/Scrum",
	"Technical Documentation",
	"Cross-Platform Development",
	"Security Best Practices",
	"CI/CD Pipelines",
];

// ========================================
// Contact Information
// ========================================

export const contactInfo = {
	email: "mpotulom28@gmail.com",
	phone: "079 653 0453",
	location: "22 Busira court, leiden, Delft, 7100, Cape Town",
	timezone: "SAST (UTC+2)",
	preferredContact: "email",
};

// ========================================
// Helper Functions
// ========================================

export const getFullName = (): string => personalInfo.name;

export const getTitle = (): string => personalInfo.title;

export const getEmail = (): string => personalInfo.email;

export const getSocialLinks = (): SocialLinks => socialLinks;
