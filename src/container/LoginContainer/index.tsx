// @flow
import * as React from "react";
import { Item, Input, Icon, View, Text, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";

import Login from "../../stories/screens/Login";

export interface Props {
	navigation: any;
	loginForm: any;
}
export interface State {}

@inject("loginForm")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		this.props.loginForm.validateForm();
		if (this.props.loginForm.isValid) {
			this.props.loginForm.clearStore();
			this.props.navigation.navigate("Drawer");
		} else {
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
		const Fields = (
			<View>
				<View>
					<Item error={form.emailError ? true : false}>
						<Icon active name="person" />
						<Input
							placeholder="EMAIL"
							keyboardType="email-address"
							ref={c => (this.emailInput = c)}
							value={form.email}
							onBlur={() => form.validateEmail()}
							onChangeText={e => form.emailOnChange(e)}
						/>
						{form.emailError ? (
							<Icon active onPress={() => this.emailInput._root.clear()} name="close" />
						) : (
							<Text />
						)}
					</Item>
					{form.emailError ? (
						<Text style={{ color: "red", fontSize: 13, textAlign: "right" }}>{form.emailError}</Text>
					) : (
						<Text style={{ color: "transparent", fontSize: 13, textAlign: "right" }}>No error</Text>
					)}
				</View>
				<View>
					<Item error={form.passwordError ? true : false}>
						<Icon active name="unlock" />
						<Input
							placeholder="PASSWORD"
							ref={c => (this.pwdinput = c)}
							value={form.password}
							onBlur={() => form.validatePassword()}
							onChangeText={e => form.passwordOnChange(e)}
							secureTextEntry={true}
						/>
						{form.passwordError ? (
							<Icon active onPress={() => this.pwdinput._root.clear()} name="close" />
						) : (
							<Text />
						)}
					</Item>
					{form.passwordError ? (
						<Text style={{ color: "red", fontSize: 13, textAlign: "right" }}>{form.passwordError}</Text>
					) : (
						<Text style={{ color: "transparent", fontSize: 13, textAlign: "right" }}>No error</Text>
					)}
				</View>
			</View>
		);
		return <Login loginForm={Fields} onLogin={() => this.login()} />;
	}
}
