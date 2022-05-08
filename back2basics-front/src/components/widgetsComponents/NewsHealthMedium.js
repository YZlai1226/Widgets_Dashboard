import { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const NewsHealthMedium = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [source, setSource] = useState('');
    const [originNews, setOriginNews] = useState('');
    const [loaded, setLoaded] = useState(false);

    async function getHealthNewsFR() {
        const res = await axios('https://back2basicsnews.herokuapp.com/api/healthNewsFR');
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
        getHealthNewsFR();
    }, [])

    return (
            <div class="mediumWidget" id='NewsHealthMedium'>
                { loaded === true ?
                    <div class='newsHealthContainer'>
                        <div class='newHealthTop'>
                            <h3 class= 'newsHeading'>What's new in Health?</h3>
                        </div>
                        <div class='newsHealthContent'>
                            <div class='newsHealthText'>
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

export default NewsHealthMedium;