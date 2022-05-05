import { useEffect, useState } from 'react';
import axios from 'axios';
import './cocktails.css';

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
    console.log(cocktail);

  }, [])
  return (
    <a href={cocktail.strImageSource}>
      <div
        className="smallWidget cocktailContainer"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
          url(${cocktail.strDrinkThumb})`
        }}
      >
        {
          loaded === true ?
            <div className='cocktailComp'>
              <h3>{cocktail.strDrink}</h3>
              <div className='cocktailContent'>
                <p>
                  {
                    cocktail.strIngredient1 ?
                      <span>{cocktail.strIngredient1}</span>
                      :
                      <span></span>
                  }
                  {
                    cocktail.strIngredient2 ?
                      <span>, {cocktail.strIngredient2}</span>
                      :
                      <span></span>
                  }
                  {
                    cocktail.strIngredient3 ?
                      <span>, {cocktail.strIngredient3}</span>
                      :
                      <span></span>
                  }
                  {
                    cocktail.strIngredient4 ?
                      <span>, {cocktail.strIngredient4}</span>
                      :
                      <span></span>
                  }
                  {
                    cocktail.strIngredient5 ?
                      <span>, {cocktail.strIngredient5}</span>
                      :
                      <span></span>
                  }
                  {
                    cocktail.strIngredient6 ?
                      <span>, {cocktail.strIngredient6}</span>
                      :
                      <span></span>
                  }
                </p>
                <button onClick={aBoire}>Fetch me another one!</button>
              </div>
            </div>
            :
            <p>Loading</p>
        }
      </div>
    </a>
  );
}