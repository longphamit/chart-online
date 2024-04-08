import {Inter} from "next/font/google";
import "./globals.css";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {NextSeo} from "next-seo";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Free Online Chart Maker | Create Stunning Charts in Minutes",
    description: "This tool help you make chart easier. Create stunning charts & graphs online in minutes!  Our free chart maker is easy to use and offers a variety of chart types to visualize your data. Perfect for presentations, reports, and even educational projects! (Great for students & teachers!)",
    keywords:["Chart", "Biểu đồ", "Chart maker", "Chart online", "Line chart"],
    robots:"index,follow"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="canonical" href="https://ochart.net"/>
        </head>
        <body className={inter.className} style={{height:'100vh'}}>
        <ChakraProvider>
            <Box style={{height:'10%'}}>
                <Navbar h={14} />
            </Box>
            <Box d="flex" style={{height:'80%'}}  flexDirection="column" className="bg-white">
                <main>
                    {children}
                </main>
            </Box>
            <Box style={{height:'10%'}}>
                <Footer />
            </Box>
        </ChakraProvider>
        </body>
        </html>
    );
}
