import type { Skill, SkillCategory } from "@/types";

// ========================================
// Individual Skills
// ========================================

export const skills: Skill[] = [
	// Languages
	{ name: "Java", category: "Languages", proficiency: "expert", icon: "☕" },
	{ name: "TypeScript", category: "Languages", proficiency: "expert", icon: "📘" },
	{ name: "JavaScript", category: "Languages", proficiency: "expert", icon: "📜" },
	{ name: "Python", category: "Languages", proficiency: "advanced", icon: "🐍" },
	{ name: "SQL", category: "Languages", proficiency: "advanced", icon: "🗄️" },
	{ name: "HTML/CSS", category: "Languages", proficiency: "expert", icon: "🎨" },
	{ name: "Bash", category: "Languages", proficiency: "intermediate", icon: "💻" },

	// Frontend
	{ name: "React", category: "Frontend", proficiency: "expert", icon: "⚛️" },
	{ name: "Next.js", category: "Frontend", proficiency: "expert", icon: "▲" },
	{ name: "Tailwind CSS", category: "Frontend", proficiency: "expert", icon: "🎨" },
	{ name: "shadcn/ui", category: "Frontend", proficiency: "advanced", icon: "🎨" },
	{ name: "Redux", category: "Frontend", proficiency: "advanced", icon: "🔄" },
	{ name: "React Hook Form", category: "Frontend", proficiency: "advanced", icon: "📝" },
	{ name: "Zod", category: "Frontend", proficiency: "advanced", icon: "✅" },
	{ name: "Framer Motion", category: "Frontend", proficiency: "intermediate", icon: "🎬" },
	{ name: "Chart.js", category: "Frontend", proficiency: "advanced", icon: "📊" },

	// Backend
	{ name: "Spring Boot", category: "Backend", proficiency: "expert", icon: "🍃" },
	{ name: "Node.js", category: "Backend", proficiency: "advanced", icon: "🟢" },
	{ name: "Express.js", category: "Backend", proficiency: "advanced", icon: "🚂" },
	{ name: "Django", category: "Backend", proficiency: "intermediate", icon: "🎸" },
	{ name: "REST APIs", category: "Backend", proficiency: "expert", icon: "🔌" },
	{ name: "GraphQL", category: "Backend", proficiency: "intermediate", icon: "📡" },
	{ name: "WebSocket", category: "Backend", proficiency: "advanced", icon: "🔌" },

	// Mobile
	{ name: "React Native", category: "Mobile", proficiency: "advanced", icon: "📱" },
	{ name: "Expo", category: "Mobile", proficiency: "advanced", icon: "📲" },

	// Databases
	{ name: "PostgreSQL", category: "Databases", proficiency: "expert", icon: "🐘" },
	{ name: "MySQL", category: "Databases", proficiency: "advanced", icon: "🐬" },
	{ name: "MongoDB", category: "Databases", proficiency: "advanced", icon: "🍃" },
	{ name: "Redis", category: "Databases", proficiency: "advanced", icon: "🔴" },
	{ name: "Supabase", category: "Databases", proficiency: "advanced", icon: "⚡" },
	{ name: "Firebase", category: "Databases", proficiency: "intermediate", icon: "🔥" },

	// Cloud & DevOps
	{ name: "Docker", category: "Cloud & DevOps", proficiency: "advanced", icon: "🐳" },
	{ name: "Git", category: "Cloud & DevOps", proficiency: "expert", icon: "🌿" },
	{ name: "GitHub Actions", category: "Cloud & DevOps", proficiency: "advanced", icon: "⚙️" },
	{ name: "Vercel", category: "Cloud & DevOps", proficiency: "expert", icon: "▲" },
	{ name: "Linux", category: "Cloud & DevOps", proficiency: "advanced", icon: "🐧" },
	{ name: "CI/CD", category: "Cloud & DevOps", proficiency: "advanced", icon: "🔄" },

	// Security & Testing
	{ name: "mitmproxy", category: "Security & Testing", proficiency: "advanced", icon: "🔐" },
	{
		name: "Network Security",
		category: "Security & Testing",
		proficiency: "intermediate",
		icon: "🛡️",
	},
	{ name: "Jest", category: "Security & Testing", proficiency: "advanced", icon: "🃏" },
	{ name: "Vitest", category: "Security & Testing", proficiency: "intermediate", icon: "⚡" },

	// Tools & Analytics
	{ name: "Jira", category: "Tools & Analytics", proficiency: "advanced", icon: "📋" },
	{ name: "Dynatrace", category: "Tools & Analytics", proficiency: "advanced", icon: "📊" },
	{ name: "AppsFlyer", category: "Tools & Analytics", proficiency: "advanced", icon: "📱" },
	{ name: "Xtremepush", category: "Tools & Analytics", proficiency: "expert", icon: "📲" },
	{ name: "Postman", category: "Tools & Analytics", proficiency: "expert", icon: "📮" },
	{ name: "VS Code", category: "Tools & Analytics", proficiency: "expert", icon: "💻" },
];

// ========================================
// Skill Categories
// ========================================

export const skillCategories: SkillCategory[] = [
	{
		name: "Languages",
		description: "Programming languages and markup",
		skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS", "Bash"],
	},
	{
		name: "Frontend",
		description: "UI frameworks, libraries, and tools",
		skills: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"shadcn/ui",
			"Redux",
			"React Hook Form",
			"Zod",
			"Framer Motion",
			"Chart.js",
		],
	},
	{
		name: "Backend",
		description: "Server-side frameworks and APIs",
		skills: [
			"Spring Boot",
			"Node.js",
			"Express.js",
			"Django",
			"REST APIs",
			"GraphQL",
			"WebSocket",
		],
	},
	{
		name: "Mobile",
		description: "Cross-platform mobile development",
		skills: ["React Native", "Expo"],
	},
	{
		name: "Databases",
		description: "SQL, NoSQL, and caching solutions",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
	},
	{
		name: "Cloud & DevOps",
		description: "Development operations and infrastructure",
		skills: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux", "CI/CD"],
	},
	{
		name: "Security & Testing",
		description: "Security tools and testing frameworks",
		skills: ["mitmproxy", "Network Security", "Jest", "Vitest"],
	},
	{
		name: "Tools & Analytics",
		description: "Development tools and analytics platforms",
		skills: ["Jira", "Dynatrace", "AppsFlyer", "Xtremepush", "Postman", "VS Code"],
	},
];

// ========================================
// Helper Functions
// ========================================

export const getSkillsByCategory = (category: string): Skill[] =>
	skills.filter((skill) => skill.category === category);

export const getSkillByName = (name: string): Skill | undefined =>
	skills.find((skill) => skill.name.toLowerCase() === name.toLowerCase());

export const getExpertSkills = (): Skill[] =>
	skills.filter((skill) => skill.proficiency === "expert");

export const getSkillCategories = (): SkillCategory[] => skillCategories;

export const getSkillCount = (): number => skills.length;

export const getCategoryCount = (): number => skillCategories.length;
