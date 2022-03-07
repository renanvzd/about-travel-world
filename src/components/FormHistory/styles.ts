import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
margin-bottom: 5rem;

`;

export const FormContainer = styled.form`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem; */

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 400;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: #2FB12F;
    transition: 0.5s;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

  }

  @media (max-width: 700px) {
    margin-top: 3rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  
  justify-content: center;
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  margin: 1rem 0;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
