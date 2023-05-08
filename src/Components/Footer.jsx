import { Facebook, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;

const Right = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AUSTIN</Logo>
        <Description>
          There are many variations of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or
          randomized words which don't look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
