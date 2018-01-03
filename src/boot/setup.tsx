import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export interface Props {}
export interface State {}
export default function(stores) {
  return class Setup extends React.Component<Props, State> {
    render() {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Provider {...stores}>
            <App />
          </Provider>
        </StyleProvider>
      );
    }
  };
}
