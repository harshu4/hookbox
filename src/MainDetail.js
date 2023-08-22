import React, { useState } from 'react';
import './App.css'; // Import the CSS for HookDetails
import ExploreHooks from './ExploreHooks';
import ConnectedHooks from './ConnectedHooks';
import StateDecoder from './StateDecoder';
import { Xumm } from 'xumm';

function MainDetail() {
    const [selectedTab, setSelectedTab] = useState(0);

    var xumm = new Xumm('d5e248d0-4eaa-430f-9273-1399f3862cc9')
    const [account, setAccount] = useState("")
    const handleTabChange = (newValue) => {
        auth()
        setSelectedTab(newValue);

    };
    let auth = async () => {
        xumm.authorize()



    }



    xumm.on("success", async () => {
        xumm.user.account.then((accounti) => {
            window.account = accounti
            setAccount(accounti)
            console.log(accounti)
        })
    })
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
            {selectedTab === 0 &&
                <div className={'tab-content active'}>
                    <ExploreHooks />
                </div>
            }
            {selectedTab === 1 &&
                <div className={'tab-content active'}>
                    <ConnectedHooks />
                </div>
            }
            {selectedTab === 2 &&
                <div className={'tab-content active'}>
                    <StateDecoder />
                </div>
            }
        </div>
    );
}

export default MainDetail;












