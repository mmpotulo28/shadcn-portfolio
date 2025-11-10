import type { Experience, Education } from "@/types";

// ========================================
// Professional Experience
// ========================================

export const experiences: Experience[] = [
	{
		id: "betsoftware-2024",
		company: "BETSoftware",
		role: "Graduate Software Developer",
		duration: "1 year",
		startDate: "January 2024",
		location: "Cape Town, Western Cape",
		description:
			"Leading full-stack development initiatives for enterprise betting applications, specializing in SDK integrations, performance optimization, and production incident resolution.",
		responsibilities: [
			"Architected and maintained Xtremepush SDK integration supporting 100,000+ daily active users",
			"Reduced critical notification crashes by 95% through systematic debugging and crash symbolication",
			"Implemented Redis caching layer, achieving 88% latency reduction (3.5s → 400ms) for analytics dashboard",
			"Optimized AppsFlyer Smart Banner integration, increasing web-to-app conversions by 42%",
			"Designed automated Linux proxy inspection workflow, reducing setup time by 97%",
			"Collaborated with cross-functional teams (Product, QA, DevOps) in Agile environment",
			"Mentored junior developers on best practices for debugging, testing, and documentation",
		],
		technologies: [
			"Java",
			"Spring Boot",
			"React",
			"TypeScript",
			"PostgreSQL",
			"Redis",
			"Docker",
			"Git",
			"Expo",
			"React Native",
			"AppsFlyer",
			"Dynatrace",
			"Jira",
			"Linux",
			"Network Security",
		],
		achievements: [
			"Successfully handled 10x traffic spike during peak betting hours with Redis optimization",
			"Improved app rating from 4.2 to 4.7 stars through crash resolution efforts",
			"Delivered 5 critical production fixes within 48-hour SLAs",
			"Created comprehensive documentation adopted by entire engineering team",
		],
	},
	{
		id: "betsoftware-2023",
		company: "BETSoftware",
		role: "Graduate Software Developer",
		duration: "6 months",
		startDate: "June 2023",
		endDate: "December 2023",
		location: "Cape Town, Western Cape",
		description:
			"Contributed to enterprise software development lifecycle, focusing on mobile SDK integrations, debugging, and performance analysis.",
		responsibilities: [
			"Integrated third-party SDKs (Xtremepush, AppsFlyer) into production mobile applications",
			"Debugged complex production crashes using symbolication and stack trace analysis",
			"Implemented monitoring solutions using Dynatrace for real-time performance tracking",
			"Participated in code reviews and sprint planning sessions",
			"Developed automated testing scripts for QA validation",
		],
		technologies: [
			"Java",
			"Spring Boot",
			"React Native",
			"JavaScript",
			"Git",
			"Dynatrace",
			"Jira",
			"Agile/Scrum",
		],
		achievements: [
			"Completed onboarding and delivered first production feature within 2 weeks",
			"Identified and resolved 3 critical SDK integration issues",
			"Contributed to team knowledge base with 10+ technical articles",
		],
	},
];

// ========================================
// Education
// ========================================

export const education: Education[] = [
	{
		institution: "Cape Peninsula University of Technology (CPUT)",
		degree: "Bachelor of Engineering Technology (B.Eng Tech)",
		field: "Electrical Engineering",
		duration: "3 years",
		startDate: "2020",
		endDate: "2023",
		focusAreas: [
			"Data Structures & Algorithms",
			"Object-Oriented Programming",
			"Database Systems",
			"Software Engineering",
			"Embedded Systems",
			"Network Programming",
			"System Design",
		],
		capstone: {
			title: "IoT Sensor Networks with Real-Time Data Analytics",
			description:
				"Designed and implemented a distributed IoT sensor network system with real-time data collection, processing, and visualization capabilities for environmental monitoring.",
			technologies: ["Python", "Raspberry Pi", "MQTT", "PostgreSQL", "React", "WebSocket"],
		},
	},
];

// ========================================
// Helper Functions
// ========================================

export const getCurrentExperience = (): Experience | undefined =>
	experiences.find((exp) => !exp.endDate);

export const getExperienceByCompany = (company: string): Experience[] =>
	experiences.filter((exp) => exp.company.toLowerCase() === company.toLowerCase());

export const getTotalYearsOfExperience = (): number => {
	const startYear = 2023;
	const currentYear = new Date().getFullYear();
	return currentYear - startYear + 1;
};

export const getAllTechnologies = (): string[] => {
	const techSet = new Set<string>();
	experiences.forEach((exp) => {
		exp.technologies.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort((a, b) => a.localeCompare(b));
};
