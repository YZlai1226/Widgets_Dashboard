import CocktailsLarge from './../widgetsComponents/CocktailsLarge';
import Widget2 from './../widgetsComponents/Widget2';
import CocktailsSmall from './../widgetsComponents/CocktailsSmall';
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
            <CocktailsLarge class="smallWidget" />
            <Widget2 class="smallWidget" />
            <CocktailsSmall />
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