/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'normalize.css/normalize.css'

import React from "react";

import 'core-js/es'  
import 'react-app-polyfill/ie9'  
import 'react-app-polyfill/stable'

import styled from "styled-components";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  styled,
  ...React,
};

export default ReactLiveScope;
