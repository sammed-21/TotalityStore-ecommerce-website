import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = import.meta.env.VITE_CLIENT_ID;
 ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={clientId} >
   <React.StrictMode>
    <RecoilRoot>

    <App />
    </RecoilRoot>
  </React.StrictMode>,
      </GoogleOAuthProvider>
)
