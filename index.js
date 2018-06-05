// @flow

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

export default class KeepAwake extends Component<void, void> {
  componentWillMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return null;
  }
}
