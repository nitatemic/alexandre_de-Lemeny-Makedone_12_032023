import React, { useEffect, useState } from 'react';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import GetPerformance from '../requests/performance';

export default function RadarActivity(props) {
  const { userID } = props;
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await GetPerformance(userID);

      const table = [];
      Object.keys(result.kind).forEach((type, index) => {
        table.push({
          Kind: result.kind[type],
          A: ((result.data[index]).value),
        });
      });
      setSportData(table);
    }

    fetchData();
  }, [userID]);

  if (!sportData || !userID) {
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
  userID: PropTypes.number.isRequired,
};
