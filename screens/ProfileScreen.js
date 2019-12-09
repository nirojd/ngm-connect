import moment from "moment";
import {
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Grid,
  Icon,
  List,
  ListItem,
  Root,
  Row,
  Text,
  View
} from "native-base";
import React, { Component } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import MenuList from "../components/MenuList";
import "../constants/API";
import API from "../constants/API";

class ProfileScreen extends Component {
  state = {
    isLoggedIn: false,
    baseURL: API.baseURL,
    data: null,
    data1: ""
  };

  async componentDidMount() {
    const { baseURL } = this.state;
    const value = await AsyncStorage.getItem("TASKS");
    console.warn("Value", value);
    if (value === null) await this.props.navigation.navigate("Login");
    const data = {
      Customer: {
        id: "29",
        name: "NIROJ DYOLA",
        type: "individual",
        gender: "male",
        age: "25-35",
        address: "bhaktapur",
        document_type: null,
        document_no: null,
        contact_no: "9802112173",
        contact_no_1: "",
        license_no: "",
        allow_unlimited_vehicles: null,
        created: "2018-09-19 05:02:39",
        modified_by: null,
        updated: "2019-12-05 15:46:20",
        ServiceInfo: {
          total_servicing: "12",
          remaining_servicing: "12",
          completed_servicing: "0"
        },
        VehicleDetail: null,
        CustomerDetail: null,
        Vehicle: {
          id: "76848",
          dealer_id: "86",
          customer_id: "29",
          product: "HPPRDDRSCCR",
          chasis_no: "HIMAL10BSGGH00054",
          engine_no: "HIMALVGGH00185",
          battery_no: "",
          registration_no: "HT01PA0021",
          color: "SBK (BLACK)",
          challan_date: "2018-04-02",
          date_of_sale: "2019-12-05",
          no_of_coupons: null,
          approval: "1",
          payment_type: "cash",
          last_registration_no: null,
          reg_no_modified_by: null,
          created: "2018-08-03 03:54:39",
          modified_by: "10",
          updated: "2019-12-05 15:46:20",
          model: "PASSION PRO",
          manual: ""
        },
        Dealer: {
          id: "86",
          name: "---Test Dealer 01---",
          dealer_code: "12345",
          area: null,
          state: null,
          district: null,
          address: "Hanumansthan",
          contact: "9849787330",
          contact_1: "",
          contact_2: "",
          contact_3: "",
          contact_4: "",
          contact_5: "",
          owner: "Badri Guragain",
          type: "0",
          created: "2018-05-31 07:50:39",
          modified_by: "10",
          updated: "2019-01-22 06:12:24"
        }
      },
      status: "Success",
      Survey: {
        id: "53517",
        survey_type: "ShowroomSurvey"
      }
    };
    this.setState({ data });
  }

  handlePage = () => {
    return (
      <View>
        <List>
          <ListItem>
            <Text>a</Text>
          </ListItem>
          <ListItem>
            <Text>b</Text>
          </ListItem>
        </List>
      </View>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <Root>
        <Container>
          {data && (
            <Content padder>
              <Card>
                <CardItem header bordered>
                  <Text>Service</Text>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Row>
                      <Col style={styles.serviceContent}>
                        <Col>
                          <Text>
                            {data.Customer.ServiceInfo.completed_servicing}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={styles.serviceText}>Completed</Text>
                        </Col>
                      </Col>
                      <Col style={styles.serviceContent}>
                        <Col>
                          <Text>
                            {data.Customer.ServiceInfo.remaining_servicing}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={styles.serviceText}>Remaining</Text>
                        </Col>
                      </Col>
                      <Col style={styles.serviceContent}>
                        <Col>
                          <Text>
                            {data.Customer.ServiceInfo.total_servicing}
                          </Text>
                        </Col>
                        <Col>
                          <Text style={styles.serviceText}>Total</Text>
                        </Col>
                      </Col>
                    </Row>
                  </Grid>
                </CardItem>
              </Card>

              <Card>
                <CardItem header bordered>
                  <Text>Dealer Information</Text>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Row>
                      <Col style={styles.dealerInfo}>
                        <Icon active name="md-person" />
                      </Col>
                      <Col>
                        <Text>{data.Customer.Dealer.name}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={styles.dealerInfo}>
                        <Icon active name="md-calendar" />
                      </Col>
                      <Col>
                        <Text>
                          {moment(data.Customer.Dealer.created).format(
                            "MMMM D, YYYY"
                          )}
                        </Text>
                      </Col>
                    </Row>
                  </Grid>
                </CardItem>
              </Card>

              <Card>
                <CardItem header bordered>
                  <Text>Vehicle Information</Text>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Row>
                      <Col>
                        <Text>Model No.</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.product}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Color</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.color}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Registration No.</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.registration_no}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Chasis No.</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.chasis_no}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Engine No.</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.engine_no}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Battery No.</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.Vehicle.battery_no}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>Date</Text>
                      </Col>
                      <Col>
                        <Text>
                          {moment(data.Customer.Vehicle.updated).format(
                            "MMMM D, YYYY"
                          )}
                        </Text>
                      </Col>
                    </Row>
                  </Grid>
                </CardItem>
              </Card>

              <Card>
                <CardItem header bordered>
                  <Text>Owner's Information</Text>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Row>
                      <Col>
                        <Text>Contact</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.contact_no}</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Text>License No:</Text>
                      </Col>
                      <Col>
                        <Text>{data.Customer.license_no}</Text>
                      </Col>
                    </Row>
                  </Grid>
                </CardItem>
              </Card>
            </Content>
          )}
        </Container>
      </Root>
    );
  }
}

export default ProfileScreen;

ProfileScreen.navigationOptions = ({ navigation }) => {
  let title = "Profile";
  let headerRight = (
    <View style={{ marginRight: 20 }}>
      <MenuList navigation={navigation} />
    </View>
  );

  return {
    title,
    headerRight
  };
};

const styles = StyleSheet.create({
  dealerInfo: {
    width: "auto"
  },
  serviceContent: {
    alignItems: "center"
  },
  serviceText: {
    fontWeight: "bold"
  }
});
