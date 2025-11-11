"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@/lib/utils/icon";
import { skillCategories, getSkillsByCategory } from "@/lib/data/skills";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const proficiencyColors = {
	expert: "bg-primary text-primary-foreground",
	advanced: "bg-primary/80 text-primary-foreground",
	intermediate: "bg-primary/60 text-primary-foreground",
	familiar: "bg-primary/40 text-primary-foreground",
};

export function Skills() {
	const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

	return (
		<section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute inset-0 bg-size-[4rem_4rem] bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="max-w-6xl mx-auto space-y-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}>
					{/* Section Header */}
					<motion.div variants={fadeInUp} className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-primary">
							Skills & Technologies
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A comprehensive toolkit for building modern applications
						</p>
					</motion.div>

					{/* Skills Tabs */}
					<motion.div variants={fadeInUp}>
						<Tabs
							value={activeCategory}
							onValueChange={setActiveCategory}
							className="w-full">
							<TabsList className="w-full flex-wrap h-auto justify-center gap-2 bg-transparent">
								{skillCategories.map((category) => (
									<TabsTrigger
										key={category.name}
										value={category.name}
										className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative">
										{category.name}
										{category.name === activeCategory && (
											<motion.div
												layoutId="activeSkillTab"
												className="absolute inset-0 bg-primary rounded-md -z-10"
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
								{skillCategories.map((category) => {
									const categorySkills = getSkillsByCategory(category.name);

									return category.name === activeCategory ? (
										<TabsContent
											key={category.name}
											value={category.name}
											className="mt-8 space-y-6">
											<motion.div
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{ duration: 0.3 }}>
												{/* Category Description */}
												{category.description && (
													<p className="text-center text-muted-foreground">
														{category.description}
													</p>
												)}

												{/* Skills Grid */}
												<motion.div
													variants={staggerContainer}
													initial="hidden"
													animate="visible"
													className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
													{categorySkills.map((skill, index) => (
														<motion.div
															key={skill.name}
															variants={scaleIn}
															custom={index}
															whileHover={{ y: -5, scale: 1.05 }}
															transition={{ duration: 0.2 }}>
															<Card className="group hover:shadow-lg transition-all cursor-default border-2 hover:border-primary/50 h-full relative overflow-hidden">
																<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
																<CardContent className="p-4 text-center space-y-2 relative z-10">
																	{skill.icon && (
																		<motion.div
																			className="flex justify-center"
																			whileHover={{
																				rotate: 360,
																				scale: 1.2,
																			}}
																			transition={{
																				duration: 0.5,
																			}}>
																			<Icon
																				name={skill.icon}
																				className="h-8 w-8 text-primary"
																			/>
																		</motion.div>
																	)}
																	<p className="font-medium text-sm">
																		{skill.name}
																	</p>
																	{skill.proficiency && (
																		<Badge
																			variant="secondary"
																			className={`text-xs ${
																				proficiencyColors[
																					skill
																						.proficiency
																				]
																			}`}>
																			{skill.proficiency}
																		</Badge>
																	)}
																</CardContent>
															</Card>
														</motion.div>
													))}
												</motion.div>

												{/* Category Skills Count */}
												<div className="text-center pt-4">
													<p className="text-sm text-muted-foreground">
														{categorySkills.length} skills in this
														category
													</p>
												</div>
											</motion.div>
										</TabsContent>
									) : null;
								})}
							</AnimatePresence>
						</Tabs>
					</motion.div>

					{/* Proficiency Legend */}
					<motion.div variants={fadeInUp}>
						<Card className="max-w-2xl mx-auto border-2">
							<CardContent className="p-6">
								<h3 className="font-semibold mb-4 text-center">
									Proficiency Levels
								</h3>
								<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
									<div className="text-center space-y-2">
										<Badge className={proficiencyColors.expert}>Expert</Badge>
										<p className="text-xs text-muted-foreground">
											Production-ready expertise
										</p>
									</div>
									<div className="text-center space-y-2">
										<Badge className={proficiencyColors.advanced}>
											Advanced
										</Badge>
										<p className="text-xs text-muted-foreground">
											Strong working knowledge
										</p>
									</div>
									<div className="text-center space-y-2">
										<Badge className={proficiencyColors.intermediate}>
											Intermediate
										</Badge>
										<p className="text-xs text-muted-foreground">
											Comfortable using
										</p>
									</div>
									<div className="text-center space-y-2">
										<Badge className={proficiencyColors.familiar}>
											Familiar
										</Badge>
										<p className="text-xs text-muted-foreground">
											Learning & exploring
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* All Skills Summary */}
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
						{[
							{ value: "55+", label: "Total Skills" },
							{ value: "8", label: "Skill Categories" },
							{ value: "10+", label: "Expert Level" },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								variants={scaleIn}
								custom={index}
								whileHover={{ y: -5, scale: 1.05 }}
								transition={{ duration: 0.2 }}>
								<Card className="text-center hover:shadow-lg transition-all group border-2 hover:border-primary/50">
									<CardContent className="p-6">
										<p className="text-3xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
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
	);
}
