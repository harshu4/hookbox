import React, { useEffect } from 'react';
import './HookDetail.css'; // Import the CSS for HookDetails
import { useNavigate, useLocation } from 'react-router-dom';


function HookDetails() {
  let state = useLocation()
  const navigate = useNavigate()
  if (!state.state.hook.hasOwnProperty("CreateCode")) {
    state = { state: { hook: { id: 1, title: 'Carbon Hook', referenceCount: '4', CreateCode: "0061736D01000000014D0A60057F7F7F7F7F017E60027F7F017E60017F017E60037F7F7F017E60037F7F7E017E60027F7F017F60047F7F7F7F017E6000017E60097F7F7F7F7F7F7F7F7F017E60077F7F7F7F7F7F7F017E0298031903656E76057472616365000003656E760C686F6F6B5F6163636F756E74000103656E760C65...." } } }

  }
  useEffect(() => {
    try {

    }
    catch {
      state = { state: { hook: { id: 1, title: 'Carbon Hook', referenceCount: '4', CreateCode: "0061736D01000000014D0A60057F7F7F7F7F017E60027F7F017E60017F017E60037F7F7F017E60037F7F7E017E60027F7F017F60047F7F7F7F017E6000017E60097F7F7F7F7F7F7F7F7F017E60077F7F7F7F7F7F7F017E0298031903656E76057472616365000003656E760C686F6F6B5F6163636F756E74000103656E760C65...." } } }

    }

  }, [])
  console.log(state)
  return (
    <div className="hook-details">

      <h2 style={{ textAlign: "center" }}>Hook Details</h2>
      <h3 style={{ textAlign: "center" }}>{state.state.hook.title}</h3>
      <h5 style={{ textAlign: "center" }}>id : {state.state.hook.id}</h5>
      <h5 style={{ textAlign: "center" }}>Reference Count: {state.state.hook.referenceCount}</h5>
      <h5 style={{ textAlign: "center" }}>CreateCode : {state.state.hook.CreateCode.substring(0, 15)}</h5>
      {/* Add content for HookDetails */}
      <button className="back-button"  onClick={() => {
        navigate("/")
      }}>Back to Explore Hooks</button>
    </div>
  );
}

export default HookDetails;
