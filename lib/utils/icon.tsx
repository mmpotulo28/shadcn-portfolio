import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconProps = Readonly<{
	name: string;
	className?: string;
	size?: number;
}>;

/**
 * Dynamically renders a Lucide icon by name
 * @param name - The name of the Lucide icon to render
 * @param className - Optional CSS classes to apply to the icon
 * @param size - Optional size for the icon
 * @returns A React component rendering the specified Lucide icon
 */
export function Icon({ name, className = "h-5 w-5", size }: IconProps) {
	const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		// Fallback to a default icon if the specified icon doesn't exist
		const FallbackIcon = LucideIcons.HelpCircle;
		return <FallbackIcon className={className} size={size} />;
	}

	return <LucideIcon className={className} size={size} />;
}

/**
 * Gets a Lucide icon component by name
 * @param iconName - The name of the Lucide icon
 * @returns The Lucide icon component or null if not found
 */
export function getLucideIcon(iconName: string): React.ComponentType<LucideProps> | null {
	const icons = LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>;
	return icons[iconName] || null;
}
