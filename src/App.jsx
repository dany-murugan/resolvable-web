import { useState, useEffect } from 'react'
import axios from 'axios';
import AgentList from './components/AgentList'
import Context from './Context'
import React from 'react';

function App() {
  const [agentLists, setAgentLists] = useState(null);
  const [agentID, setagentID] = useState(null)

  {agentID && console.log('agentID', agentID)}

  const api_call = async() => { 
    // const url = `https://dummyapi.io/data/v1/user?limit=10`;
    // const headers = { 'app-id': '643fc8bbe214cb4bfbbf8c76' };
    // const request = axios.get(url, {headers});

    const url = `http://134.122.98.10/api/invite/create`;
    const headers = { 'Origin': 'http://127.0.0.1:5173' };
    const request = axios.get(url, headers);
    const response = await request;
    setagentID(response.data.invite.code);
    setAgentLists(response.data.invite.agent);

    console.log('response', response.data)
  }

  useEffect(() => {
    api_call();
  }, [])
  
  return (
    <div className="App">
      <Context.Provider value={{ api_call, agentLists, agentID }}>
        {agentLists && <AgentList/>}
      </Context.Provider>
    </div>
  )
}

export default App
