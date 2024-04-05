import Cards from "./components/Cards/Cards"
import styled from "styled-components"
import { GlobalStyle } from "./components/Global/syles";

function App() {
  const cardPersonagem = "Nasus";
  const cardNome = "Daniel";
  const cardFoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYNfT6myB37bulRL8zcMqbPxBEI17dNa0wthV0lZhYw&s";
  
  const cardPersonagem2 = "Rakan";
  const cardNome2 = "Luiz";
  const cardFoto2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfZm_wI_KZi-UJ1l5uRFfTnDkUT259I1zbg5np3rysw&s";
  
  return (
    <AppStyled>
      <GlobalStyle />
      <Cards nome={cardNome} personagem={cardPersonagem} image={cardFoto}/>
      <Cards nome={cardNome} personagem={cardPersonagem} image={cardFoto}/>
      <Cards nome={cardNome} personagem={cardPersonagem} image={cardFoto}/>
      <Cards nome={cardNome} personagem={cardPersonagem} image={cardFoto}/>
      <Cards nome={cardNome2} personagem={cardPersonagem2} image={cardFoto2}/>
      <Cards nome={cardNome2} personagem={cardPersonagem2} image={cardFoto2}/>
      <Cards nome={cardNome2} personagem={cardPersonagem2} image={cardFoto2}/>
      <Cards nome={cardNome2} personagem={cardPersonagem2} image={cardFoto2}/>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px 100px;
  box-sizing: border-box;
  background-image: url(https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/bltfc4fbfd9fa0e1348/6141044d64c8007a9bde99c2/Arcane--Social-media_fb.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
`

export default App
