import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  const router = useRouter();

  return (
    <Container>
      <Fixed>
        <Top></Top>
        <Middle>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              <i className="ri-dashboard-fill"></i>
            </a>
          </Link>
          <Link href="/analytics">
            <a className={router.pathname == "/analytics" ? "active" : ""}>
              <i className="ri-bar-chart-2-fill"></i>
            </a>
          </Link>
          <Link href="/robot">
            <a className={router.pathname == "/robot" ? "active" : ""}>
              <i className="ri-robot-fill"></i>
            </a>
          </Link>
          <Link href="/data">
            <a className={router.pathname == "/data" ? "active" : ""}>
              <i className="ri-database-2-fill"></i>
            </a>
          </Link>
          <Link href="/user">
            <a className={router.pathname == "/user" ? "active" : ""}>
              <i className="ri-user-3-fill"></i>
            </a>
          </Link>
          <Link href="/settings">
            <a className={router.pathname == "/settings" ? "active" : ""}>
              <i className="ri-settings-3-fill"></i>
            </a>
          </Link>
        </Middle>
        <Bottom></Bottom>
      </Fixed>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 78px;
`;

const Fixed = styled.div`
  height: 100vh;
  width: 78px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  a {
    width: 73px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    i {
      color: ${(props) => props.theme.clr3};
    }
  }
  a.active {
    border-left: 5px solid ${(props) => props.theme.clr6};
  }

  .active {
    i {
      color: ${(props) => props.theme.clr5};
    }
  }
`;

const Top = styled.div``;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Bottom = styled.div``;
