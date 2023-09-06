import axios from 'axios';
// const API_BASE_URL = 'http://192.168.1.197:3000/api/v1'; -> local
const API_BASE_URL = 'https://patient-dream-3431.fly.dev/api/v1';
export const getRecipes = async ({ ingredients, page }) => {
    try {
        const { data: recipes } = await axios.get(`${API_BASE_URL}/recipes`, {

            params: {
                ingredients: ingredients,
                page: page || 1,
            }
        });
        console.log("getRecipes");
        console.log(recipes)
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
