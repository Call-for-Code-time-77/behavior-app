import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const Preload = () => (
    <Container>
        <Text>Behaviour</Text>
    </Container>
);

const mapStateToProps = ({auth: {name}}) => ({
    name
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Preload)

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center
`;

const Text = styled.Text`
    font-size: 20px;
`;