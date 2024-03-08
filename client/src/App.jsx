import { useState } from 'react';
import './App.css';

// Add these require statements at the top
const Globe = require('./pages/Globe');
const crystalImage = require('./assets/crystal.png');

function App() {
    const [affirmation, setAffirmation] = useState('');

    // Function to generate affirmation
    const generateAffirmation = () => {
        // Logic to generate affirmation
        const affirmations = [
            "You are capable of achieving great things.",
            "You are worthy of love and respect.",
            "You possess the strength to overcome challenges.",
            "You radiate positivity and kindness.",
            "You attract abundance and success into your life."
        ];
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        setAffirmation(affirmations[randomIndex]);
    };

    return (
        <div className="app-container">
            <header>
                <img src={crystalImage} alt="Crystal Image" />
                <h1>Affirmation Crystal</h1>
            </header>
            <main>
                <div className="crystal-globe">
                    <Globe />
                </div>
                <div className="affirmation">{affirmation}</div>
                <button id="generate-button" onClick={generateAffirmation}>Generate Affirmation</button>
            </main>
            <footer>
                <p>&copy; 2024 Affirmation Crystal Globe</p>
            </footer>
        </div>
    );
}

export default App;
