import React, { useState, useEffect } from "react";

import dietInfo from "../../diet.json";
import CardNutrition from "./CardNutrition";

import "../../styles/Nutrition.scss";
import { useSelector } from "react-redux";
import { selectRecipe } from "./nutritionSlice";

const breakfast = dietInfo.filter((e) => e.type === "Desayuno");
const principal = dietInfo.filter((e) => e.type === "Comida o Cena");
const snack = dietInfo.filter((e) => e.type === "Snack");

export default function Nutrition(props) {
  const [filteredFood, setFilteredFood] = useState([]);
  const recipes = useSelector(selectRecipe);

  useEffect(() => {
    setFilteredFood(dietInfo);
  }, []);

  function showFiltered(newRecipes) {
    setFilteredFood(newRecipes);
  }

  const usedIds = recipes.map((recipe) => recipe.id);
  const filteredByUsed = filteredFood.filter(
    (recipe) => !usedIds.includes(recipe.id)
  );

  return (
    <div className="Nutrition">
      <h2>Selecciona tu Comida</h2>
      <ul className="Nutrition__btnTop">
        <li>
          <button
            className="custom-button2"
            onClick={() => showFiltered(breakfast)}
          >
            Desayunos
          </button>
        </li>
        <li>
          <button
            className="custom-button2"
            onClick={() => showFiltered(principal)}
          >
            Principales
          </button>
        </li>
        <li>
          <button
            className="custom-button2"
            onClick={() => showFiltered(snack)}
          >
            Snack
          </button>
        </li>
      </ul>

      <div className="Nutrition__cards">
        <ul className="Nutrition__cards--scroll">
          {filteredByUsed &&
            filteredByUsed.map((recipe) => (
              <CardNutrition
                key={recipe.id}
                id={recipe.id}
                type={recipe.type}
                title={recipe.title}
                option={recipe.option}
                image={recipe.image}
                cal={recipe.cal}
                carbs={recipe.carbs}
                fats={recipe.fats}
                proteins={recipe.proteins}
                recipe={recipe}
                ingredients={recipe.ingredients}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
