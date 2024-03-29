import { useEffect, useState } from 'react';
import axios from 'axios';
import './cocktailssmall.css';
import { IconButton } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CocktailContainer() {
  const [cocktail, setCocktail] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function aBoire() {
    const res = await axios('https://cocktails-back.herokuapp.com/api/drinks');
    setCocktail(res.data.drinks[0]);
    setLoaded(true);
  }

  useEffect(() => {
    aBoire();
  }, [])
  return (
    <div className="smallWidget" >
      {
        loaded === true ?
          <div className='cocktailContainer'>
            {/* <div className="coctailssite">TheCocktailDB</div> */}
            <img
              className='cocktailPicture'
              src={cocktail.strDrinkThumb}
            ></img>
            <div className='cocktailShade'>
            </div>
            <div className='cocktailContent'>
              <p className='cocktailName'>
                  {cocktail.strDrink}
              </p>
              <p className='cocktailIngredients'>
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
              <p className="cocktailssmallbuttons">
                <IconButton onClick={() => aBoire()}>
                  <ShuffleIcon className='cocktailsicon'></ShuffleIcon>
                </IconButton>
                <IconButton onClick={() => window.open('https://www.thecocktaildb.com/drink/' + cocktail.idDrink + '-' + cocktail.strDrink)}>
                  <ArrowForwardIcon className='cocktailsicon'></ArrowForwardIcon>
                </IconButton>
              </p>
            </div>

          </div>
          :
          <p>Loading</p>
      }
    </div>
  );
}