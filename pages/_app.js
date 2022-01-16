
import Layout from "../components/Layout";
import "../styles/globals.css"

export default function App({Component, pageProps}){ // Component, pageProps <= frameworks가 정한 것
    return(
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}