import axios from "axios";


//Action Constants

const GET_MAP = "GET_MAP"
const UPDATE_AREA = 'UPDATE_AREA'



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


export function getMap(X, Y) {
    console.log(X,Y)
    return {
        type: GET_MAP,
        payload: axios.get(`/api/getMap/${X}/${Y}`)
    }
    
  }
export function updateArea(X, Y) {
    return {
        type: UPDATE_AREA,
        payload: {X, Y}
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

        case UPDATE_AREA:
            return {
                ...state,
                mapX: action.payload.X,
                mapY: action.payload.Y
            }
    
        default:
            return state
    }

}