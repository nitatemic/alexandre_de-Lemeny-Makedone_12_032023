import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

export default function RadialGoal(props) {
  const { sportData } = props;
  const [goal, setGoal] = React.useState(0);
  useEffect(() => {
    if (sportData.length > 0) {
      setGoal(sportData[0].value);
    }
  }, [sportData]);

  if (!sportData) {
    return <div>Loading...</div>;
  }

  const COLORS = ['red', 'white'];
  console.log(sportData);

  return (
    <div className="radialGoal">
      <h2>Score</h2>
      <div className="radialGoal-text">
        <h3 className="radialGoal-text-item"><span className="radialGoal-text-item-percent">{goal}%</span> <span className="radialGoal-text-item-text"> de votre objectif</span>
        </h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sportData}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={80}
            outerRadius={100}
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
