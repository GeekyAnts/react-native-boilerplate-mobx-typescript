var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";
import Login from "../../stories/screens/Login";
let LoginContainer = class LoginContainer extends React.Component {
    login() {
        this.props.loginForm.validateForm();
        if (this.props.loginForm.isValid) {
            this.props.loginForm.clearStore();
            this.props.navigation.navigate("Drawer");
        }
        else {
            Toast.show({
                text: "Enter Valid Email & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" },
            });
        }
    }
    render() {
        const form = this.props.loginForm;
        const Fields = (React.createElement(Form, null,
            React.createElement(Item, { error: form.emailError ? true : false },
                React.createElement(Icon, { active: true, name: "person" }),
                React.createElement(Input, { placeholder: "Email", keyboardType: "email-address", ref: c => (this.emailInput = c), value: form.email, onBlur: () => form.validateEmail(), onChangeText: e => form.emailOnChange(e) })),
            React.createElement(Item, { error: form.passwordError ? true : false },
                React.createElement(Icon, { active: true, name: "unlock" }),
                React.createElement(Input, { placeholder: "Password", ref: c => (this.pwdinput = c), value: form.password, onBlur: () => form.validatePassword(), onChangeText: e => form.passwordOnChange(e), secureTextEntry: true }))));
        return React.createElement(Login, { loginForm: Fields, onLogin: () => this.login() });
    }
};
LoginContainer = __decorate([
    inject("loginForm"),
    observer
], LoginContainer);
export default LoginContainer;
//# sourceMappingURL=index.js.map