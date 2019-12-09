import React, { Component } from "react";
import {
  Container,
  Card,
  CardItem,
  Text,
  Content,
  Grid,
  Row,
  Col,
  Body,
  Left
} from "native-base";
import QRCode from "react-native-qrcode";
import { StyleSheet, View, TextInput } from "react-native";
import API from "../constants/API";

class ServiceScreen extends Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    baseURL: API.baseURL,
    data: null
  };

  async componentDidMount() {
    const { baseURL } = this.state;
    const value = await AsyncStorage.getItem("TASKS");
    if (value === null) await this.props.navigation.navigate("Login");
    // Fetch data
    const data = {
      ServiceCoupon: [
        {
          dealer_id: null,
          dealer_name: null,
          fsc_no: "A",
          vehicle_id: "76848",
          registration_no: "HT01PA0021",
          feedback: null,
          schedule_type: "1",
          coupon_no: "1850308543",
          service_type: "paid",
          id: "382944",
          distance: null,
          discount: null,
          duration: null,
          status: "1",
          service_km: null,
          estimated_time: null,
          estimated_cost: null,
          service_date: null,
          sort_order: "1"
        }
      ],
      status: "Success",
      data: {
        message:
          "Note:- Your service coupon number 1850308543 is active. You will be informed once completed",
        request_fsc: false,
        schedule_btn_status: true
      }
    };

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        {data && (
          <Content padder>
            <Card>
              <CardItem>
                <Left>
                  <Row>
                    <Text>#Aasdasds</Text>
                  </Row>
                  <Row>
                    <View style={styles.container}>
                      <QRCode
                        value={{
                          user: "2051020@gmail.com",
                          loyaltyId: "fasdfasdf"
                        }}
                        size={100}
                        bgColor="purple"
                        fgColor="white"
                      />
                    </View>
                  </Row>
                </Left>
                <Body>
                  <Row>
                    <Col>
                      <Text>HT01PA0021</Text>
                      <Text>Date</Text>
                    </Col>
                    <Col>
                      <Text>Paid</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Text>1850308543</Text>
                    </Col>
                    <Col>
                      <Text>NA</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Text>Dealer no assigned</Text>
                  </Row>
                  <Row>
                    <Text>No Discount Available</Text>
                  </Row>
                </Body>
              </CardItem>
            </Card>
          </Content>
        )}
      </Container>
      // <View style={styles.container}>
      //   <TextInput
      //     style={styles.input}
      //     onChangeText={text => this.setState({ text: text })}
      //     value={this.state.text}
      //   />
      //   <QRCode
      //     value={{ user: "2051020@gmail.com", loyaltyId: "fasdfasdf" }}
      //     size={200}
      //     bgColor="purple"
      //     fgColor="white"
      //   />
      // </View>
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
