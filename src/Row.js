import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";

const baseURL= "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {movies.map(movie => (
                    <img key={movie.id} className="row-poster" src={`${baseURL}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
