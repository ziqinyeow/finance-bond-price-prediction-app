import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";

const Navbar = ({ darkTheme }) => {
  const router = useRouter();
  const pathname = router.pathname.replace("/", "");
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
    darkTheme(dark);
  };

  return (
    <Container>
      <Fixed>
        <InnerContainer>
          <h3>
            {pathname
              ? pathname.substring(0, 1).toUpperCase() + pathname.substring(1)
              : "Dashboard"}
          </h3>
          <Panel>
            <Button>
              <i className="ri-notification-4-fill"></i>
            </Button>
            <BeautifulButton>
              <i className="ri-chat-smile-3-line"></i>
            </BeautifulButton>
            <ThemeButton onClick={handleTheme}>
              {dark ? (
                <i className="ri-moon-fill"></i>
              ) : (
                <i className="ri-sun-fill"></i>
              )}
            </ThemeButton>
          </Panel>
        </InnerContainer>
      </Fixed>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Fixed = styled.div`
  height: 70px;
  width: calc(100vw - 78px);
  position: fixed;
  z-index: 98;
  top: 0;
  left: 78px;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    letter-spacing: 1.2px;
    color: ${(props) => props.theme.clr4};
  }
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 20px;
    color: ${(props) => props.theme.clr4};
  }
`;

const Button = styled.div`
  margin: 0 5px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: ${(props) => props.theme.clr5};
  }
`;

const BeautifulButton = styled(Button)`
  background-color: ${(props) => props.theme.clr5};
  i {
    color: ${(props) => props.theme.clr1};
  }
`;

const ThemeButton = styled(Button)`
  background-color: ${(props) => props.theme.clr6};
  i {
    color: ${(props) => props.theme.clr1};
  }
`;
