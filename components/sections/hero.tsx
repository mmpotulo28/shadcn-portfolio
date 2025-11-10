"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal-info";

const titleWords = ["Full-Stack", "Software", "Developer"];

export function Hero() {
	const [displayedText, setDisplayedText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = titleWords[wordIndex];
		const timeout = setTimeout(
			() => {
				if (isDeleting) {
					if (displayedText.length > 0) {
						setDisplayedText(currentWord.slice(0, displayedText.length - 1));
					} else {
						setIsDeleting(false);
						setWordIndex((prev) => (prev + 1) % titleWords.length);
					}
				} else if (displayedText.length < currentWord.length) {
					setDisplayedText(currentWord.slice(0, displayedText.length + 1));
				} else {
					setTimeout(() => setIsDeleting(true), 1500);
				}
			},
			isDeleting ? 50 : 100,
		);

		return () => clearTimeout(timeout);
	}, [displayedText, isDeleting, wordIndex]);

	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToProjects = () => {
		const element = document.querySelector("#projects");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					{/* Greeting */}
					<div className="animate-fade-in">
						<p className="text-primary font-medium text-lg md:text-xl mb-4">
							👋 Hello, I&apos;m
						</p>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
							{personalInfo.name}
						</h1>
					</div>

					{/* Animated Title */}
					<div className="h-16 sm:h-20 md:h-24">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
							{displayedText}
							<span className="animate-blink">|</span>
						</h2>
					</div>

					{/* Tagline */}
					<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						{personalInfo.tagline}
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
						<Button
							size="lg"
							onClick={scrollToProjects}
							className="w-full sm:w-auto group">
							View My Work
							<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
						</Button>

						<Button
							size="lg"
							variant="outline"
							onClick={scrollToContact}
							className="w-full sm:w-auto group">
							<Mail className="mr-2 h-5 w-5" />
							Get In Touch
						</Button>

						<Button
							size="lg"
							variant="ghost"
							asChild
							className="w-full sm:w-auto group">
							<a href="/resume/manelisi-mpotulo-resume.pdf" download>
								<Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
								Download CV
							</a>
						</Button>
					</div>

					{/* Quick Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
						<div className="space-y-2">
							<p className="text-3xl md:text-4xl font-bold text-primary">2+</p>
							<p className="text-sm text-muted-foreground">Years Experience</p>
						</div>
						<div className="space-y-2">
							<p className="text-3xl md:text-4xl font-bold text-primary">11</p>
							<p className="text-sm text-muted-foreground">Projects Built</p>
						</div>
						<div className="space-y-2">
							<p className="text-3xl md:text-4xl font-bold text-primary">55+</p>
							<p className="text-sm text-muted-foreground">Technologies</p>
						</div>
						<div className="space-y-2">
							<p className="text-3xl md:text-4xl font-bold text-primary">100K+</p>
							<p className="text-sm text-muted-foreground">Users Impacted</p>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div className="pt-12 animate-bounce">
						<Link
							href="#about"
							onClick={(e) => {
								e.preventDefault();
								const element = document.querySelector("#about");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className="inline-block text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Scroll to about section">
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
