import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <Main>
          <Outlet />
        </Main>
      </Scrollbars>
    </StyledAppLayout>
  );
}

export default AppLayout;
