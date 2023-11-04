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

  return (
    <div className="radialGoal">
         <h2 className="radialGoal-title">Score</h2>
      <div className="radialGoal-text">
        <h3 className="radialGoal-text-item"><span className="radialGoal-text-item-percent">{goal}%</span> <span className="radialGoal-text-item-text"> de votre objectif</span>
        </h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sportData}
            innerRadius={'70%'}
            outerRadius={'80%'}
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            cornerRadius={10}
          >
            {sportData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
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
