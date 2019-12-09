import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const MusicRoute = () => <Text style={{ backgroundColor: "red" }}>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class BottomNavigationComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "music", title: "Music", icon: "album" },
      { key: "albums", title: "Albums", icon: "album" },
      { key: "recents", title: "Recents", icon: "history" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
