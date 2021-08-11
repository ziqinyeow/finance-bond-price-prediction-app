import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import path from "path";
import fs from "fs";

export default function Robot({ content }) {
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
              <div>
                <h1>Top 1: {content[0]["BOND TYPE"]}</h1>
                <h5># {content[0]["ISIN CODE"]}</h5>
              </div>
              <div>
                <h3>Bond Price: RM {content[0]["BOND PRICE"]}</h3>
                <h3>Bond Return: {content[0]["BOND RETURN"]} %</h3>
                <h3>Volatility: {content[0]["VOLATILITY"]} %</h3>
              </div>
            </BeautifulGrid>
            <Grid>
              <div>
                <h1>Top 2: {content[1]["BOND TYPE"]}</h1>
                <h5># {content[1]["ISIN CODE"]}</h5>
              </div>
              <div>
                <h3>Bond Price: RM {content[1]["BOND PRICE"]}</h3>
                <h3>Bond Return: {content[1]["BOND RETURN"]} %</h3>
                <h3>Volatility: {content[1]["VOLATILITY"]} %</h3>
              </div>
            </Grid>
          </Grids2>
          <Grids3>
            <Grid>
              <div>
                <h2>Top 3: {content[2]["BOND TYPE"]}</h2>
                <h5># {content[2]["ISIN CODE"]}</h5>
              </div>
              <div>
                <h3>Bond Price: RM {content[2]["BOND PRICE"]}</h3>
                <h3>Bond Return: {content[2]["BOND RETURN"]} %</h3>
                <h3>Volatility: {content[2]["VOLATILITY"]} %</h3>
              </div>
            </Grid>
            <Grid>
              <div>
                <h2>Top 4: {content[3]["BOND TYPE"]}</h2>
                <h5># {content[3]["ISIN CODE"]}</h5>
              </div>
              <div>
                <h3>Bond Price: RM {content[3]["BOND PRICE"]}</h3>
                <h3>Bond Return: {content[3]["BOND RETURN"]} %</h3>
                <h3>Volatility: {content[3]["VOLATILITY"]} %</h3>
              </div>
            </Grid>
            <Grid>
              <div>
                <h2>Top 5: {content[4]["BOND TYPE"]}</h2>
                <h5># {content[4]["ISIN CODE"]}</h5>
              </div>
              <div>
                <h3>Bond Price: RM {content[4]["BOND PRICE"]}</h3>
                <h3>Bond Return: {content[4]["BOND RETURN"]} %</h3>
                <h3>Volatility: {content[4]["VOLATILITY"]} %</h3>
              </div>
            </Grid>
          </Grids3>
        </Main>
      </InnerContainer>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "bond.json");
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8")).result.slice(
    0,
    5
  );
  // console.log(content);
  // const result = content.result.filter(
  //   (res) => res["ISIN CODE"] === "MYBMH1700051"
  // );
  // const paths = content.result.map((res) => ({
  //   params: { id: res["ISIN CODE"].toString() },
  // }));
  return {
    props: { content },
  };
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
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Grids3 = styled.div`
  min-height: 30vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  h3 {
    font-size: 18px;
  }
`;

const Grids2 = styled.div`
  min-height: 35vh;
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
