import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

const logo = require('../assets/data/PreloadLogo.png');

const Preload = ({ token, navigation: { dispatch } }) => {
	useEffect(() => {
		setTimeout(() => {
			if (!token) {
				dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'On1' }],
					})
				);
			} else {
				dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'PsicoHome' }],
					})
				);
			}
		}, 5000);
	}, [dispatch, token]);

	return (
		<Container>
			<Image source={logo} resizeMode="contain" />
		</Container>
	);
};

Preload.propTypes = {
	token: PropTypes.string,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

Preload.defaultProps = {
	token: null,
};

export default connect(({ auth: { token } }) => ({ token }), {})(Preload);

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #f2f2f2;
`;

const Image = styled.Image`
	width: 80%;
`;
