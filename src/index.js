import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './store/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

const port = process.env.PORT;


const app = require('./components/App'); // Assuming your app entry point is in src/App.js

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});