import axios from "axios";
import { useEffect, useState } from "react";
import './manga.css';

function MangaDexcomponent(props) {
    useEffect(() => {
    }, [props])
    return <>
        <div class="mangaBigContainer">
            <div class="mangaBigTop">
                <a className="mangaTitre" href={`https://mangadex.org/title/${props.manga_id}`}> {props.manga_title}</a>
            </div>
            <div class="mangaBigContent">
                <div class="mangaTextes">
                    <h5 className="mangaCategory" > {props?.manga_category} </h5>
                    <h3 className="Descr">Description      : </h3>
                    <h5 className="description"> {props?.manga_description.substring(0, 270) + "..."}</h5>
                </div>
                <img className="Manga_cover" src={`https://uploads.mangadex.org/covers/${props.manga_id}/${props.manga_cover}.256.jpg`} alt={`${props.manga_title}`} />
            </div>
        </div>
    </>
}

export default function MangaDex() {
    const [manga, setManga] = useState([]);
    const [manga_id, setMangaid] = useState("");
    const [manga_cover, setMangaCover] = useState("");
    const [manga_title, setMangaTitle] = useState("");
    const [manga_description, setMangaDescription] = useState("");
    const [manga_category, setMangaCategory] = useState("");
    const [DataisLoaded, setDataisLoaded] = useState(false);


    async function RandomMangadex() {
        const res = await axios.get("https://mangaddx.herokuapp.com/api/random");
        setManga(res);
        setMangaid(res.data[0]);
        setMangaCover(res.data[1]);
        setMangaTitle(res.data[2]);
        setMangaDescription(res.data[3]);
        setMangaCategory(res.data[4]);
        setDataisLoaded(true);
    }

    return (

        <div class="bigWidget">
            <button class="mangaBigButton" onClick={RandomMangadex} > Manga Randomizer </button>
            {
                DataisLoaded === true ?
                    <MangaDexcomponent
                        manga={manga}
                        manga_cover={manga_cover}
                        manga_id={manga_id}
                        manga_title={manga_title}
                        manga_category={manga_category}
                        manga_description={manga_description}
                    />
                    :
                    <h1>  </h1>
            }

        </div>
    );
}