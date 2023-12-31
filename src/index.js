import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main.css";
import "./styles/nav.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/timeline.css";
import "./styles/projects.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
