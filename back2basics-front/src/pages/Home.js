import dashboard from './../images/dashboard.jpg';

const home = (props) => {
    return (
        <div>
            <h1>Welcome to Back2Basics !</h1>
            <h2>See what's happening</h2>
            <img src={dashboard} alt="See what's happening"></img>
            <h3>Customize your dashboard to track everything that interests you online.</h3>
            <p>Bring together all your favorite web content.
Follow websites and RSS feeds.</p>
        </div>
    )
};

export default home;