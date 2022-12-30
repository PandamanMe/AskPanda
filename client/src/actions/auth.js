import { Navigate } from 'react-router-dom'
import * as api from '../api'

export const signUp = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        Navigate('/')
     } catch (error) {
           console.log(error)
     }
}

export const login = (authData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        Navigate('/')
     } catch (error) {
        console.log(error)
     }
}

