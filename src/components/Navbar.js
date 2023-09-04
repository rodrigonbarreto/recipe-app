import React, { useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";

const Navbar = ({ showSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("ingredients"));

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchParams({ "ingredients": searchTerm });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/">
                    <p className="btn btn-ghost normal-case text-xl">Recipes</p>
                </Link>
            </div>
            {showSearch && (
                <div className="flex-none gap-2">
                    <form onSubmit={handleSearch} className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                            value={searchTerm || ""}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <button type="submit" className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Navbar;