// import { SideBarContainer } from './SideBarContainer';
import userImage from '/src/assets/user.jpg';

import {
  SideBarContainer,
  SideBarLogo,
  SideBarUserBubble,
} from './SideBarStyles';

import { Grid2x2, Clapperboard, Tv, Bookmark, Film } from 'lucide-react';
import { Link } from 'react-router';

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLogo>
        <Clapperboard size={40} color="#bc0606" strokeWidth={1} />
      </SideBarLogo>
      
      <div className='OptionBox'>
        <Link to="/" title='Resume'>
          <Grid2x2 strokeWidth={1} />
        </Link>

        <Link to="/movies" title='Movies'>
          <Film strokeWidth={1} />
        </Link>

        <Link to="/tvshows" title='Tv Shows'>
          <Tv strokeWidth={1} />
        </Link>

        <Link to="/bookmarked" title='BookMarks'>
          <Bookmark strokeWidth={1} />
        </Link>
      </div>

      <SideBarUserBubble>
        <img src={userImage} alt="user-image" />
      </SideBarUserBubble>
    </SideBarContainer>
  );
};

export default SideBar;
