import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";
export default function (stores) {
    return class Setup extends React.Component {
        render() {
            return (React.createElement(StyleProvider, { style: getTheme(variables) },
                React.createElement(Provider, Object.assign({}, stores),
                    React.createElement(App, null))));
        }
    };
}
//# sourceMappingURL=setup.js.map