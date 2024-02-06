import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <form>
            <input type="search" placeholder="Enter a city..." class="search-form entry"></input>
            <input type="submit" value="Search" class="search-form button"></input>
        </form>
    );
}