"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
	{ id: "home", label: "Home", href: "#home" },
	{ id: "about", label: "About", href: "#about" },
	{ id: "experience", label: "Experience", href: "#experience" },
	{ id: "projects", label: "Projects", href: "#projects" },
	{ id: "skills", label: "Skills", href: "#skills" },
	{ id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (href: string) => {
		setIsMobileMenuOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<header
				className={cn(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
					isScrolled
						? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
						: "bg-transparent",
				)}>
				<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Logo */}
						<Link
							href="#home"
							onClick={(e) => {
								e.preventDefault();
								handleNavClick("#home");
							}}
							className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
							MM
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-1 lg:space-x-2">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										handleNavClick(item.href);
									}}
									className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
									{item.label}
								</Link>
							))}

							{/* Theme Toggle */}
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								className="ml-2"
								aria-label="Toggle theme">
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex items-center space-x-2 md:hidden">
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								aria-label="Toggle theme">
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button>

							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								aria-label="Toggle menu">
								{isMobileMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</Button>
						</div>
					</div>
				</nav>
			</header>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-40 md:hidden">
					<button
						type="button"
						className="fixed inset-0 bg-background/80 backdrop-blur-sm cursor-default"
						onClick={() => setIsMobileMenuOpen(false)}
						aria-label="Close menu"
					/>
					<div className="fixed top-16 right-0 left-0 bg-background border-b border-border shadow-lg">
						<nav className="container mx-auto px-4 py-6 space-y-3">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										handleNavClick(item.href);
									}}
									className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
									{item.label}
								</Link>
							))}
						</nav>
					</div>
				</div>
			)}
		</>
	);
}
