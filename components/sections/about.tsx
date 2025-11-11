"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icon";
import { personalInfo, aboutHighlights, coreCompetencies } from "@/lib/data/personal-info";
import { education } from "@/lib/data/experience";
import { fadeInUp, staggerContainer, scaleIn, fadeInLeft, fadeInRight } from "@/lib/animations";

export function About() {
	return (
		<section id="about" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="max-w-6xl mx-auto space-y-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					{/* Section Header */}
					<motion.div variants={fadeInUp} className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-primary">
							About Me
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Passionate about building impactful solutions that solve real-world
							problems
						</p>
					</motion.div>

					{/* Bio Section */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Profile Image with CometCard Effect */}
						<motion.div
							variants={fadeInLeft}
							className="relative aspect-square max-w-md mx-auto md:mx-0">
							<CometCard
								rotateDepth={17.5}
								translateDepth={20}
								className="rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 shadow-xl">
								<div className="relative group">
									<Image
										src={personalInfo.image}
										alt={personalInfo.name}
										width={400}
										height={600}
										className="w-full h-full object-cover"
										priority
									/>
									<div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
							</CometCard>
						</motion.div>

						{/* Bio Text */}
						<motion.div variants={fadeInRight} className="space-y-6">
							<h3 className="text-2xl font-bold">
								Hello! I&apos;m {personalInfo.name.split(" ")[0]}
								<motion.span
									className="inline-block ml-2"
									animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
									👋
								</motion.span>
							</h3>
							<motion.p
								className="text-muted-foreground leading-relaxed"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.3 }}>
								{personalInfo.bio}
							</motion.p>

							{/* Quick Info */}
							<motion.div
								className="space-y-3 pt-4"
								variants={staggerContainer}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}>
								{[
									{ icon: MapPin, text: personalInfo.location, id: "location" },
									{
										icon: Briefcase,
										text: `${personalInfo.title} at BETSoftware`,
										id: "title",
									},
									{
										icon: GraduationCap,
										text: education[0].degree,
										id: "education",
									},
								].map((item) => (
									<motion.div
										key={item.id}
										variants={fadeInUp}
										className="flex items-center gap-3 text-sm group"
										whileHover={{ x: 10 }}>
										<item.icon className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
										<span>{item.text}</span>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>

					{/* Highlights Grid */}
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{aboutHighlights.map((highlight) => (
							<motion.div
								key={highlight.title}
								variants={scaleIn}
								whileHover={{ y: -10, scale: 1.03 }}
								transition={{ duration: 0.3 }}>
								<Card className="border-2 hover:border-primary/50 transition-colors h-full relative overflow-hidden group">
									<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<CardContent className="p-6 space-y-3 relative z-10">
										<motion.div
											className="flex justify-center"
											whileHover={{ rotate: 360, scale: 1.2 }}
											transition={{ duration: 0.5 }}>
											<Icon
												name={highlight.icon}
												className="h-10 w-10 text-primary"
											/>
										</motion.div>
										<h4 className="font-semibold text-lg text-center">
											{highlight.title}
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed text-center">
											{highlight.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>

					{/* Core Competencies */}
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-6">
						<motion.h3 variants={fadeInUp} className="text-2xl font-bold text-center">
							Core Competencies
						</motion.h3>
						<motion.div
							variants={staggerContainer}
							className="flex flex-wrap justify-center gap-3">
							{coreCompetencies.map((competency) => (
								<motion.div
									key={competency}
									variants={scaleIn}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}>
									<Badge
										variant="secondary"
										className="px-4 py-2 text-sm font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-colors">
										{competency}
									</Badge>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Education */}
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-6">
						<h3 className="text-2xl font-bold text-center">Education</h3>
						<motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
							<Card className="max-w-3xl mx-auto border-2 hover:border-primary/30 transition-colors shadow-lg hover:shadow-xl relative overflow-hidden group">
								<div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<CardContent className="p-8 relative z-10">
									<div className="space-y-4">
										<div className="flex items-start justify-between flex-wrap gap-4">
											<div className="space-y-2">
												<h4 className="text-xl font-bold">
													{education[0].degree}
												</h4>
												<p className="text-muted-foreground">
													{education[0].field}
												</p>
												<p className="text-sm font-medium flex items-center gap-2">
													<GraduationCap className="h-4 w-4 text-primary" />
													{education[0].institution}
												</p>
											</div>
											<div className="text-right">
												<Badge variant="outline" className="text-sm">
													{education[0].startDate} -{" "}
													{education[0].endDate}
												</Badge>
											</div>
										</div>

										{education[0].capstone && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												whileInView={{ opacity: 1, height: "auto" }}
												viewport={{ once: true }}
												className="pt-4 border-t border-border">
												<p className="text-sm font-semibold mb-2 flex items-center gap-2">
													<span className="h-1.5 w-1.5 rounded-full bg-primary" />{" "}
													Capstone Project:
												</p>
												<p className="text-sm text-muted-foreground mb-2">
													{education[0].capstone.title}
												</p>
												<p className="text-sm text-muted-foreground mb-3">
													{education[0].capstone.description}
												</p>
												<div className="flex flex-wrap gap-2">
													{education[0].capstone.technologies.map(
														(tech) => (
															<motion.div
																key={tech}
																whileHover={{ scale: 1.1 }}
																whileTap={{ scale: 0.95 }}>
																<Badge
																	variant="secondary"
																	className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
																	{tech}
																</Badge>
															</motion.div>
														),
													)}
												</div>
											</motion.div>
										)}

										<div className="pt-4 border-t border-border">
											<p className="text-sm font-semibold mb-3 flex items-center gap-2">
												<span className="h-1.5 w-1.5 rounded-full bg-primary" />{" "}
												Focus Areas:
											</p>
											<div className="flex flex-wrap gap-2">
												{education[0].focusAreas.map((area) => (
													<motion.div
														key={area}
														whileHover={{ scale: 1.1 }}
														whileTap={{ scale: 0.95 }}>
														<Badge
															variant="outline"
															className="text-xs hover:bg-muted transition-colors">
															{area}
														</Badge>
													</motion.div>
												))}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
