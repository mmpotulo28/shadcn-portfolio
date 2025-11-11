import { Variants } from "framer-motion";

/**
 * Animation variants for consistent motion design
 */

// Fade in from bottom with stagger
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1], // Custom easing
		},
	},
};

// Fade in from left
export const fadeInLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Fade in from right
export const fadeInRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Scale in animation
export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Container for staggered children
export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

// Fast stagger for small items
export const fastStaggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.1,
		},
	},
};

// Slide in from bottom
export const slideInUp: Variants = {
	hidden: { y: 100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Rotate and fade in
export const rotateIn: Variants = {
	hidden: { opacity: 0, rotate: -10, scale: 0.9 },
	visible: {
		opacity: 1,
		rotate: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Blur in effect
export const blurIn: Variants = {
	hidden: { opacity: 0, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Card hover animation
export const cardHover = {
	rest: { scale: 1, y: 0 },
	hover: {
		scale: 1.02,
		y: -8,
		transition: {
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

// Magnetic button effect
export const magneticHover = {
	rest: { scale: 1 },
	hover: {
		scale: 1.05,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
	tap: {
		scale: 0.95,
	},
};

// Glowing effect
export const glowAnimation = {
	animate: {
		boxShadow: [
			"0 0 20px rgba(var(--primary-rgb), 0.3)",
			"0 0 40px rgba(var(--primary-rgb), 0.5)",
			"0 0 20px rgba(var(--primary-rgb), 0.3)",
		],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Floating animation
export const floatingAnimation = {
	animate: {
		y: [-10, 10, -10],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Pulse animation
export const pulseAnimation = {
	animate: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

// Text reveal animation
export const textReveal: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
};

// Draw line animation
export const drawLine: Variants = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: {
		pathLength: 1,
		opacity: 1,
		transition: {
			pathLength: { duration: 1.5, ease: "easeInOut" },
			opacity: { duration: 0.3 },
		},
	},
};

// Gradient animation
export const gradientAnimation = {
	animate: {
		backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
		transition: {
			duration: 5,
			repeat: Infinity,
			ease: "linear",
		},
	},
};
