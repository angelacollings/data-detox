import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({
  name = 'Unknown',
  title = '',
  location = '',
  bio = '',
  avatar = null,
}) {
  return (
    <section className="profile">
      <div className="avatar">
        {avatar ? (
          <img src={avatar} alt={`${name} avatar`} />
        ) : (
          <div className="avatar-placeholder" aria-hidden="true">
            {name ? name.charAt(0).toUpperCase() : '?'}
          </div>
        )}
      </div>

      <div className="info">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p className="location">{location}</p>
        <p className="bio">{bio}</p>
      </div>
    </section>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};
