import React, { useEffect, useState } from 'react';
import getUser, { getUserGoalCompletion } from '../services/user';
import DailyActivity from './DailyActivity';
import AverageSession from './AverageSession';
import RadarActivity from './RadarActivity';
import RadialGoal from './RadialGoal';
import IndividualData from './IndividualData';
import getDailyActivity from '../services/activity';
import getAverageSessions from '../services/averageSessions';
import getPerformance from '../services/performance';
import Modal from '@nitatemic/reactmodal';

/**
 * It is used to display the dashboard page.
 * The dashboard page is the homepage of the app.
 * It is made of different components, each displaying a different part of the dashboard.
 */
export default function Dashboard() {
  const [data, setData] = useState('');
  const [ActivityData, setActivityData] = useState([]);
  const [AverageData, setAverageData] = useState([]);
  const [PerformanceData, setPerformanceData] = useState([]);
  const [GoalData, setGoalData] = useState([]);
  const userID = 18;

  /* Modal */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  /* End of Modal */


  useEffect(() => {
    async function fetchData() {
      try {
        /* Get data for the dashboard */
        const result = await getUser(userID);
        setData(result);
        /* Get data for DailyActivity component */
        const actiData = await getDailyActivity(userID);
        setActivityData(actiData);
        /* Get data for AverageSession component */
        const avgData = await getAverageSessions(userID);
        setAverageData(avgData);
        /* Get data for RadarActivity component */
        const perfData = await getPerformance(userID);
        setPerformanceData(perfData);
        /* Get data for RadialGoal component */
        const goalData = await getUserGoalCompletion(userID);
        setGoalData(goalData);
      } catch (error) {
        /* Display a modal */
        openModal();
      }
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2 className="title-modal">"Uh, Houston, we've had a problem"</h2>
          <p className="content-modal">Nous n'arrivons pas à contacter le serveur</p>
        </Modal>
      )}
      <h1 className="dashboard-greeting">
        Bonjour
        {' '}
        <span className="dashboard-greeting-name">
          {data.userInfos ? data.userInfos.firstName : '...'}
        </span>
      </h1>
      <h2 className="dashboard-greeting-message">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      <div className="dashboard-container">
        <div className="dashboard-container-left">
          <div className="dashboard-line-1">
            <DailyActivity sportData={ActivityData} />
          </div>
          <div className="dashboard-line-2">
            <AverageSession sportData={AverageData} />
            <RadarActivity sportData={PerformanceData} />
            <RadialGoal sportData={GoalData} />
          </div>
        </div>
        <div className="dashboard-container-right">
          {/* For each keyData, we create a new IndividualData component */}
          {data.keyData ? Object.keys(data.keyData)
            .map((key, index) => (
              <IndividualData type={key} value={data.keyData[key]} key={`IndividualData-${index}`} />)) : null}
        </div>
      </div>
    </div>
  );
}
