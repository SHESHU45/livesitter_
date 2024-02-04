import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OverlayManagement() {
    const [overlaySettings, setOverlaySettings] = useState([]);
    const [newOverlay, setNewOverlay] = useState({
        position: '',
        size: '',
        content: ''
    });

    useEffect(() => {
        fetchOverlaySettings();
    }, []);

    const fetchOverlaySettings = () => {
        axios.get('/overlay/settings')
            .then(response => {
                setOverlaySettings(response.data);
            })
            .catch(error => {
                console.error('Error fetching overlay settings:', error);
            });
    };

    const handleAddOverlay = () => {
        axios.post('/overlay/create', newOverlay)
            .then(response => {
                setOverlaySettings([...overlaySettings, response.data]);
                setNewOverlay({
                    position: '',
                    size: '',
                    content: ''
                });
            })
            .catch(error => {
                console.error('Error adding overlay:', error);
            });
    };

    const handleDeleteOverlay = (overlayId) => {
        axios.delete(`/overlay/delete/${overlayId}`)
            .then(() => {
                setOverlaySettings(overlaySettings.filter(overlay => overlay._id !== overlayId));
            })
            .catch(error => {
                console.error('Error deleting overlay:', error);
            });
    };

    return (
        <div>
            <h2>Overlay Management</h2>
            <div>
                <h3>Add New Overlay</h3>
                <form onSubmit={handleAddOverlay}>
                    <input
                        type="text"
                        placeholder="Position"
                        value={newOverlay.position}
                        onChange={(e) => setNewOverlay({ ...newOverlay, position: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Size"
                        value={newOverlay.size}
                        onChange={(e) => setNewOverlay({ ...newOverlay, size: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Content"
                        value={newOverlay.content}
                        onChange={(e) => setNewOverlay({ ...newOverlay, content: e.target.value })}
                    />
                    <button type="submit">Add Overlay</button>
                </form>
            </div>
            <div>
                <h3>Overlay Settings</h3>
                <ul>
                    {overlaySettings.map(overlay => (
                        <li key={overlay._id}>
                            <div>Position: {overlay.position}</div>
                            <div>Size: {overlay.size}</div>
                            <div>Content: {overlay.content}</div>
                            <button onClick={() => handleDeleteOverlay(overlay._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default OverlayManagement;
