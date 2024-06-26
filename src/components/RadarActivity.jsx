import React from 'react';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

export default function RadarActivity(props) {
  const { sportData } = props;

  sportData.forEach((element) => {
    const kind = element.Kind;
    element.Kind = kind[0].toUpperCase() + kind.slice(1);
  });

  if (!sportData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="radarActivity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="60%"
          data={sportData}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="Kind" fontSize={`calc(4px + .6vw)`} tick={{ fill: 'white'} } />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarActivity.propTypes = {
  sportData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
