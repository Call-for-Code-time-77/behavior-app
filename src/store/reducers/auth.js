const initialState = {
	token: null,
	name: '',
	password: '',
	confirmPassword: '',
	email: '',
	cpfNumber: '',
	cprNumber: '',
	identityNumber: '',
	identityType: '',
	pacienteList: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'setToken': {
			return { ...state, token: action.payload.token };
		}

		case 'setPacienteList': {
			return { ...state, pacienteList: action.payload.pacienteList };
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

		case 'setConfirmPassword': {
			return {
				...state,
				confirmPassword: action.payload.confirmPassword,
			};
		}

		case 'setIdentityNumber': {
			return { ...state, identityNumber: action.payload.identityNumber };
		}

		case 'setCPFNumber': {
			return {
				...state,
				cpfNumber: action.payload.cpfNumber,
			};
		}

		case 'setCPRNumber': {
			return {
				...state,
				cprNumber: action.payload.cprNumber,
			};
		}

		// CPF or CRP
		case 'setIdentityType': {
			return { ...state, identityType: action.payload.identityType };
		}

		default:
			return state;
	}
};
