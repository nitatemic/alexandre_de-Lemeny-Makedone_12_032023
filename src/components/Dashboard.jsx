import React, { useEffect, useState } from 'react';
import getUser from '../requests/user.js';
import DailyActivity from './DailyActivity.jsx';

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
      <DailyActivity userID={userID}/>
    </div>
  );
}
