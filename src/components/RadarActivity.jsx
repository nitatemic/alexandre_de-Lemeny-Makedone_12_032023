import React, { useEffect, useState } from 'react';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
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
    <div className="RadarActivity">
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={sportData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="Kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

RadarActivity.propTypes = {
  userID: PropTypes.number.isRequired,
};
