import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  NavigationActions,
  NavigationNavigatorProps,
  addNavigationHelpers,
} from "react-navigation";

import { i18n } from "./i18n";

interface State {
  i18n: any;
}

interface Props extends NavigationNavigatorProps<App> {}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      i18n: i18n,
    };
  }

  componentDidMount() {
  }

  render() {
    return <View />;
  }
}

export default App;
