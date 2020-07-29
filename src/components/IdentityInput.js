/* eslint-disable react/prop-types */
import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

import styled from 'styled-components/native';

export default ({
	placeholder,
	setState,
	state,
	identityType,
	setIdentityType,
	returnKeyType,
	onSubmitEditing,
	inputRef,
}) => {
	const dealtString = maskedText => {
		return maskedText.replace(/[^\d]+/g, '');
	};

	const configuration = maskedText => {
		const maskedTextReplaced = maskedText.replace(/[^\d]+/g, '');

		if (maskedTextReplaced.length >= 9) {
			setIdentityType('cpf');
		} else {
			setIdentityType('crp');
		}
		setState(dealtString(maskedText));
	};

	const changeMask = () => {
		if (identityType === 'cpf') {
			return '999.999.999-99*';
		}
		return '99/99999-9*';
	};

	return (
		<Container>
			<InputContainer>
				<TextInputMask
					type="custom"
					options={{
						mask: changeMask(),
					}}
					value={state}
					onChangeText={configuration}
					style={{ fontSize: 17, color: '#ACB1B1' }}
					placeholder={placeholder}
					placeholderTextColor="#ACB1B1"
					keyboardType="numeric"
					returnKeyType={returnKeyType || 'default'}
					refInput={inputRef}
					onSubmitEditing={() => onSubmitEditing()}
				/>
			</InputContainer>
		</Container>
	);
};

const Container = styled.View`
	background-color: transparent;
	padding: 15px 20px;
`;

export const InputContainer = styled.View`
	flex-direction: row;
	border: 3px solid #acb1b1;
	background-color: #fefefe;
	border-radius: 12px;
	padding-left: 10px;
	align-items: center;
	min-height: 50px;
`;
