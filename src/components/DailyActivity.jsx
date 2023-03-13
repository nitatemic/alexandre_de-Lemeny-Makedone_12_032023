import React, { PureComponent, useEffect, useState } from 'react';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import getDailyActivity from '../requests/activity.js';

export default function DailyActivity(userID) {
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    const id = userID.userID;
    async function fetchData() {
      const result = await getDailyActivity(id);

      let table = [];
      for (let i = 0; i < result.sessions.length; i += 1) {
        table.push({
          Jour: new Date(result.sessions[i].day).getDate(),
          Poids: result.sessions[i].kilogram,
          Calories: (result.sessions[i].calories)
        });
      }
      setSportData(table);
    }
    fetchData();
  }, [userID.userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dailyActivity">
      <h2 className="dailyActivity-title">Activité quotidienne</h2>
      <BarChart
        width={500}
        height={300}
        data={sportData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Jour" />
        <YAxis orientation="right" domain={[0, 'auto']} />
        <Tooltip />
        <Legend align="right" verticalAlign="top" iconSize={20} wrapperStyle={{ paddingBottom: 30 }} />
        <Bar dataKey="Poids" name="Poids (kg)" legendType="circle" unit="kg" fill="#282D30" />
        <Bar dataKey="Calories" name="Calories brûlées (kCal)" legendType="circle" unit="kCal" fill="#E60000" />
      </BarChart>
    </div>
  );
}
