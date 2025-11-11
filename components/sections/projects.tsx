"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, TrendingUp, Circle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
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
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

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
		<>
			<section id="projects" className="py-20 md:py-32 relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-30">
					<div className="absolute inset-0 bg-size-[4rem_4rem] bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]" />
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="max-w-7xl mx-auto space-y-12"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}>
						{/* Section Header */}
						<motion.div variants={fadeInUp} className="text-center space-y-4">
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-primary">
								Featured Projects
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								A showcase of production-grade applications built with modern
								technologies
							</p>
						</motion.div>

						{/* Featured Projects - Large Cards */}
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							className="space-y-6">
							<motion.h3 variants={fadeInUp} className="text-2xl font-bold">
								Highlighted Work
							</motion.h3>
							<div className="grid md:grid-cols-2 gap-8">
								{featuredProjects.slice(0, 4).map((project, index) => (
									<motion.div
										key={project.id}
										variants={scaleIn}
										custom={index}
										transition={{ duration: 0.3 }}>
										<CardContainer className="py-0">
											<CardBody className="relative group/card w-full h-auto rounded-xl p-6 border border-border hover:border-primary/50 bg-card transition-all duration-300">
												<CardItem
													translateZ="50"
													className="text-xl font-bold text-foreground group-hover/card:text-primary transition-colors w-full">
													{project.title}
												</CardItem>
												<CardItem
													as="p"
													translateZ="60"
													className="text-sm text-muted-foreground mt-2 w-full line-clamp-2">
													{project.description}
												</CardItem>
												<CardItem translateZ="100" className="w-full mt-4">
													<div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
														<Image
															src={project.image}
															alt={project.title}
															fill
															className="object-cover group-hover/card:scale-110 transition-transform duration-500"
														/>
														<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
													</div>
												</CardItem>
												<div className="flex flex-col gap-4 mt-6 w-full">
													<CardItem
														translateZ="60"
														className="flex flex-wrap gap-2 w-full">
														{project.technologies
															.slice(0, 5)
															.map((tech) => (
																<Badge
																	key={tech}
																	variant="secondary"
																	className="text-xs">
																	{tech}
																</Badge>
															))}
														{project.technologies.length > 5 && (
															<Badge
																variant="secondary"
																className="text-xs">
																+{project.technologies.length - 5}
															</Badge>
														)}
													</CardItem>
													<CardItem
														translateZ="80"
														className="flex justify-between items-center w-full pt-4 border-t">
														<Badge
															variant="outline"
															className={
																project.status === "live"
																	? "border-green-500 text-green-600"
																	: "border-blue-500 text-blue-600"
															}>
															{project.status}
														</Badge>
														<Button
															variant="ghost"
															size="sm"
															className="group/btn"
															onClick={() =>
																setSelectedProject(project)
															}>
															View Details
															<ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
														</Button>
													</CardItem>
												</div>
											</CardBody>
										</CardContainer>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Category Filter */}
						<motion.div
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							className="space-y-6">
							<h3 className="text-2xl font-bold">All Projects</h3>
							<Tabs
								value={activeCategory}
								onValueChange={(value) =>
									setActiveCategory(value as typeof activeCategory)
								}
								className="w-full">
								<TabsList className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-4">
									{(
										Object.keys(categoryLabels) as Array<
											keyof typeof categoryLabels
										>
									).map((category) => (
										<TabsTrigger
											key={category}
											value={category}
											className="relative">
											{categoryLabels[category]}
											{category === activeCategory && (
												<motion.div
													layoutId="activeTab"
													className="absolute inset-0 bg-primary/10 rounded-md -z-10"
													transition={{
														type: "spring",
														bounce: 0.2,
														duration: 0.6,
													}}
												/>
											)}
										</TabsTrigger>
									))}
								</TabsList>

								<AnimatePresence mode="wait">
									<TabsContent
										key={activeCategory}
										value={activeCategory}
										className="mt-8">
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.3 }}
											className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
											{filteredProjects.map((project, index) => (
												<motion.div
													key={project.id}
													initial={{ opacity: 0, scale: 0.9 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{
														delay: index * 0.1,
														duration: 0.3,
													}}
													className="h-full">
													<CardContainer className="py-0 h-full">
														<CardBody className="relative group/card w-full h-full rounded-xl p-4 border border-border hover:border-primary/50 bg-card transition-all duration-300">
															<CardItem
																translateZ="100"
																className="w-full">
																<div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
																	<Image
																		src={project.image}
																		alt={project.title}
																		fill
																		className="object-cover group-hover/card:scale-110 transition-transform duration-500"
																	/>
																</div>
															</CardItem>
															<div className="flex flex-col gap-3 mt-4 w-full">
																<div className="flex items-start justify-between gap-2">
																	<CardItem
																		translateZ="50"
																		className="font-bold line-clamp-1 group-hover/card:text-primary transition-colors text-base">
																		{project.title}
																	</CardItem>
																	<CardItem translateZ="60">
																		<Badge
																			variant="outline"
																			className={
																				project.status ===
																				"live"
																					? "border-green-500 text-green-600 shrink-0"
																					: "border-blue-500 text-blue-600 shrink-0"
																			}>
																			{project.status}
																		</Badge>
																	</CardItem>
																</div>
																<CardItem
																	as="p"
																	translateZ="60"
																	className="text-sm text-muted-foreground line-clamp-2 w-full">
																	{project.description}
																</CardItem>
																<CardItem
																	translateZ="40"
																	className="flex flex-wrap gap-1.5 w-full">
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
																	{project.technologies.length >
																		4 && (
																		<Badge
																			variant="secondary"
																			className="text-xs">
																			+
																			{project.technologies
																				.length - 4}
																		</Badge>
																	)}
																</CardItem>
																<CardItem
																	translateZ="80"
																	className="w-full pt-2">
																	<Button
																		variant="outline"
																		size="sm"
																		className="w-full group/btn"
																		onClick={() =>
																			setSelectedProject(
																				project,
																			)
																		}>
																		View Details
																		<ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
																	</Button>
																</CardItem>
															</div>
														</CardBody>
													</CardContainer>
												</motion.div>
											))}
										</motion.div>

										{/* Project Count */}
										<div className="text-center pt-8">
											<p className="text-sm text-muted-foreground">
												Showing {filteredProjects.length} project
												{filteredProjects.length === 1 ? "" : "s"}
											</p>
										</div>
									</TabsContent>
								</AnimatePresence>
							</Tabs>
						</motion.div>

						{/* Stats */}
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
							{[
								{ value: "11", label: "Total Projects" },
								{
									value: getProjectsByCategory("professional").length.toString(),
									label: "Professional Projects",
								},
								{
									value: featuredProjects.length.toString(),
									label: "Featured Work",
								},
							].map((stat) => (
								<motion.div
									key={stat.label}
									variants={scaleIn}
									whileHover={{ y: -5, scale: 1.05 }}>
									<Card className="text-center hover:border-primary/30 transition-colors">
										<CardContent className="p-6">
											<p className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60 mb-2">
												{stat.value}
											</p>
											<p className="text-sm text-muted-foreground">
												{stat.label}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>

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
		</>
	);
}
