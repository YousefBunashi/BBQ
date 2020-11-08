import styled, { createGlobalStyle } from "styled-components";

const GlobleStyle = createGlobalStyle` 
body {
color:  ${(props) => props.theme.mainColor};
background-color: ${(props) => props.theme.backgroundColor};

}
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
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

const BbqWrapper = styled.div`
  margin: 20px;
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

export {
  GlobleStyle,
  Title,
  Description,
  ShopImage,
  ListWrapper,
  BbqWrapper,
  ThemeButton,
  SearchBarStyled,
};
