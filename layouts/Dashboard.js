import React from "react";
import styled from "styled-components";

//components
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Dashboard = ({ children, darkTheme }) => {
  const handleTheme = (dark) => {
    darkTheme(dark);
  };

  return (
    <Container>
      <Sidebar />
      <Main>
        <Navbar darkTheme={handleTheme} />
        {children}
      </Main>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 78px auto;

  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.bg};
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

const Main = styled.div`
  display: grid;
  grid-template-rows: 70px auto;
`;
