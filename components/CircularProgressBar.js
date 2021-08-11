import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import styled from "styled-components";

const SpecialBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  .MuiCircularProgress-circleStatic {
    color: ${(props) => props.theme.clr5};
  }
  h2 {
    font-size: 38px;
    color: ${(props) => props.theme.clr6};
  }
`;

const CircularPath = styled(CircularProgress)`
  position: absolute;
  top: 0;
  opacity: 0.1;
  color: ${(props) => props.theme.clr1};
`;

const SpecialBox2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  .MuiCircularProgress-circleStatic {
    color: ${(props) => props.theme.clr2};
  }
`;

const CircularPath2 = styled(CircularProgress)`
  position: absolute;
  top: 0;
  opacity: 0.1;
  color: ${(props) => props.theme.clr1};
`;

export function CircularProgressWithLabel(props) {
  return (
    <SpecialBox>
      <CircularProgress variant="static" size={150} {...props} />
      <CircularPath variant="static" value={100} size={150} />
      <h2>{props.value}%</h2>
    </SpecialBox>
  );
}

export function CircularProgressWithLabel2(props) {
  return (
    <SpecialBox2>
      <CircularProgress variant="static" size={150} {...props} />
      <CircularPath2 variant="static" value={100} size={150} />
    </SpecialBox2>
  );
}

export default function CircularStatic({ value }) {
  // const [progress, setProgress] = React.useState(10);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10
  //     );
  //   }, 1200);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <CircularProgressWithLabel
      // value={progress}
      value={value}
    />
  );
}
