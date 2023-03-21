import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar } from 'recharts';
import { getUserGoalCompletion } from '../requests/user';

export default function RadialGoal(props) {
  const { userID } = props;
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getUserGoalCompletion(userID);
      console.log(result * 100);

      const table = [{ value: result * 100 }];
      setSportData(table);
    }
    fetchData();
  }, [userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }
  console.log(sportData);
  return (
    <div className="RadialGoal">
      <h1>RadialGoal</h1>
      <RadialBarChart
        width={500}
        height={300}
        innerRadius={120}
        outerRadius={120}
        barSize={10}
        data={sportData}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={0}
          background
          clockWise
          dataKey="value"
        />
      </RadialBarChart>
    </div>
  );
}

RadialGoal.propTypes = {
  userID: PropTypes.number.isRequired,
};
