"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@/lib/utils/icon";
import { skillCategories, getSkillsByCategory } from "@/lib/data/skills";

const proficiencyColors = {
	expert: "bg-primary text-primary-foreground",
	advanced: "bg-primary/80 text-primary-foreground",
	intermediate: "bg-primary/60 text-primary-foreground",
	familiar: "bg-primary/40 text-primary-foreground",
};

export function Skills() {
	const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

	return (
		<section id="skills" className="py-20 md:py-32 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-12">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							Skills & Technologies
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							A comprehensive toolkit for building modern applications
						</p>
					</div>

					{/* Skills Tabs */}
					<Tabs
						value={activeCategory}
						onValueChange={setActiveCategory}
						className="w-full">
						<TabsList className="w-full flex-wrap h-auto justify-center gap-2 bg-transparent">
							{skillCategories.map((category) => (
								<TabsTrigger
									key={category.name}
									value={category.name}
									className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
									{category.name}
								</TabsTrigger>
							))}
						</TabsList>

						{skillCategories.map((category) => {
							const categorySkills = getSkillsByCategory(category.name);

							return (
								<TabsContent
									key={category.name}
									value={category.name}
									className="mt-8 space-y-6">
									{/* Category Description */}
									{category.description && (
										<p className="text-center text-muted-foreground">
											{category.description}
										</p>
									)}

									{/* Skills Grid */}
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
										{categorySkills.map((skill) => (
											<Card
												key={skill.name}
												className="group hover:shadow-lg transition-all hover:scale-105 cursor-default border-2 hover:border-primary/50">
												<CardContent className="p-4 text-center space-y-2">
													{skill.icon && (
														<div className="flex justify-center">
															<Icon
																name={skill.icon}
																className="h-8 w-8 text-primary"
															/>
														</div>
													)}
													<p className="font-medium text-sm">
														{skill.name}
													</p>
													{skill.proficiency && (
														<Badge
															variant="secondary"
															className={`text-xs ${
																proficiencyColors[skill.proficiency]
															}`}>
															{skill.proficiency}
														</Badge>
													)}
												</CardContent>
											</Card>
										))}
									</div>

									{/* Category Skills Count */}
									<div className="text-center pt-4">
										<p className="text-sm text-muted-foreground">
											{categorySkills.length} skills in this category
										</p>
									</div>
								</TabsContent>
							);
						})}
					</Tabs>

					{/* Proficiency Legend */}
					<Card className="max-w-2xl mx-auto border-2">
						<CardContent className="p-6">
							<h3 className="font-semibold mb-4 text-center">Proficiency Levels</h3>
							<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
								<div className="text-center space-y-2">
									<Badge className={proficiencyColors.expert}>Expert</Badge>
									<p className="text-xs text-muted-foreground">
										Production-ready expertise
									</p>
								</div>
								<div className="text-center space-y-2">
									<Badge className={proficiencyColors.advanced}>Advanced</Badge>
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
									<Badge className={proficiencyColors.familiar}>Familiar</Badge>
									<p className="text-xs text-muted-foreground">
										Learning & exploring
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* All Skills Summary */}
					<div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">55+</p>
								<p className="text-sm text-muted-foreground">Total Skills</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">8</p>
								<p className="text-sm text-muted-foreground">Skill Categories</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">10+</p>
								<p className="text-sm text-muted-foreground">Expert Level</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
