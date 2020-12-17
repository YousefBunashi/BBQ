import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const GlobalStyle = createGlobalStyle` 
body {
color:  ${(props) => props.theme.mainColor};
background-color: ${(props) => props.theme.backgroundColor};

}
`;
export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
`;
const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ___CSS_0___;

  &.active {
    color: ___CSS_1___;
    background-color: fuchsia;
  }
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;
export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;
const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ___CSS_0___;
  color: ___CSS_1___;
`;
const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
const Title = styled.h1`
  text-align: center;
  color: purple;
  background  black;
`;

const Description = styled.h4`
  text-align: center;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  object-fit: cover;
`;

export const ButcheryWrapper = styled.div`
  
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  `;
const BbqWrapper = styled.div`
  
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  p {
    text-align: center;

    &.bbq-price {
      color: ${(props) => props.theme.pink};};
    }
  }
`;
const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export {
  Title,
  Description,
  ShopImage,
  ListWrapper,
  BbqWrapper,
  ThemeButton,
  SearchBarStyled,
  DetailWrapper,
};
