import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Make sure you have React Router installed
import { getRecipeById } from '../services/recipeService';
import Navbar from "./Navbar";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    // updates whenever the id changes
    useEffect(() => {
        getRecipeById(id)
            .then((data) => setRecipe(data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe.attributes.image} alt={recipe.attributes.title} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{recipe.attributes.title}</h1>
                        <h3>Author: <span className="text-1xl font-bold">{recipe.relationships.author.name}</span> </h3>
                        <h3>Category: <span className="text-1xl font-bold">{recipe.relationships.category.title}</span> </h3>
                        <p>
                            <span className="text-1xl font-bold">Cook Time: </span> {recipe.attributes.cook_time}
                        </p>
                        <p>
                            <span className="text-1xl font-bold">Prep Time: </span> {recipe.attributes.prep_time}
                        </p>
                        <p>
                            <span className="text-1xl font-bold">Ratings: </span> {recipe.attributes.ratings}
                        </p>
                        <p> <span className="text-1xl font-bold">Ingredients: </span></p>
                        <ul>
                            {recipe.attributes.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetail;
