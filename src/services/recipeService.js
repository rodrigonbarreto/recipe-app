import axios from 'axios';
const API_BASE_URL = 'https://tranquil-savannah-26362-ebd99de8141d.herokuapp.com/api/v1';
export const getRecipes = async ({ ingredients, page }) => {
    try {
        const { data: recipes } = await axios.get(`${API_BASE_URL}/recipes`, {
            params: {
                ingredients: ingredients,
                page: page || 1,
            }
        });
        return recipes;
    } catch (error) {
        throw error;
    }
};

export const getRecipeById = async (recipeId) => {
    try {
        const { data: recipe} = await axios.get(`${API_BASE_URL}/recipes/${recipeId}`);
        return recipe.data;
    } catch (error) {
        throw error;
    }
};
