"use client";

import { Building2, Calendar, MapPin, Circle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/animations";

export function Experience() {
	return (
		<section id="experience" className="py-20 md:py-32 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-6xl mx-auto space-y-12">
					{/* Section Header */}
					<motion.div variants={fadeInUp} className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							<span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
								Experience
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Building enterprise solutions and driving innovation
						</p>
					</motion.div>

					{/* Timeline */}
					<div className="relative w-full">
						{/* Timeline Line */}
						<motion.div
							initial={{ scaleY: 0 }}
							whileInView={{ scaleY: 1 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2 origin-top"
						/>

						{/* Experience Items */}
						<div className="space-y-12">
							{experiences.map((exp, index) => {
								const isEven = index % 2 === 0;

								return (
									<motion.div
										key={exp.id}
										variants={isEven ? fadeInLeft : fadeInRight}
										custom={index}
										className={`relative ${
											isEven ? "md:pr-1/2" : "md:pl-1/2"
										}`}>
										{/* Timeline Dot */}
										<motion.div
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true, margin: "-100px" }}
											transition={{
												delay: index * 0.2,
												type: "spring",
												bounce: 0.5,
											}}
											className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"
										/>

										{/* Content Card */}
										<motion.div
											whileHover={{ y: -8, scale: 1.01 }}
											transition={{ duration: 0.2 }}
											className={`ml-20 md:ml-0 ${
												isEven ? "md:pr-12" : "md:pl-12"
											}`}>
											<Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group relative overflow-hidden">
												<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

												<CardContent className="p-6 md:p-8 space-y-6 relative z-10">
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

													{/* Technologies */}
													<div className="space-y-3 pt-2">
														<h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
															Technologies Used
														</h4>
														<div className="flex flex-wrap gap-2">
															{exp.technologies.map((tech, idx) => (
																<motion.div
																	key={tech}
																	initial={{
																		opacity: 0,
																		scale: 0.8,
																	}}
																	whileInView={{
																		opacity: 1,
																		scale: 1,
																	}}
																	viewport={{ once: true }}
																	transition={{
																		delay: idx * 0.05,
																	}}
																	whileHover={{
																		scale: 1.1,
																		y: -2,
																	}}>
																	<Badge variant="secondary">
																		{tech}
																	</Badge>
																</motion.div>
															))}
														</div>
													</div>
												</CardContent>
											</Card>
										</motion.div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
