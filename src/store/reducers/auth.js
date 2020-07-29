const initialState = {
	token: null,
	name: '',
	password: '',
	email: '',
	identityNumber: '',
	identityType: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'setToken': {
			return { ...state, token: action.payload.token };
		}

		case 'setName': {
			return { ...state, name: action.payload.name };
		}

		case 'setEmail': {
			return { ...state, email: action.payload.email };
		}

		case 'setPassword': {
			return { ...state, password: action.payload.password };
		}

		case 'setIdentityNumber': {
			return { ...state, identityNumber: action.payload.identityNumber };
		}

		// CPF or CRP
		case 'setIdentityType': {
			return { ...state, identityType: action.payload.identityType };
		}

		default:
			return state;
	}
};
