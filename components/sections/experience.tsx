"use client";

import { Building2, Calendar, MapPin, Circle, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";

export function Experience() {
	return (
		<section id="experience" className="py-20 md:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto space-y-12">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Experience</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Building enterprise solutions and driving innovation
						</p>
					</div>

					{/* Timeline */}
					<div className="relative">
						{/* Timeline Line */}
						<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

						{/* Experience Items */}
						<div className="space-y-12">
							{experiences.map((exp, index) => (
								<div
									key={exp.id}
									className={`relative ${
										index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
									}`}>
									{/* Timeline Dot */}
									<div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10" />

									{/* Content Card */}
									<div
										className={`ml-20 md:ml-0 ${
											index % 2 === 0 ? "md:pr-12" : "md:pl-12"
										}`}>
										<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
											<CardContent className="p-6 md:p-8 space-y-6">
												{/* Header */}
												<div className="space-y-4">
													<div className="flex items-start justify-between flex-wrap gap-4">
														<div className="space-y-2">
															<h3 className="text-xl md:text-2xl font-bold">
																{exp.role}
															</h3>
															<div className="space-y-1">
																<div className="flex items-center gap-2 text-sm">
																	<Building2 className="h-4 w-4 text-primary shrink-0" />
																	<span className="font-medium">
																		{exp.company}
																	</span>
																</div>
																<div className="flex items-center gap-2 text-sm text-muted-foreground">
																	<MapPin className="h-4 w-4 shrink-0" />
																	<span>{exp.location}</span>
																</div>
															</div>
														</div>
														<Badge
															variant="outline"
															className="text-sm">
															<Calendar className="mr-1 h-3 w-3" />
															{exp.startDate}
															{exp.endDate
																? ` - ${exp.endDate}`
																: " - Present"}
														</Badge>
													</div>

													<p className="text-muted-foreground leading-relaxed">
														{exp.description}
													</p>
												</div>

												{/* Responsibilities */}
												<div className="space-y-3">
													<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
														Key Responsibilities
													</h4>
													<ul className="space-y-2">
														{exp.responsibilities.map(
															(responsibility) => (
																<li
																	key={responsibility}
																	className="flex items-start gap-3 text-sm">
																	<Circle className="h-2 w-2 mt-1.5 fill-primary text-primary shrink-0" />
																	<span className="text-muted-foreground">
																		{responsibility}
																	</span>
																</li>
															),
														)}
													</ul>
												</div>

												{/* Achievements */}
												<div className="space-y-3">
													<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
														Key Achievements
													</h4>
													<ul className="space-y-2">
														{exp.achievements.map((achievement) => (
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

												{/* Technologies */}
												<div className="space-y-3 pt-2">
													<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
														Technologies Used
													</h4>
													<div className="flex flex-wrap gap-2">
														{exp.technologies.map((tech) => (
															<Badge key={tech} variant="secondary">
																{tech}
															</Badge>
														))}
													</div>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Summary Stats */}
					<div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">
									{experiences.length}
								</p>
								<p className="text-sm text-muted-foreground">
									Roles at BETSoftware
								</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">5+</p>
								<p className="text-sm text-muted-foreground">Production Features</p>
							</CardContent>
						</Card>
						<Card className="text-center">
							<CardContent className="p-6">
								<p className="text-3xl font-bold text-primary mb-2">100K+</p>
								<p className="text-sm text-muted-foreground">Daily Active Users</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
