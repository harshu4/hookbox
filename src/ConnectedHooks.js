import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Xumm } from 'xumm';
const xrpl = require("@transia/xrpl")





function ConnectedHooks() {

    const xumm = new Xumm('d5e248d0-4eaa-430f-9273-1399f3862cc9')
    const navigate = useNavigate()
    const [filteredHooks, setFilteredHooks] = useState([])
    const sethook = async (hook) => {
        navigate('/hook-details', {
          state: {
            hook
    
          }
        })
    
      }
    async function getData() {
        console.log("wthe window is ", window.account)
        const client = new xrpl.Client("wss://hooks-testnet-v3.xrpl-labs.com")
        await client.connect()
        console.log("sending request")
        let response = await client.request({
            "id": 8,
            "command": "account_objects",
            "account": "rhV8U8hgJtqAECVghEZvFQdGw3mdxVuZBh",
            "ledger_index": "validated",
            "type": "hook",
            "limit": 10
        }
        )
        if (response["result"]["account_objects"].length > 0) {
            setFilteredHooks([response["result"]["account_objects"][0]["Hooks"][0]["Hook"]])
            window.hook = response["result"]["account_objects"][0]
        }
        client.disconnect()
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Connected Hooks</h2>
            <div className="hooks-list">
                {filteredHooks.map((hook) => (
                    <div className="hook-box" key={hook.HookHash} onClick={() => {
                        console.log(hook)
                        sethook(hook)
                    }}>
                        <h3>{hook.HookHash.substring(0,10)}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ConnectedHooks;