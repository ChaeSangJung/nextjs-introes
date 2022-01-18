import Seo from "../../components/Seo";

export default function Detail({params, response}) {
    const [title, id] = params || [];
    console.log(response)
    return (
        <div>
            <Seo title={title} description={response.overview} />
            <h4>{title}</h4>
            <img src={`https://image.tmdb.org/t/p/w500${response.backdrop_path}`} alt={title} />
        </div>
    );
}

export async function getServerSideProps({params:{params}}) {
    const [title, id] = params
    const response = await (await fetch(`http://localhost:3000/api/${id}/movies`)).json();

    return {
        props: {
            params,
            response,
        }
    };
}