import CircularStatic from "@/components/CircularProgressBar";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import path from "path";
import fs from "fs";

export default function Home({ content }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  let now = new Date();
  let current;
  if (now.getMonth() == 11) {
    current = new Date(now.getFullYear() + 1, 0, 1);
  } else {
    current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(e.target.value);
    if (value.trim()) {
      const result = content.result.filter((res) =>
        res["BOND TYPE"].toLowerCase().includes(value.trim().toLowerCase())
      );
      setSearchResult(result);
    }
  };

  return (
    <Container>
      <Head>
        <title>Analytics</title>
        <meta name="description" content="Finance Model" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerContainer>
        <Main>
          <LeftPanel>
            <Section>
              <Header>
                <h3>Fixed Bond Overview</h3>
                <Rank>Rank #1</Rank>
              </Header>
              <Grids3>
                <BeautifulGrid>
                  <h1>
                    <span>RM</span> {content.result[0]["BOND PRICE"]}
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
                    {content.result[0]["BOND RETURN"]}
                    <span> %</span>
                  </h1>
                  <h2>Bond Return</h2>
                </Grid>
                <Grid>
                  <h1>
                    {content.result[0]["VOLATILITY"]}
                    <span> %</span>
                  </h1>
                  <h2>Volatility</h2>
                </Grid>
              </Grids3>
            </Section>
            <Section>
              <Grids2>
                <Grid>
                  <Bar
                    data={{
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
                        "Dec",
                      ],
                      datasets: [
                        {
                          label: `${now.getFullYear()} Bond Price (RM) `,
                          data: content.result[0]["BOND PRICE SET"],
                          backgroundColor: "#8833ff",
                        },
                      ],
                    }}
                    width={100}
                    height={50}
                    options={{
                      maintainAspectRatio: false,
                      scale: {
                        ticks: { beginAtZero: true },
                      },
                    }}
                  />
                </Grid>
                <GridProgressBar>
                  <CircularStatic
                    value={content.result[0]["ACCRUED INTEREST"]}
                  />
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
              <SearchBar onChange={handleSearch}>
                <i className="ri-search-eye-line"></i>
                <input type="text" placeholder="Search" />
                <i className="ri-sort-desc" style={{ cursor: "pointer" }}></i>
              </SearchBar>
              <BondInnerContainer>
                {search.length !== 0
                  ? searchResult.map((res, i) => (
                      <Link href={`analytics/${res["ISIN CODE"]}`} key={i}>
                        <a>
                          <Bond>
                            <p>{res["BOND TYPE"]}</p>
                          </Bond>
                        </a>
                      </Link>
                    ))
                  : content.result.map((res, i) => (
                      <Link href={`analytics/${res["ISIN CODE"]}`} key={i}>
                        <a>
                          <Bond>{res["BOND TYPE"]}</Bond>
                        </a>
                      </Link>
                    ))}
              </BondInnerContainer>
            </BondContainer>
          </RightPanel>
        </Main>
      </InnerContainer>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "bond.json");
  const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return {
    props: { content },
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

  @media (max-width: 1305px) {
    grid-template-columns: 1fr;
    grid-gap: 100px;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: ${(props) => props.theme.clr4};
  margin-bottom: 20px;
  h3 {
    color: ${(props) => props.theme.clr4};
  }
`;

const Rank = styled.div`
  padding: 10px 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.clr5};
  color: ${(props) => props.theme.clr2};
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

  * {
    color: ${(props) => props.theme.clr4};
  }
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

const BondInnerContainer = styled.div`
  max-height: 60vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      150deg,
      ${(props) => props.theme.clr5},
      ${(props) => props.theme.clr6}
    );
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.clr5};
  }
`;

const Bond = styled.div`
  min-height: 30px;
  padding: 10px;
  border-radius: 4px;
  max-width: 100%;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.clr2};
    background: linear-gradient(
      150deg,
      ${(props) => props.theme.clr5},
      ${(props) => props.theme.clr6}
    );
  }
`;
