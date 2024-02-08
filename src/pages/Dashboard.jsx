import { Link } from "react-router-dom";
import styled from "styled-components";
import WorldMapSvg from "./1.svg"; // Replace "1.svg" with the correct path to your SVG file

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  background-color: var(--color-grey-50);
`;

const Main = styled.section`
  background-color: var(--color-grey-50);
  height: 100vh; /* Set height to 100% of the viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  color: var(--color-black);
`;

const Heading1 = styled.h1`
  font-weight: 600;
  color: #3dd7f3;
  padding: 0.5rem 2.8rem;
`;

const Heading2 = styled.h2`
  font-weight: 600;
  padding: 0.5rem 2.8rem;
`;
const Button = styled(Link)`
  display: inline-block;
  font-weight: 500;
  background-color: #3dd7f3;
  color: #ffffff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

export default function Dashboard() {
  return (
    <Main>
      <MainSection>
        {/* First Column */}
        <Column>
          <Heading1>Let`s learn React!</Heading1>
          <Heading2>
            Since Reactjs is an open-source javascript library, it is simple to
            learn. Learn the basics of React from here
          </Heading2>
          <Button to="./intro">Start Learning</Button>
        </Column>

        {/* Second Column (SVG Image) */}
        <div>
          <img src={WorldMapSvg} alt="World Map" />
        </div>
      </MainSection>
    </Main>
  );
}
