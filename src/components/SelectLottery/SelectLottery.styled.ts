import styled from "styled-components";


const SelectStyled = styled.select`
  position: relative;
  width: 100%;
  min-width: 233px;
  min-height: 51px;
  border-radius: 10px;
  padding: 15px; 
  font-weight: 600;
  font-size: 15px;
  color: #333;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 25px 0px 25px 0px;
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  height:100%;
  top: 50%;
  right: 20px;
  display: flex;
  align-items: center;
  transform: translateY(-58%);
  z-index:10;
`;


export { SelectStyled, SelectWrapper, IconWrapper };
