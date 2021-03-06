import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";

ReactDOM.render(
  <Auth0Provider
    domain="dev-14ezxikg.eu.auth0.com"
    clientId="3YAPmCaBtTfvWz3I6GugMqoTq1olrtZl"
    redirectUri={window.location.origin}
    audience="http://localhost:3000/login-photo-app"
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
