import axios from "axios";


//Action Constants

const GET_MAP = "GET_MAP"



//Initial State

const initialState = {
    areaMap: [],

    mapX: 1,
    mapY: 1,

    heroX: 3,
    heroY: 3,
    
    isLoading: false
}


//Action Creators


export function getMap() {
    return {
        type: GET_MAP,
        payload: axios.get(`/api/getMap/${initialState.mapX}/${initialState.mapY}`)
    }
    
  }





//Reducer

export default function mapReducer(state=initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_MAP + '_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case GET_MAP + '_FULFILLED':
            return {
                ...state,
                isLoading: false,
                areaMap: action.payload.data
            }
    
        default:
            return state
    }

}