import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://picsum.photos/id/275/1080/') center;
  background-size: cover;
  filter: blur(5px);
  border: none;
  z-index: -1;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = style.a`
//todo
`;

const Login = () => {
  return (
    <Container>
      <ContainerBackground />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <Link>Forgot password?</Link>
          <Link>Create Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
