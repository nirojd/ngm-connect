import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HelpScreen from "../screens/HelpScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ServiceScreen from "../screens/ServiceScreen";
import SMSScreen from "../screens/SMSScreen";
import NearByServicesScreen from "../screens/NearByServicesScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

// Service Screen Start

const ServiceStack = createStackNavigator(
  {
    Service: ServiceScreen
  },
  config
);

ServiceStack.navigationOptions = {
  tabBarLabel: "Services",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

ServiceStack.path = "";

// Service Screen End

// Profile Screen Start
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
    // Login: LoginScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

ProfileStack.path = "";

// Profile Screen End

// Help Screen Start
const HelpStack = createStackNavigator(
  {
    Help: HelpScreen,
    SMS: SMSScreen,
    NearByServices: NearByServicesScreen
  },
  config
);

HelpStack.navigationOptions = {
  tabBarLabel: "Help",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-help" : "md-help"}
    />
  )
};

HelpStack.path = "";

// Help Screen End

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login"
    }
  }
});

const tabNavigator1 = createBottomTabNavigator({
  HomeStack,
  ServiceStack,
  ProfileStack,
  HelpStack
});

tabNavigator1.path = "";

// export default tabNavigator;

const App = createSwitchNavigator({
  App: {
    screen: tabNavigator1
  },
  Auth: {
    screen: AuthStack
  }
});

export default createAppContainer(App);
