import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { selectDiet } from '../nutrition/nutritionSlice';
import '../../styles/CardNutritionDetail.scss';

export default function CardNutritionDetail() {
  const diet = useSelector(selectDiet);
  const params = useParams();
  const recipe = diet.find((rec) => rec.id.toString() === params.id);

  if (!params.id || !recipe) {
    return (
      <div>
        <Link className="custom-button CardNutritionDetail__back" to="/userView">
          BACK
        </Link>

        <h1>No hay información para esta receta...</h1>
      </div>
    );
  }

  return (
    <div className="CardNutritionDetail">
      <Link className="custom-button2 CardNutritionDetail__back" to="/userView">
        BACK
      </Link>

      <div className="CardNutritionDetail__details">
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} width="250" />
        
        <p>Proteinas:{recipe.proteins}</p>
        <p>Carbohidratos:{recipe.carbs}</p>
        <h4>Receta:</h4>
        <p>{recipe.recipe}</p>
        <h4>Ingredientes:</h4>
        <ul>{recipe.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
          
        </ul>
      </div>
    </div>
  );
}
