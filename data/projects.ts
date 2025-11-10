// data/projects.ts
// Project data for portfolio showcase

import { Project } from "@/types";

export const projects: Project[] = [
	// Personal & Business Projects
	{
		id: "mpotulo-inc",
		title: "Mpotulo Inc. Website",
		category: "personal",
		status: "live",
		description: "Corporate portal with integrated client management system",
		challenge:
			"Build a professional corporate website that serves as both a public-facing portfolio and an internal client management system, requiring secure authentication and role-based access.",
		solution: [
			"Designed responsive, modular component architecture using Next.js and Tailwind CSS",
			"Implemented admin dashboard for client tracking and service management",
			"Deployed on Vercel with Cloudflare security and CDN optimization",
			"Created SEO-optimized pages for legal-tech and consulting services",
		],
		technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Cloudflare", "TypeScript"],
		achievements: [
			"Fully responsive design across all devices",
			"Admin dashboard with role-based access control",
			"95+ Lighthouse performance score",
			"Integrated contact form with email notifications",
			"Secured with Cloudflare SSL and DDoS protection",
		],
		metrics: {
			performance: "95+ Lighthouse score",
			uptime: "99.9%",
		},
		links: {
			live: "https://mpotuloinc.com",
			github: "https://github.com/mmpotulo28/mpotulo-inc",
		},
		image: "/images/projects/mpotulo-inc.jpg",
		featured: true,
		order: 1,
	},
	{
		id: "auction-market-sa",
		title: "AuctionMarket SA",
		category: "personal",
		status: "live",
		description: "Transparent auction platform with real-time bidding and legal traceability",
		challenge:
			"Create a trustworthy auction system with real-time updates, fraud detection, and complete bid history for legal compliance and transparency.",
		solution: [
			"Architected PostgreSQL schema with comprehensive audit logs and bid history",
			"Implemented WebSocket channels for real-time bid updates",
			"Built admin moderation tools with fraud detection algorithms",
			"Designed dispute resolution workflow with evidence preservation",
		],
		technologies: ["Next.js", "PostgreSQL", "WebSockets", "Node.js", "React", "Prisma ORM"],
		achievements: [
			"Real-time bidding with <100ms latency",
			"Complete audit trail for legal compliance",
			"Fraud detection reduced suspicious activity by 85%",
			"Admin tools for efficient moderation",
			"Handled 1000+ concurrent bidders during peak auctions",
		],
		metrics: {
			transactions: "R2M+",
			performance: "<100ms latency",
			users: "1000+ concurrent",
		},
		links: {
			github: "https://github.com/mmpotulo28/auction-market-sa",
		},
		image: "/images/projects/auction-market.jpg",
		featured: true,
		order: 2,
	},
	{
		id: "pulsecampus",
		title: "PulseCampus",
		category: "personal",
		status: "live",
		description: "Multi-tenant SaaS platform for student communities",
		challenge:
			"Build a scalable platform serving multiple campuses with isolated data, role-based permissions, and real-time communication features.",
		solution: [
			"Implemented multi-tenant architecture with data isolation per campus",
			"Designed role-based access control (students, moderators, admins)",
			"Built notification workflows for events and announcements",
			"Created analytics dashboard for engagement metrics",
			"Set up CI/CD pipelines with GitHub Actions",
		],
		technologies: ["Next.js", "AWS", "PostgreSQL", "WebSockets", "GitHub Actions", "Redis"],
		achievements: [
			"Supports 5+ university campuses",
			"10,000+ active student users",
			"99.9% uptime on AWS infrastructure",
			"Real-time messaging with end-to-end encryption",
			"Event attendance tracking with 95% accuracy",
		],
		metrics: {
			users: "10,000+",
			uptime: "99.9%",
			engagement: "60% increase in event participation",
		},
		links: {
			live: "https://pulsecampus.co.za",
		},
		image: "/images/projects/pulsecampus.jpg",
		featured: true,
		order: 3,
	},
	{
		id: "paymezar",
		title: "PayMeZar",
		category: "personal",
		status: "live",
		description: "Secure payment gateway with fraud prevention",
		challenge:
			"Develop a reliable payment processing system with ledger-based transactions, rollback support, and comprehensive fraud detection.",
		solution: [
			"Designed ledger-based transaction model with double-entry accounting",
			"Implemented rollback mechanisms for failed transactions",
			"Built fraud prevention with rate-limiting and anomaly detection",
			"Created RESTful APIs for merchant onboarding and payment processing",
			"Integrated multiple payment providers (Payfast, Yoco, PayStack)",
		],
		technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "RESTful APIs", "OAuth 2.0"],
		achievements: [
			"Processed R500K+ in transactions",
			"99.99% transaction success rate",
			"Fraud detection prevented R50K+ in suspicious transactions",
			"Complete audit trail for compliance",
			"API response time < 200ms",
		],
		metrics: {
			transactions: "R500K+",
			performance: "<200ms response time",
			uptime: "99.99%",
		},
		links: {
			github: "https://github.com/mmpotulo28/paymezar",
		},
		image: "/images/projects/paymezar.jpg",
		featured: true,
		order: 4,
	},
	{
		id: "onlyfriends-ticketing",
		title: "OnlyFriends Entertainment - Ticketing System",
		category: "personal",
		status: "live",
		description: "Creator-first ticketing and content access platform",
		challenge:
			"Build a flexible ticketing system that allows creators to manage events dynamically while maintaining secure access control and payment processing.",
		solution: [
			"Integrated Google Sheets API for real-time event tracking and updates",
			"Implemented Firebase Auth for secure user authentication",
			"Designed Firestore database for ticket tiers and audience segmentation",
			"Built creator dashboard for event management and analytics",
			"Created QR code generation for ticket validation",
		],
		technologies: ["React", "Firebase", "Google Sheets API", "Stripe", "TypeScript"],
		achievements: [
			"500+ events managed successfully",
			"5,000+ tickets sold",
			"Real-time inventory management via Google Sheets",
			"Automated email confirmations and reminders",
			"Mobile-responsive ticket viewing",
		],
		metrics: {
			events: "500+",
			tickets: "5,000+",
			revenue: "R200K+ for creators",
		},
		links: {
			live: "https://onlyfriendsent.co.za",
		},
		image: "/images/projects/onlyfriends.jpg",
		featured: false,
		order: 5,
	},
	{
		id: "lisk-analytics",
		title: "Lisk Analytics Dashboard",
		category: "open-source",
		status: "live",
		description: "Real-time blockchain analytics with performance optimization",
		challenge:
			"Display complex blockchain metrics with minimal latency while handling high query volumes from multiple data sources.",
		solution: [
			"Implemented Redis caching layer for frequently accessed metrics",
			"Migrated legacy queries to efficient PostgreSQL materialized views",
			"Designed real-time data pipeline for blockchain event processing",
			"Contributed to GitHub PR #3 for cache strategy optimization",
		],
		technologies: ["Node.js", "Redis", "PostgreSQL", "Express", "Chart.js", "WebSockets"],
		achievements: [
			"Reduced query latency by 85% (from 2s to 300ms)",
			"Cache hit rate of 90% for dashboard queries",
			"Real-time updates with <500ms delay",
			"Optimized database queries reduced load by 70%",
			"Successfully merged performance PR to main repository",
		],
		metrics: {
			performance: "85% latency reduction",
			users: "1,000+ daily active users",
		},
		links: {
			github: "https://github.com/lisk-project/analytics",
		},
		image: "/images/projects/lisk-analytics.jpg",
		featured: false,
		order: 6,
	},

	// Professional Projects (BETSoftware)
	{
		id: "xtremepush-sdk",
		title: "Xtremepush SDK Integration",
		category: "professional",
		status: "live",
		company: "BETSoftware",
		description: "Enterprise-grade SDK integration for in-app messaging",
		challenge:
			"Integrate a complex third-party SDK into existing production apps with different build configurations while maintaining app stability.",
		solution: [
			"Resolved manifest merge conflicts using Gradle's tools:replace",
			"Built native event handlers for cross-platform message delivery",
			"Created comprehensive integration documentation",
			"Implemented fallback mechanisms for graceful error handling",
		],
		technologies: ["Android Native", "React Native", "Gradle", "Native Bridges", "XML"],
		achievements: [
			"Zero production crashes post-deployment",
			"35% increase in push notification engagement",
			"Validated across 5 different app variants",
			"Reduced integration time for future SDKs by 50%",
		],
		metrics: {
			engagement: "35% increase",
			performance: "Zero crashes",
		},
		links: {},
		image: "/images/projects/xtremepush.jpg",
		featured: true,
		order: 7,
	},
	// Add remaining professional projects...
	// (Following the same pattern)
];

// Helper functions
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: Project["category"]) =>
	projects.filter((p) => p.category === category);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
