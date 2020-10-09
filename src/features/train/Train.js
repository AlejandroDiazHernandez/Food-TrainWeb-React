import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import trainInfo from "../../exercices.json";
import CardTrain from "./CardTrain";

import { selectExercice } from "./trainSlice";
import "../../styles/Train.scss";

const abs = trainInfo.filter((e) => e.muscle === "Abs");
const chest = trainInfo.filter((e) => e.muscle === "Chest");
const back = trainInfo.filter((e) => e.muscle === "Back");
const legs = trainInfo.filter((e) => e.muscle === "Legs");
const triceps = trainInfo.filter((e) => e.muscle === "Triceps");
const forearm = trainInfo.filter((e) => e.muscle === "Forearm");
const deltoids = trainInfo.filter((e) => e.muscle === "Deltoids");
const calf = trainInfo.filter((e) => e.muscle === "Calf");
const biceps = trainInfo.filter((e) => e.muscle === "Biceps");
const shoulders = trainInfo.filter((e) => e.muscle === "Shoulders");

const exercisesByName = {
  Abs: abs,
  Chest: chest,
  Back: back,
  Legs: legs,
  Triceps: triceps,
  Forearm: forearm,
  Deltoids: deltoids,
  Calf: calf,
  Biceps: biceps,
  Shoulders: shoulders,
};

export default function Train() {
  const [filteredExercices, setFilteredExercices] = useState([]);
  const exercises = useSelector(selectExercice);

  useEffect(() => {
    setFilteredExercices(trainInfo);
  }, []);

  function showByFilter(exercises) {
    setFilteredExercices(exercises);
  }

  const usedIds = exercises.map((exercise) => exercise.id);
  const filteredByUsed = filteredExercices.filter(
    (exercise) => !usedIds.includes(exercise.id)
  );

  return (
    <div className="Train">
      <h1 className="Train--title">Busca tus ejercicios</h1>

      <ul className="Train__btnUl">
        {Object.keys(exercisesByName).map((exerciseKey) => (
          <li key={exerciseKey}>
            <button onClick={() => showByFilter(exercisesByName[exerciseKey])}>
              {exerciseKey}
            </button>
          </li>
        ))}
      </ul>

      <ul className="Train__cardUl">
        {filteredByUsed &&
          filteredByUsed.map((train) => (
            <CardTrain
              key={train.id}
              id={train.id}
              name={train.name}
              muscle={train.muscle}
              video={train.video}
            />
          ))}
      </ul>
    </div>
  );
}
