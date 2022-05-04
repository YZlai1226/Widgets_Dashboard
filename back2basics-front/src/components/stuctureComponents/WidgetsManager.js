import Widget1 from './../widgetsComponents/Widget1';
import Widget2 from './../widgetsComponents/Widget2';
import WeatherSmall from '../widgetsComponents/WeatherSmall';
import Widget4 from './../widgetsComponents/Widget4';
import Widget5 from './../widgetsComponents/Widget5';
import Widget6 from './../widgetsComponents/Widget6';
import Widget7 from './../widgetsComponents/Widget7';
import Widget8 from './../widgetsComponents/Widget8';
import Widget9 from './../widgetsComponents/Widget9';
import './widgetsManager.css';

const WidgetsManager = (props) => {

    return (
        <div class="widgetsManager">
            <Widget1 />
            <Widget2 />
            <WeatherSmall />
            <Widget4 />
            <Widget5 />
            <Widget6 />
            <Widget7 />
            <Widget8 />
            <Widget9 />

        </div>
    )
};

export default WidgetsManager;