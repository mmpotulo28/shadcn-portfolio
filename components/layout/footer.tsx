"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/personal-info";

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-muted/50 border-t border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{/* Brand */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold">Manelisi Mpotulo</h3>
						<p className="text-sm text-muted-foreground max-w-xs">
							Full-Stack Software Developer building scalable web and mobile
							applications that make a difference.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-sm font-semibold uppercase tracking-wider">
							Quick Links
						</h4>
						<nav className="flex flex-col space-y-2">
							{["About", "Experience", "Projects", "Skills", "Contact"].map(
								(item) => (
									<Link
										key={item}
										href={`#${item.toLowerCase()}`}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										onClick={(e) => {
											e.preventDefault();
											const element = document.querySelector(
												`#${item.toLowerCase()}`,
											);
											if (element) {
												element.scrollIntoView({ behavior: "smooth" });
											}
										}}>
										{item}
									</Link>
								),
							)}
						</nav>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
						<div className="flex flex-col space-y-2">
							{socialLinks.github && (
								<Link
									href={socialLinks.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors">
									GitHub
								</Link>
							)}
							{socialLinks.linkedin && (
								<Link
									href={socialLinks.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors">
									LinkedIn
								</Link>
							)}
							<Link
								href={socialLinks.email}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
								<Mail className="h-4 w-4" />
								Email
							</Link>
							{socialLinks.twitter && (
								<Link
									href={socialLinks.twitter}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors">
									Twitter
								</Link>
							)}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-muted-foreground text-center sm:text-left">
						© {currentYear} Manelisi Mpotulo. All rights reserved.
					</p>

					<p className="text-sm text-muted-foreground">
						Built with Next.js, TypeScript & Tailwind CSS
					</p>
				</div>
			</div>

			{/* Back to Top Button */}
			<Button
				variant="outline"
				size="icon"
				className="fixed bottom-8 right-8 rounded-full shadow-lg z-40 hidden md:flex"
				onClick={scrollToTop}
				aria-label="Back to top">
				<ArrowUp className="h-5 w-5" />
			</Button>
		</footer>
	);
}
