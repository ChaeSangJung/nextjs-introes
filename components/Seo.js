import Head from "next/head";

export default function Seo({title, description}){
    return(
        <Head>
            <meta description={description ? description : "nextjs" } />
            <title>{title} | Next Movies</title>
        </Head>
    );
}