import { useEffect, useState } from 'react';
import axios from 'axios';
import './cocktailslarge.css';
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
    <div className="bigWidget">
      {
        loaded === true ?
          <div className='cocktailContainerL' >
            <img
              className='cocktailPictureL'
              src={cocktail.strDrinkThumb}
            ></img>
            <div className='cocktailContentL'>
              <p>Random cocktail from <a href="https://www.thecocktaildb.com/">the cocktail DB</a>:</p>
              <h1>{cocktail.strDrink}</h1>
              <p>
                <strong>Ingredients: </strong>
                {
                  cocktail.strIngredient1 ?
                    <span>{cocktail.strMeasure1} {cocktail.strIngredient1}</span>
                    :
                    <span></span>
                }
                {
                  cocktail.strIngredient2 ?
                    <span>, {cocktail.strMeasure2} {cocktail.strIngredient2}</span>
                    :
                    <span></span>
                }
                {
                  cocktail.strIngredient3 ?
                    <span>, {cocktail.strMeasure3} {cocktail.strIngredient3}</span>
                    :
                    <span></span>
                }
                {
                  cocktail.strIngredient4 ?
                    <span>, {cocktail.strMeasure4} {cocktail.strIngredient4}</span>
                    :
                    <span></span>
                }
                {
                  cocktail.strIngredient5 ?
                    <span>, {cocktail.strMeasure5} {cocktail.strIngredient5}</span>
                    :
                    <span></span>
                }
                {
                  cocktail.strIngredient6 ?
                    <span>, {cocktail.strMeasure6} {cocktail.strIngredient6}</span>
                    :
                    <span></span>
                }
              </p>
              <p><strong>Glass:</strong> {cocktail.strGlass}</p>
              <p>
                <strong>Instructions: </strong>
                {cocktail.strInstructions}
              </p>
            </div>
            <div className="cocktailFooterL">
              <IconButton onClick={() => aBoire()}>
                <ShuffleIcon></ShuffleIcon>
              </IconButton>
              <IconButton onClick={() => window.open('https://www.thecocktaildb.com/drink/' + cocktail.idDrink + '-' + cocktail.strDrink)}>
                <ArrowForwardIcon></ArrowForwardIcon>
              </IconButton>
            </div>
          </div>
          :
          <p>Loading</p>
      }
    </div>
  );
}