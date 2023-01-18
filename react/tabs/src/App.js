import React from 'react';
import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Tabs from './components/Tabs/Tabs';

function App() {
  const [tab, setTab] = useState("")
  const [tabSize] = useState(["tab 1", "tab 2", "tab 3"])
  return (
    <div>
      <Tabs setTab={setTab} tabSize={tabSize}/>
      <Content tab={tab}/>
    </div>
  );
}

export default App;
