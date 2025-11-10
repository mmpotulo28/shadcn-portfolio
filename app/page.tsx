import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Navbar />
			<main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
				<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
					Welcome to My Portfolio
				</h1>
			</main>
			<Footer />
		</div>
	);
}
