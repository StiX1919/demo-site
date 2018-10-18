import axios from "axios";


//Action Constants

const GET_MAP = "GET_MAP"
const UPDATE_AREA = 'UPDATE_AREA'

const BUILD_MAP = "BUILD_MAP"
const MOVE = 'MOVE'



//Initial State

const initialState = {
    areaMap: [],
    locations: [],

    mapX: 1,
    mapY: 1,

    heroX: 3,
    heroY: 3,
    
    isLoading: false
}


//Action Creators


export function getMap(X, Y) {
        return {
            type: GET_MAP,
            payload: axios.get(`/api/getMap/${X}/${Y}`).then(response => {
                let builtMap = buildMap(response.data, X, Y)
                return {locations: response.data, builtMap}
            })
        }
    
    
  }
export function updateArea(X, Y) {
    return {
        type: UPDATE_AREA,
        payload: {X, Y}
    }
}

export function buildMap(locations, areaX, areaY){

    function colorGen(place) {
        switch(place){
            case 'Town': 
                return 'grey';
            case 'Plain': 
                return 'light green';
            case 'Forest': 
                return 'forest green';
            case 'Water':
                return 'light blue'
            default: return 'white'
        }
      }

    let areaMap = [];
    let currRow = [];
    
    for(let row = areaY * 10, col = -9 + (areaX * 10); row > -10 + (areaY * 10); col++){
    
        let discovered = locations.filter(spot => {
            return spot.x_location === col && spot.y_location === row
        })
        if(!discovered[0]){
            discovered = null
        }

      if(col === 10 * areaX){
        if(discovered !== null){
            let color = colorGen(discovered[0].area_type)
            console.log(discovered[0].area_type, color)


            currRow.push({
                x: discovered[0].x_location,
                y: discovered[0].y_location,
                type: discovered[0].area_type,
                name: discovered[0].area_name,
                discovered_by: discovered[0].discovered_by,
                color
            })
            areaMap.push(currRow)
            
            currRow = []
            
            col = -10 + (areaX * 10);
            row--
        } else {
            currRow.push({x: col, y: row});
            areaMap.push(currRow)
    
            currRow = []
    
            col = -10 + (areaX * 10);
            row--
        }
      } else {
          if(discovered !== null){
            let color = colorGen(discovered[0].area_type)
            
            console.log(discovered[0].area_type, color)

            currRow.push({
                x: discovered[0].x_location,
                y: discovered[0].y_location,
                type: discovered[0].area_type,
                name: discovered[0].area_name,
                discovered_by: discovered[0].discovered_by,
                color
            })
          } else {
              currRow.push({
                  x: col, 
                  y: row,
                  type: undefined,
                  name: undefined,
                  discovered_by: undefined
                })

          }
      }
    }
    return areaMap
  }

  
// might change move functionality location

//   export function move(e){
//     switch(e.key){
//       case 'ArrowRight':
      
//         if(initialState.heroX + 1 > initialState.mapX * 10) {
//             getMap(initialState.mapX + 1, initialState.mapY)
//             return {
//                 type: MOVE,
//                 payload: {
//                     heroX: initialState.heroX + 1, 
//                     mapX: initialState.mapX + 1, 
//                     prevX: initialState.heroX
//                 }
//             }
        
//         }
//         else {
//             return {
//                 type: MOVE,
//                 payload: {
//                     heroX: initialState.heroX + 1, 
//                     mapX: initialState.mapX, 
//                     prevX: initialState.heroX
//                 }
//             }
//         }
//           break;
//       case 'ArrowLeft':
//           this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentX: this.state.currentX - 1})

//           if(this.state.currentX - 1 < ((this.state.areaX - 1) * 10) + 1) {
//             this.setState({areaX: this.state.areaX - 1})
//             this.props.getMap(this.state.areaX - 1, this.state.areaY)
//             this.props.updateArea(this.state.areaX - 1, this.state.areaY)
//           }
//           break;
//       case 'ArrowUp':
//           this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentY: this.state.currentY + 1})

//           if(this.state.currentY + 1 > this.state.areaY * 10) {
//             this.setState({areaY: this.state.areaY + 1})
//             this.props.getMap(this.state.areaX, this.state.areaY + 1)
//             this.props.updateArea(this.state.areaX, this.state.areaY + 1)
//           }
//           break;
//       case 'ArrowDown':
//           this.setState({prevX: this.state.currentX, prevY: this.state.currentY, currentY: this.state.currentY - 1})
          
//           if(this.state.currentY - 1 < ((this.state.areaY - 1) * 10) + 1) {
//             this.setState({areaY: this.state.areaY - 1})
//             this.props.getMap(this.state.areaX, this.state.areaY - 1)
//             this.props.updateArea(this.state.areaX, this.state.areaY - 1)
//           }
//           break;
//       default: return null
//     }
//   }









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
            console.log(state)
            return {
                ...state,
                isLoading: false,
                locations: action.payload.locations,
                areaMap: action.payload.builtMap
            }

        case UPDATE_AREA:
            return {
                ...state,
                mapX: action.payload.X,
                mapY: action.payload.Y
            }
    
        case BUILD_MAP:
            console.log(action.payload, 'in build')
            return {
                ...state,
                areaMap: action.payload
            }
        default:
            return state
    }

}