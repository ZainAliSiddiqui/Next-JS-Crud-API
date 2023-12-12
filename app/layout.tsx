import { QueryProvider } from "@components";
import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Crud API",
	description: "Crud API",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
