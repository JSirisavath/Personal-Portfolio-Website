// My profile picture to upload

import ProfilePic from '../assets/img/ProfilePic.jpeg';

function ProfilePicture() {
  return (
    <div className="profilePicSection">
      <div
        className="imageContainer"
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          width: '85px',
          height: '85px',
          marginRight: '2rem',
          marginLeft: 'auto',
        }}
      >
        <img
          id="profilePic"
          src={ProfilePic}
          alt="MyProfilePicture"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
