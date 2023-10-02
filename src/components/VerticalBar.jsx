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
      <ul className="verticalBar-items">
        <li className="verticalBar-item">
          <a className="verticalBar-item-link" href="/profil">
            <img src={YogaIcon} alt="Yoga Icon" />
          </a>
        </li>
        <li className="verticalBar-item">
          <a className="verticalBar-item-link" href="/settings">
            <img src={SwimmingIcon} alt="Swimming Icon" />
          </a>
        </li>
        <li className="verticalBar-item">
          <a className="verticalBar-item-link" href="/community">
            <img src={BikeIcon} alt="Bike Icon" />
          </a>
        </li>
        <li className="verticalBar-item">
          <a className="verticalBar-item-link" href="/community">
            <img src={WeightIcon} alt="Weight Icon" />
          </a>
        </li>
      </ul>
      <h6 className="verticalBar-copyright">Copyright, SportSee 2020</h6>

    </div>
  );
}
