var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from "mobx";
class HomeStore {
    constructor() {
        this.hasErrored = false;
        this.isLoading = true;
        this.items = [];
    }
    fetchItems(data) {
        this.items = data;
        this.isLoading = false;
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], HomeStore.prototype, "hasErrored", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], HomeStore.prototype, "isLoading", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], HomeStore.prototype, "items", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomeStore.prototype, "fetchItems", null);
export default HomeStore;
//# sourceMappingURL=HomeStore.js.map