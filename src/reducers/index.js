import { combineReducers } from 'redux'
import settingsReducer from './cameraReducer'

const cameraApp = combineReducers({
    settingsReducer
})

export default cameraApp