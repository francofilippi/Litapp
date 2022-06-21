// IMPORTS REACT
import React from 'react';
import { Line } from 'recharts';


function line(data) {
    const colors_lines = ["black", "red", "blue", "orange", "green", "black"]
    const items = []
    for (var index in data) {
        if (data[index] === 'date') {
            continue
        }
        items.push(<Line key={index} type="monotone" dataKey={data[index]} stroke={colors_lines[index]} />)
    }

    return items;
}

export { line };