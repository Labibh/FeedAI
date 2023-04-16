import styled from "styled-components";

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 20px;
  height: 60vh;
  margin-top: 40px;
`

export const ViewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid #480CA8;
  border-radius: 20px;
  padding: 10px;
  
  .post-img {
    width: 90%;
    height: 50vh;
    background-image: url(${(props) => props.imgLink});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
    border-radius: 15px;
  }
  
  .img-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    height: 50px;
    width: 90%;
  }

  img {
    width: 40px;
    height: 40px;
  }
  
  p {
    font-family: var(--font-family-inter);
    font-size: 18px;
    font-weight: 700;
    color: var(--color-purple-1)
  }
`

export const PromptBox = styled.div`
  background-color: var(--color-pink-1);
  border: 5px solid #480CA8;
  border-radius: 20px;
  padding: 30px;
  
  h2 {
    font-family: var(--font-family-inter);
    font-size: 30px;
    font-weight: 700;
    color: var(--color-white)
  }
  
  p {
    margin-top: 30px;
    font-family: var(--font-family-inter);
    font-size: 22px;
    font-weight: 400;
    color: var(--color-white)
  }
`