import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Robot() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Finance Model" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContainer>
        <Main>
          <h1>Top 5 Portfolio</h1>
          <Grids2>
            <BeautifulGrid>
              <h1>Top 1</h1>
              <h2>Stepping Bonds with Secondary Notes</h2>
              <h3>A1</h3>
            </BeautifulGrid>
            <Grid>
              <h1>Top 2</h1>
              <h2>Fixed Bond</h2>
            </Grid>
          </Grids2>
          <Grids3>
            <Grid>
              <h2>Top 3</h2>
            </Grid>
            <Grid>
              <h2>Top 4</h2>
            </Grid>
            <Grid>
              <h2>Top 5</h2>
            </Grid>
          </Grids3>
        </Main>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.theme.bg};
  * {
    color: ${(props) => props.theme.clr4};
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 95%;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Grids3 = styled.div`
  height: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const Grids2 = styled.div`
  height: 35vh;
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-gap: 20px;
`;

const Grid = styled.div`
  height: 100%;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.clr2};
  * {
    letter-spacing: 1px;
    color: ${(props) => props.theme.clr4};
  }

  h1 {
    font-size: 40px;
  }
  span {
    font-size: 16px;
  }

  h2,
  h3,
  h5 {
    font-family: "Light";
  }
`;

const BeautifulGrid = styled(Grid)`
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.clr5},
    ${(props) => props.theme.clr6}
  );
  * {
    color: ${(props) => props.theme.clr2};
  }
`;

const BeautifulGrid2 = styled(Grid)`
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.clr8},
    ${(props) => props.theme.clr5}
  );
  * {
    color: ${(props) => props.theme.clr2};
  }
`;
