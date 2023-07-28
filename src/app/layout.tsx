import { Header } from "@/components";
import { Main } from "@/components";
import { Footer } from "@/components";

import { Roboto } from "next/font/google";

import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

const inter = Roboto({
    subsets: ["cyrillic"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: {
        template: `%s | Biletopoisk`,
        default: "Biletopoisk",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Suspense fallback={<Loading />}>
                    <StoreProvider>
                        <div id="modalContainer"></div>
                        <div className="layout">
                            <Header />
                            <Main>{children}</Main>
                            <Footer />
                        </div>
                    </StoreProvider>
                </Suspense>
            </body>
        </html>
    );
}
