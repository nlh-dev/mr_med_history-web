import { useNavigate } from "react-router-dom";
import { cards, ICards } from "./Card.data";
import "./Cards.css";


export const Cards = () => {
    
    const navigate = useNavigate();

    return (
        <div className="infoCards">
            <section>
                <div className="card-container">
                    <div className="cards">
                        {cards.map((card: ICards, index: number) => (
                            <div className="card" key={index} onClick={() => navigate(card.redirecTo)}>
                                    <div className="card-info">
                                        <h1>{card.title}</h1>
                                        <p>{card.text}</p>
                                    </div>
                                    <div className="card-icon">
                                        <i className={card.icon} />
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
