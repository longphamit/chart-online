
import ChartGeneration from "../components/ChartGeneration";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params: {locale}}) {
    const t = await getTranslations({locale, namespace: 'SEO'});

    return {
        title: t('line_title'),
        description: t('common_description'),
        keywords: ["Chart", "Biểu đồ", "Chart maker", "Chart online", "Line chart"],
        robots: "index,follow"
    };
}
export default function BarPage() {

    return (
        <ChartGeneration type={"BAR"}/>
    );
}
