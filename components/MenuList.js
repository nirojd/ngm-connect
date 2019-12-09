import { Icon } from "native-base";
import React, { Component } from "react";
import { AsyncStorage, StyleSheet, TouchableOpacity } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger
} from "react-native-popup-menu";

export default class MenuList extends Component {
  handleLogout = async () => {
    AsyncStorage.setItem("TASKS", null);
    await this.props.navigation.navigate("Login");
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
            <Icon name="md-log-out" />
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
  }
});
