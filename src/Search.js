import React from "react";
import "./Search.css";

export default function Search() {
    return (
        
        <form>
            <div className="col-9"><input type="search" placeholder="Enter a city..." class="search-form entry"></input></div>
            <input type="submit" value="Search" className="search-form button btn col-9">Search</input>
            <button className="btn col-9 btn-primary">Home</button>
        </form>
        
    );
}