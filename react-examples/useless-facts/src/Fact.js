import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Fact = (props) => {
    const { 
        factTitle,
        factContent,
        totalLikes,
        totalDislikes
     } = props;
    return (
        <div className="fact-box">
            <div className="fact-title">{factTitle}</div>
            <div className="fact-content">{factContent}</div>
            <div className="like-dislike-buttons">
            <span className="like-button">
                <Button circular icon='thumbs up' />
                <span className="total-likes">{totalLikes}</span>
            </span>
            <span className="dislike-button">
                <Button circular icon='thumbs down' />
                <span className="total-dislikes">{totalDislikes}</span>
            </span>
            </div>
        </div>
    );
};

export default Fact;