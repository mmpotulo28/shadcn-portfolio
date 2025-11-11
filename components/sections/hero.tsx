"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data/personal-info";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
			className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="max-w-4xl mx-auto text-center space-y-8"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}>
					{/* Greeting with sparkles */}
					<motion.div variants={fadeInUp} className="relative inline-block">
						<motion.div
							className="absolute -top-8 -right-8"
							animate={{
								rotate: [0, 360],
								scale: [1, 1.2, 1],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut",
							}}>
							<Sparkles className="h-6 w-6 text-primary" />
						</motion.div>
						<p className="text-primary font-medium text-lg md:text-xl mb-4 inline-flex items-center gap-2">
							<motion.span
								animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
								transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
								👋
							</motion.span>
							Hello, I&apos;m
						</p>
					</motion.div>

					{/* Name with gradient */}
					<motion.h1
						variants={fadeInUp}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] animate-gradient">
						{personalInfo.name}
					</motion.h1>

					{/* Animated Title */}
					<motion.div variants={fadeInUp} className="h-16 sm:h-20 md:h-24">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground">
							{displayedText}
							<motion.span
								animate={{ opacity: [1, 0] }}
								transition={{ duration: 0.8, repeat: Infinity }}>
								|
							</motion.span>
						</h2>
					</motion.div>

					{/* Tagline */}
					<motion.p
						variants={fadeInUp}
						className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						{personalInfo.tagline}
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={fadeInUp}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto">
							<Button
								size="lg"
								onClick={scrollToProjects}
								className="w-full sm:w-auto group relative overflow-hidden">
								<span className="relative z-10 flex items-center">
									View My Work
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</span>
								<motion.div
									className="absolute inset-0 bg-primary/20"
									initial={{ x: "-100%" }}
									whileHover={{ x: "100%" }}
									transition={{ duration: 0.5 }}
								/>
							</Button>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto">
							<Button
								size="lg"
								variant="outline"
								onClick={scrollToContact}
								className="w-full sm:w-auto group border-2">
								<Mail className="mr-2 h-5 w-5" />
								Get In Touch
							</Button>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full sm:w-auto">
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
						</motion.div>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div variants={fadeInUp} className="pt-12">
						<Link
							href="#about"
							onClick={(e) => {
								e.preventDefault();
								const element = document.querySelector("#about");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className="inline-block text-muted-foreground hover:text-primary transition-colors"
							aria-label="Scroll to about section">
							<motion.svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								animate={{ y: [0, 10, 0] }}
								transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
								<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</motion.svg>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
