import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {line} from './GLine'; // APUNTAR AL HISTORICALPRICE/INDEX.JS
import historicalPrice from '../../CustomHooks/historicalPrice';

const data = historicalPrice

var keys = Object.keys(data[0]);

const date = '06-2022'; // TODO: 

const RenderLineChart = (
  <div>
    <div>
      <h2>Periodo: {date}</h2>
    </div> 
    <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
      {line(keys)}
    </LineChart>
  </div>
  
);

export {RenderLineChart};