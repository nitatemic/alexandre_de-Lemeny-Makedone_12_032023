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

  if (!sportData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="radarActivity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx={140}
          cy={140}
          outerRadius={100}
          width={280}
          height={280}
          data={sportData}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="Kind" tick={{ fill: 'white' }} />
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
