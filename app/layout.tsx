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
	title: "Manelisi Mpotulo | Full-Stack Software Developer",
	description:
		"Full-Stack Software Developer specializing in React, TypeScript, and Spring Boot. Building scalable web and mobile applications at BETSoftware with 100,000+ daily active users.",
	keywords: [
		"Manelisi Mpotulo",
		"Software Developer",
		"Full-Stack Developer",
		"React",
		"TypeScript",
		"Next.js",
		"Spring Boot",
		"Java",
		"Web Development",
		"Mobile Development",
		"Cape Town",
		"South Africa",
		"BETSoftware",
	],
	authors: [{ name: "Manelisi Mpotulo", url: "https://github.com/mmpotulo28" }],
	creator: "Manelisi Mpotulo",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://manelisi-mpotulo.vercel.app",
		title: "Manelisi Mpotulo | Full-Stack Software Developer",
		description:
			"Full-Stack Software Developer specializing in React, TypeScript, and Spring Boot. Building scalable web and mobile applications.",
		siteName: "Manelisi Mpotulo Portfolio",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Manelisi Mpotulo - Full-Stack Software Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Manelisi Mpotulo | Full-Stack Software Developer",
		description:
			"Full-Stack Software Developer specializing in React, TypeScript, and Spring Boot.",
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
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
