import React, { useEffect, useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import getAverageSessions from '../requests/averageSessions';

export default function AverageSession(props) {
  const { userID } = props;
  const [sportData, setSportData] = useState([]);

  function getDay(date) {
    switch (date) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      default:
        return 'Erreur';
    }
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getAverageSessions(userID);

      const table = [];
      for (let i = 0; i < result.sessions.length; i += 1) {
        table.push({
          Jour: getDay(result.sessions[i].day),
          Duree: (result.sessions[i].sessionLength),
        });
      }
      setSportData(table);
    }
    fetchData();
  }, [userID]);

  if (!sportData || !userID) {
    return <div>Loading...</div>;
  }

  return (
    <div className="averageSession">
      <div className="averageSession-container">
        <h2 className="averageSession-title">Durée moyenne des sessions</h2>
        <div className="averageSession-graph">
          <ResponsiveContainer width="100%" height="95%">
            <LineChart
              data={sportData}
              width="33%"
              height="100%"
            >
              <XAxis
                dataKey="Jour"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', className: 'weekLabel' }}
              />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="Duree" dot={false} stroke="white" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

AverageSession.propTypes = {
  userID: PropTypes.number.isRequired,
};
