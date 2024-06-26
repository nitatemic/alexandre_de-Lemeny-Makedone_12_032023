import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer, Rectangle,
} from 'recharts';
import PropTypes from 'prop-types';

export default function AverageSession(props) {
  const { sportData } = props;

  const TooltipActivity = ({
    active,
    payload
  }) => {
    if (active && payload) {
      return (
        <div className='averageSession-tooltip'>
          <p className='averageSession-tooltip-label'>
            {`${payload[0].value} min`}
          </p>
        </div>
      );
    }
    return null;
  };

  if (!sportData) {
    return <div>Loading...</div>;
  }


  const CustomCursor = ({ points }) => {
    return <Rectangle fill='#000000' opacity={0.2} x={points[0].x} width={1000} height={1000} />;
  };

  return (
    <div className="averageSession">
      <div className="averageSession-container">
        <h2 className="averageSession-title">Durée moyenne des sessions</h2>
        <div className="averageSession-graph">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={sportData}
              margin={{ top: 60, right: 10, bottom: 10, left: 10 }}
            >
              {/*
              1. Define a <linearGradient> in the <defs> section with desired opacity stops.
              2. Apply this gradient to the line by setting the stroke attribute to "url(#gradientId)".
              3. Adjust stopOpacity values to control the opacity gradient.
              */}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="white" stopOpacity={0.4032} />
                  <stop offset="100%" stopColor="white" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="Jour"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', className: 'weekLabel' }}
              />
              <YAxis hide />
              <Tooltip content={<TooltipActivity />} cursor={<CustomCursor />} />
              <Line type="monotone" dataKey="Duree" dot={false} stroke="url(#lineGradient)" strokeWidth={3} />
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
