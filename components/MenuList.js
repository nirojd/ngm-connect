import { Icon } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from "react-native-popup-menu";

export default class MenuList extends Component {
  handleLogout = async () => {
    AsyncStorage.clear();
    AsyncStorage.setItem("TASKS", "0");
    await this.props.navigation.navigate("Home");
  };

  render() {
    const renderTouchable = () => <TouchableOpacity />;

    return (
      <Menu style={styles.container}>
        <MenuTrigger renderTouchable={renderTouchable}>
          <Icon name="md-menu" />
        </MenuTrigger>
        <MenuOptions
          renderTouchable={renderTouchable}
          style={styles.menuOptions}
        >
          <MenuOption onSelect={() => this.handleLogout()}>
            <Text style={styles.txt}>Logout</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  menuOptions: {
    padding: 10
  },
  txt: {
    fontSize: 20
  }
});
