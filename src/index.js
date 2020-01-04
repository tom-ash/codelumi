import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './app/functions/root_reducer'
import App from './app/app'

let store = createStore(rootReducer)

if (ENV === 'dev') store.subscribe(() => console.log(store.getState()))

render(<Provider store={store}><App/></Provider>, window.document.getElementById("app"));
