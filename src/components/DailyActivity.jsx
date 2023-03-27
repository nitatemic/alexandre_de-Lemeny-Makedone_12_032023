import React, { useEffect, useState } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import getDailyActivity from '../requests/activity';

export default function DailyActivity(props) {
  const { userID } = props;
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getDailyActivity(userID);

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
  }, [props, userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dailyActivity">
      <div className="dailyActivity-container">
        <h2 className="dailyActivity-title">Activité quotidienne</h2>
        <div className="dailyActivity-graph">
          <ResponsiveContainer width="100%" height="100%">
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
              <XAxis dataKey="Jour" tickLine={false} tickMargin={10} />
              <YAxis orientation="right" allowDecimals={false} domain={['dataMin - 3', 'dataMax + 2']} dataKey="Poids" yAxisId="YAxisPoids" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis orientation="left" allowDecimals={false} domain={['dataMin - 50', 'dataMax + 30']} dataKey="Calories" yAxisId="YAxisCalories" hide />
              <Tooltip />
              <Legend align="right" verticalAlign="top" iconSize={8} wrapperStyle={{ paddingBottom: 30 }} />
              <Bar dataKey="Poids" name="Poids (kg)" legendType="circle" unit="kg" fill="#282D30" yAxisId="YAxisPoids" radius={[10, 10, 0, 0]} barSize={7} />
              <Bar dataKey="Calories" name="Calories brûlées (kCal)" legendType="circle" unit="kCal" fill="#E60000" yAxisId="YAxisCalories" radius={[10, 10, 0, 0]} barSize={7} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

DailyActivity.propTypes = {
  userID: PropTypes.number.isRequired,
};
