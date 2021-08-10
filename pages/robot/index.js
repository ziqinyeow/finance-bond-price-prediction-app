import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function Analytics() {
  const [form, setForm] = useState({
    rating: "",
    maturity_date: null,
    coupon_rate: null,
    accrued_interest: null,
    frequency_of_interest: null,
    current_price: null,
    yield_to_maturity: null,
    maturity: null,
    duration: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    e.target.reset();
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
            <Header>
              <h2>Try the model</h2>
            </Header>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Rating</label>
                <select name="rating" onChange={handleChange}>
                  <option value="NR(LT)">NR(LT)</option>
                  <option value="A+IS">A+IS</option>
                  <option value="A1">A1</option>
                  <option value="AA+">AA+</option>
                  <option value="AA1">AA1</option>
                  <option value="AA2">AA2</option>
                  <option value="AA3">AA3</option>
                  <option value="AAA">AAA</option>
                  <option value="AAA IS">AAA IS</option>
                </select>
              </div>
              <div>
                <label>Maturity Date</label>
                <input
                  type="date"
                  name="maturity_date"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Coupon Rate</label>
                <input
                  type="number"
                  name="coupon_rate"
                  step=".0001"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Accrued Interest</label>
                <input
                  type="number"
                  name="accrued_interest"
                  step=".01"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Frequency of Interest</label>
                <input
                  type="number"
                  name="frequency_of_interest"
                  step=".01"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Current Price</label>
                <input
                  type="number"
                  name="current_price"
                  step=".0001"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Yield-To-Maturity</label>
                <input
                  type="number"
                  name="yield_to_maturity"
                  step=".01"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Maturity</label>
                <input type="date" name="maturity" onChange={handleChange} />
              </div>
              <div>
                <label>Duration</label>
                <input
                  type="number"
                  name="duration"
                  step=".001"
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Predict</button>
            </form>
          </LeftPanel>
          <RightPanel></RightPanel>
        </Main>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
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
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  grid-gap: 40px;
`;

const LeftPanel = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 20px 0;
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: ${(props) => props.theme.clr4};
`;

const RightPanel = styled.div`
  height: 80vh;
  padding: 30px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${(props) => props.theme.clr2};
`;
