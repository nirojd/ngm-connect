import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Title
} from "native-base";
import Constants from "expo-constants";
import { StyleSheet, TouchableHighlight, AsyncStorage } from "react-native";

class LoginScreen extends Component {
  state = {
    registration: "",
    contact: ""
  };

  handleLogin = () => {
    const { registration, contact } = this.state;
    if (registration !== "" && contact !== "") {
      // var details = {
      //   reg_no: "HT01PA0021",
      //   conatct_no: "9802112173"
      // };
      // var formBody = [];
      // for (var property in details) {
      //   var encodedKey = encodeURIComponent(property);
      //   var encodedValue = encodeURIComponent(details[property]);
      //   formBody.push(encodedKey + "=" + encodedValue);
      // }
      // formBody = formBody.join("&");
      // fetch("https://fsc.ngmhero.com/users/json_customer_login", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json;application/x-www-form-urlencoded",
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   body: formBody
      // })
      //   .then(response => response.json())
      //   .then(responseJson => console.warn("Result", responseJson))
      //   .catch(err => console.error("Error ", err));
      AsyncStorage.setItem("TASKS", "1");
      this.props.navigation.navigate("Profile");
    } else {
      alert(`Please provide valid registration and contact numbers.`);
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Registration</Label>
              <Input
                placeholder="Registration"
                onChangeText={registration => this.setState({ registration })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Contact</Label>
              <Input
                placeholder="Contact"
                onChangeText={contact => this.setState({ contact })}
              />
            </Item>

            <TouchableHighlight style={styles.btn}>
              <Button full primary onPress={() => this.handleLogin()}>
                <Text> Login </Text>
              </Button>
            </TouchableHighlight>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;

LoginScreen.navigationOptions = {
  headerLeft: null,
  title: "Login"
};

const styles = StyleSheet.create({
  btn: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
});
