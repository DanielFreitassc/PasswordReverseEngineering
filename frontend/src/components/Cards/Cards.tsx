import { CardsComponents } from "./Cards.styles"

interface CardProps {
    personagem:string;
    nome:string;
    image:string;
}

const Cards: React.FC<CardProps> = ({ personagem, nome, image }) => {
    return (
       <CardsComponents>
            <h2>{personagem}</h2>
            <h2>{nome}</h2>
            <img src={image} alt="foto personagem" />
       </CardsComponents>
    )
}
export default Cards