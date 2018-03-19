import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [{key: 'a'}, {key: 'b'}]
    };

    this.goToNextRoute = this.goToNextRoute.bind(this);
  }

  pushToList(text) {
    if (!text) { return; }
    this.setState({
      list: this.state.list.concat(
        [{ key: text }]
      ),
      text: ""
    });
  }

  goToNextRoute() {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.goToNextRoute}
          title="Go to details screen"
          color="blue"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={text => this.setState({ text }) }
          value={this.state.text}
        />
        <Button
          onPress={() => this.pushToList(this.state.text)}
          title="Push"
          color="#000"
        />
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
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
