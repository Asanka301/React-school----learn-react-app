import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { Scrollbars } from "react-custom-scrollbars";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 1.8rem;
  border-right: 1px solid var(--color-grey-100);
  overflow-y: auto;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Scrollbars style={{ width: "100%", height: 600 }}>
        <Logo />
        <MainNav />
      </Scrollbars>
    </StyledSidebar>
  );
}

export default Sidebar;
