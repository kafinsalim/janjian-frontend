let initialState = {
    starwars: []
}

const getDataSwapi = (state,payload) => {
    let newState = JSON.parse(JSON.stringify(state));
    let arrName = [];

    payload.forEach((swapi, index) => {
        arrName.push({
            name: swapi.name,
            gender: swapi.gender,
            height: swapi.height,
            homeworld: swapi.homeworld,
        });
    });

    newState.starwars = arrName;
    
    return newState;
}

const swapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWAPIDATA': return getDataSwapi(state,action.payload);
        default: return state;
    }
}

export default swapiReducer;