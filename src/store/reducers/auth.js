const initialState = {
    name: '',
    email: '',
    crp: '',
    cpf: ''
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'setName': 
            return {...state, name: action.payload.name}
        
        case 'setEmail': {
            return {...state, email: action.payload.email}
        }

        case 'setCRP': {
            return {...state, crp: action.payload.crp}
        }

        case 'setCPF': {
            return {...state, cpf: action.payload.cpf}
        }

        default:
            return state;
    }
}