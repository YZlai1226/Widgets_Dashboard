import axios from "axios";
import { useEffect, useState } from "react";

function MangaDexcomponent(props) {
    useEffect(() => {
        // console.log("PROPS", props);
    }, [props])
    return <>

{/* implement COVER
https://api.mangadex.org/swagger.html#/Cover/get-cover
/cover & /cover/{mangaOrCoverId}
https://uploads.mangadex.org/covers/{ manga.id }/{ cover.filename }.256.jpg */}


        <h2 color="red"> {props.manga.title.en}</h2>
        {/* <h3>Categories : </h3> */}
        <h5> {props.manga.tags[0].attributes.name.en}</h5>
        {/* <h5> {props.manga.tags[1].attributes.name.en}</h5> */}
        <h3>Description      : </h3>
        <h5> {props.manga.description.en}</h5>
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
        console.log("RESPONSE", res );
        console.log("TITLE : ", res.data.data.attributes.title.en);
        setManga(res.data.data.attributes);
        console.log("MANGA PROPs HERE", manga);
        setDataisLoaded(true);
    }
    
    return (

        <div class="bigWidget">
            <h2>Manga Randomizer</h2>
           <button onClick={RandomMangadex} > Which Manga should I read next?</button>
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