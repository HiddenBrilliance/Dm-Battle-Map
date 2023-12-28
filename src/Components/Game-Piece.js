import React from 'react';
import logo from '/Users/dub/Desktop/DM-Battle-Map/FrontEndScreen/front-end-screen/src/Resources/PngTree-Blue.png';

const GamePieceComponent = () => {
    return (
        <div className="fullScreenImageContainer">
            <header className="App-header">
                <img src={logo} className="App-logo full-screen-image imgSize" alt="logo" />
                <p>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                </a>
            </header>
        </div>
    )
}

export default GamePieceComponent;