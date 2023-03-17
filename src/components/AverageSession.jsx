import React, { useEffect, useState } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer
} from 'recharts';
import getAverageSessions from '../requests/averageSessions';
import PropTypes from 'prop-types';

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
      <h2 className="averageSession-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sportData}
                   width={500}
                   height={300} >
          <XAxis dataKey="Jour" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="Duree" stroke="black" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSession.propTypes = {
  userID: PropTypes.number.isRequired,
};
