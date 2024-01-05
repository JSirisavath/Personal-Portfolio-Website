// My profile picture to upload

import ProfilePic from '../assets/img/ProfilePic.jpeg';

function ProfilePicture() {
  return (
    <div
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        width: '85px',
        height: '85px',
      }}
    >
      <img
        src={ProfilePic}
        alt="MyProfilePicture"
        style={{ width: '100%', height: '100%', marginRight: '2rem' }}
      />
    </div>
  );
}

export default ProfilePicture;
