// lib/data/certifications.ts

export interface Certification {
	id: string;
	title: string;
	issuer: string;
	dateIssued?: string;
	status: "completed" | "in-progress";
	description?: string;
	credentialId?: string;
	credentialUrl?: string;
	skills: string[];
}

export interface Award {
	id: string;
	title: string;
	issuer: string;
	date: string;
	description: string;
	category: "academic" | "competition" | "hackathon" | "professional";
	placement?: string;
}

// ========================================
// Certifications
// ========================================

export const certifications: Certification[] = [
	{
		id: "react-native-learning",
		title: "Learning React Native",
		issuer: "LinkedIn Learning / Udemy",
		status: "completed",
		description:
			"Comprehensive course covering React Native development fundamentals and best practices.",
		skills: ["React Native", "Mobile Development", "JavaScript", "Cross-Platform Development"],
	},
	{
		id: "react-native-ecosystem",
		title: "React Native Ecosystem and Workflow",
		issuer: "LinkedIn Learning / Udemy",
		status: "completed",
		description:
			"Advanced React Native development including ecosystem tools, workflow optimization, and deployment strategies.",
		skills: ["React Native", "Expo", "Mobile DevOps", "App Deployment", "Development Workflow"],
	},
	{
		id: "comptia-network-plus",
		title: "CompTIA Network+: OSI Model Layers & Data Encapsulation",
		issuer: "CompTIA",
		status: "completed",
		description:
			"Networking fundamentals focusing on OSI model layers and data encapsulation principles.",
		skills: [
			"Networking",
			"OSI Model",
			"Data Encapsulation",
			"Network Security",
			"IT Infrastructure",
		],
	},
	{
		id: "react-native-developer",
		title: "Become a React Native Developer",
		issuer: "LinkedIn Learning / Udemy",
		status: "completed",
		description:
			"Complete React Native developer certification covering mobile app development from basics to advanced concepts.",
		skills: ["React Native", "Mobile Development", "JavaScript", "TypeScript", "Mobile UI/UX"],
	},
	{
		id: "react-native-essential",
		title: "React Native Essential Training",
		issuer: "LinkedIn Learning",
		status: "completed",
		description:
			"Essential React Native training covering core concepts and practical implementation.",
		skills: ["React Native", "Mobile Development", "Component Development", "State Management"],
	},
];

// ========================================
// Awards & Honors
// ========================================

export const awards: Award[] = [
	{
		id: "district-top-achiever-2019",
		title: "2019 District's Top Achiever Award",
		issuer: "Department of Basic Education",
		date: "2019",
		description:
			"Recognized as the top academic achiever in the district for outstanding performance in matriculation examinations.",
		category: "academic",
		placement: "1st Place",
	},
	{
		id: "class-top-achiever-2019",
		title: "Class of 2019's 2nd Place Top Achiever",
		issuer: "Zwelivumile S.S.S",
		date: "2019",
		description:
			"Achieved second place in the graduating class for exceptional academic performance across all subjects.",
		category: "academic",
		placement: "2nd Place",
	},
	{
		id: "siemens-hackstem-2019",
		title: "Siemens Gamesa HackStem Hackathon",
		issuer: "Siemens Gamesa",
		date: "2019",
		description:
			"Secured second place in the prestigious Siemens Gamesa HackStem hackathon, demonstrating innovation in STEM solutions.",
		category: "hackathon",
		placement: "2nd Place",
	},
	{
		id: "blockchain-hackathon-winner",
		title: "Blockchain Hackathon Winner",
		issuer: "Celo & TheGraph",
		date: "2024",
		description:
			"Won the blockchain hackathon sponsored by Celo and TheGraph, developing innovative decentralized applications.",
		category: "hackathon",
		placement: "Winner",
	},
	{
		id: "ayoba-business-chat-hackathon",
		title: "AyobaBusinessChat Hackathon Certificate",
		issuer: "AyobaBusinessChat",
		date: "2024",
		description:
			"Participated in and received certification for the AyobaBusinessChat hackathon, focusing on business communication solutions.",
		category: "hackathon",
	},
];

// ========================================
// Helper Functions
// ========================================

export const getCompletedCertifications = (): Certification[] =>
	certifications.filter((cert) => cert.status === "completed");

export const getInProgressCertifications = (): Certification[] =>
	certifications.filter((cert) => cert.status === "in-progress");

export const getAwardsByCategory = (category: Award["category"]): Award[] =>
	awards.filter((award) => award.category === category);

export const getAllCertificationSkills = (): string[] => {
	const skillSet = new Set<string>();
	certifications.forEach((cert) => {
		cert.skills.forEach((skill) => skillSet.add(skill));
	});
	return Array.from(skillSet).sort((a, b) => a.localeCompare(b));
};

export const getTotalAwards = (): number => awards.length;

export const getTotalCertifications = (): number => certifications.length;
