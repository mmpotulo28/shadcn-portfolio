"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, TrendingUp, Circle, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { projects, getFeaturedProjects, getProjectsByCategory } from "@/lib/data/projects";
import type { Project } from "@/types";

const categoryLabels = {
	all: "All Projects",
	professional: "Professional",
	personal: "Personal",
	"open-source": "Open Source",
};

export function Projects() {
	const [activeCategory, setActiveCategory] = useState<"all" | Project["category"]>("all");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const filteredProjects =
		activeCategory === "all" ? projects : getProjectsByCategory(activeCategory);
	const featuredProjects = getFeaturedProjects();

	return (
		<section id="projects" className="py-20 md:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto space-y-12">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							Featured Projects
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A showcase of production-grade applications built with modern
							technologies
						</p>
					</div>

					{/* Featured Projects - Large Cards */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold">Highlighted Work</h3>
						<div className="grid md:grid-cols-2 gap-6">
							{featuredProjects.slice(0, 4).map((project) => (
								<Card
									key={project.id}
									className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer"
									onClick={() => setSelectedProject(project)}>
									<div className="relative aspect-video overflow-hidden bg-muted">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-4 right-4">
											<Badge className="bg-primary text-primary-foreground">
												Featured
											</Badge>
										</div>
									</div>
									<CardHeader className="space-y-3">
										<div className="space-y-2">
											<div className="flex items-start justify-between gap-4">
												<h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
													{project.title}
												</h3>
												{project.company && (
													<Badge variant="outline" className="shrink-0">
														{project.company}
													</Badge>
												)}
											</div>
											<p className="text-sm text-muted-foreground line-clamp-2">
												{project.description}
											</p>
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex flex-wrap gap-2">
											{project.technologies.slice(0, 5).map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="text-xs">
													{tech}
												</Badge>
											))}
											{project.technologies.length > 5 && (
												<Badge variant="secondary" className="text-xs">
													+{project.technologies.length - 5}
												</Badge>
											)}
										</div>
									</CardContent>
									<CardFooter className="flex justify-between items-center pt-4 border-t">
										<Badge
											variant="outline"
											className={
												project.status === "live"
													? "border-green-500 text-green-600"
													: "border-blue-500 text-blue-600"
											}>
											{project.status}
										</Badge>
										<Button variant="ghost" size="sm" className="group/btn">
											View Details
											<ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
										</Button>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>

					{/* Category Filter */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold">All Projects</h3>
						<Tabs
							value={activeCategory}
							onValueChange={(value) =>
								setActiveCategory(value as typeof activeCategory)
							}
							className="w-full">
							<TabsList className="w-full sm:w-auto">
								{(
									Object.keys(categoryLabels) as Array<
										keyof typeof categoryLabels
									>
								).map((category) => (
									<TabsTrigger key={category} value={category}>
										{categoryLabels[category]}
									</TabsTrigger>
								))}
							</TabsList>

							<TabsContent value={activeCategory} className="mt-8">
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{filteredProjects.map((project) => (
										<Card
											key={project.id}
											className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/30"
											onClick={() => setSelectedProject(project)}>
											<div className="relative aspect-video overflow-hidden bg-muted">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-300"
												/>
											</div>
											<CardHeader className="space-y-2">
												<div className="flex items-start justify-between gap-2">
													<h3 className="font-bold line-clamp-1 group-hover:text-primary transition-colors">
														{project.title}
													</h3>
													<Badge
														variant="outline"
														className={
															project.status === "live"
																? "border-green-500 text-green-600 shrink-0"
																: "border-blue-500 text-blue-600 shrink-0"
														}>
														{project.status}
													</Badge>
												</div>
												<p className="text-sm text-muted-foreground line-clamp-2">
													{project.description}
												</p>
											</CardHeader>
											<CardContent>
												<div className="flex flex-wrap gap-1.5">
													{project.technologies
														.slice(0, 4)
														.map((tech) => (
															<Badge
																key={tech}
																variant="secondary"
																className="text-xs">
																{tech}
															</Badge>
														))}
													{project.technologies.length > 4 && (
														<Badge
															variant="secondary"
															className="text-xs">
															+{project.technologies.length - 4}
														</Badge>
													)}
												</div>
											</CardContent>
										</Card>
									))}
								</div>

								{/* Project Count */}
								<div className="text-center pt-8">
									<p className="text-sm text-muted-foreground">
										Showing {filteredProjects.length} project
										{filteredProjects.length === 1 ? "" : "s"}
									</p>
								</div>
							</TabsContent>
						</Tabs>
					</div>

					{/* Stats */}
					<div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">11</p>
								<p className="text-sm text-muted-foreground">Total Projects</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">
									{getProjectsByCategory("professional").length}
								</p>
								<p className="text-sm text-muted-foreground">
									Professional Projects
								</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">
									{featuredProjects.length}
								</p>
								<p className="text-sm text-muted-foreground">Featured Work</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			{/* Project Detail Dialog */}
			<Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
				<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
					{selectedProject && (
						<>
							<DialogHeader>
								<div className="space-y-4">
									<div className="flex items-start justify-between gap-4">
										<DialogTitle className="text-2xl md:text-3xl">
											{selectedProject.title}
										</DialogTitle>
										{selectedProject.company && (
											<Badge variant="outline">
												{selectedProject.company}
											</Badge>
										)}
									</div>
									<DialogDescription className="text-base">
										{selectedProject.description}
									</DialogDescription>
								</div>
							</DialogHeader>

							<div className="space-y-6">
								{/* Project Image */}
								<div className="relative aspect-video rounded-lg overflow-hidden border">
									<Image
										src={selectedProject.image}
										alt={selectedProject.title}
										fill
										className="object-cover"
									/>
								</div>

								{/* Challenge */}
								<div className="space-y-2">
									<h4 className="font-semibold text-lg">Challenge</h4>
									<p className="text-muted-foreground leading-relaxed">
										{selectedProject.challenge}
									</p>
								</div>

								{/* Solution */}
								<div className="space-y-3">
									<h4 className="font-semibold text-lg">Solution</h4>
									<ul className="space-y-2">
										{selectedProject.solution.map((item) => (
											<li
												key={item}
												className="flex items-start gap-3 text-sm">
												<Circle className="h-2 w-2 mt-1.5 fill-primary text-primary shrink-0" />
												<span className="text-muted-foreground">
													{item}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Achievements */}
								<div className="space-y-3">
									<h4 className="font-semibold text-lg">Key Achievements</h4>
									<ul className="space-y-2">
										{selectedProject.achievements.map((achievement) => (
											<li
												key={achievement}
												className="flex items-start gap-3 text-sm">
												<Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
												<span className="text-muted-foreground">
													{achievement}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Metrics */}
								{selectedProject.metrics && (
									<div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
										{selectedProject.metrics.performance && (
											<div className="space-y-1">
												<div className="flex items-center gap-2 text-sm font-medium">
													<TrendingUp className="h-4 w-4 text-primary" />
													Performance
												</div>
												<p className="text-sm text-muted-foreground">
													{selectedProject.metrics.performance}
												</p>
											</div>
										)}
										{selectedProject.metrics.engagement && (
											<div className="space-y-1">
												<div className="flex items-center gap-2 text-sm font-medium">
													<Calendar className="h-4 w-4 text-primary" />
													Impact
												</div>
												<p className="text-sm text-muted-foreground">
													{selectedProject.metrics.engagement}
												</p>
											</div>
										)}
									</div>
								)}

								{/* Technologies */}
								<div className="space-y-3">
									<h4 className="font-semibold text-lg">Technologies</h4>
									<div className="flex flex-wrap gap-2">
										{selectedProject.technologies.map((tech) => (
											<Badge key={tech} variant="secondary">
												{tech}
											</Badge>
										))}
									</div>
								</div>

								{/* Links */}
								{(selectedProject.links.github || selectedProject.links.live) && (
									<div className="flex flex-wrap gap-3 pt-4 border-t">
										{selectedProject.links.live && (
											<Button asChild>
												<Link
													href={selectedProject.links.live}
													target="_blank"
													rel="noopener noreferrer">
													<ExternalLink className="mr-2 h-4 w-4" />
													View Live
												</Link>
											</Button>
										)}
										{selectedProject.links.github && (
											<Button variant="outline" asChild>
												<Link
													href={selectedProject.links.github}
													target="_blank"
													rel="noopener noreferrer">
													View Code
												</Link>
											</Button>
										)}
									</div>
								)}
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
