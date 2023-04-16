import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`

export const ImgPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto 0;
  width: 700px;
  min-height: 400px;
  height: auto;
  background: #FFFFFF;
  border: 5px solid #480CA8;
  border-radius: 20px;

  img {
    padding: 15px;
    max-width: 100%;
    height: auto;
    max-height: 450px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  p {
    font-family: var(--font-family-inter);
    font-size: 24px;
    font-weight: 400;
    color: var(--color-purple-1);
  }
`

export const InputContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin: 20px auto 0;
    width: 700px;
  }
  .input-fields {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    
    input {
      height: 35px;
      font-family: var(--font-family-inter);
      font-size: 18px;
      font-weight: 400;
    }
    textarea {
      width: 100%;
      height: 80px;
      font-family: var(--font-family-inter);
      font-size: 18px;
      font-weight: 400;
    }
    
    label {
      font-family: var(--font-family-inter);
      font-size: 18px;
      font-weight: 400;
      color: var(--color-purple-1);
    }
  }
  .input-button {
    width: 100%;
    
    input {
      width: 480px;
    }
    
    button {
      margin-left: 20px;
      width: 200px;
      height: 40px;
      background-color: var(--color-pink-1);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 4px;
    }
  }

`