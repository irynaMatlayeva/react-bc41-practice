import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;

  padding: 24px;

  background-color: #fff;
`;

export const ColumnItem = styled.div`
  display: flex;
  flex-direction: column;
`;
