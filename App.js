import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import { StackNavigator } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    top: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pushButton: {
    width: 200,
    height: 50,
    backgroundColor: "blue",
    color: "black"
  }
});
