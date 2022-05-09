import axios from "axios";
import { useEffect, useState } from "react";
import './manga.css';


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

    useEffect(() => {
        RandomMangadex();

    }, [])

    return (
        <div class="MangaBigContainer">
            {
                DataisLoaded === true ?
                    <div>
                        <div class="MangaBigTop">
                            <a className="MangaTitre" href={`https://mangadex.org/title/${manga_id}`}> {manga_title}</a>
                        </div>

                        <div class="MangaBigContent">
                            <div class="MangaTextes">
                                <h5 className="MangaCategory" > {manga_category} </h5>
                                <h3 className="Descr">Description      : </h3>
                                <h5 className="Description"> {manga_description.substring(0, 270) + "..."}</h5>
                            </div>
                            <div onClick={() => window.open('https://mangadex.org/title/' + manga_id)}>
                                <img className="Manga_cover" src={`https://uploads.mangadex.org/covers/${manga_id}/${manga_cover}.256.jpg`} alt={`${manga_title}`} />
                            </div>
                        </div>

                    </div>
                    :
                    <p>Building up the manga library</p>
            }

            <button class="MangaBigButton" onClick={RandomMangadex} > <img src="https://i.imgur.com/zd4Afyz.png" height={20} width={20} /> </button>

        </div>
    );
}