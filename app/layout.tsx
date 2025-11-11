import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Manelisi Mpotulo | Software Developer",
	description:
		"Software Developer with B.Eng Tech in Computer Engineering. Expertise in Next.js, React, Java, TypeScript, Spring Boot, and Quarkus. Currently at BETSoftware with experience at Sanlam Investments. Based in Cape Town, South Africa.",
	keywords: [
		"Manelisi Mpotulo",
		"Software Developer",
		"Computer Engineering",
		"Full-Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Java",
		"Spring Boot",
		"Quarkus",
		"SQL Server",
		"React Native",
		"Web Development",
		"Mobile Development",
		"BETSoftware",
		"Sanlam Investments",
		"Cape Town",
		"South Africa",
		"CPUT",
		"Umuzi",
		"Portfolio",
		"Software Engineer",
		"Frontend Developer",
		"Backend Developer",
	],
	authors: [{ name: "Manelisi Mpotulo", url: "https://github.com/mmpotulo28" }],
	creator: "Manelisi Mpotulo",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://manelisim.mpotulo.com",
		title: "Manelisi Mpotulo | Software Developer - B.Eng Tech Computer Engineering",
		description:
			"Software Developer with B.Eng Tech in Computer Engineering. Expertise in Next.js, React, Java, TypeScript, Spring Boot, and Quarkus. Experience at BETSoftware and Sanlam Investments.",
		siteName: "Manelisi Mpotulo Portfolio",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Manelisi Mpotulo - Software Developer with Computer Engineering Background",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Manelisi Mpotulo | Software Developer",
		description:
			"Software Developer with B.Eng Tech in Computer Engineering. Expertise in Next.js, React, Java, TypeScript, Spring Boot & Quarkus.",
		images: ["/images/og-image.jpg"],
		creator: "@manelisi_m",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "huYQldTQN34pAS3o-dFHjQFhmNI2uC-_EpWcTGAoqp0",
	},
	category: "Technology",
	classification: "Portfolio Website",
	alternates: {
		canonical: "https://manelisim.mpotulo.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Manelisi Mpotulo",
		jobTitle: "Software Developer",
		description:
			"Software Developer with B.Eng Tech in Computer Engineering, specializing in Next.js, React, Java, TypeScript, Spring Boot, and Quarkus.",
		url: "https://manelisim.mpotulo.com",
		sameAs: [
			"https://github.com/mmpotulo28",
			"https://linkedin.com/in/mmpotulo",
			"https://twitter.com/manelisi_m",
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Cape Town",
			addressRegion: "Western Cape",
			addressCountry: "South Africa",
		},
		email: "mpotulom28@gmail.com",
		telephone: "079 653 0453",
		alumniOf: [
			{
				"@type": "EducationalOrganization",
				name: "Cape Peninsula University of Technology",
				description: "Bachelor of Engineering in Computer Engineering",
			},
			{
				"@type": "EducationalOrganization",
				name: "Umuzi.org",
				description: "National Certificate in IT (Systems Development)",
			},
		],
		worksFor: {
			"@type": "Organization",
			name: "BETSoftware",
		},
		knowsAbout: [
			"Software Development",
			"Web Development",
			"Mobile Development",
			"React",
			"Next.js",
			"TypeScript",
			"Java",
			"Spring Boot",
			"Quarkus",
			"SQL Server",
			"React Native",
			"Computer Engineering",
		],
		award: [
			"2019 District's Top Achiever Award",
			"Class of 2019's 2nd Place Top Achiever",
			"Siemens Gamesa HackStem Hackathon 2nd Place",
			"Blockchain Hackathon Winner (Celo & TheGraph)",
		],
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-192x192.png" />
				<meta name="theme-color" content="#000000" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
