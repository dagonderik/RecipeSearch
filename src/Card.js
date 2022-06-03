import React from 'react';

const Card = (props) => {
    const {img, name, email, id} = props;
    return (
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='' src={`${img}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;