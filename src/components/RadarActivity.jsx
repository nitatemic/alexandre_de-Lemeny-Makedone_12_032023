import React, { useEffect, useState } from 'react';

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
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
      Object.keys(result.kind).forEach((type) => {
        const dataValue = result.data[type]?.value; // check if key exists
        if (dataValue !== undefined) {
          table.push({
            Kind: type,
            A: dataValue,
          });
        }
      });

      setSportData(table);
    }

    fetchData();
  }, [props, userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }

  return (
    <div className="RadarActivity">
      <ResponsiveContainer width="33%">
        <RadarChart outerRadius={90} data={sportData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="Kind" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>

    </div>
  );
}

RadarActivity.propTypes = {
  userID: PropTypes.number.isRequired,
};
