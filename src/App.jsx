import { useState, useEffect } from 'react'
import axios from 'axios';
import AgentList from './components/AgentList'
import Context from './Context'
import React from 'react';

function App() {
  const [agentLists, setAgentLists] = useState(null);
  
  const api_call = async() => { 
    const url = `https://dummyapi.io/data/v1/user?limit=10`;
    const headers = { 'app-id': '643fc8bbe214cb4bfbbf8c76' };
    const request = axios.get(url, {headers});

    // const url = `http://134.122.98.10/api/invite/yPJFdmhW3nThQKhh`;
    // const headers = { 'api_key': '643fc8bbe214cb4bfbbf8c76' };
    // const request = axios.get(url, {headers});

    const response = await request;
    console.log('response', response.data)


    setAgentLists(response.data.data);
  }

  useEffect(() => {
    api_call();
  }, [])
  
  return (
    <div className="App">
      <Context.Provider value={{ api_call, agentLists }}>
        {agentLists && <AgentList/>}
      </Context.Provider>
    </div>
  )
}

export default App