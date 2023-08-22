import React, { useState } from 'react';
import './ExploreHooks.css'; // Import the CSS for ExploreHooks
import { Xumm } from 'xumm';
import { Navigate, useNavigate } from 'react-router-dom';
function ExploreHooks() {

  const hooksList = [
    { id: 1, title: 'Carbon Hook', referenceCount: '4', CreateCode:"0061736D01000000014D0A60057F7F7F7F7F017E60027F7F017E60017F017E60037F7F7F017E60037F7F7E017E60027F7F017F60047F7F7F7F017E6000017E60097F7F7F7F7F7F7F7F7F017E60077F7F7F7F7F7F7F017E0298031903656E76057472616365000003656E760C686F6F6B5F6163636F756E74000103656E760C65...." },
    { id: 2, title: 'Firewall Hook',referenceCount: '4', CreateCode:"0061736D01000000014D0A60057F7F7F7F7F017E60027F7F017E60017F017E60037F7F7F017E60037F7F7E017E60027F7F017F60047F7F7F7F017E6000017E60097F7F7F7F7F7F7F7F7F017E60077F7F7F7F7F7F7F017E0298031903656E76057472616365000003656E760C686F6F6B5F6163636F756E74000103656E760C65.... "}
    // Add more hooks as needed
  ];
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHooks, setFilteredHooks] = useState(hooksList);
  var xumm = new Xumm('d5e248d0-4eaa-430f-9273-1399f3862cc9')
  const handleSearch = () => {
    const filtered = hooksList.filter((hook) =>
      hook.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHooks(filtered);
  };

  const sethook = async (hook) => {
    navigate('/hook-details', {
      state: {
        hook

      }
    })

  }

  xumm.on('payload', async (data) => {
    if (data?.uuid) {
      const payload = await xumm.payload.get(data.uuid)
      console.log(payload)
      // Payload contains the full paylaod data

    }
  })

  return (
    <div className="explore-hooks">
      <h2 style={{ textAlign: "center" }}>Explore Hooks</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search hooks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="hooks-list">
        {filteredHooks.map((hook) => (
          <div className="hook-box" key={hook.id} onClick={() => {
            sethook(hook)
          }}>
            <h3>{hook.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreHooks;
