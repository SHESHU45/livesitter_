import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OverlaySettings() {
    const [overlaySettings, setOverlaySettings] = useState([]);

    useEffect(() => {
        fetchOverlaySettings();
    }, []);

    const fetchOverlaySettings = async () => {
        try {
            const response = await axios.get('/overlay/settings');
            setOverlaySettings(response.data);
        } catch (error) {
            console.error('Error fetching overlay settings:', error);
        }
    };

    return (
        <div>
            <h2>Overlay Settings</h2>
            <ul>
                {overlaySettings.map(overlay => (
                    <li key={overlay._id}>
                        <div>Position: {overlay.position}</div>
                        <div>Size: {overlay.size}</div>
                        <div>Content: {overlay.content}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OverlaySettings;
