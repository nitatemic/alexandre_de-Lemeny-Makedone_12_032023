import React, { useEffect, useState } from 'react';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis,
} from 'recharts';
import getDailyActivity from '../requests/activity';

export default function DailyActivity(userID) {
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    const id = userID.userID;
    async function fetchData() {
      const result = await getDailyActivity(id);

      const table = [];
      for (let i = 0; i < result.sessions.length; i += 1) {
        table.push({
          Jour: new Date(result.sessions[i].day).getDate(),
          Poids: result.sessions[i].kilogram,
          Calories: (result.sessions[i].calories),
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
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={sportData}
          className="dailyActivity-chart"
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="Jour" />
          <YAxis orientation="right" allowDecimals={false} domain={['dataMin - 3', 'dataMax + 2']} dataKey="Poids" yAxisId="YAxisPoids" />
          <YAxis orientation="left" allowDecimals={false} domain={['dataMin - 50', 'dataMax + 30']} dataKey="Calories" yAxisId="YAxisCalories" hide />
          <Tooltip />
          <Legend align="right" verticalAlign="top" iconSize={8} wrapperStyle={{ paddingBottom: 30 }} />
          <Bar dataKey="Poids" name="Poids (kg)" legendType="circle" unit="kg" fill="#282D30" yAxisId="YAxisPoids" radius={[10, 10, 0, 0]} barSize={7} />
          <Bar dataKey="Calories" name="Calories brûlées (kCal)" legendType="circle" unit="kCal" fill="#E60000" yAxisId="YAxisCalories" radius={[10, 10, 0, 0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
