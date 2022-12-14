import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px 20px;
  border: 1px solid grey;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Input = styled.input`
    width: 300px;
`

export const Button = styled.button`
  width: 150px;
  border-radius: 16px;
  padding: 6px 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #4287f5;
    color: #fff;
  }
`;
