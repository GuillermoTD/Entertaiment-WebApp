// import { SideBarContainer } from './SideBarContainer';
import userImage from '/src/assets/user.jpg';
import {
  SideBarContainer,
  SideBarLogo,
  SideBarUserBubble,
} from './SideBarStyles';

import { Grid2x2, Clapperboard, Tv, Bookmark, Film } from 'lucide-react';

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarLogo>
        <Clapperboard size={40} color="#bc0606" strokeWidth={1} />
      </SideBarLogo>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Grid2x2 strokeWidth={1} />
        <Film strokeWidth={1} />
        <Tv strokeWidth={1} />
        <Bookmark strokeWidth={1} />
      </div>
      <SideBarUserBubble>
        <img src={userImage} alt="user-image" />
      </SideBarUserBubble>
    </SideBarContainer>
  );
};

export default SideBar;
