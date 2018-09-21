const occasionsDefaultState = ['Karl\'s birthday', 'A Canopening']; // Placeholder, obvs

export default (state = occasionsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OCCASION':
            return [...state, action.occasion];
        default: return state;
    }
};