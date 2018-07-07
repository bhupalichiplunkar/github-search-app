import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      error: false
    };
  }

  handleInputChange = event => {
    const username = event.nativeEvent.text;
    this.setState({ username });
  };

  handleClick = () => {
    console.log("Clicked");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}> Search github username</Text>
        <TextInput
          style={styles.input}
          placeholder="eg: chipchipotle"
          onChangeText={text => this.setState({ text })}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleClick}
          underlayColor="#C8E6C9"
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0ba3ad"
  },
  label: {
    color: "#ffffff",
    color: "#ffffff"
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 2,
    margin: 15
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 2
  },
  buttonText: {
    color: "#0ba3ad"
  }
});

export default Main;
