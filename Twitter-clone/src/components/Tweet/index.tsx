import React from 'react';


import {    Container,
            Retweeted, 
            RocketseatIcon, 
            Body, 
            Avatar, 
            Content, 
            Header,
            Description, 
            ImageContent,
            Icons,
            Status,
            CommetIcon,
            RetweetIcon,
            LikeIcon,
            Dot
         } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Gabriel</strong>
                    <span>@gabrielmaiia</span>
                    <Dot />
                    <time>29 de agosto</time>
                </Header>

                
                 {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <Description> Qué ota? 🔫 </Description>

                <ImageContent /> 

                <Icons>
                    <Status>
                        <CommetIcon />
                        18
                    </Status>

                    <Status>
                        <RetweetIcon />
                        18
                    </Status>

                    <Status>
                        <LikeIcon />
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>

  );

}

export default Tweet;