import React from 'react';

export function ChanguitoCounter({
    totalChango }) {

    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            {totalChango} productos en tu CHANGO!
        </h2>
    );
}