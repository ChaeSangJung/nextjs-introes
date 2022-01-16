import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <div className="main_wrap">{children}</div>
            <footer>@2022</footer>
        </>
    );
}