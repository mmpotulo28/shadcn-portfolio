import type { PersonalInfo, SocialLinks } from "@/types";

// ========================================
// Social Links
// ========================================

export const socialLinks: SocialLinks = {
	github: "https://github.com/mmpotulo28",
	linkedin: "https://linkedin.com/in/manelisi-mpotulo",
	email: "mailto:mpotulo28@gmail.com",
	twitter: "https://twitter.com/manelisi_m",
};

// ========================================
// Personal Information
// ========================================

export const personalInfo: PersonalInfo = {
	name: "Manelisi Mpotulo",
	title: "Full-Stack Software Developer",
	tagline: "Building scalable web and mobile applications that make a difference",
	bio: "Passionate software developer with expertise in full-stack development, specializing in React, TypeScript, and Spring Boot. Currently driving innovation at BETSoftware, where I architect enterprise solutions serving 100,000+ daily active users. With a strong foundation in both frontend and backend technologies, I excel at building performant, user-centric applications while solving complex technical challenges.",
	location: "Cape Town, Western Cape, South Africa",
	email: "mpotulo28@gmail.com",
	social: socialLinks,
	image: "/images/favicon-192x192.png",
};

// ========================================
// About Highlights
// ========================================

export const aboutHighlights = [
	{
		icon: "Target",
		title: "Problem Solver",
		description:
			"Reduced critical app crashes by 95% and optimized dashboard queries from 3.5s to 400ms through systematic debugging and performance optimization.",
	},
	{
		icon: "Rocket",
		title: "Innovation Driven",
		description:
			"Successfully integrated complex SDKs (Xtremepush, AppsFlyer) supporting 100,000+ users while implementing Redis caching and automated workflows.",
	},
	{
		icon: "Users",
		title: "Team Player",
		description:
			"Collaborate effectively with cross-functional teams in Agile environments, mentor junior developers, and contribute to engineering documentation.",
	},
	{
		icon: "TrendingUp",
		title: "Impact Focused",
		description:
			"Delivered measurable results: 42% conversion increase, 88% latency reduction, and improved app ratings from 4.2 to 4.7 stars.",
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
	email: "mpotulo28@gmail.com",
	phone: "+27 XX XXX XXXX", // Update with actual number or remove
	location: "Cape Town, Western Cape, South Africa",
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
