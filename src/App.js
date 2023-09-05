import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recipes from './components/Recipes';
import RecipeDetail from "./components/RecipeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Recipes />,
    },
    {
        path: "/recipes",
        element: <Recipes />,
    },
    {
        path: "/recipes/:id",
        element: <RecipeDetail />,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <main className="bg-base-200 h-screen">
                <RouterProvider router={router} />
            </main>
        </React.StrictMode>
    );
}

export default App;
