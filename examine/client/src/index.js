import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {App} from './App'
import 'antd/dist/antd.css';
import {store} from './store'
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
) 