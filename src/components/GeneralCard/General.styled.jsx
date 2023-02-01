import styled from 'styled-components';

export const Item = styled.li`
  width: 370px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: white;
`;
export const BtnMenu = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;
  :hover,
  :focus {
    border-radius: 50%;
    background-color: light-grey;
  }
`;

export const ContainerDropdown = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const InsideBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  svg {
    margin-right: 20px;
  }
`;
