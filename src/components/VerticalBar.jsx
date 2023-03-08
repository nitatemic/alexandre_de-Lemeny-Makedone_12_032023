import React from 'react';
import YogaIcon from '../assets/img/icons/YogaIcon.svg';
import SwimmingIcon from '../assets/img/icons/SwimmingIcon.svg';
import BikeIcon from '../assets/img/icons/BikeIcon.svg';
import WeightIcon from '../assets/img/icons/WeightIcon.svg';

/**
 * It returns a div with the DOM of verticalBar.
 * @returns A div with a class of verticalBar.
 */
export default function VerticalBar() {
  return (
    <div className="verticalBar">
      <div className="verticalBar-items">
        <div className="verticalBar-item">
          <a className="verticalBar-item-link" href="/profil">
            <img src={YogaIcon} alt="Yoga Icon" />
          </a>
        </div>
        <div className="verticalBar-item">
          <a className="verticalBar-item-link" href="/settings">
            <img src={SwimmingIcon} alt="Swimming Icon" />
          </a>
        </div>
        <div className="verticalBar-item">
          <a className="verticalBar-item-link" href="/community">
            <img src={BikeIcon} alt="Bike Icon" />
          </a>
        </div>
        <div className="verticalBar-item">
          <a className="verticalBar-item-link" href="/community">
            <img src={WeightIcon} alt="Weight Icon" />
          </a>
        </div>
      </div>
      <small className="verticalBar-copyright">Copyright, SportSee 2020</small>
    </div>
  );
}
