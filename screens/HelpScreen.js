import { Icon, List, ListItem, Text } from "native-base";
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

class HelpScreen extends Component {
  state = {};

  handlePage = screenName => {
    switch (screenName) {
      case "facebook":
        WebBrowser.openBrowserAsync(
          "https://www.facebook.com/ngmheromotocorp/"
        );
        break;
      case "youtube":
        WebBrowser.openBrowserAsync(
          "https://www.youtube.com/watch?v=65m2NvN2h40"
        );
        break;
      default:
        this.props.navigation.navigate(screenName);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          <ListItem onPress={() => this.handlePage("NearByServices")}>
            <Icon active name="md-pin" style={{ color: "red" }} />
            <Text> NearBy Services</Text>
          </ListItem>
          <ListItem onPress={() => this.handlePage("SMS")}>
            <Icon active name="md-send" style={{ color: "green" }} />
            <Text> SMS</Text>
          </ListItem>
          <ListItem onPress={() => this.handlePage("facebook")}>
            <Icon active name="logo-facebook" style={{ color: "blue" }} />
            <Text> Facebook</Text>
          </ListItem>
          <ListItem onPress={() => this.handlePage("youtube")}>
            <Icon active name="logo-youtube" style={{ color: "red" }} />
            <Text> Youtube</Text>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}

export default HelpScreen;

HelpScreen.navigationOptions = ({ navigation }) => {
  let title = "Help";

  return {
    title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
