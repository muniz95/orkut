import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import { render } from 'inferno'
import { Provider } from 'inferno-redux'
import { store } from './modules/store'
import App from './App'
import './index.css'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
