import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen'
import Header from './components/Header'
import NameSearchScreen from './components/NameSearchScreen'
import TagSearchScreen from './components/TagSearchScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"        
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Inicio',
            }}
          />
          <Drawer.Screen
            name="Name"
            component={NameSearchScreen}
            options={{
              title: 'Busqueda por Nombre',
            }}
          />
          <Drawer.Screen
            name="Tag"
            component={TagSearchScreen}
            options={{
              title: 'Busqueda por Etiqueta',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#0BAAFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
