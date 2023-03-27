import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { getUserGoalCompletion } from '../requests/user';

export default function RadialGoal(props) {
  const { userID } = props;
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getUserGoalCompletion(userID);
      const goalValue = result * 100;
      const RemainingValue = 100 - goalValue;

      const table = [
        {
          name: 'Goal',
          value: goalValue,
        },
        {
          name: 'Remaining',
          value: RemainingValue,
        },
      ];
      setSportData(table);
    }
    fetchData();
  }, [userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }

  const COLORS = ['red', 'white'];

  return (
    <div className="radialGoal">
      <ResponsiveContainer width="80%" height="80%">
        <PieChart>
          <Pie
            data={sportData}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {sportData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

RadialGoal.propTypes = {
  userID: PropTypes.number.isRequired,
};
