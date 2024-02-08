import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiBookOpen } from "react-icons/hi2";

const H3 = styled.h3`
  text-align: center;
  font-weight: 600;
  padding: 0.5rem 2.8rem;
`;

const NavList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-900);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.5rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <H3>React Tutorial</H3>
        <li>
          <StyledNavLink to="/intro">
            <HiBookOpen />
            <span>Intro</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/components">
            <HiBookOpen />
            <span>Components</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/props">
            <HiBookOpen />
            <span>Props</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/router">
            <HiBookOpen />
            <span>Router</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/memo">
            <HiBookOpen />
            <span>Memo</span>
          </StyledNavLink>
        </li>
        <H3>React Hooks</H3>
        <li>
          <StyledNavLink to="/useState">
            <HiBookOpen />
            <span>useState</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useEffect">
            <HiBookOpen />
            <span>useEffect</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useContext">
            <HiBookOpen />
            <span>useContext</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useRef">
            <HiBookOpen />
            <span>useRef</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useCallback">
            <HiBookOpen />
            <span>useCallback</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useMemo">
            <HiBookOpen />
            <span>useMemo</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/useReducer">
            <HiBookOpen />
            <span>useReducer</span>
          </StyledNavLink>
        </li>
        <H3>React Styling</H3>
        <li>
          <StyledNavLink to="/css">
            <HiBookOpen />
            <span>CSS</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tailwind">
            <HiBookOpen />
            <span>Tailwind</span>
          </StyledNavLink>
        </li>
        <H3>Advanced React</H3>
        <li>
          <StyledNavLink to="/redux">
            <HiBookOpen />
            <span>Redux</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/query">
            <HiBookOpen />
            <span>Query</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
