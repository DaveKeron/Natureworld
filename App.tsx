import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './screens/MapScreen';
import BuildScreen from './screens/BuildScreen';
import ContributeScreen from './screens/ContributeScreen';
import EducationScreen from './screens/EducationScreen';
import CommonsScreen from './screens/CommonsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Build" component={BuildScreen} />
          <Tab.Screen name="Contribute" component={ContributeScreen} />
          <Tab.Screen name="Education" component={EducationScreen} />
          <Tab.Screen name="Commons" component={CommonsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}