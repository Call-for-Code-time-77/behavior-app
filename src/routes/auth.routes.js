import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload';
import On1 from '../screens/Onboarding/On1';
import On2 from '../screens/Onboarding/On2';
import On3 from '../screens/Onboarding/On3';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import PsicoHome from '../screens/Intern/Psico/Home';
import Infos from '../screens/Intern/Psico/Infos';
import Config from '../screens/Intern/Psico/Config';

const Stack = createStackNavigator();

export default () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Preload" component={Preload} />
				<Stack.Screen name="On1" component={On1} />
				<Stack.Screen name="On2" component={On2} />
				<Stack.Screen name="On3" component={On3} />
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="PsicoHome" component={PsicoHome} />
				<Stack.Screen name="Infos" component={Infos} />
				<Stack.Screen name="Config" component={Config} />
				{/* <Stack.Screen name="" component={} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
