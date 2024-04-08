import LineChartCSRCpn from "@/app/components/LineChartCSRCpn";

export const metadata = {
    title: "Free Online Chart Maker | Create Stunning Charts in Minutes",
    description: "This tool help you make chart easier. Create stunning charts & graphs online in minutes!  Our free chart maker is easy to use and offers a variety of chart types to visualize your data. Perfect for presentations, reports, and even educational projects! (Great for students & teachers!)",
    keywords: ["Chart", "Biểu đồ", "Chart maker", "Chart online", "Line chart"],
    robots: "index,follow"
};
export default function Home() {
    async function onSubmit(event) {
    }

    return (<>
            <LineChartCSRCpn/>
        </>

    );
}
