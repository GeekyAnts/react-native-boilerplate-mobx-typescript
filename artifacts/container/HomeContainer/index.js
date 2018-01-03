var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from "mobx-react/native";
import Home from "../../stories/screens/Home";
import data from "./data";
let HomeContainer = class HomeContainer extends React.Component {
    componentWillMount() {
        this.props.mainStore.fetchItems(data);
    }
    render() {
        const list = this.props.mainStore.items.toJS();
        return React.createElement(Home, { navigation: this.props.navigation, list: list });
    }
};
HomeContainer = __decorate([
    inject("mainStore"),
    observer
], HomeContainer);
export default HomeContainer;
//# sourceMappingURL=index.js.map