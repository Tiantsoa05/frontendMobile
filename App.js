import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Accueil from './components/Accueil';
import Panier from './components/Panier';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Liste from './components/Liste';
import Payement from "./components/Payement";
import { Provider, useSelector } from "react-redux"
import { cartStore } from './store/CartReducer';

const Tab = createBottomTabNavigator()

function Tabs() {

  const {cartSize} = useSelector(state => state.cart)

  return <Tab.Navigator
    screenOptions={
      ({ route }) => (
        {
          tabBarActiveTintColor: 'grey',
          tabBarInactiveTintColor: 'black',
          labelStyle: { fontSize: 18 },
          headerShown: false,
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "white"
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            color = focused ? "#5665ff" : "black"
            switch (route.name) {
              case "Home": {
                iconName = "home"
                break
              }
              case "Commandes": {
                iconName = "shopify"
                break
              }
              case "Liste": {
                iconName = "shopify"
                break
              }
              case "Payement": {
                iconName = "credit-card"
                break
              }
              case "Panier": {
                iconName = "shopping-cart"
                break
              }

            }
            return (
              <FontAwesome5
                name={iconName}
                size={24}
                color={color}
              />
            )
          }
        }
      )
    }
  >

    <Tab.Screen
      name='Home'
      component={Accueil}
    />
    <Tab.Screen
      name='Liste'
      component={Liste}
    />
    <Tab.Screen
      name='Panier'
      component={Panier}
      options={(cartSize > 0) && { tabBarBadge: cartSize }}
    />
    <Tab.Screen
      name='Payement'
      component={Payement}
    />
  </Tab.Navigator>
}
export default function App() {
  return (
    <Provider store={cartStore}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}

