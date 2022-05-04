import Widget1 from './../widgetsComponents/Widget1';
import Widget2 from './../widgetsComponents/Widget2';
import Widget3 from './../widgetsComponents/Widget3';
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
            <Widget1 class="smallWidget" />
            <Widget2 class="smallWidget" />
            <Widget3 class="smallWidget" />
            <Widget4 class="mediumWidget" />
            <Widget5 class="mediumWidget" />
            <Widget6 class="mediumWidget" />
            <Widget7 class="bigWidget" />
            <Widget8 class="bigWidget" />
            <Widget9 class="bigWidget"/>

        </div>
    )
};

export default WidgetsManager;