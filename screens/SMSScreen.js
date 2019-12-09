import {
  Body,
  Button,
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left
} from "native-base";
import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as SMS from "expo-sms";

class SMSScreen extends Component {
  state = {};

  handleSendSMS = async phoneNumber => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      SMS.sendSMSAsync(phoneNumber, "");
    } else {
      console.warn("Something is wrong!!!");
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content>
            <List>
              <ListItem thumbnail>
                <Body>
                  <Text>1. Get the Service Number</Text>
                  <Text
                    selectable
                    note
                    numberOfLines={1}
                    style={styles.infoText}
                  >
                    SERVICE REG_NO
                  </Text>
                  <Text selectable note numberOfLines={1}>
                    Eg; SERVICE HT01PA0025
                  </Text>
                </Body>
              </ListItem>

              <ListItem thumbnail>
                <Body>
                  <Text>2. Get the current service status</Text>
                  <Text
                    selectable
                    note
                    numberOfLines={1}
                    style={styles.infoText}
                  >
                    STATUS REG_NO
                  </Text>
                  <Text selectable note numberOfLines={1}>
                    Eg; STATUS HT01PA0025
                  </Text>
                </Body>
              </ListItem>

              <ListItem thumbnail>
                <Body>
                  <Text>3. Provide feedback for Dealer/ Workshop</Text>
                  <Text
                    selectable
                    note
                    numberOfLines={1}
                    style={styles.infoText}
                  >
                    WORKSHOP DEALER_CODE/REG_NO/RATING(1/2/3)
                  </Text>
                  <Text selectable note numberOfLines={1}>
                    WORKSHOP 04101/HT01PA0025/2
                  </Text>
                </Body>
              </ListItem>

              <ListItem thumbnail>
                <Body>
                  <Text>4. Send it to</Text>
                  <Button
                    onPress={() => this.handleSendSMS("98015520000")}
                    style={styles.btnText}
                  >
                    <Text>98015520000</Text>
                  </Button>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

export default SMSScreen;

SMSScreen.navigationOptions = ({ navigation }) => {
  let title = "SMS";

  return {
    title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  infoText: {
    marginTop: 10,
    color: "rgba(96,100,109, 0.8)"
  },
  btnText: {
    width: 120
  }
});
