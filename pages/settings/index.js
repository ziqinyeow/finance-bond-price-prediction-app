import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Settings() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Finance Model" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main></Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
`;

const Main = styled.div``;
