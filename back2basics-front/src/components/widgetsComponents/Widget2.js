import axios from "axios";
import { useEffect, useState } from "react";
// import './App.css';

function MangaDexcomponent(props) {
    useEffect(() => {
        // console.log("PROPS", props);
    }, [props])
    return <>
        <h2>Titre      : </h2>
        <h4> {props.manga.title.en}</h4>
        <h2>Categories : </h2>
        <h4> {props.manga.tags[0].attributes.name.en}</h4>
        <h4> {props.manga.tags[1].attributes.name.en}</h4>
        <h2>Description      : </h2>
        <h4> {props.manga.description.en}</h4>
    </>
}

const manga = []
export function categories() {
    const categories = manga.tag(cat => <li>cat</li>);
    return <ul>{categories}</ul>
}

export default function MangaDex() {
    const [manga, setManga] = useState([]);
    const [DataisLoaded, setDataisLoaded] = useState(false);
    
    async function RandomMangadex() {
        const res = await axios.get("https://api.mangadex.org/manga/random?contentRating%5B%5D=safe");
        // console.log("res", res.data.data.attributes.title.en);
        setManga(res.data.data.attributes);
        // console.log("MANGA PROPs HERE", manga);
        setDataisLoaded(true);
    }
    
    return (
        <div>
            <h1> Manga Randomizer </h1>
            <button onClick={RandomMangadex} > What should I read ?</button>
            {
                DataisLoaded === true ?
                <MangaDexcomponent
                manga={manga}
                />
                :
                    <h1>  </h1>
            }
        </div>
    );
}