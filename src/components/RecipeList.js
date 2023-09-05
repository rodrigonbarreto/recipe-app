import React from 'react';
import {Link, useSearchParams} from "react-router-dom";

const RecipeList = ({ loading, recipes, totalPages, currentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-error"></span>
            </div>
        )
    }

    if (totalPages === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>No recipes found</p>
            </div>
        )
    }

    return (
        <>
            <ul className="grid gap-4 grid-cols-4 p-4">
                {recipes.map((recipe) => (
                    <li className="card bg-base-100 shadow-xl" key={recipe.id}>
                        <figure className="h-32">
                            <Link to={`/recipes/${recipe.id}`}>
                                <img src={recipe.attributes.image} alt={recipe.attributes.title} />
                            </Link>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <Link to={`/recipes/${recipe.id}`}>
                                    {recipe.attributes.title}
                                </Link>
                            </h2>
                            <h3>Category: {recipe.attributes.category.title}</h3>
                            <h2>Author: {recipe.attributes.author.name}</h2>
                            <p>Rating: {recipe.attributes.ratings}</p>

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
                            setSearchParams({ page: currentPage - 1, ingredients: searchParams.get("ingredients") ? searchParams.get("ingredients") : '' })
                        }}
                    >«</button>
                    <button className="join-item btn" >Page {currentPage} of  {totalPages} </button>
                    <button
                        className="join-item btn"
                        disabled={currentPage === totalPages }
                        onClick={() => {
                            setSearchParams({ page: currentPage + 1, ingredients: searchParams.get("ingredients") ? searchParams.get("ingredients") : '' })
                        }}
                    >»</button>
                </div>
            </div>
        </>
    );
};

export default RecipeList;
