// IMPORTS REACT
import React from 'react';
import { Line } from 'recharts';

const items = []
const colors_lines = ["black", "red", "blue", "orange", "green", "black"]

function line(data) {
    for (var index in data) {
        if (data[index] === 'date') {
            continue
        }
        items.push(<Line key={index} type="monotone" dataKey={data[index]} stroke={colors_lines[index]} />)
    }

    return items;
}

export { line };