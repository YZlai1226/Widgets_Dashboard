import { useEffect, useState } from 'react';
import axios from 'axios';
import './cocktails.css';

function CocktailComponent(props) {
  return <>
  <img
    className='drinkImage'
    src={props.cocktail.strDrinkThumb}
    alt={props.cocktail.strDrink}
    />
    <h3>{props.cocktail.strDrink}</h3>
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

  useEffect(() => {
    aBoire();
  }, [])

  return (
    <div className="smallWidget">
      {
        loaded === true ?
          <CocktailComponent
            cocktail={cocktail}
          />
          :
          <p>Not yet loaded</p>
      }
      <p>
        <button onClick={aBoire}>Fetch me another one!</button>
      </p>
    </div>
  );
}