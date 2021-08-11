import CircularStatic, {
  CircularProgressWithLabel2,
} from "@/components/CircularProgressBar";
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
        <title>Robot</title>
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
                  required
                />
              </div>
              <div>
                <label>Coupon Rate</label>
                <input
                  type="number"
                  name="coupon_rate"
                  step=".0001"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Accrued Interest</label>
                <input
                  type="number"
                  name="accrued_interest"
                  step=".01"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Frequency of Interest</label>
                <input
                  type="number"
                  name="frequency_of_interest"
                  step=".01"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Current Price</label>
                <input
                  type="number"
                  name="current_price"
                  step=".0001"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Yield-To-Maturity</label>
                <input
                  type="number"
                  name="yield_to_maturity"
                  step=".01"
                  onChange={handleChange}
                  required
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
                  required
                />
              </div>
              <button type="submit">Predict</button>
            </form>
          </LeftPanel>
          <RightPanel>
            <Accuracy>
              <Text>
                <i className="ri-robot-fill"></i>
                <h1>Accuracy</h1>
                <h2>80%</h2>
                <CircularProgressWithLabel2 value={80} />
              </Text>
            </Accuracy>
            <Try>Give a try</Try>
          </RightPanel>
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
  @media (max-width: 1012px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPanel = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 20px 0;
    align-items: center;
  }
  input,
  select,
  option {
    background-color: ${(props) => props.theme.clr2};
    color: ${(props) => props.theme.clr5};
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 16px;
  }
  button {
    cursor: pointer;
    padding: 10px 35px;
    margin: 20px 0;
    outline: none;
    border: 2px solid ${(props) => props.theme.clr5};
    background-color: ${(props) => props.theme.clr5};
    color: ${(props) => props.theme.clr2};

    :hover {
      border: 2px solid ${(props) => props.theme.clr5};
      background-color: ${(props) => props.theme.bg};
      color: ${(props) => props.theme.clr5};
    }
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
  position: sticky;
  top: 70px;
  height: 80vh;
  padding: 30px;
  border-radius: 18px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${(props) => props.theme.clr2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Accuracy = styled.div`
  height: 80%;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    120deg,
    ${(props) => props.theme.clr5},
    ${(props) => props.theme.clr6}
  );
  * {
    color: ${(props) => props.theme.clr2};
  }
  i {
    font-size: 50px;
  }
`;

const Text = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    margin-bottom: 20px;
  }
`;

const Try = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.clr5};
  background-color: ${(props) => props.theme.clr5};
  color: ${(props) => props.theme.clr2};
`;
