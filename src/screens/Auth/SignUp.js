// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components/native';
// import { CommonActions } from '@react-navigation/native';
// import { connect } from 'react-redux';

// const Preload = ({ token, navigation: { dispatch } }) => {
// 	useEffect(() => {
// 		if (token === '') {
// 			dispatch(
// 				CommonActions.reset({
// 					index: 0,
// 					routes: [{ name: 'SignIn' }],
// 				})
// 			);
// 		} else {
// 			dispatch(
// 				CommonActions.reset({
// 					index: 0,
// 					routes: [{ name: 'SignUp' }],
// 				})
// 			);
// 		}
// 	}, [dispatch, token]);

// 	return (
// 		<Container>
// 			<Text>Behaviour</Text>
// 		</Container>
// 	);
// };

// Preload.propTypes = {
// 	token: PropTypes.string.isRequired,
// 	navigation: PropTypes.shape({
// 		dispatch: PropTypes.func.isRequired,
// 	}).isRequired,
// };

// const mapStateToProps = ({ auth: { token } }) => ({
// 	token,
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Preload);

// const Container = styled.View`
// 	flex: 1;
// 	justify-content: center;
// 	align-items: center;
// `;

// const Text = styled.Text`
// 	font-size: 20px;
// `;
