import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserManagementScreen from './screens/UserManagementScreen';
import UserDetailsScreen from './screens/UserDetail';
import { User } from './modules/UserManagers';

export type RootStackParamList = {
  UserManagement: undefined;
  UserDetail: { user: User };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserManagement">
        <Stack.Screen name="UserManagement" component={UserManagementScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;