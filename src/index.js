import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import './DOMEvents'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules/store'
import App from './App'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
