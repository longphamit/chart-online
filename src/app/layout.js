import {Inter} from "next/font/google";
import "./globals.css";
import {Box, ChakraProvider, Container} from "@chakra-ui/react";
import {NextSeo} from "next-seo";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header";
import {Provider} from "react-redux";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Free Online Chart Maker | Create Stunning Charts in Minutes",
    description: "This tool help you make chart easier. Create stunning charts & graphs online in minutes!  Our free chart maker is easy to use and offers a variety of chart types to visualize your data. Perfect for presentations, reports, and even educational projects! (Great for students & teachers!)",
    keywords: ["Chart", "Biểu đồ", "Chart maker", "Chart online", "Line chart"],
    robots: "index,follow"
};

export default function RootLayout({children}) {
    const saveCanvas = () => {
        //save to png

    }
    return (
        <html lang="en">
        <head>
            <link rel="canonical" href="https://tomchart.com"/>
        </head>
        <body className={inter.className}>
        <ChakraProvider>
            <main>
                <Navbar h={14}/>
                <div style={{padding: 30,minHeight:"100vh"}}>
                    {children}
                </div>
                <div style={{bottom: 0, left: 0, width: "100%"}}>
                    <Footer/>
                </div>
            </main>
        </ChakraProvider>
        </body>
        </html>
    );
}
