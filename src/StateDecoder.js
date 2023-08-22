import React, { useEffect, useState } from 'react';
const xrpl = require("@transia/xrpl")
const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const hexToUtf8 = convert('hex', 'utf8')

function StateDecoder() {
  const [data, setData] = useState("")
  const getData = async () => {
    console.log("wthe window is ", window.account)
    const client = new xrpl.Client("wss://hooks-testnet-v3.xrpl-labs.com")
    await client.connect()
    console.log("sending request")
    const response = await client.request({
      "command": "account_info",
      "account": "rLoMfym37uDE5XqFbJfS1yZpQ7WdrFjFVV"
    });
    let dat = ""
    if (response.result.account_data.hasOwnProperty("HookNamespaces")) {
      const response1 = await client.request({
        "command": "account_namespace",
        "account": "rLoMfym37uDE5XqFbJfS1yZpQ7WdrFjFVV",
        "namespace_id": response.result.account_data.HookNamespaces[0]
      });
      for (let entry of response1.result.namespace_entries) {
        dat += hexToUtf8(entry.HookStateKey) + "," + hexToUtf8(entry.HookStateData)

      }
      setData(dat)
    }
    client.disconnect()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h2 style={{textAlign:"center"}}>State Decoder</h2>
      <h5 style={{textAlign:"center"}}>{data}</h5>
    </div>
  );
}

export default StateDecoder;