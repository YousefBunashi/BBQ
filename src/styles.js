import styled from "styled-components";

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: "50%";
`;
const Title = styled.h1`
  text-align: center;
  color: purple;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
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
  }
`;

export { ListWrapper, Title, ShopImage, BbqWrapper };
