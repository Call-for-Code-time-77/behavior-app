/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/FontAwesome5';

export default ({
	placeholder,
	value,
	onChangeText,
	rightIcon,
	secureTextEntry,
	autoCorrect,
	autoCapitalize,
	keyboardType,
	returnKeyType,
	inputRef,
	togglePass,
	onSubmitEditing,
}) => {
	return (
		<Container>
			<InputContainer>
				<Input
					placeholder={placeholder}
					placeholderTextColor="#ACB1B1"
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={secureTextEntry || false}
					autoCorrect={autoCorrect}
					autoCapitalize={autoCapitalize}
					togglePass={togglePass}
					keyboardType={keyboardType || 'default'}
					returnKeyType={returnKeyType || 'default'}
					ref={inputRef}
					onSubmitEditing={() => onSubmitEditing()}
				/>
				<RightIconContainer>
					<RightIconInput
						name={rightIcon}
						size={24}
						color="#ACB1B1"
						onPress={() => {
							togglePass();
						}}
					/>
				</RightIconContainer>
			</InputContainer>
		</Container>
	);
};

const Container = styled.View`
	background-color: transparent;
	padding: 10px 20px;
`;

const InputContainer = styled.View`
	flex-direction: row;
	background-color: #fefafa;
	border-radius: 12px;
	align-items: center;
`;

const Input = styled.TextInput`
	align-self: center;
	font-size: 16px;
	color: #acb1b1;
	padding-left: 10px;
	flex: 1;
	min-height: 46px;
`;

const RightIconContainer = styled.View`
	height: 30px;
	width: 30px;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
`;

const RightIconInput = styled(Icon)``;
