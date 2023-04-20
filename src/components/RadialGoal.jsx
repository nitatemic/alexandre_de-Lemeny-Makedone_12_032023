import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

export default function RadialGoal(props) {
  const { sportData } = props;

  if (!sportData) {
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
  sportData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
