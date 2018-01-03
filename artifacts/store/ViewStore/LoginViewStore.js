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
class LoginStore {
    constructor() {
        this.email = "";
        this.password = "";
        this.isValid = false;
        this.emailError = "";
        this.passwordError = "";
    }
    emailOnChange(id) {
        this.email = id;
        this.validateEmail();
    }
    validateEmail() {
        const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const required = this.email ? undefined : "Required";
        this.emailError = required
            ? required
            : emailPatter.test(this.email) ? undefined : "Invalid email address";
    }
    passwordOnChange(pwd) {
        this.password = pwd;
        this.validatePassword();
    }
    validatePassword() {
        const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(this.password)
            ? "Only alphanumeric characters"
            : undefined;
        const maxLength = this.password.length > 15 ? "Must be 15 characters or less" : undefined;
        const minLength = this.password.length < 8 ? "Must be 8 characters or more" : undefined;
        const required = this.password ? undefined : "Required";
        this.passwordError = required
            ? required
            : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
    }
    validateForm() {
        if (this.emailError === undefined && this.passwordError === undefined) {
            this.isValid = true;
        }
    }
    clearStore() {
        this.email = "";
        this.isValid = false;
        this.emailError = "";
        this.password = "";
        this.passwordError = "";
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], LoginStore.prototype, "email", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], LoginStore.prototype, "password", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], LoginStore.prototype, "isValid", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], LoginStore.prototype, "emailError", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], LoginStore.prototype, "passwordError", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "emailOnChange", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "validateEmail", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "passwordOnChange", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "validatePassword", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "validateForm", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginStore.prototype, "clearStore", null);
export default LoginStore;
//# sourceMappingURL=LoginViewStore.js.map