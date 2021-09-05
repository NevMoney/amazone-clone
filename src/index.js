import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import reducer, { initialState } from './reducer'
import { StateProvider } from './StateProvider'
import { MoralisProvider } from 'react-moralis'

ReactDOM.render(
  <MoralisProvider
    appId="S1k7puWaAqAsrVqoYeMLfI28hwLmLRtYyuoC3hNH"
    serverUrl="https://khep691mo8hw.moralisweb3.com:2053/server"
  >
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </MoralisProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
