import React from 'react';
import "../../styles/components/bracket.scss";

const Bracket = ({ bracket }) => {
    return(
        <section>
            <div className="card-bracket">
                <h4>{bracket.title}</h4>
                <p>{bracket.description}</p>
            </div>
        </section>
    );
};

export default Bracket;