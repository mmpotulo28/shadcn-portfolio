"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icon";
import { personalInfo, aboutHighlights, coreCompetencies } from "@/lib/data/personal-info";
import { education } from "@/lib/data/experience";

export function About() {
	return (
		<section id="about" className="py-20 md:py-32 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-16">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Passionate about building impactful solutions that solve real-world
							problems
						</p>
					</div>

					{/* Bio Section */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Profile Image */}
						<div className="relative aspect-square max-w-md mx-auto md:mx-0">
							<div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-6" />
							<div className="relative bg-card rounded-2xl overflow-hidden border-2 border-border">
								<Image
									src={personalInfo.image}
									alt={personalInfo.name}
									width={500}
									height={500}
									className="w-full h-full object-cover"
									priority
								/>
							</div>
						</div>

						{/* Bio Text */}
						<div className="space-y-6">
							<h3 className="text-2xl font-bold">
								Hello! I&apos;m {personalInfo.name.split(" ")[0]}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{personalInfo.bio}
							</p>

							{/* Quick Info */}
							<div className="space-y-3 pt-4">
								<div className="flex items-center gap-3 text-sm">
									<MapPin className="h-5 w-5 text-primary shrink-0" />
									<span>{personalInfo.location}</span>
								</div>
								<div className="flex items-center gap-3 text-sm">
									<Briefcase className="h-5 w-5 text-primary shrink-0" />
									<span>{personalInfo.title} at BETSoftware</span>
								</div>
								<div className="flex items-center gap-3 text-sm">
									<GraduationCap className="h-5 w-5 text-primary shrink-0" />
									<span>{education[0].degree}</span>
								</div>
							</div>
						</div>
					</div>

					{/* Highlights Grid */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{aboutHighlights.map((highlight) => (
							<Card
								key={highlight.title}
								className="border-2 hover:border-primary/50 transition-colors">
								<CardContent className="p-6 space-y-3">
									<div className="flex justify-center">
										<Icon
											name={highlight.icon}
											className="h-10 w-10 text-primary"
										/>
									</div>
									<h4 className="font-semibold text-lg">{highlight.title}</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{highlight.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Core Competencies */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-center">Core Competencies</h3>
						<div className="flex flex-wrap justify-center gap-3">
							{coreCompetencies.map((competency) => (
								<Badge
									key={competency}
									variant="secondary"
									className="px-4 py-2 text-sm font-medium">
									{competency}
								</Badge>
							))}
						</div>
					</div>

					{/* Education */}
					<div className="space-y-6">
						<h3 className="text-2xl font-bold text-center">Education</h3>
						<Card className="max-w-3xl mx-auto border-2">
							<CardContent className="p-8">
								<div className="space-y-4">
									<div className="flex items-start justify-between flex-wrap gap-4">
										<div className="space-y-2">
											<h4 className="text-xl font-bold">
												{education[0].degree}
											</h4>
											<p className="text-muted-foreground">
												{education[0].field}
											</p>
											<p className="text-sm font-medium">
												{education[0].institution}
											</p>
										</div>
										<div className="text-right">
											<Badge variant="outline" className="text-sm">
												{education[0].startDate} - {education[0].endDate}
											</Badge>
										</div>
									</div>

									{education[0].capstone && (
										<div className="pt-4 border-t border-border">
											<p className="text-sm font-semibold mb-2">
												Capstone Project:
											</p>
											<p className="text-sm text-muted-foreground mb-2">
												{education[0].capstone.title}
											</p>
											<p className="text-sm text-muted-foreground mb-3">
												{education[0].capstone.description}
											</p>
											<div className="flex flex-wrap gap-2">
												{education[0].capstone.technologies.map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="text-xs">
														{tech}
													</Badge>
												))}
											</div>
										</div>
									)}

									<div className="pt-4 border-t border-border">
										<p className="text-sm font-semibold mb-3">Focus Areas:</p>
										<div className="flex flex-wrap gap-2">
											{education[0].focusAreas.map((area) => (
												<Badge
													key={area}
													variant="outline"
													className="text-xs">
													{area}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
