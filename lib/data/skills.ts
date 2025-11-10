import type { Skill, SkillCategory } from "@/types";

// ========================================
// Individual Skills
// ========================================

export const skills: Skill[] = [
	// Languages
	{ name: "Java", category: "Languages", proficiency: "expert", icon: "Coffee" },
	{ name: "TypeScript", category: "Languages", proficiency: "expert", icon: "FileCode" },
	{ name: "JavaScript", category: "Languages", proficiency: "expert", icon: "FileJson" },
	{ name: "Python", category: "Languages", proficiency: "advanced", icon: "Code" },
	{ name: "SQL", category: "Languages", proficiency: "advanced", icon: "Database" },
	{ name: "HTML/CSS", category: "Languages", proficiency: "expert", icon: "Palette" },
	{ name: "Bash", category: "Languages", proficiency: "intermediate", icon: "Terminal" },

	// Frontend
	{ name: "React", category: "Frontend", proficiency: "expert", icon: "Atom" },
	{ name: "Next.js", category: "Frontend", proficiency: "expert", icon: "Triangle" },
	{ name: "Tailwind CSS", category: "Frontend", proficiency: "expert", icon: "Paintbrush" },
	{ name: "shadcn/ui", category: "Frontend", proficiency: "advanced", icon: "Component" },
	{ name: "Redux", category: "Frontend", proficiency: "advanced", icon: "RefreshCw" },
	{ name: "React Hook Form", category: "Frontend", proficiency: "advanced", icon: "FileEdit" },
	{ name: "Zod", category: "Frontend", proficiency: "advanced", icon: "CheckCircle" },
	{ name: "Framer Motion", category: "Frontend", proficiency: "intermediate", icon: "Film" },
	{ name: "Chart.js", category: "Frontend", proficiency: "advanced", icon: "BarChart" },

	// Backend
	{ name: "Spring Boot", category: "Backend", proficiency: "expert", icon: "Leaf" },
	{ name: "Node.js", category: "Backend", proficiency: "advanced", icon: "Circle" },
	{ name: "Express.js", category: "Backend", proficiency: "advanced", icon: "Zap" },
	{ name: "Django", category: "Backend", proficiency: "intermediate", icon: "Music" },
	{ name: "REST APIs", category: "Backend", proficiency: "expert", icon: "Plug" },
	{ name: "GraphQL", category: "Backend", proficiency: "intermediate", icon: "Network" },
	{ name: "WebSocket", category: "Backend", proficiency: "advanced", icon: "Radio" },

	// Mobile
	{ name: "React Native", category: "Mobile", proficiency: "advanced", icon: "Smartphone" },
	{ name: "Expo", category: "Mobile", proficiency: "advanced", icon: "Rocket" },

	// Databases
	{ name: "PostgreSQL", category: "Databases", proficiency: "expert", icon: "Database" },
	{ name: "MySQL", category: "Databases", proficiency: "advanced", icon: "Database" },
	{ name: "MongoDB", category: "Databases", proficiency: "advanced", icon: "Leaf" },
	{ name: "Redis", category: "Databases", proficiency: "advanced", icon: "Circle" },
	{ name: "Supabase", category: "Databases", proficiency: "advanced", icon: "Zap" },
	{ name: "Firebase", category: "Databases", proficiency: "intermediate", icon: "Flame" },

	// Cloud & DevOps
	{ name: "Docker", category: "Cloud & DevOps", proficiency: "advanced", icon: "Container" },
	{ name: "Git", category: "Cloud & DevOps", proficiency: "expert", icon: "GitBranch" },
	{
		name: "GitHub Actions",
		category: "Cloud & DevOps",
		proficiency: "advanced",
		icon: "Workflow",
	},
	{ name: "Vercel", category: "Cloud & DevOps", proficiency: "expert", icon: "Triangle" },
	{ name: "Linux", category: "Cloud & DevOps", proficiency: "advanced", icon: "ServerCog" },
	{ name: "CI/CD", category: "Cloud & DevOps", proficiency: "advanced", icon: "GitCommit" },

	// Security & Testing
	{ name: "mitmproxy", category: "Security & Testing", proficiency: "advanced", icon: "Lock" },
	{
		name: "Network Security",
		category: "Security & Testing",
		proficiency: "intermediate",
		icon: "Shield",
	},
	{ name: "Jest", category: "Security & Testing", proficiency: "advanced", icon: "TestTube" },
	{ name: "Vitest", category: "Security & Testing", proficiency: "intermediate", icon: "Vial" },

	// Tools & Analytics
	{ name: "Jira", category: "Tools & Analytics", proficiency: "advanced", icon: "Kanban" },
	{
		name: "Dynatrace",
		category: "Tools & Analytics",
		proficiency: "advanced",
		icon: "LineChart",
	},
	{ name: "AppsFlyer", category: "Tools & Analytics", proficiency: "advanced", icon: "Activity" },
	{ name: "Xtremepush", category: "Tools & Analytics", proficiency: "expert", icon: "Bell" },
	{ name: "Postman", category: "Tools & Analytics", proficiency: "expert", icon: "Send" },
	{ name: "VS Code", category: "Tools & Analytics", proficiency: "expert", icon: "Code2" },
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
