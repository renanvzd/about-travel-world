import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
margin: 8rem auto;
max-width: 85rem;
padding: 0 1rem;

@media(max-width:1450px) {
  max-width: 70rem;
}
@media(max-width:1000px) {
  max-width: 50rem;
}
@media(max-width:700px) {
  margin: 6rem auto;
  padding: 0 2rem;
}
`

export const ContainerSquad = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 5rem;
    /* display: none; */

/* 
    padding-bottom: 6rem;
    border-bottom: 3px solid #0EE7B7; */

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: row;
      margin-top: 2rem;
      padding-bottom: 1rem;
      gap: 0rem;
    }
  }
`;


export const ParallaxContainer = styled.div`
  margin-top: -20px;
/* background-attachment: fixed; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
> div {
  
  /* padding-bottom: -20px; */
  .image {
      height: 800px;
      max-width: 100%;
      background-position: top;
      @media (max-width: 600px) {
        height: 350px;
        max-width: 100%;
        margin-bottom: 0px;
        display: absolute;
      }
  }
}
`
