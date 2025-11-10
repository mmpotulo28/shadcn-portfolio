// types/index.ts
// Type definitions for portfolio data

export type ProjectCategory = "personal" | "professional" | "open-source";
export type ProjectStatus = "live" | "in-development" | "archived";

export interface ProjectMetrics {
	users?: string;
	transactions?: string;
	performance?: string;
	revenue?: string;
	uptime?: string;
	engagement?: string;
	[key: string]: string | undefined;
}

export interface ProjectLinks {
	live?: string;
	github?: string;
	demo?: string;
	documentation?: string;
}

export interface Project {
	id: string;
	title: string;
	category: ProjectCategory;
	status: ProjectStatus;
	description: string;
	challenge: string;
	solution: string[];
	technologies: string[];
	achievements: string[];
	metrics?: ProjectMetrics;
	links: ProjectLinks;
	image: string;
	featured: boolean;
	order: number;
	company?: string; // For professional projects
}

export interface Experience {
	id: string;
	company: string;
	role: string;
	duration: string;
	startDate: string;
	endDate?: string; // undefined for current position
	location: string;
	description: string;
	responsibilities: string[];
	achievements: string[];
	technologies: string[];
}

export interface Skill {
	name: string;
	category: string;
	proficiency?: "expert" | "advanced" | "intermediate" | "familiar";
	icon?: string;
}

export interface SkillCategory {
	name: string;
	skills: Skill[];
}

export interface Education {
	degree: string;
	field: string;
	institution: string;
	duration: string;
	focusAreas: string[];
	capstone?: {
		title: string;
		description: string;
		technologies: string[];
	};
}

export interface SocialLinks {
	github?: string;
	linkedin?: string;
	twitter?: string;
	email: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}
