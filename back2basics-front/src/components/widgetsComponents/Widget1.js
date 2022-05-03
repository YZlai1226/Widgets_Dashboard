import { useEffect, useState } from 'react';
import axios from 'axios';

function CocktailComponent(props) {
useEffect(() => {
  console.log(props)
}, [props])
return <>
    <h1>{props.cocktail.strDrink}</h1>
    <h3>Glass: {props.cocktail.strGlass}</h3>
    <p>{props.cocktail.strInstructions}</p>
  </>
}

export default function CocktailContainer() {
  const [cocktail, setCocktail] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function aBoire() {
    console.log('Fetching a drink');
    const res = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    setCocktail(res.data.drinks[0]);
    setLoaded(true);
  }

  return (
    <div class="bigWidget">
      <button onClick={aBoire}>Fetch me a cocktail!</button>
      {
        loaded === true ?
          <CocktailComponent
            cocktail={cocktail}
          />
          :
          <p>Not yet loaded</p>
      }
    </div>
  );
}