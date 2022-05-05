import axios from "axios";
import { useEffect, useState } from "react";


function MangaDexcomponent(props) {
    useEffect(() => {
        // console.log("00_PROPS", props);
        // console.log('00_MANGA_ID', props.manga_id);
        // console.log("00_MANGA PROPS HERE SETTED", props.manga);
        // console.log("00_MANGA_COVER", props.manga_cover);
    }, [props])
    return <>
        <a href={`https://mangadex.org/title/${props.manga_id}`}> {props.manga.title.en}</a>
        {/* <h3>Categories : </h3> */}
        {/* <h5> {props.manga.tags[0].attributes.name.en}</h5> */}
        {/* <h5> {props.manga.tags[1].attributes.name.en}</h5> */}
        {/* <h3>Description      : </h3> */}
        <h5> {props.manga.description.en.substring(0, 300) + "..."}</h5>

        {/* <img className="Manga_cover" src={`https://uploads.mangadex.org/covers/${props.manga_id}/${props.manga_cover}`} alt={`${props.manga.title.en}`} /> */}

    </>
}

export default function MangaDex() {
    const [manga, setManga] = useState([]);
    // const [manga_cover, setMangaCover] = useState("");
    const [manga_id, setMangaid] = useState("");
    const [DataisLoaded, setDataisLoaded] = useState(false);


    async function RandomMangadex() {
        const res = await axios.get("https://mangaddx.herokuapp.com/api/random");
        // console.log("RESPONSE", res);
        // console.log("TITLE : ", res.data.data.attributes.title.en);
        setManga(res.data.data.attributes);
        console.log("MANGA PROPING", res.data.data.attributes);
        setDataisLoaded(true);
        // console.log("MANGA.ID", res.data.data.id);
        await setMangaid(res.data.data.id);
        // console.log("COVERRRRRRR", manga_id);

        /* // const test = await axios.get(`https://api.mangadex.org/cover?manga%5B%5D=${res.data.data.id}`);
        // // console.log("COVER", test);
        // // console.log("FILENAME", test.data.data[0].attributes.fileName);
        // setMangaCover(test.data.data[0].attributes.fileName); */
    }

    return (

        <div class="mediumWidget">
            <button onClick={RandomMangadex} > Manga Randomizer NO cover </button>
            {
                DataisLoaded === true ?
                    <MangaDexcomponent
                        manga={manga}
                        // manga_cover={manga_cover}
                        manga_id={manga_id}
                    />
                    :
                    <h3> Let destiny choose for you! </h3>
            }

        </div>
    );
}