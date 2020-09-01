import React from 'react';

import Feed from '../Feed'

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>
                <h1>Gabriel Maia</h1>
                <h2>@Gabrielmaiia</h2>
                <p>Developer fullstack </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Jaguaruana, Brasil
                    </li>

                    <li>
                        <CakeIcon />
                        Nascido em 10 de dezembro de 1997
                    </li>
                </ul>

                <Followage>
                    <span><strong>96</strong> seguindo </span>
                    <span><strong>672 </strong> seguidores </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
  );
}

export default ProfilePage;