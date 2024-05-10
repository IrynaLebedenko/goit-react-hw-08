import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'

import store from './redux/store'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor  } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </PersistGate>
     </Provider>
  </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import "modern-normalize"
// import App from './components/app/App'
// import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from 'react-helmet-async';
// import { Provider } from 'react-redux'
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
//           <HelmetProvider>
//             <App />
//           </HelmetProvider>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
// )