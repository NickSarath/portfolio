import React from 'react';
import Twemoji from 'react-twemoji';

const Profile = ({ person }) =>
  <div className="profile">
    <img src={person.photo} className="profileImage" />
    <div className="profileDesc">
      <h2>{person.name}</h2>
      <Twemoji options={{className: 'twemoji' }}>
      <h3>{person.bio}</h3>
      </Twemoji>
    </div>
  </div>

export default Profile;