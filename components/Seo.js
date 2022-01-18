import Head from "next/head";

export default function Seo({title, description}){
    return(
        <Head>
            <title>{title} | Next Movies</title>
            <meta description={description} />
        </Head>
    );
}