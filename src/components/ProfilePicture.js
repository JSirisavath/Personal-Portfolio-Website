// My profile picture to upload

import ProfilePic from '../assets/img/ProfilePic.jpeg';

function ProfilePicture() {
  return (
    <div
      className="imageContainer"
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        width: '85px',
        height: '85px',
      }}
    >
      <img
        id="profilePic"
        src={ProfilePic}
        alt="MyProfilePicture"
        style={{
          width: '100%',
          height: '100%',
          marginRight: '2rem',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}

export default ProfilePicture;
