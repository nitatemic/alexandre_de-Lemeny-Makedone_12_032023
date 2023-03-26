import React, { useEffect, useState } from 'react';
import getUser from '../requests/user';
import DailyActivity from './DailyActivity';
import AverageSession from './AverageSession';
import RadarActivity from './RadarActivity';
import RadialGoal from './RadialGoal';
import IndividualData from './IndividualData';

export default function Dashboard() {
  const [data, setData] = useState('');
  const userID = 18;
  useEffect(() => {
    async function fetchData() {
      const result = await getUser(userID);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">
        Bonjour
        {' '}
        <span className="dashboard-greeting-name">
          {data.userInfos ? data.userInfos.firstName : '...'}
        </span>
      </h1>
      <div className="dashboard-container">
        <div className="dashboard-container-left">
          <div className="dashboard-line-1">
            <DailyActivity userID={userID} />
          </div>
          <div className="dashboard-line-2">
            <AverageSession userID={userID} />
            <RadarActivity userID={userID} />
            <RadialGoal userID={userID} />
          </div>
        </div>
        <div className="dashboard-container-right">
          {/* For each keyData, we create a new IndividualData component */}
          {data.keyData ? Object.keys(data.keyData).map((key) => (
            <IndividualData type={key} value={data.keyData[key]} />)) : null}
        </div>
      </div>
    </div>
  );
}
