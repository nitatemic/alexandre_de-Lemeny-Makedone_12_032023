import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flameIconURL from '../assets/img/icons/flame.svg';
import appleIconURL from '../assets/img/icons/apple.svg';
import cheeseburgerIconURL from '../assets/img/icons/cheeseburger.svg';
import chickenIconURL from '../assets/img/icons/chicken.svg';
import sunIconURL from '../assets/img/icons/sun.svg';

export default function IndividualData(props) {
  const {
    type,
    value,
  } = props;

  const [icon, setIcon] = useState('');
  const [category, SetCategory] = useState('');

  useEffect(() => {
    switch (type) {
      case 'calorieCount':
        setIcon(flameIconURL);
        SetCategory('Calories');
        break;

      case 'proteinCount':
        setIcon(chickenIconURL);
        SetCategory('Protéines');
        break;

      case 'carbohydrateCount':
        setIcon(appleIconURL);
        SetCategory('Glucides');
        break;

      case 'lipidCount':
        setIcon(cheeseburgerIconURL);
        SetCategory('Lipides');
        break;

      default:
        setIcon(sunIconURL);
        SetCategory(type);
        break;
    }
  }, [type]);

  function getClassName() {
    switch (type) {
      case 'calorieCount':
        return 'individualData-content-logo-container calories';

      case 'proteinCount':
        return 'individualData-content-logo-container proteins';

      case 'carbohydrateCount':
        return 'individualData-content-logo-container glucides';

      case 'lipidCount':
        return 'individualData-content-logo-container lipides';

      default:
        return 'individualData-content-logo-container';
    }
  }
  return (
    <div className="individualData">
      <div className="individualData-content">
        <div className={getClassName()}>
          <img className="individualData-content-logo-img" src={icon} alt={category} />
        </div>
        <div className="individualData-content-data-container">
          <p className="individualData-content-data-value">
            {value}
            {type === 'calorieCount' ? 'kCal' : 'g'}
          </p>
          <p className="individualData-content-data-type">{category}</p>
        </div>
      </div>
    </div>
  );
}

IndividualData.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
