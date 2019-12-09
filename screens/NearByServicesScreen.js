import React, { Component } from "react";
import { Text, Container, Content, Icon } from "native-base";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Platform } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

class NearByServicesScreen extends Component {
  state = {
    location: {
      coords: {
        latitude: null,
        longitude: null
      }
    },
    markers: null,
    errorMessage: null,
    selected: true,
    mapMargin: 1
  };

  setMargin = () => {
    this.setState({ mapMargin: 0 });
  };

  componentWillMount() {
    // get data
    fetch("https://www.ngmhero.com/?sm-xml-search=1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ markers: responseJson });
      })
      .catch(error => console.error(error));

    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let cLocation = Object.assign({}, this.state);

    cLocation.location.coords.longitude = location.coords.longitude;
    cLocation.location.coords.latitude = location.coords.latitude;
    this.setState(cLocation);
  };

  handleMarker = () => {
    console.warn("ok");
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>T@</Text>
      </View>
    );
  };

  render() {
    let text = "Waiting...";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location.coords) {
      text = JSON.stringify(this.state.location.coords);
    }

    if (this.state.location.coords) {
      const { height, width } = Dimensions.get("window");
      const LATITUDE = this.state.location.coords.latitude;
      const LONGITUDE = this.state.location.coords.longitude;
      const LATITUDE_DELTA = 0.28;
      const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{text}</Text>
          {this.state.location.coords.latitude && (
            <MapView
              style={{ ...styles.mapStyle, marginBottom: this.state.mapMargin }}
              onMapReady={this.setMargin}
              minZoomLevel={12}
              maxZoomLevel={17}
              provider="google"
              followsUserLocation={true}
              showsUserLocation={true}
              showsMyLocationButton={true}
              showsCompass={true}
              region={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }}
            >
              {this.state.markers &&
                this.state.markers.map(marker => (
                  <Marker
                    key={marker.ID}
                    coordinate={{
                      latitude: parseFloat(marker.lat),
                      longitude: parseFloat(marker.lng)
                    }}
                    title={marker.name}
                  >
                    <Icon
                      name="md-bicycle"
                      style={{ color: "red" }}
                      onPress={() => this.handleMarker()}
                    />
                  </Marker>
                ))}
            </MapView>
          )}
        </View>
      );
    }
  }
}

export default NearByServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 20
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1
  },
  marker: {
    padding: 5,
    borderRadius: 5
  }
});
