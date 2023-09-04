import React, { useState, useEffect } from 'react';
import { getRecipes } from '../services/recipeService';
import {Link, useSearchParams} from "react-router-dom";
import Navbar from "./Navbar";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    // on mount
    useEffect(() => {
        getRecipes({ ingredients: searchParams.get("ingredients"), page: searchParams.get("page") })
            .then(({ data, current_page, total_page }) => {
                setRecipes(data)
                setCurrentPage(current_page)
                setTotalPages(total_page)
            })
            .catch((error) => console.error(error));
    }, [searchParams]);

    return (
        <>
            <Navbar showSearch />
            {totalPages === 0 ? (
                <div className="p-4 flex justify-center">
                   <p>No recipes found</p>
                </div>
            ) : (
                <>
                <ul className="grid gap-4 grid-cols-4 p-4">
                    {recipes.map((recipe) => (
                        <li className="card bg-base-100 shadow-xl" key={recipe.id}>
                            <figure className="h-32">
                                <Link to={`/recipes/${recipe.id}`}>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Link>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link to={`/recipes/${recipe.id}`}>
                                        {recipe.title}
                                    </Link>
                                </h2>
                                <h3>Category: {recipe.category.title}</h3>
                                <h3>Author: {recipe.author.name}</h3>
                                <p>Rating: {recipe.ratings}</p>

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center pt-4 pb-8">
                        <div className="join">
                            <button
                                className="join-item btn"
                                disabled={currentPage === 1}
                                onClick={() => {
                                    setSearchParams({page: currentPage - 1, ingredients: searchParams.get("ingredients") ?searchParams.get("ingredients") : '' })
                                }}
                            >«</button>
                            <button className="join-item btn" >Page {currentPage} of  {totalPages} </button>
                            <button
                                className="join-item btn"
                                disabled={currentPage === totalPages }
                                onClick={() => {
                                    setSearchParams({ page: currentPage + 1, ingredients: searchParams.get("ingredients") ?searchParams.get("ingredients") : '' })
                                }}
                            >»</button>
                        </div>
                    </div>
                </>
            )}


        </>
    );
};

export default RecipeList;
