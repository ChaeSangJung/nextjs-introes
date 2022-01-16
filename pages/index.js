import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "ee424dad1a8fdd9ad4a5e461b503e8b7";

export default function Home() {
    const [movies, SetMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
            SetMovies(results);
            console.log(results)
        })();
    },[]);

    // useEffect(() => {},[]);

    // useEffect(() => {
    //     ()();
    // },[]);

    // useEffect(() => {
    //     (async () => {

    //     })();
    // },[]);

    // useEffect(() => {
    //     (async () => {
    //         const xxx = await fetch(`url`)
    //     })();
    // },[]);

    // useEffect(() => {
    //     (async ()=> {
    //         const xxx = await (await fetch(`url`)).json();
    //     })();
    // },[]);

    // const respnse = await fetch(`url`);
    // const json = await respnse.json();

    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie)=>(
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}