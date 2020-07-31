import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/FontAwesome';
import Icon2 from '@expo/vector-icons/Foundation';
import Icon3 from '@expo/vector-icons/MaterialIcons';

import { Item } from '../../../components/Item';

const topImage = require('../../../assets/images/topImage.png');

const PsicoHome = ({ pacienteList, navigation: { navigate } }) => {
	const [selected, setSelected] = React.useState(new Map());

	const onSelect = useCallback(
		id => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected]
	);
	return (
		<Container>
			<Image source={topImage} />
			<ContainerSearch>
				<InputSearch
					placeholderTextColor="rgba(0, 0, 0, 0.3)"
					placeholder="Digite o nome de um paciente"
				/>
				<ContainerIcon>
					<Icon name="search" size={20} color="rgba(0, 0, 0, 0.3)" />
				</ContainerIcon>
			</ContainerSearch>
			<ContainerList>
				<FlatList
					data={pacienteList}
					renderItem={({ item }) => (
						<Item
							navigate={navigate}
							data={item}
							selected={!!selected.get(item.id)}
							onSelect={onSelect}
							setSelected={setSelected}
						/>
					)}
					keyExtractor={item => item.id}
					extraData={selected}
				/>
			</ContainerList>

			<ContainerItems>
				<ContainerButtonRelates>
					<ButtonRelates>
						<Icone2
							name="clipboard-pencil"
							size={40}
							color="#9e63ee"
						/>
						<TextRelates>Relatórios</TextRelates>
					</ButtonRelates>
				</ContainerButtonRelates>

				<ListIcons>
					<ContaineIcon>
						<Icone name="clock-o" color="#9E63EE" size={40} />
					</ContaineIcon>
					<ContaineIcon>
						<Icone name="envelope" color="#9E63EE" size={40} />
					</ContaineIcon>
					<ContaineIcon>
						<IconeNot
							name="notifications"
							color="#9E63EE"
							size={40}
						/>
					</ContaineIcon>
					<ContaineIcon>
						<Icone name="cog" color="#9E63EE" size={40} />
					</ContaineIcon>
				</ListIcons>
			</ContainerItems>
		</Container>
	);
};

PsicoHome.propTypes = {
	pacienteList: PropTypes.shape([]).isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

export default connect(
	({ auth: { pacienteList } }) => ({ pacienteList }),
	{}
)(PsicoHome);

const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: #fff8f8;
`;

const InputSearch = styled.TextInput`
	padding: 0 10px;
	border-radius: 20px;
	background-color: #f1ecec;
`;
const ContainerSearch = styled.View`
	justify-content: center;
	align-items: center;
	margin: 20px 50px;
	padding-left: 10px;
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	background-color: #f1ecec;
	flex-direction: row;
`;

const ContainerIcon = styled.TouchableOpacity`
	padding: 15px 15px;
	border-radius: 20px;
`;

const ContainerList = styled.View`
	flex: 1;
	width: 80%;
`;

const Image = styled.Image`
	width: 100%;
`;

const ContainerItems = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;
const ButtonRelates = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const TextRelates = styled.Text`
	margin-top: 8px;
	margin-left: 10px;
	font-size: 20px;
	color: #9e63ee;
`;

const Icone2 = styled(Icon2)`
	margin-top: 8px;
`;

const ListIcons = styled.View`
	flex-direction: row;
	margin-top: 20px;
	margin-bottom: 40px;
`;

const Icone = styled(Icon)`
	padding-top: 20px;
	margin: 20px;
`;

const IconeNot = styled(Icon3)`
	margin: 20px;
	padding-top: 20px;
`;

const ContainerButtonRelates = styled.View`
	elevation: 5;
	width: 70%;
	height: 70px;
	align-items: center;
	justify-content: center;
	elevation: 7;
	border-radius: 10px;
`;

const ContaineIcon = styled.View`
	elevation: 5;
	width: 20%;
	height: 70px;
	align-items: center;
	justify-content: center;
	elevation: 7;
	border-radius: 10px;
`;
