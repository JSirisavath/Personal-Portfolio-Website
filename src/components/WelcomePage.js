// Animate CSS
import 'animate.css';

// MUI library Button
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import { purple } from '@mui/material/colors';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import welcomePageBGVid from '../assets/stockVideo/bg-video.mp4';

import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

// tech stack carousel component
import TechStackCarouselDisplay from './TechStackCarouselDisplay';

const CustomMUIButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  height: 50,
  borderRadius: 7,
  background: 'linear-gradient(45deg, ##9296F0 30%, #FF8E53 90%)',
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    color: 'black',
    backgroundColor: purple[700],
  },
}));

export const WelcomeSplashPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  let navigate = useNavigate();

  const handleOnclickButton = () => {
    // Navigate to home page/main banner
    navigate('/mainHome#mainHome');
  };

  return (
    <>
      <div id="welcome" className="WelcomePage">
        <div className="bg-video-section">
          <div className="welcomeOverlayCover">
            {/* Background Video for Welcome Page */}
            <video
              autoPlay
              loop
              muted
              loading="lazy"
              id="welcomePageVideo"
              className="background-video"
            >
              <source src={welcomePageBGVid} type="video/mp4" />
            </video>
          </div>
          {/* Overlay text */}

          <div className="video-overlay">
            <div className="welcome-text-section">
              <div className="welcome-text-section">
                {/* Welcome message */}
                <h1 id="welcomePageTagline">Welcome!</h1>

                {/* Custom MUI button to direct to main home page */}
                <CustomMUIButton
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={handleOnclickButton}
                  sx={{ fontWeight: 500, letterSpacing: '0.5px' }}
                >
                  <span>Open Portfolio!</span>
                </CustomMUIButton>

                {/* Tech stack icons */}
                <div className="technology-stack-icons-section">
                  <div className="tech-bx">
                    <TechStackCarouselDisplay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
