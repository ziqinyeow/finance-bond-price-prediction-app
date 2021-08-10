import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: "Medium", Segoe UI, Roboto, Oxygen, -apple-system, BlinkMacSystemFont, 
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    max-width: 100vw;
    box-sizing: border-box;
    color: #4d5e80;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Light";
    src: local("AirbnbCerealLight"),
      url("./font/AirbnbCerealLight.ttf") format("truetype");
  }

  @font-face {
    font-family: "Medium";
    src: local("AirbnbCerealMedium"),
      url("./font/AirbnbCerealMedium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Black";
    src: local("AirbnbCerealBlack"),
      url("./font/AirbnbCerealBlack.ttf") format("truetype");
  }

  @font-face {
    font-family: "Bold";
    src: local("AirbnbCerealBold"),
      url("./font/AirbnbCerealBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "ExtraBold";
    src: local("AirbnbCerealExtraBold"),
      url("./font/AirbnbCerealExtraBold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Book";
    src: local("AirbnbCerealBook"),
      url("./font/AirbnbCerealBook.ttf") format("truetype");
  }
`;

const defaultTheme = {
  bg: "#fff",
  clr1: "#fff", //nav bar i color
  clr2: "#f5f5f5", //search bar bg
  clr3: "#c3cad9", //sidebar unactive
  clr4: "#4d5e80", //panel i color
  clr5: "#8833ff", //sidebar active
  clr6: "#f9ac25", //theme btn
  clr7: "#fff", //  search bar bg
  clr8: "#F14647",
  clr9: "#2BEBC8",
};

const darkTheme = {
  bg: "#1E1F23",
  clr1: "#fff",
  clr2: "#000",
  clr3: "#c3cad9",
  clr4: "#c3cad9",
  clr5: "#2BEBC8",
  clr6: "#8833ff",
  clr7: "#1E1F23",
  clr8: "#F14647",
  clr9: "",
};

export { GlobalStyle, ThemeProvider, defaultTheme, darkTheme };
