import React from 'react';
import RecipeList from './components/RecipeList';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RecipeList />,
    },
    {
        path: "/recipes",
        element: <RecipeList />,
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
