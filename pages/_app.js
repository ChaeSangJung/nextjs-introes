import NavBar from "../components/NavBar";
import "../styles/globals.css"

export default function App({Component, pageProps}){ // Component, pageProps <= frameworks가 정한 것
    return(
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}