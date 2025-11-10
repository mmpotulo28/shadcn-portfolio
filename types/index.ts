// types/index.ts
// Centralized type definitions for portfolio

// ========================================
// Project Types
// ========================================

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
	company?: string;
}

// ========================================
// Experience Types
// ========================================

export interface Experience {
	id: string;
	company: string;
	role: string;
	duration: string;
	startDate: string;
	endDate?: string;
	location: string;
	description: string;
	responsibilities: string[];
	achievements: string[];
	technologies: string[];
}

// ========================================
// Skills Types
// ========================================

export type SkillProficiency = "expert" | "advanced" | "intermediate" | "familiar";

export interface Skill {
	name: string;
	category: string;
	proficiency?: SkillProficiency;
	icon?: string;
}

export interface SkillCategory {
	name: string;
	description?: string;
	skills: string[];
}

// ========================================
// Education Types
// ========================================

export interface Education {
	degree: string;
	field: string;
	institution: string;
	duration: string;
	startDate: string;
	endDate: string;
	focusAreas: string[];
	capstone?: {
		title: string;
		description: string;
		technologies: string[];
	};
}

// ========================================
// Contact & Social Types
// ========================================

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

// ========================================
// Personal Info Types
// ========================================

export interface PersonalInfo {
	name: string;
	title: string;
	tagline: string;
	bio: string;
	location: string;
	email: string;
	social: SocialLinks;
	image: string;
}

// ========================================
// Navigation Types
// ========================================

export interface NavItem {
	id: string;
	label: string;
	href: string;
}
