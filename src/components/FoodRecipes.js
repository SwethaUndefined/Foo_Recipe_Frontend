import React from "react";

import "./FoodRecipes.css";

import burger from "../images/burger.jpg";
import biryani from "../images/biryani.webp";
import cake from "../images/cake.jpg";
import chocolate_Drink from "../images/chocolate_Drink.jpg";
import chocolate from "../images/chocolate.jpg";
import Food_Plate from "../images/Food_Plate.png";
import ice_cream from "../images/ice_cream.jpg";
import juse from "../images/juse.jpg";
import lasagna from "../images/lasagna.webp";
import pasta from "../images/pasta.jpg";
import pizza from "../images/pizza.jpg";
import Spanchi from "../images/Spanchi.jpg";
import sandwich from "../images/sandwich.jpg";

const FoodRecipes = () => {
  const foodRecipes = [
    {
      id: 1,
      img: burger,
      createrName: "Beatriz",
      description: "Laughter is loudest where there are burgers",
      name: "Burger",
    },
    {
      id: 2,
      img: biryani,
      createrName: "Shira",
      description: "Biryani is nothing but, just a state of happiness",
      name: "Briyani",
    },
    {
      id: 3,
      img: cake,
      createrName: "Linnea",
      description: "Love is like a cake, you have to cook it well to be able to savor it",
      name: "Cake",
    },
    {
      id: 4,
      img: chocolate_Drink,
      createrName: "Amara",
      description:
        " As long as there is chocolate drink, there will be happiness",
      name: "Chocolate Drink",
    },
    {
      id: 5,
      img: chocolate,
      createrName: "Penelope",
      description: "Everything is good if it's made of chocolate",
      name: "Chocolate",
    },
    {
      id: 6,
      img: Food_Plate,
      createrName: "Giselle",
      description: "Food is symbolic of love when words are inadequate",
      name: "Food Plate",
    },
    {
      id: 8,
      img: ice_cream,
      createrName: "Josephine",
      description: "The only running I do is to chase the ice cream truck",
      name: "Ice Cream",
    },
    {
      id: 9,
      img: juse,
      createrName: "Faina",
      description: "Take your health to new heights with a tall glass of juice",
      name: "Juice",
    },
    {
      id: 10,
      img: lasagna,
      createrName: "Simone",
      description: "When the lasagna content in my blood gets low, I get mean!",
      name: "Lasagna",
    },
    {
      id: 11,
      img: pasta,
      createrName: "Antonio",
      description: "There’s nothing more romantic than Italian food. Like Pasta",
      name: "Pasta",
    },
    {
      id: 12,
      img: pizza,
      createrName: "Alexei",
      description: "You can't go wrong with pizza unless it's terrible pizza",
      name: "Pizza",
    },
    {
      id: 13,
      img: Spanchi,
      createrName: "Aaron",
      description: "All you need is love. . .but a cupcake would also be nice",
      name: "Spanchi",
    },
    {
      id: 14,
      img: sandwich,
      createrName: "Brayden",
      description: "Happiness is making someone a well-deserved sandwich",
      name: "Sandwich",
    },
  ];
  return (
    <div>
          <h1 className='menuHeading'>Menu</h1>

    <div className="mainDiv">
      {foodRecipes.map((food) => {
        return (
          <div className="maindiv">
            <div className="foodMaindiv" key={food.id}>
              <div className="subMainFoodDiv">
                <img
                  src={food.img}
                  className="foodImg images"
                  alt="Food img not found"
                />
                <p className="foodName">{food.name}</p>
                <p className="foodDescription">
                  <quote>{food.description}</quote>
                </p>
                <p className="foodCreator">Created by {food.createrName}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default FoodRecipes;
