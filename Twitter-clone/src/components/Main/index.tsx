import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon></BackIcon>
              </button>

              <ProfileInfo>
                  <strong>Gabriel Maia</strong>
                  <span>613 Tweets</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomMenu>
              <HomeIcon className="active"  />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> 
      </Container>
  );
}

export default Main;