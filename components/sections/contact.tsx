"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Send, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactInfo, getSocialLinks } from "@/lib/data/personal-info";

export function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const socialLinks = getSocialLinks();

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		} else if (formData.subject.trim().length < 3) {
			newErrors.subject = "Subject must be at least 3 characters";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			toast.error("Please fix the errors before submitting.");
			return;
		}

		setIsSubmitting(true);

		// Simulate form submission (replace with actual API call)
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));

			toast.success("Message sent! Thank you for reaching out. I'll get back to you soon.");

			// Reset form
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			setErrors({});
		} catch {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	return (
		<section id="contact" className="py-20 md:py-32 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-5xl mx-auto space-y-12">
					{/* Section Header */}
					<div className="text-center space-y-4">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get In Touch</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Have a project in mind or want to collaborate? Feel free to reach out.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Contact Info */}
						<div className="lg:col-span-1 space-y-6">
							<div>
								<h3 className="text-xl font-semibold mb-6">Contact Information</h3>
								<div className="space-y-4">
									<Card>
										<CardContent className="p-4">
											<div className="flex items-start gap-3">
												<Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
												<div className="space-y-1">
													<p className="text-sm font-medium">Email</p>
													<a
														href={`mailto:${contactInfo.email}`}
														className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
														{contactInfo.email}
													</a>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-4">
											<div className="flex items-start gap-3">
												<MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
												<div className="space-y-1">
													<p className="text-sm font-medium">Location</p>
													<p className="text-sm text-muted-foreground">
														{contactInfo.location}
													</p>
													<p className="text-xs text-muted-foreground">
														{contactInfo.timezone}
													</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>

							{/* Social Links */}
							<div>
								<h3 className="text-lg font-semibold mb-4">Connect</h3>
								<div className="space-y-3">
									{socialLinks.github && (
										<Button
											variant="outline"
											className="w-full justify-start"
											asChild>
											<Link
												href={socialLinks.github}
												target="_blank"
												rel="noopener noreferrer">
												<ArrowRight className="mr-2 h-4 w-4" />
												GitHub
											</Link>
										</Button>
									)}
									{socialLinks.linkedin && (
										<Button
											variant="outline"
											className="w-full justify-start"
											asChild>
											<Link
												href={socialLinks.linkedin}
												target="_blank"
												rel="noopener noreferrer">
												<ArrowRight className="mr-2 h-4 w-4" />
												LinkedIn
											</Link>
										</Button>
									)}
									{socialLinks.twitter && (
										<Button
											variant="outline"
											className="w-full justify-start"
											asChild>
											<Link
												href={socialLinks.twitter}
												target="_blank"
												rel="noopener noreferrer">
												<ArrowRight className="mr-2 h-4 w-4" />
												Twitter
											</Link>
										</Button>
									)}
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-2">
							<Card>
								<CardContent className="p-6 sm:p-8">
									<form onSubmit={handleSubmit} className="space-y-6">
										{/* Name */}
										<div className="space-y-2">
											<Label htmlFor="name">
												Name <span className="text-destructive">*</span>
											</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Your full name"
												className={errors.name ? "border-destructive" : ""}
											/>
											{errors.name && (
												<p className="text-sm text-destructive">
													{errors.name}
												</p>
											)}
										</div>

										{/* Email */}
										<div className="space-y-2">
											<Label htmlFor="email">
												Email <span className="text-destructive">*</span>
											</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="your.email@example.com"
												className={errors.email ? "border-destructive" : ""}
											/>
											{errors.email && (
												<p className="text-sm text-destructive">
													{errors.email}
												</p>
											)}
										</div>

										{/* Subject */}
										<div className="space-y-2">
											<Label htmlFor="subject">
												Subject <span className="text-destructive">*</span>
											</Label>
											<Input
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												placeholder="How can I help you?"
												className={
													errors.subject ? "border-destructive" : ""
												}
											/>
											{errors.subject && (
												<p className="text-sm text-destructive">
													{errors.subject}
												</p>
											)}
										</div>

										{/* Message */}
										<div className="space-y-2">
											<Label htmlFor="message">
												Message <span className="text-destructive">*</span>
											</Label>
											<Textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												placeholder="Tell me about your project or inquiry..."
												rows={6}
												className={
													errors.message ? "border-destructive" : ""
												}
											/>
											{errors.message && (
												<p className="text-sm text-destructive">
													{errors.message}
												</p>
											)}
										</div>

										{/* Submit Button */}
										<Button
											type="submit"
											disabled={isSubmitting}
											className="w-full sm:w-auto"
											size="lg">
											{isSubmitting ? (
												<>
													<Loader2 className="mr-2 h-4 w-4 animate-spin" />
													Sending...
												</>
											) : (
												<>
													<Send className="mr-2 h-4 w-4" />
													Send Message
												</>
											)}
										</Button>

										<p className="text-xs text-muted-foreground">
											By submitting this form, you agree to be contacted
											regarding your inquiry.
										</p>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
