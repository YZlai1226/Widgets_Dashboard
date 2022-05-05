import { useEffect, useState } from 'react';
import axios from 'axios';
import './cocktails.css';

function CocktailComponent(props) {
  console.log(props);
  /* useEffect(() => {
    console.log('props:', props)
  }, [props]) */
  return <>
    <img
      className='drinkImage'
      src={props.cocktail.strDrinkThumb}
      alt={props.cocktail.strDrink}
    />
    {/* <img src="https://www.thecocktaildb.com/images/media/drink/125w0o1630407389.jpg" alt={props.cocktail.strDrink} /> */}
    <h1>{props.cocktail.strDrink}</h1>
    <span><strong>Ingredients: </strong></span>
    {
      props.cocktail.strIngredient1 ?
        <span>{props.cocktail.strIngredient1}</span>
        :
        <span></span>
    }
    {
      props.cocktail.strIngredient2 ?
        <span>, {props.cocktail.strIngredient2}</span>
        :
        <span></span>
    }
    {
      props.cocktail.strIngredient3 ?
        <span>, {props.cocktail.strIngredient3}</span>
        :
        <span></span>
    }
    {
      props.cocktail.strIngredient4 ?
        <span>, {props.cocktail.strIngredient4}</span>
        :
        <span></span>
    }
    {
      props.cocktail.strIngredient5 ?
        <span>, {props.cocktail.strIngredient5}</span>
        :
        <span></span>
    }
    {
      props.cocktail.strIngredient6 ?
        <span>, {props.cocktail.strIngredient6}</span>
        :
        <span></span>
    }
    <p><strong>Glass: </strong>{props.cocktail.strGlass}</p>
    <p>{props.cocktail.strInstructions.substring(0, 200)}</p>
  </>
}

export default function CocktailContainer() {
  const [cocktail, setCocktail] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function aBoire() {
    console.log('Fetching a drink');
    const res = await axios('https://cocktails-back.herokuapp.com/api/drinks');
    //const res = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    setCocktail(res.data.drinks[0]);
    setLoaded(true);
  }

  return (
    <div className="bigWidget">
      {
        loaded === true ?
          <CocktailComponent
            cocktail={cocktail}
          />
          :
          <p>Not yet loaded</p>
      }
      <button onClick={aBoire}>Get me there!</button>
      <br></br>
      <button onClick={aBoire}>Fetch me another one!</button>

    </div>
  );
}