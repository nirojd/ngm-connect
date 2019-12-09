import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text
} from "native-base";
import React, { Component } from "react";
import { AsyncStorage, StyleSheet, TouchableHighlight } from "react-native";
class LoginScreen extends Component {
  state = {
    registration: "",
    contact: ""
  };

  handleLogin = async () => {
    const { registration, contact } = this.state;
    if (registration !== "" && contact !== "") {
      var details = {
        reg_no: "HT01PA0021",
        contact_no: "9802112173"
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      let response = await fetch(
        "https://fsc.ngmhero.com/users/json_customer_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
          },
          body: formBody
        }
      );
      let responseJson = await response.json();
      if (responseJson && responseJson.status === "Success") {
        AsyncStorage.setItem("TASKS", "1");
        this.props.navigation.navigate("Profile", { data: responseJson });
      } else {
        alert(`Please provide valid registration and contact numbers.`);
      }
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
