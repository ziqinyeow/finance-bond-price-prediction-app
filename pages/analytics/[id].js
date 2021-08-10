import CircularStatic from "@/components/CircularProgressBar";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import path from "path";
import fs from "fs";

export default function Home({ result }) {
  let now = new Date();
  let current;
  if (now.getMonth() == 11) {
    current = new Date(now.getFullYear() + 1, 0, 1);
  } else {
    current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  }
  console.log(result);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: `${now.getFullYear()} Bond Price (RM) `,
        data: [9, 3, 5, 2, 3],
        backgroundColor: "#8833ff",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Finance Model" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContainer>
        <Main>
          <LeftPanel>
            <Section>
              <Header>
                <h3>Fixed Bond Overview</h3>
              </Header>
              <Grids3>
                <BeautifulGrid>
                  <h1>
                    <span>RM</span> {23}
                    <span> .00</span>
                  </h1>
                  <h3>Bond{"'"}s Price</h3>
                  <Text>
                    <h5>Next Month</h5>
                    <h5>
                      {current.toLocaleString("en-us", {
                        month: "short",
                        year: "numeric",
                      })}
                    </h5>
                  </Text>
                </BeautifulGrid>
                <Grid>
                  <h1>
                    {0.7237}
                    <span> %</span>
                  </h1>
                  <h2>Bond Return</h2>
                </Grid>
                <Grid>
                  <h1>
                    {0.0067}
                    <span> %</span>
                  </h1>
                  <h2>Volatility</h2>
                </Grid>
              </Grids3>
            </Section>
            <Section>
              <Grids2>
                <Grid>
                  <Bar data={data} width={100} height={50} options={options} />
                </Grid>
                <GridProgressBar>
                  <CircularStatic value={77.8} />
                  <div>
                    <h1>Accrued Interest</h1>
                    <h3>
                      25% <span>&uarr;&darr;</span>
                    </h3>
                    <h5>
                      Compared to{" "}
                      {now.toLocaleString("en-us", {
                        month: "short",
                        year: "numeric",
                      })}
                    </h5>
                  </div>
                </GridProgressBar>
              </Grids2>
            </Section>
          </LeftPanel>
          <RightPanel>
            <Header>Bond Type</Header>
            <BondContainer>
              <SearchBar>
                <i className="ri-search-eye-line"></i>
                <input type="text" placeholder="Search" />
                <i className="ri-sort-desc"></i>
              </SearchBar>
              {/* {result.result.map((res, i) => (
                <p key={i}>{res["BOND TYPE"]}</p>
              ))} */}
            </BondContainer>
          </RightPanel>
        </Main>
      </InnerContainer>
    </Container>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "bond.json");
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const paths = content.result.map((res) => ({
    params: { id: res["ISIN CODE"].toString() },
  }));
  return {
    props: { paths, fallback: true },
  };
}

export async function getStaticProps({ params: { id } }) {
  const filePath = path.join(process.cwd(), "data", "bond.json");
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const result = content.result.find((res) => res["ISIN CODE"] === id);
  return {
    props: { result },
  };
}

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.theme.bg};
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  grid-gap: 40px;
`;

const LeftPanel = styled.div``;

const Section = styled.div`
  min-height: 30vh;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.clr4};
  h3 {
    color: ${(props) => props.theme.clr4};
    padding-bottom: 40px;
  }
`;

const Grids3 = styled.div`
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const Grids2 = styled.div`
  height: 45vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
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

const GridProgressBar = styled(Grid)`
  /* background: linear-gradient(
    150deg,
    ${(props) => props.theme.clr2} 50%,
    ${(props) => props.theme.clr6}
  ); */
  /* background: ${(props) => props.theme.clr6}; */
  justify-content: space-around;
  h1 {
    font-size: 25px;
  }
  span {
    font-size: 20px;
    font-weight: 800;
    color: ${(props) => props.theme.clr5};
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightPanel = styled.div`
  height: 80vh;
  padding: 30px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${(props) => props.theme.clr2};
`;

const BondContainer = styled.div``;

const SearchBar = styled.div`
  margin: 20px 0;
  padding: 2px 12px;
  border-radius: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.clr7};

  input {
    width: 80%;
    height: 35px;
    border: none;
    outline: none;
    background-color: inherit;
    color: ${(props) => props.theme.clr4};
  }

  i {
    color: ${(props) => props.theme.clr4};
  }
`;
