import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

export default function AverageSession(props) {
  const { sportData } = props;

  if (!sportData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="averageSession">
      <div className="averageSession-container">
        <h2 className="averageSession-title">Durée moyenne des sessions</h2>
        <div className="averageSession-graph">
          <ResponsiveContainer width="100%" height="95%">
            <LineChart
              data={sportData}
              width="33%"
              height="100%"
            >
              <XAxis
                dataKey="Jour"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', className: 'weekLabel' }}
              />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="Duree" dot={false} stroke="white" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

AverageSession.propTypes = {
  sportData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
