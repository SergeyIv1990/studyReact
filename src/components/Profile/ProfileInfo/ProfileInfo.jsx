import React from 'react';
import ocean from '../../../img/ocean.jpg';
import pop from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={ocean} />
      </div>
      <div className={pop.descriptionBlock}>
        ava + description
      </div>
    </div>
  )

};

export default ProfileInfo;