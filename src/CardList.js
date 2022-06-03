import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card    
                            key = {robots[i].recipe.label} 
                            id={robots[i].id} 
                            img = {robots[i].recipe.images.SMALL.url}
                            name={robots[i].recipe.label} 
                            email={robots[i].recipe.ingredientLines}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;