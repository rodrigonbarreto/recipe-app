import React, { useState, useEffect } from 'react';
import { getRecipes } from '../services/recipeService';
import { useSearchParams} from "react-router-dom";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    // on mount
    useEffect(() => {
        setLoading(true);
        getRecipes({ ingredients: searchParams.get("ingredients"), page: searchParams.get("page") })
            .then(({ data, meta }) => {
                setRecipes(data)
                setCurrentPage(meta.current_page)
                setTotalPages(meta.total_page)
                setLoading(false)
            })
            .catch((error) => console.error(error));
    }, [searchParams]);

    return (
        <>
            <Navbar showSearch />
            <RecipeList
                recipes={recipes}
                currentPage={currentPage}
                totalPages={totalPages}
                loading={loading}
            />

        </>
    );
};

export default Recipes;
