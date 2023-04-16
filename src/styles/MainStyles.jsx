import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`

export const HeaderBoxOne = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 215px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 460px;
    height: 128px;
    left: 95px;
    top: 48px;
    background: rgba(255, 255, 255, 0.90);
    border-radius: 15px;
  }

  h1 {
    font-family: var(--font-family-inter);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-pink-1)
  }
`

export const HeaderBoxTwo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 115px;
  background-color: var(--color-purple-1);
  border-radius: 10px;
  
  h1 {
    position: relative;
    left: 182px;
    font-family: var(--font-family-inter);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-white);
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 25px;
  width: 100%;
  height: auto;
`