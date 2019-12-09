import React, { Component } from "react";
import { Container, List, ListItem, Text, Content } from "native-base";
import QRCode from "react-native-qrcode";
import { StyleSheet, View, TextInput } from "react-native";
import API from "../constants/API";

class ServiceScreen extends Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    baseURL: API.baseURL
  };

  async componentDidMount() {
    const { baseURL } = this.state;
    const value = await AsyncStorage.getItem("TASKS");
    if (value === null) await this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        />
        <QRCode
          value={{ user: "2051020@gmail.com", loyaltyId: "fasdfasdf" }}
          size={200}
          bgColor="purple"
          fgColor="white"
        />
      </View>
    );
  }
}

export default ServiceScreen;

ServiceScreen.navigationOptions = ({ navigation }) => {
  let title = "Service";

  return {
    title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  }
});
