import React from 'react';

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

const TooltipActivity = ({
  active,
  payload
}) => {
  if (active && payload) {
    return (
      <div className='dailyActivity-tooltip'>
        <p className='dailyActivity-tooltip-label'>
          {payload[0].value + (payload[0].name === 'kilogram' ? 'kg' : 'kCal')}
        </p>
        <p className='dailyActivity-tooltip-label'>
          {payload[1].value + (payload[1].name === 'kilogram' ? 'kg' : 'kCal')}
        </p>
      </div>
    );
  }

  return null;
};

export default function DailyActivity(props) {
  const { sportData } = props;

  if (!sportData) {
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
            >
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis dataKey="Jour" tickLine={false} tickMargin={10} />
              <YAxis orientation="right" allowDecimals={false} domain={['dataMin - 3', 'dataMax + 2']} dataKey="Poids" yAxisId="YAxisPoids" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis orientation="left" allowDecimals={false} domain={['dataMin - 50', 'dataMax + 30']} dataKey="Calories" yAxisId="YAxisCalories" hide />
              <Tooltip content={<TooltipActivity />} />
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
  sportData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
