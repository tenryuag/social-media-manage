import React from "react";
import shareIcon from '../icons/share.png';
import './styles.css';

const ShareButton = ({ url, title }) => {
    const onClick = () => {
        if (!window.FB) return;

        window.FB.ui({
            method: 'share',
            href: url,
            quote: title
        }, function(response){
            if (response && !response.error_message) {
                console.log('Posting completed.');
            } else {
                console.log('Error while posting.');
            }
        });
    };

    return (
        <span onClick={onClick} title="Compartir en Facebook" className="share-btn">
            <img src={shareIcon} alt={title}/>
        </span>
    );
};

export default ShareButton;