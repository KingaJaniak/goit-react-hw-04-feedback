import styled from 'styled-components';

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 20px;
  width: 300px;
  box-shadow: rgb(48, 48, 48) 2px 2px 6px -3px;
`;
export const FeedbackArea = styled.div`
  margin: 20px auto;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 700;
  margin: 0;
  padding: 10px;
`;
export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 20px;
`;
export const BtnStats = styled.button`
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 10px;
  border: 1px solid black;
  width: 60px;
  height: 30px;
  padding: 10px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(48, 48, 48) 2px 2px 10px -3px;
  }
`;
export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
export const TextP = styled.p`
  font-size: normal;
`;
