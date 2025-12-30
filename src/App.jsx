// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

import React, { useState, useEffect } from 'react';

function App() {
    const [reply, setReply] = useState('');

    useEffect(() => {
        if (window.electronAPI) {
            window.electronAPI.onReply((message) => {
                setReply(message);
            });
        }
    }, []);

    const handleClick = () => {
        if (window.electronAPI) {
            window.electronAPI.sendMessage('Hello from React!');
        } else {
            console.log('Electron API not available (browser mode)');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1>Electron + React Starter</h1>
            <p>Welcome to your new desktop application.</p>

            <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <p><strong>Main Process Reply:</strong> {reply || 'Waiting for reply...'}</p>
                <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                    Ping Main Process
                </button>
            </div>

            <p style={{ color: '#888', marginTop: '40px' }}>
                Developed for Anunzio International
            </p>
        </div>
    );
}

export default App;

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
