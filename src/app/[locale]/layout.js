import {Inter} from "next/font/google";
import "../globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {getTranslations} from "next-intl/server";
import Toolbar from "./layout/Toolbar";


const inter = Inter({subsets: ["latin"]});


export async function generateMetadata({params: {locale}}) {
    const t = await getTranslations({locale, namespace: 'SEO'});

    return {
        title: t('common_title'),
        description: t('common_description'),
        keywords: ["Chart", "Biểu đồ", "Chart maker", "Chart online", "Line chart"],
        robots: "index,follow"
    };
}

export default function RootLayout({children,params: {locale}}) {

    const messages = useMessages();
    return (
        <html lang={locale}>
        <head>
            <meta name="google-adsense-account" content="ca-pub-4503474209411306"/>
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4503474209411306"
                    crossOrigin="anonymous"></script>
        </head>
        <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ChakraProvider>
            <main>
                    <Navbar h={14} locale={locale}/>
                    <div style={{minHeight:"100vh"}}>
                        <Toolbar locale={locale}/>
                        {children}
                    </div>
                    <div style={{bottom: 0, left: 0, width: "100%"}}>
                        <Footer/>
                    </div>
                </main>
            </ChakraProvider>
        </NextIntlClientProvider>

        </body>
        </html>
    );
}
