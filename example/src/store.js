import { createStore } from 'redux'
import todoApp from './reducers'
import TinaRedux from '../../src'

let reduxStore = createStore(todoApp)

let store = new TinaRedux(reduxStore)

export default store
