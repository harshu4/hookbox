import React, { useState } from 'react';
import './App.css'; // Import the CSS for HookDetails
import ExploreHooks from './ExploreHooks';
import ConnectedHooks from './ConnectedHooks';
import StateDecoder from './StateDecoder';
function MainDetail() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
    };  
    return (
        <div className="container">
            <div className="tabs">
                <div
                    className={`tab ${selectedTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabChange(0)}
                >
                    Explore Hooks
                </div>
                <div
                    className={`tab ${selectedTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabChange(1)}
                >
                    Connected Hooks
                </div>
                <div
                    className={`tab ${selectedTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabChange(2)}
                >
                    State Decoder
                </div>
            </div>

            {/* Render the content based on the selected tab */}
            <div className={`tab-content ${selectedTab === 0 ? 'active' : ''}`}>
                <ExploreHooks />
            </div>
            <div className={`tab-content ${selectedTab === 1 ? 'active' : ''}`}>
                <ConnectedHooks />
            </div>
            <div className={`tab-content ${selectedTab === 2 ? 'active' : ''}`}>
                <StateDecoder />
            </div>
        </div>
    );
}

export default MainDetail;












