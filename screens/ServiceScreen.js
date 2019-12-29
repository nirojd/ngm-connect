import React, { Component } from "react";
import {
  Container,
  Card,
  CardItem,
  Text,
  Content,
  Icon,
  Button,
  Row,
  Col,
  Body,
  Left,
  Fab
} from "native-base";
import QRCode from "react-native-qrcode";
import { StyleSheet, View, TextInput } from "react-native";
import API from "../constants/API";

class ServiceScreen extends Component {
  state = {
    text: "http://facebook.github.io/react-native/",
    baseURL: API.baseURL,
    data: null,
    active: false
  };

  async componentDidMount() {
    const { baseURL } = this.state;
    // const value = await AsyncStorage.getItem("TASKS");
    // if (value === null) await this.props.navigation.navigate("Login");
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
            {data.ServiceCoupon.length > 0 &&
              data.ServiceCoupon.map((services, index) => {
                return (
                  <Card key={index}>
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
                            <Text>{services.registration_no}</Text>
                            <Text>{services.service_date}</Text>
                          </Col>
                          <Col>
                            <Text>{services.service_type}</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Text>{services.coupon_no}</Text>
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
                );
              })}
          </Content>
        )}

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ marginLeft: 10 }}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="md-share" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="ios-mail" />
          </Button>
        </Fab>
      </Container>
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
