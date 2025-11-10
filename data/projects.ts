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
	{
		id: "expo-notifications",
		title: "Expo Notifications Crash Diagnostics",
		category: "professional",
		status: "live",
		company: "BETSoftware",
		description: "Production crash investigation and resolution for mobile notifications",
		challenge:
			"Critical crashes affecting user experience during notification delivery, with obscure stack traces and intermittent reproduction.",
		solution: [
			"Symbolicated crash reports to identify root cause in JS-native bridge",
			"Traced issue to asynchronous event handling inconsistencies",
			"Implemented defensive programming patterns to prevent future crashes",
			"Created reproducible test cases for QA validation",
		],
		technologies: [
			"Expo",
			"React Native",
			"JavaScript",
			"Symbolication",
			"Stack Trace Analysis",
		],
		achievements: [
			"Identified and resolved root cause within 48 hours",
			"Reduced notification-related crashes by 95%",
			"Created detailed Jira documentation for engineering team",
			"Established crash monitoring best practices",
		],
		metrics: {
			performance: "95% crash reduction",
			engagement: "App rating improved from 4.2 to 4.7 stars",
		},
		links: {},
		image: "/images/projects/expo-notifications.jpg",
		featured: false,
		order: 8,
	},
	{
		id: "proxy-workflow",
		title: "Linux Proxy Inspection Workflow",
		category: "professional",
		status: "live",
		company: "BETSoftware",
		description: "Automated proxy inspection system for QA and debugging",
		challenge:
			"Manual proxy configuration was time-consuming and error-prone, leading to inconsistent testing environments across the development team.",
		solution: [
			"Compared Linux vs Windows setups for mitmproxy-based inspection",
			"Designed automated startup/teardown scripts for proxy lifecycle",
			"Implemented audit logging for compliance and debugging",
			"Created comprehensive documentation for team adoption",
		],
		technologies: [
			"Linux",
			"mitmproxy",
			"Bash Scripting",
			"Network Security",
			"Certificate Management",
		],
		achievements: [
			"Reduced proxy setup time from 20 minutes to 30 seconds",
			"Improved debugging reliability through automated logging",
			"Enabled parallel testing across multiple environments",
			"Adopted by entire development team",
		],
		metrics: {
			performance: "97% time reduction in setup",
		},
		links: {
			github: "https://github.com/mmpotulo28/proxy-automation",
		},
		image: "/images/projects/proxy-workflow.jpg",
		featured: false,
		order: 9,
	},
	{
		id: "redis-cache-betsoftware",
		title: "Redis Cache Implementation",
		category: "professional",
		status: "live",
		company: "BETSoftware",
		description: "Performance optimization for real-time analytics dashboard",
		challenge:
			"Dashboard queries were slow (3-5 seconds) due to complex aggregations on large datasets, impacting user experience and business operations.",
		solution: [
			"Implemented Redis caching layer for frequently accessed queries",
			"Designed cache invalidation strategy based on data freshness requirements",
			"Optimized query patterns to reduce database load",
			"Monitored cache hit rates and tuned TTL values",
		],
		technologies: [
			"Redis",
			"Spring Boot",
			"PostgreSQL",
			"Performance Optimization",
			"Caching Strategies",
		],
		achievements: [
			"Reduced query latency from 3.5s to 400ms (88% improvement)",
			"Decreased database load by 60%",
			"Cache hit rate of 85% for dashboard queries",
			"Successfully handled 10x traffic spike during peak hours",
		],
		metrics: {
			performance: "88% latency reduction",
			engagement: "User satisfaction improved from 6.8 to 9.2",
		},
		links: {},
		image: "/images/projects/redis-cache.jpg",
		featured: true,
		order: 10,
	},
	{
		id: "appsflyer-integration",
		title: "AppsFlyer Smart Banner Integration",
		category: "professional",
		status: "live",
		company: "BETSoftware",
		description: "Web-to-app conversion optimization with attribution tracking",
		challenge:
			"Low web-to-app conversion rates and lack of visibility into banner performance across different user segments and devices.",
		solution: [
			"Integrated AppsFlyer Smart Banners into web application",
			"Implemented A/B testing for banner variations",
			"Set up Dynatrace monitoring for performance metrics",
			"Optimized banner logic for session attribution and user segmentation",
		],
		technologies: ["AppsFlyer", "JavaScript", "Dynatrace", "Analytics", "A/B Testing"],
		achievements: [
			"Increased web-to-app conversion by 42%",
			"Reduced page load impact to < 50ms",
			"Tracked 50,000+ banner impressions and conversions",
			"Identified high-performing user segments for targeting",
		],
		metrics: {
			engagement: "42% conversion increase",
			performance: "15,000+ additional app installs in Q1",
		},
		links: {},
		image: "/images/projects/appsflyer.jpg",
		featured: false,
		order: 11,
	},
];

// ========================================
// Helper Functions
// ========================================

export const getFeaturedProjects = (): Project[] => projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: Project["category"]): Project[] =>
	projects.filter((p) => p.category === category);

export const getPersonalProjects = (): Project[] =>
	projects.filter((p) => p.category === "personal");

export const getProfessionalProjects = (): Project[] =>
	projects.filter((p) => p.category === "professional");

export const getProjectById = (id: string): Project | undefined =>
	projects.find((p) => p.id === id);

export const getTechnologies = (): string[] => {
	const techSet = new Set<string>();
	projects.forEach((project) => {
		project.technologies.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort((a, b) => a.localeCompare(b));
};
