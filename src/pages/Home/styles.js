import styled from "styled-components";
export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const CardWrapper = styled.div`
  height: 267px;
  width: 350px;
  margin: 0 auto;
`;
export const CardWrapperForExpert = styled.div`
  height: 158px;
  width: 142px;
  margin: 0 auto;
`;

export const GridView = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 283px;
  margin-bottom: 1rem;
`;
export const GridViewForExpert = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 174px;
  margin-bottom: 6rem;
`;
