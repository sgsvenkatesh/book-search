import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome World! 😁</Text>
      </View>
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
