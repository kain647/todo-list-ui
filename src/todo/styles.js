import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 480px;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  background-color: #10101d;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }
`;
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 32px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  input {
    width: 90%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    margin-right: auto;
  }
`;
export const AddBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    height: auto;
    cursor: pointer;
    :active {
    }
  }
`;
export const TasksList = styled.div`
  display: flex;
  width: 100%;
  //max-height: inherit;
  flex-direction: column;
  overflow-y: auto;
`;
export const Tasks = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;
export const TitleTask = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  background-color: #191933;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  word-break: break-all;
  text-align: left;
  cursor: pointer;
  input {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  span {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  svg {
    width: 16px;
    height: auto;
    cursor: pointer;
    color: #fff;
    margin-left: 30px;
  }
`;
export const TaskTitle = styled.div`
  display: flex;
  padding-left: 30px;
  text-decoration: ${({ active }) => (active ? "line-through" : "none")};
`;
export const DeleteAll = styled.div`
	display: flex;
  margin-left: auto;
  color: #9394a5;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    color: #3a7bfd;
  }
`;
