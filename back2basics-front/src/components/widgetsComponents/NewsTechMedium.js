import { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const NewsTechMedium = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [source, setSource] = useState('');
    const [originNews, setOriginNews] = useState('');
    const [loaded, setLoaded] = useState(false);

    async function getTechNewsFR() {
        const res = await axios('https://back2basicsnews.herokuapp.com/api/techNewsFR');
        const sourceName = res.data.articles[0].title.split("-").pop();
        const NewSourceName = ' -' + sourceName
        const newTitle = res.data.articles[0].title.replace(' - ' + NewSourceName, "");
        if (sourceName === res.data.articles[0].source.name) {
            const newTitle = res.data.articles[0].title.replace(' - ' + res.data.articles[0].source.name, "");
            setTitle(newTitle)
        } else {
            const newTitle = res.data.articles[0].title.replace(NewSourceName, "");
            setTitle(newTitle)
        }
        setDescription(res.data.articles[0].description)
        setImage(res.data.articles[0].urlToImage)
        setSource(res.data.articles[0].source.name)
        setOriginNews(res.data.articles[0].url)
        setLoaded(true);
    }

    useEffect(() => {
        getTechNewsFR();
    }, [])

    return (
            <div class="mediumWidget" id='NewsTechMedium'>
                { loaded === true ?
                    <div class='newsTechContainer'>
                        <div class='newTechTop'>
                            <h3 class= 'newsHeading'>What's new in Tech?</h3>
                        </div>
                        <div class='newsTechContent'>
                            <div class='newsTechText'>
                                <p class='newsSource'>{source}</p>
                                <h5 class='newsTitle' onClick={() => window.open(originNews)}>{title}</h5>
                                {/* <p class='newsDes'>{description.substring(0, 100) + "..."}</p> */}
                            </div>
                            <img class="newsImage" src={image} alt="news image" />
                        </div>
                    </div>
                    : 
                    <p class='loading'>Loading...</p>
                }
            </div>
    )
};

export default NewsTechMedium;