import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={`xxx ${router.pathname === "/" ? "active" : ""}`}>Home</a>
            </Link>
            <Link href="/about">
                <a className={[
                    "xxx", router.pathname === "/about" ? "active" : ""
                ].join(" ")}>about</a>
            </Link>
            <style jsx>{`
                a {
                    text-decoration : none;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    );
}