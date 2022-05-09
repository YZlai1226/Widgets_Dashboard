import axios from "axios";
import { useEffect, useState } from "react";

export default function MangaDex() {
    const [manga, setManga] = useState([]);
    const [manga_id, setMangaid] = useState("");
    const [manga_title, setMangaTitle] = useState("");
    const [manga_description, setMangaDescription] = useState("");
    const [manga_category, setMangaCategory] = useState("");
    const [DataisLoaded, setDataisLoaded] = useState(false);

    async function RandomMangadex() {
        const res = await axios.get("https://mangaddx.herokuapp.com/api/random");
        setManga(res);
        setMangaid(res.data[0]);
        setMangaTitle(res.data[2]);
        setMangaDescription(res.data[3]);
        setMangaCategory(res.data[4]);
        setDataisLoaded(true);
    }

    useEffect(() => {
        RandomMangadex();

    }, [])

    return (
        <div className="MangaMediumContainer" >
            {
                DataisLoaded === true ?
                    <div>
                        <div onClick={() => window.open('https://mangadex.org/title/' + manga_id)}>
                            <div class="MangaMediumTop">
                                <a className="MangaTitre" href={`https://mangadex.org/title/${manga_id}`}> {manga_title}</a>
                            </div>
                        </div>

                        <div class="MangaMediumContent">
                            <h3 className="MeDescr" > {manga_category} </h3>
                            <h5 className="Description"> {manga_description.substring(0, 270) + "..."}</h5>
                        </div>
                    </div>
                    :
                    <p>Building up the manga library</p>
            }
            <button class="MangaMediumButton" onClick={RandomMangadex} > <img src="https://i.imgur.com/zd4Afyz.png" height={20} width={20} /> </button>

        </div>
    );
}