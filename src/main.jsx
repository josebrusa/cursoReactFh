import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles.css';
import CounterApp from './components/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={123}/>
  </React.StrictMode>
)

