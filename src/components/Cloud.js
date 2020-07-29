import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Cloud = ({ pos }) => {
	if (pos === '1') {
		return <Container3 name="apple-icloud" size={80} color="#FFE0E2" />;
	}
	if (pos === '2') {
		return <Container2 name="apple-icloud" size={80} color="#FFE0E2" />;
	}
	return <Container1 name="apple-icloud" size={80} color="#FFE0E2" />;
};

Cloud.propTypes = {
	pos: PropTypes.string.isRequired,
};

export default Cloud;

const Container1 = styled(Icon)`
	position: absolute;
	left: 10.87%;
	top: 17.64%;
`;

const Container2 = styled(Icon)`
	position: absolute;
	right: 40.86%;
	top: 37.13%;
`;

const Container3 = styled(Icon)`
	position: absolute;
	left: 62.4%;
	top: 3.96%;
`;
