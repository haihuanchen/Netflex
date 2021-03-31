import React, { useState } from 'react';

function Row({ title }) {
    const [movies, setMovies] = useState([]);

    return (
        <div>
            <h2>{title}</h2>

            {/* container for the posters*/}
            <div>

            </div>
        </div>
    )
}

export default Row;
