
import React from 'react';
import ToDo from '../components/ToDo';
import ToDo2 from '../components/ToDo2';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ margin: 10, width: 200 }}>
            <Button 
            title="Rascunho 1"
            onPress={() => navigation.navigate('To-Do List - One')}
            />
        </View>
        <View style={{ margin: 10, width: 200 }} >
            <Button
            title="Rascunho 2"
            onPress={() => navigation.navigate('To-Do List - Two')}
            />
        </View>
      </View>
    );
}

function Rascunho1() {
    return (
      <ToDo/>
    );
}

function Rascunho2() {
    return (
      <ToDo2/>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="To-Do List - One" component={Rascunho1} />
        <Stack.Screen name="To-Do List - Two" component={Rascunho2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
