(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3gi":
/*!****************************************************!*\
  !*** ./src/app/account/signUp/signUp.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customValidator */ "ga6B");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../account.service */ "2rwd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");













function SignUpComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_p_7_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " password must have at least 1 Capital letter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " passowrd must have at least 1 Small letter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " passowrd must have at least 1 number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_i_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 44);
} }
function SignUpComponent_i_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
} }
function SignUpComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 44);
} }
function SignUpComponent_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 45);
} }
function SignUpComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_39_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.signUpGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignUp With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_39_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.signUpFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " SignUp With facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_40_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.signUpGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignUp With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.signUpFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignUp With facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignUpComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hello Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fill up the Form and");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "start Journey with us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_div_42_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "borderRight": a0 }; };
class SignUpComponent {
    constructor(mediaObserver, router, formBuilder, accountService, authService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.authService = authService;
        this.isLoggedIn = true;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.show = false;
        this.rformSignup = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[A-Z]/, { hasCapitalCase: true }),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[a-z]/, { hasSmallCase: true }),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9]/, { hasDigit: true }),
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
        });
    }
    signUpGoogle(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            const userAccount = {
                email: Response.email,
                firstName: Response.firstName,
                lastName: Response.lastName,
                contact: Response.provider,
                provider: Response.provider,
                password: Response.id,
            };
            this.accountService.signUp(userAccount).subscribe((data) => {
                this.router.navigate(['/login']);
            }, (error) => {
                alert("Already have an account Just login");
                this.router.navigate(['/login']);
            });
        });
    }
    signUpFacebook(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        this.authService
            .signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            // tslint:disable-next-line: no-unused-expression
            const userAccount = {
                email: Response.name,
                firstName: Response.firstName,
                lastName: Response.lastName,
                password: Response.id,
                token: Response.authToken,
            };
            this.accountService.signUp(userAccount).subscribe((data) => {
                this.router.navigate(['/login']);
            }, (error) => {
                alert("Already have an account Just login");
                this.router.navigate(['/login']);
            });
        });
    }
    signOut() {
        this.authService.signOut();
    }
    passwordshow() {
        this.showPass = !this.showPass;
    }
    confirmpasswordshow() {
        this.showConfirmPass = !this.showConfirmPass;
    }
    setId(userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
    }
    setRefrenceId(refrenceId) {
        localStorage.setItem('refrenceId', JSON.stringify(refrenceId));
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setcontact(contact) {
        localStorage.setItem('contact', JSON.stringify(contact));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
    createAccount() {
        this.rformSignup.controls['phone'].clearValidators();
        if (this.rformSignup.value.phone.number) {
            this.rformSignup.controls['phone'].setValue(this.rformSignup.value.phone.internationalNumber);
        }
        if (this.rformSignup.valid) {
            if (this.rformSignup.value.password === this.rformSignup.value.confirmPassword) {
                this.accountService.createuserAccount(this.rformSignup.value).subscribe((data) => {
                    alert("Account Created");
                    this.router.navigate(['/login']);
                }, (error) => {
                    alert(error.error.message);
                });
            }
            else {
                alert("Password not match");
            }
        }
        else {
            alert("Please Fill All the entries of the Form");
        }
    }
    login() {
        this.router.navigate(['/login']);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-signUp"]], decls: 62, vars: 33, consts: [[1, "row", 2, "margin-top", "2%", "margin-bottom", "2%"], [1, "col-lg-2", "col-xs-1", "col-sm-1"], [1, "col-lg-8", "col-xs-10", "col-sm-12"], [1, "cardLeft", "col-lg-8", "col-xs-12", "col-sm-8", 3, "ngClass"], [2, "width", "100%", "padding-bottom", "8%"], [1, "btn", 2, "text-align", "left", "padding-top", "5%", "font-weight", "500"], ["style", "font-size:small;font-weight: 500;padding-top: 5%;text-align: right;justify-content: right;float: right;", "class", "btn text-primary", 3, "click", 4, "ngIf"], [2, "text-align", "left", 3, "formGroup"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [1, "", 2, "padding-bottom", "2%", "padding-right", "2%", "min-width", "60px", "width", "50%"], ["placeholder", "First Name", "name", "firstName", "rformControlName", "firstName", 1, "textfieldBorderColor", "font13", 2, "min-width", "100px", 3, "rformgroup"], [1, "", 2, "padding-bottom", "2%", "padding-left", "2%", "width", "50%"], ["placeholder", "Last Name", "name", "lastName", "rformControlName", "lastName", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%"], ["placeholder", "Email", "name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "width", "94%"], ["placeholder", "Password ", "name", "password", "rformControlName", "password", 1, "textfieldBorderColor", "font13", 3, "type", "rformgroup"], ["style", "font-size: 14px", "class", "errorlbl", 4, "ngIf"], ["style", "font-size: 14px", 4, "ngIf"], [2, "width", "40px"], ["type", "submit", 1, "btn", "btn-default", 2, "height", "35px", 3, "click"], ["class", "glyphicon glyphicon-eye-open", 4, "ngIf"], ["class", "glyphicon glyphicon-eye-close", 4, "ngIf"], ["placeholder", "Confirm Password ", "name", "password", "rformControlName", "confirmPassword", 1, "textfieldBorderColor", "font13", 3, "type", "rformgroup"], [3, "formGroup"], ["name", "phone", "formControlName", "phone", 3, "cssClass", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "selectFirstCountry", "maxLength", "phoneValidation"], [1, "row", 2, "margin-left", "1%", "margin-right", "1%"], ["type", "button", 1, "col-12", "btn", "btn-primary", 3, "click"], ["class", "row", "style", "margin-left:1%;margin-right: 1%;margin-top: 3%;", 4, "ngIf"], ["class", "col-lg-4 col-xs-12 col-sm-4 cardRight", 4, "ngIf"], [2, "background-color", "rgb(189, 187, 187)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold", "font-size", "small"], [2, "text-align", "right"], [1, "btn", "text-primary", 2, "font-size", "small", "font-weight", "500", "padding-top", "5%", "text-align", "right", "justify-content", "right", "float", "right", 3, "click"], [1, "errorlbl", 2, "font-size", "14px"], [2, "font-size", "14px"], [1, "glyphicon", "glyphicon-eye-open"], [1, "glyphicon", "glyphicon-eye-close"], [1, "row", 2, "margin-left", "1%", "margin-right", "1%", "margin-top", "3%"], [1, "col-5", "btn", "btn-danger", 3, "click"], [1, "col-2"], [1, "col-5", "btn", "btn-primary", 2, "font-size", "small", 3, "click"], [1, "col-12", "btn", "btn-danger", 3, "click"], [1, "col-12", "btn", "btn-primary", 2, "font-size", "small", 3, "click"], [1, "col-lg-4", "col-xs-12", "col-sm-4", "cardRight"], [1, "btn"], [2, "text-align", "center", "width", "100%"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Create Your Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SignUpComponent_p_7_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ns-textField-account", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ns-textField-account", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ns-textField-account", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ns-textField-account", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignUpComponent_p_19_Template, 2, 0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignUpComponent_p_20_Template, 2, 0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignUpComponent_p_21_Template, 2, 0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_23_listener() { return ctx.passwordshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignUpComponent_i_24_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignUpComponent_i_25_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ns-textField-account", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_30_listener() { return ctx.confirmpasswordshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SignUpComponent_i_31_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SignUpComponent_i_32_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "ngx-intl-tel-input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_37_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SignUpComponent_div_39_Template, 6, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SignUpComponent_div_40_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SignUpComponent_div_41_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, SignUpComponent_div_42_Template, 10, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "hr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_div_click_56_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A9 2020, picksystore Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.deviceXs));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.deviceXs || ctx.deviceSm ? "15" : "25", "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPass ? "text" : "password")("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rformSignup.controls["password"].hasError("hasCapitalCase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rformSignup.controls["password"].hasError("hasSmallCase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rformSignup.controls["password"].hasError("hasDigit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showConfirmPass ? "text" : "password")("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showConfirmPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cssClass", "customInput")("enableAutoCountrySelect", false)("enablePlaceholder", true)("searchCountryFlag", true)("selectFirstCountry", false)("maxLength", 15)("phoneValidation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceMd || ctx.deviceSm || ctx.deviceLg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deviceXs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__["NgxIntlTelInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__["NativeElementInjectorDirective"]], styles: [".cardLeft[_ngcontent-%COMP%] {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\n\n.borderRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n\n.cardRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #b4d469;\n}\n\n.coloumnChange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceSmClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.deviceLgFontClass[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.deviceSmFontClass[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaWduVXAvc2lnblVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHRTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLGFBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0U7RUFDQSxnQkFBQTtBQUVGOztBQUNFO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9zaWduVXAvc2lnblVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRMZWZ0e1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDR2dztcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xuXG4gIH1cblxuICAuYm9yZGVyUmlnaHR7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTJweCA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gIH1cbiAgLmVycm9ybGJse1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuICAuY2FyZFJpZ2h0e1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTAwcHg7XG5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkNDY5O1xuICB9XG4gIC5jb2xvdW1uQ2hhbmdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZGV2aWNlTGdDbGFzc3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuZGV2aWNlU21DbGFzc3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmRldmljZUxnRm9udENsYXNze1xuICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cbiAgLmRldmljZVNtRm9udENsYXNze1xuICBmb250LXNpemU6IHNtYWxsO1xuICB9XG4uZGV2aWNlWHN7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uZGV2aWNlTGdDbGFzcyB7XG4gIGZvbnQtc2l6ZTp4eC1sYXJnZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'app-signUp',
                templateUrl: './signUp.component.html',
                styleUrls: ['./signUp.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "/BOD":
/*!*****************************************************!*\
  !*** ./src/app/home/myorders/myorders.component.ts ***!
  \*****************************************************/
/*! exports provided: MyordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersComponent", function() { return MyordersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function MyordersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyordersComponent_div_8_div_11_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.getImage(item_r6.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit price ", item_r6.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units ", item_r6.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total price ", item_r6.unitTotal, "");
} }
function MyordersComponent_div_8_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "start phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyordersComponent_div_8_div_11_Template_p_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.orderCompleted(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Packed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MyordersComponent_div_8_div_11_div_41_Template, 18, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r4._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("aria-controls", "#", item_r4._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r4.total, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4 == null ? null : item_r4.phase, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r4.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r4 == null ? null : item_r4.phase) === "delievry phase" || (item_r4 == null ? null : item_r4.phase) === "packed" || (item_r4 == null ? null : item_r4.phase) === "shipped" ? "" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r4 == null ? null : item_r4.phase) === "packed" || (item_r4 == null ? null : item_r4.phase) === "shipped" || (item_r4 == null ? null : item_r4.phase) === "delievry phase" ? "" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r4 == null ? null : item_r4.phase) === "shipped" || (item_r4 == null ? null : item_r4.phase) === "delievry phase" ? "" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r4 == null ? null : item_r4.phase) === "delievry phase" ? "" : "negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.cartData);
} }
function MyordersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyordersComponent_div_8_div_11_Template, 42, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allOrders);
} }
function MyordersComponent_div_9_div_11_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.getImage(item_r12.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit price ", item_r12.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units ", item_r12.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total price ", item_r12.unitTotal, "");
} }
function MyordersComponent_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "start phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Packed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Total Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyordersComponent_div_9_div_11_div_38_Template, 18, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r10._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("aria-controls", item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r10.total, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("aria-controls", item_r10.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r10.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10.status === "processing" ? "job-created" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10.status === "packed" ? "job-packed" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10.status === "shipped" ? "job-completed" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10.status === "delivered" ? "job-closed" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.cartData);
} }
function MyordersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyordersComponent_div_9_div_11_Template, 39, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allOrders);
} }
class MyordersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.allOrders = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.loadData();
        this.myOrders();
    }
    getOrderStatus() {
        [
            {
                "name": "Pinpont Pen", "photo": "assets/img/products/pinpoint-ballpen.jpg", "quantity": 2,
                "date": "02-02-2020", "price": 100, "status": "packed"
            }
        ];
    }
    myOrders() {
        this.productService.getOrders().subscribe((products) => {
            this.allOrders = products.orders;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    loadData() {
        this.cartService.getOrderStatus().subscribe((data) => {
            console.log(data);
            this.status = data;
            console.log(this.status);
        });
    }
    orderDetails(item) {
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    orderCompleted(item) {
    }
}
MyordersComponent.ɵfac = function MyordersComponent_Factory(t) { return new (t || MyordersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
MyordersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyordersComponent, selectors: [["app-myorders"]], decls: 11, vars: 3, consts: [[1, "container-fluid", 2, "background-color", "rgb(253, 251, 251)"], [2, "margin", "2%", "min-height", "500px"], ["label", "Orders", 1, "container-fluid"], [2, "text-align", "center", "font-weight", "bold"], ["style", "text-align: center;padding: 10%;min-height: 300px;", 4, "ngIf"], [4, "ngIf"], ["label", "Canceled Orders"], [2, "text-align", "center", "padding", "10%", "min-height", "300px"], [1, "row", 2, "margin", "1%"], [1, "col-xs-2"], [2, "font-size", "large"], [4, "ngFor", "ngForOf"], [1, "row", 2, "border", "1px", "border-style", "groove", "margin", "1%", "padding-top", "3px"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "btn", "btn-primary", 2, "color", "white", 3, "href", "aria-controls"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary", 2, "color", "white", 3, "href"], [1, "btn", "green-btn", 2, "color", "white", 3, "click"], [1, "collapse", "container-fluid", 2, "padding-top", "1%", "margin-left", "1%", "margin-right", "1%", 3, "id"], [2, "min-height", "300px", "padding", "5%"], [1, "row", "multi-steps-wrap"], [1, "list-unstyled", "multi-steps"], [1, "job-status", 3, "ngClass"], [1, "collapse", 2, "padding-top", "1%", "margin-left", "1%", "margin-right", "1%", 3, "id"], [1, "row"], [1, "col-xs-12"], [2, "padding-left", "2%", "padding-top", "1%", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "background-color", "rgb(230, 230, 230)", "padding-left", "5%"], [2, "padding-top", "4%", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding-left", "5%", "padding-right", "10%"], [1, "col-xs-3", 2, "padding-right", "7%"], [2, "height", "100px", "width", "200px"], [2, "height", "100px", "width", "200px", 3, "src"], [1, "col-xs-6"], [2, "justify-content", "center"], [2, "font-size", "larger"], [1, "col-xs-3", 2, "float", "left"], [2, "font-weight", "500", "font-size", "large"], [1, "col-xs-4"], [1, "row", 2, "width", "100%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "min-height", "100px", "padding", "5%"], [1, "job-status", "is-active", "negative", 3, "ngClass"], [2, "padding-top", "4%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "height", "50px", "width", "100px"], [2, "height", "50px", "width", "100px", 3, "src"], [2, "font-size", "small"], [1, "col-xs-4", 2, "padding-top", "5%"], [2, "font-weight", "500", "font-size", "small"]], template: function MyordersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyordersComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyordersComponent_div_8_Template, 12, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyordersComponent_div_9_Template, 12, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOrders.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg && ctx.allOrders.length !== 0 || ctx.deviceMd && ctx.allOrders.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"]], styles: [".done[_ngcontent-%COMP%]{\n  height: 35px;\n    width: 40px;\n    padding: 5px;\n    text-align: center;\n    padding-top: 2%;\n    border-radius: 50%;\n    display: inline-block;\n    color:#fff;\n    font-size:1.1em;\n    font-weight:600;\n    background-color:rgb(0, 161, 0);\n    border: 1px solid rgba(0,0,0,0.2);\n}\n.cartHeight[_ngcontent-%COMP%] {\n  height: 58vh;\n  overflow-y: overlay;\n  overflow-x: hidden;\n}\n.inactive[_ngcontent-%COMP%]{\n  height: 35px;\n  width: 40px;\n  padding: 5px;\n  text-align: center;\n  padding-top: 2%;\n  border-radius: 50%;\n  display: inline-block;\n  color:#fff;\n  font-size:1.1em;\n  font-weight:600;\n  background-color:rgb(148, 148, 148);\n  border: 1px solid rgba(0,0,0,0.2);\n\n}\n@media (max-width: 576px) {\n  .multi-steps-wrap[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%] {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  counter-increment: stepNum;\n  text-align: center;\n  display: table-cell;\n  position: relative;\n  color: #3cba9f;\n  font-size: 12px;\n  z-index: 1;\n}\n.negative[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \"\u2713\";\n  display: block;\n  margin: 0 auto 4px;\n  background-color: #fff;\n  width: 46px;\n  height: 46px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 18px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #3cba9f;\n  border-radius: 50%;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 100%;\n  background-color: #3cba9f;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  z-index: -1;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child:after {\n  display: none;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child.is-active:before {\n  content: \"\u2713\";\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child.is-active:before {\n  content: \"\u2713\";\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.is-active[_ngcontent-%COMP%]:before {\n  background-color: #fff;\n  border-color: #3cba9f;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.negative[_ngcontent-%COMP%]:before {\n  background-color: white;\n  border-color: green;\n\n  color: white;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.is-active[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%] {\n  color: #808080;\n}\n.multi-steps-wrap[_ngcontent-%COMP%]   .multi-steps[_ngcontent-%COMP%]    > li.is-active[_ngcontent-%COMP%]    ~ li[_ngcontent-%COMP%]:before {\n  background-color: #eee;\n  border-color: #fff;\n}\n.job-created[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n.job-packed[_ngcontent-%COMP%] {\n  background-color: greenyellow\n}\n.job-completed[_ngcontent-%COMP%] {\n  background-color: green;\n}\n.job-closed[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9teW9yZGVycy9teW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGlDQUFpQzs7QUFFbkM7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0U7QUFDRjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL215b3JkZXJzL215b3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uZXtcbiAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MS4xZW07XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDE2MSwgMCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xufVxuLmNhcnRIZWlnaHQge1xuICBoZWlnaHQ6IDU4dmg7XG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmluYWN0aXZle1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOjEuMWVtO1xuICBmb250LXdlaWdodDo2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE0OCwgMTQ4LCAxNDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tdWx0aS1zdGVwcy13cmFwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXBOdW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNjYmE5ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAxO1xufVxuLm5lZ2F0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4ubXVsdGktc3RlcHMtd3JhcCAubXVsdGktc3RlcHMgPiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKck1wiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG8gNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMzY2JhOWY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2NiYTlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm11bHRpLXN0ZXBzLXdyYXAgLm11bHRpLXN0ZXBzID4gbGk6bGFzdC1jaGlsZC5pcy1hY3RpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJNcIjtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpOmZpcnN0LWNoaWxkLmlzLWFjdGl2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIuKck1wiO1xufVxuLm11bHRpLXN0ZXBzLXdyYXAgLm11bHRpLXN0ZXBzID4gbGkuaXMtYWN0aXZlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzNjYmE5Zjtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpLm5lZ2F0aXZlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tdWx0aS1zdGVwcy13cmFwIC5tdWx0aS1zdGVwcyA+IGxpLmlzLWFjdGl2ZSB+IGxpIHtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4ubXVsdGktc3RlcHMtd3JhcCAubXVsdGktc3RlcHMgPiBsaS5pcy1hY3RpdmUgfiBsaTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5qb2ItY3JlYXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5qb2ItcGFja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3dcbn1cblxuLmpvYi1jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmpvYi1jbG9zZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyordersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myorders',
                templateUrl: './myorders.component.html',
                styleUrls: ['./myorders.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/srinivasgoud/Documents/git-hub/jamil-shrivasafoods/PICKSKY-Front-end-Angular/src/main.ts */"zUnb");


/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersProgress/ordersProgress.component */ "Kg9S");
/* harmony import */ var _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProduct/addProduct.component */ "fDLK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "XUqj");








const routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
            { path: '', component: _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"] },
            { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
            { path: 'addProduct', component: _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_1__["AddProductComponent"] },
            { path: 'addProduct/:id', component: _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_1__["AddProductComponent"] },
        ]
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "2ChW":
/*!*******************************************!*\
  !*** ./src/app/home/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _appconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appconstants */ "FAXg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth.service */ "ccyI");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function NavComponent_div_93_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_div_93_p_1_Template, 3, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_93_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isShow == true);
} }
function NavComponent_div_94_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_94_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_94_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi ", ctx_r7.usernameLogin, " ");
} }
function NavComponent_div_94_ng_template_15_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_94_ng_template_15_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_94_ng_template_15_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_94_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " My orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent_div_94_ng_template_15_li_16_Template, 1, 0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent_div_94_ng_template_15_p_17_Template, 2, 0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.authService.loggedIn());
} }
function NavComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_div_94_button_2_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SHRIVASAFOODS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_94_Template_p_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_div_94_p_12_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_div_94_ng_template_15_Template, 18, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r2.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("popoverTitle", "Hi", ctx_r2.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r8);
} }
const _c0 = ["*"];
class NavComponent {
    constructor(breakpointObserver, router, authService, mediaObserver, productService, cartService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.authService = authService;
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.username = " username";
        this.isShow = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    ngOnInit() {
        // this.username=this.authService.getusername()
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    get usernameLogin() {
        return this.authService.getusername();
    }
    toggleDisplay() {
        this.isShow = !this.isShow;
    }
    catagory(page) {
        this.router.navigate(['catagory/', page]);
    }
    getHeaderNames(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["HeaderConstants"][indx]; }
    getPicklesConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["PicklesConstants"][indx]; }
    getTraditionalPodulu(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["TraditionalPodulu"][indx]; }
    getSweetsandHotConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SweetsandHotConstants"][indx]; }
    getSpecialConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SpecialConstants"][indx]; }
    getOthersConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SupportConstants"][indx]; }
    getAboutusConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["AboutusConstants"][indx]; }
    getSupportConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SupportConstants"][indx]; }
    onLogoutClick() {
        this.authService.loggedOutName();
        this.authService.loggedOutEmail();
        this.authService.loggedOutuserId();
        this.authService.loggedOutRefrenceId();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], ngContentSelectors: _c0, decls: 96, vars: 33, consts: [[1, "container"], [1, "sidenav-container", 2, "height", "100%"], ["fixedInViewport", "false", 1, "sidenav", 2, "background-color", "white", 3, "mode", "opened"], ["drawer", ""], ["routerLink", "/", "TraditionalPowders", ""], [1, "fundpress-menu", 2, "background-color", "white"], [1, "nav-menu", 3, "click"], ["routerLink", "/", 1, "dropdown"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "dropdown-menu"], [3, "click"], ["routerLink", "/specialoffers", 1, "dropdown"], ["routerLink", "/others", 1, "dropdown"], ["routerLink", "/aboutus", 1, "dropdown"], [2, "margin-top", "1%", "background-color", "white"], ["style", "width: 100%; margin-left: 2%;margin-top: 1%;  margin-bottom: 1%", "class", "row", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", 2, "width", "100%", "margin-left", "2%", "margin-top", "1%", "margin-bottom", "1%"], ["class", "col-xs-11", "style", "\n            border-radius: 6px;\n            font-weight: 300px;\n            background-color: rgb(240, 238, 238);\n          ", 4, "ngIf"], [1, "col-xs-1", 2, "font-weight", "300px", "color", "grey", 3, "click"], [1, "fa", "fa-times"], [1, "col-xs-11", 2, "border-radius", "6px", "font-weight", "300px", "background-color", "rgb(240, 238, 238)"], ["routerLink", "/login", 1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "padding", "2%", "color", "rgb(134, 132, 132)"], [1, "row"], [1, "col-xs-2", "col-sm-2"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "col-xs-4", "col-sm-4"], ["routerLink", "", 2, "color", "black", "font-size", "large", "font-weight", "500"], [1, "col-xs-1", "col-sm-1"], [2, "font-size", "large", "padding-left", "15%", "font-weight", "300px", "color", "grey", 3, "click"], [1, "fa", "fa-search"], [1, "col-xs-1", "col-sm-1", 2, "display", "flex", "flex-direction", "row"], ["style", "font-size: large; padding-top: 5%", 4, "ngIf"], [1, "fa", "fa-cog", 2, "font-size", "xx-large", 3, "popover", "popoverTitle"], ["popTemplate", ""], ["routerLink", "/login", 1, "fa", "fa-user-circle-o", 2, "color", "gray", "font-size", "xx-large"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon", 2, "margin-bottom", "1%", "color", "black"], [2, "font-size", "large", "padding-top", "5%"], [1, "col-lg-6"], [2, "padding-top", "1%"], ["routerLink", "/myOrders", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/myOrders", "routerLinkActive", "router-link-active"], ["routerLink", "/support", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/support", "routerLinkActive", "router-link-active"], ["routerLink", "/admin", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/admin", "routerLinkActive", "router-link-active"], ["style", "font-size: xx-large", "class", "fa fa-sign-out", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-sign-out", 2, "font-size", "xx-large", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Catagories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-nav-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_ul_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_18_listener() { return ctx.catagory(ctx.getPicklesConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_21_listener() { return ctx.catagory(ctx.getPicklesConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_28_listener() { return ctx.catagory(ctx.getTraditionalPodulu(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_31_listener() { return ctx.catagory(ctx.getTraditionalPodulu(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_38_listener() { return ctx.catagory(ctx.getSweetsandHotConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_41_listener() { return ctx.catagory(ctx.getSweetsandHotConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_48_listener() { return ctx.catagory(ctx.getSpecialConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_51_listener() { return ctx.catagory(ctx.getSpecialConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_54_listener() { return ctx.catagory(ctx.getSpecialConstants(3)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_57_listener() { return ctx.catagory(ctx.getSpecialConstants(4)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_64_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_67_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_70_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_77_listener() { return ctx.catagory(ctx.getAboutusConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_80_listener() { return ctx.catagory(ctx.getAboutusConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_83_listener() { return ctx.catagory(ctx.getAboutusConstants(3)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_86_listener() { return ctx.catagory(ctx.getAboutusConstants(4)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_89_listener() { return ctx.catagory(ctx.getAboutusConstants(5)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-toolbar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, NavComponent_div_93_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, NavComponent_div_94_Template, 19, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 29, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 31, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPicklesConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPicklesConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTraditionalPodulu(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTraditionalPodulu(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSweetsandHotConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSweetsandHotConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_13__["PopoverDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: white;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.nav-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li.focus[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: lighter;\n}\n\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 18px 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  background-color: green;\n}\n\n.nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: flex;\n  margin-left: 250px;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 16px;\n  width: 100%;\n  color: black;\n  flex-direction: row;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  border-color: white;\n  background-color: #e6e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFHQTs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDRCxZQUFBO0VBQ0MsbUJBQUE7QUFPRjs7QUFKQTtFQUNBLFdBQUE7QUFPQTs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFRRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlbmF2e1xuICB3aWR0aDogNDAwcHg7XG4gIC8vIGJveC1zaGFkb3c6IHJnYigxOTksIDE5OSwgMTk5KTtcbn1cbi5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdi1tZW51PmxpLmFjdGl2ZT5hLCAubmF2LW1lbnU+bGkuZm9jdXM+YSwgLm5hdi1tZW51PmxpOmhvdmVyPmEge1xuY29sb3I6IGdyZWVuO1xuZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGEge1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mdW5kcHJlc3MtbWVudSAubmF2LW1lbnUgbGkgYTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5uYXYtbWVudT5saT5hIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG5cbn1cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiBjb2xvcjogYmxhY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbn1cbi5kcm9wZG93bi1tZW51e1xud2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXIge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMjcsIDIyNyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }]; }, null); })();


/***/ }),

/***/ "2rwd":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");





class AccountService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
    }
    createuserAccount(newUser) {
        return this.http.post('http://localhost:8000/api/users/', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            phoneNo: newUser.phone,
            accountBonus: 1,
            provider: newUser.provider,
            token: newUser.token
        }, this.httpHeaders);
    }
    signUp(newUser) {
        return this.http.post('http://localhost:8000/api/users/signUpSocial', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            contact: newUser.contact,
            accountBonus: 1,
            provider: newUser.provider,
            token: newUser.token
        }, this.httpHeaders);
    }
    signIn(newUser) {
        return this.http.post('http://localhost:8000/api/users/signInSocial', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            contact: newUser.contact,
            accountBonus: 1,
            provider: newUser.provider,
            token: newUser.token
        }, this.httpHeaders);
    }
    login(user) {
        return this.http.post('http://localhost:8000/api/users/login', {
            email: user.email,
            password: user.password,
            idToken: user.idToken,
            provider: user.provider
        }, this.httpHeaders);
    }
    forgetPassword(data) {
        // const email = this.myauthService.getemail()
        return this.http.post('http://localhost:8000/api/users/forgetPassword/', {
            email: data.email
        }, this.httpHeaders);
    }
    resetPassword(newPass) {
        return this.http.post('http://localhost:8000/api/users/resetPassword/', {
            confirmPassword: newPass.confirmPassword,
            password: newPass.newPassword,
            resetToken: newPass.resetToken
        }, this.httpHeaders);
    }
    accountVerify(data) {
        return this.http.post('http://localhost:8000/api/users/accountVerify/', {
            token: data.accountToken,
            isVerify: data.isVerify,
        }, this.httpHeaders);
    }
    editInfo(data) {
        return this.http.post('http://localhost:8000/api/users/editInfo/', {
            userId: this.myauthService.getID(),
            username: data.username,
            email: data.email,
            contact: data.contact,
        }, this.httpHeaders);
    }
    editPassword(data) {
        return this.http.post('http://localhost:8000/api/users/editPassword/', {
            userId: this.myauthService.getID(),
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        }, this.httpHeaders);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "87QV":
/*!**************************************!*\
  !*** ./src/app/home/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");






class CartService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.cart = [];
        this.total = 0;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
        this.getProducts();
    }
    emptyProduct() {
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    discardProduct(product) {
        this.cart.find((item) => {
            if (item._id === product._id) {
                this.cart.splice(item, 1);
                item.productCount = 0;
            }
        });
    }
    removeProduct(product) {
        let proudctRemoved = false;
        this.cart.find((item) => {
            if (item._id === product._id && proudctRemoved == false) {
                if (item.productCount === 1) {
                    this.cart.splice(item._id, 1);
                    item.productCount = item.productCount - 1;
                    return true;
                }
                else {
                    item.productCount = item.productCount - 1;
                    item.unitTotal = item.unitTotal - item.price;
                    return true;
                }
            }
        });
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    addProduct(product) {
        let productInCart;
        productInCart = this.cart.find((item) => {
            if (item._id === product._id) {
                return true;
            }
        });
        if (!productInCart) {
            this.cart.push(product);
            product.productCount++;
        }
        else {
            this.cart.forEach((item) => {
                if (item._id == product._id) {
                    item.productCount = item.productCount + 1;
                    item.unitTotal = item.unitTotal + item.price;
                }
            });
        }
        console.log(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    getProducts() {
        if (JSON.parse(localStorage.getItem('cart'))) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
        return this.cart;
    }
    getTotalPrice() {
        let subtotal = 0;
        this.cart.forEach(item => {
            subtotal = item.productCount * item.price + subtotal;
        });
        return subtotal;
    }
    order(orderData) {
        const username = this.myauthService.getusername();
        const user = this.myauthService.getID();
        return this.http.post('http://localhost:8000/api/orders/', {
            cartData: orderData.cartItems,
            total: orderData.total,
            user: user,
            username: username,
            refrence: orderData.refrence,
            phase: orderData.phase,
            ownerEmail: orderData.ownerEmail,
            firstName: orderData.firstName,
            lastName: orderData.lastName,
            city: orderData.city,
            adress: orderData.adress,
            code: orderData.code,
            contry: orderData.contry,
            method: orderData.method,
        }, this.httpHeaders);
    }
    getOrderStatus() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            {
                "name": "Pinpont Pen", "photo": "assets/img/products/pinpoint-ballpen.jpg", "quantity": 2, "date": "02-02-2020", "price": 100, "status": "packed"
            }, {
                "name": "Classmate Book", "photo": "assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity": 2, "date": "02-02-2020", "price": 100, "status": "shipped"
            },
            {
                "name": "Classmate Book", "photo": "assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity": 2, "date": "02-02-2020", "price": 100, "status": "processing"
            },
            {
                "name": "Classmate Book", "photo": "assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity": 2, "date": "02-02-2020", "price": 100, "status": "delivered"
            }
        ]);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "8zhZ":
/*!***************************************************!*\
  !*** ./src/app/home/aboutus/aboutus.component.ts ***!
  \***************************************************/
/*! exports provided: AboutUSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUSComponent", function() { return AboutUSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");





class AboutUSComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    submit() {
    }
}
AboutUSComponent.ɵfac = function AboutUSComponent_Factory(t) { return new (t || AboutUSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
AboutUSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUSComponent, selectors: [["app-aboutus"]], decls: 72, vars: 0, consts: [[2, "background-color", "rgb(240, 236, 236)", "min-height", "500px"], [1, "text-block1", 2, "text-align", "center"], [2, "height", "20%"], ["src", "../assets/images/10.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "height", "400px", "object-fit", "cove\n  r", "border-radius", "6px"], [1, "row"], [1, "col-lg-3", "col-xs-2", "col-sm-2"], [1, "col-lg-6", "col-xs-8", "col-sm-8"], [2, "text-align", "center", "padding-top", "4%"], [2, "text-align", "center", "word-wrap", "break-word", "color", "#c59d5f"], [1, "row", 2, "margin", "1%"], [1, "container", "col-lg-6", "col-sm-12", 2, "margin-bottom", "2%"], [2, "background-color", "grey"], ["src", "../assets/images/about1.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "height", "100%", ";border-radius", "6px"], ["src", "../assets/images/about2.jpg", 1, "img-responsive", "gradient", "middle", 2, "width", "100%", "height", "100%", ";border-radius", "6px"], [1, "container", "col-lg-6", "col-sm-12"], ["src", "../assets/images/about2.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "height", "100%", ";border-radius", "6px"], ["src", "../assets/images/about1.jpg", 1, "img-responsive", "gradient", "middle", 2, "width", "100%", "height", "100%", ";border-radius", "6px"], [2, "background-color", "black", "text-align", "center", "padding-top", "5%", "padding-left", "5%", "padding-right", "5%", "display", "flex", "flex-direction", "column"], [2, "text-align", "center", "color", "#c59d5f"], [1, "row", 2, "margin-bottom", "1%"], [1, "col-xs-10", "col-sm-10", "col-lg-5", 2, "padding", "5%"], [2, "word-wrap", "break-word", "color", "#c59d5f"], [1, "col-xs-1", "col-lg-1"], [1, "col-xs-10", "col-sm-10", "col-lg-5"], [1, "container"], ["src", "../assets/images/about2.jpg", 1, "img-responsive", "gradient", "image", 2, "width", "100%", "height", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [1, "middle"], [1, "text-block2"], [1, "col-xs-10", "col-lg-5"], [1, "col-xs-1"], [1, "col-xs-10", "col-lg-5", 2, "padding", "5%"], [1, "text-block3"], [2, "height", "300px"], ["src", "../assets/images/7.jpg", 1, "img-responsive", "gradient", 2, "height", "300px", "width", "100%"]], template: function AboutUSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Introductions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, debitis phaedrum conceptam vis at. Fug it choro scriptorem nam an, vel ex possit audire. Qui elitr graeci referrentur ad, eu ludus laudem tincidunt vel, ad vim wisi graeci efficiendi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Begin Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add Label here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add Label here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Add Label here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "How work bring us Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 45%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.image[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  min-width: 200px;\n  min-height: 200px;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text-block2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2vw;\n  font-weight: 500;\n}\n\n.text-block3[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 10%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBUUg7O0FBTkE7RUFDRSx5RUFBQTtBQVNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQ1JTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjM7XG5cbn1cblxuLmNvbnRhaW5lcjpob3ZlciAubWlkZGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi50ZXh0LWJsb2NrMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAydnc7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGV4dC1ibG9jazMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referFriend/referFriend.component */ "K30+");
/* harmony import */ var _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCards/giftCards.component */ "Yg7E");
/* harmony import */ var _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FAQ/FAQ.component */ "Eoff");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "tFkF");
/* harmony import */ var _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonals/testimonals.component */ "hTs5");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discount/discount.component */ "DG48");
/* harmony import */ var _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catagory/catagory.component */ "cYb6");
/* harmony import */ var _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supportPage/supportPage.component */ "sjMi");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myorders/myorders.component */ "/BOD");
/* harmony import */ var _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainPage/mainPage.component */ "HZa5");
/* harmony import */ var _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productDetail/productDetail.component */ "xbwq");
/* harmony import */ var _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./specialoffers/specialoffers.component */ "S5X1");
/* harmony import */ var _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TraditionalPowders/TraditionalPowders.component */ "N3GV");
/* harmony import */ var _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sweetandhot/sweetandhot.component */ "bFHB");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./others/others.component */ "cMot");
/* harmony import */ var _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Pickles/Pickles.component */ "j67j");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "8zhZ");
/* harmony import */ var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./privacyandpolicy/privacyandpolicy.component */ "YMok");
/* harmony import */ var _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./returnandrefunds/returnandrefunds.component */ "kH2C");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customize/customize.component */ "btZY");


























// import check from '../cart/cart.module'
const routes = [
    { path: 'checkOut', loadChildren: '../checkOut/checkOut.module#CheckOutModule' },
    { path: 'cart', loadChildren: '../cart/cart.module#CartModule' },
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
        children: [
            // ./checkOut/checkOut.module#CheckOutModule
            { path: 'detail', component: _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"] },
            { path: 'pickles', component: _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_15__["PicklesComponent"] },
            { path: 'powders', component: _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_12__["TraditionalPowdersComponent"] },
            { path: 'sweets', component: _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_13__["SweetandHotComponent"] },
            { path: 'specialoffers', component: _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_11__["SpecialOffersComponent"] },
            { path: 'others', component: _others_others_component__WEBPACK_IMPORTED_MODULE_14__["OthersComponent"] },
            { path: 'discount/:username', component: _discount_discount_component__WEBPACK_IMPORTED_MODULE_5__["DiscountComponent"] },
            { path: 'catagory/:page', component: _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_6__["CatagoryComponent"] },
            { path: 'aboutUs', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutUSComponent"] },
            { path: 'testimonals', component: _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_4__["TestimonalsComponent"] },
            { path: 'faq', component: _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"] },
            { path: 'privacy', component: _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyandpolicyComponent"] },
            { path: 'returns', component: _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_18__["ReturnandrefundsComponent"] },
            // { path: 'support', component: SupportPageComponent },
            { path: 'supportpage', component: _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_7__["SupportPageComponent"] },
            { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"] },
            { path: 'customize', component: _customize_customize_component__WEBPACK_IMPORTED_MODULE_23__["CustomizeComponent"] },
            { path: 'giftCards', component: _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"] },
            { path: 'referFriend', component: _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"] },
            { path: 'myOrders', component: _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__["MyordersComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: '', component: _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"] },
        ]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Awi1":
/*!********************************************************!*\
  !*** ./src/app/admin/textField/textField.component.ts ***!
  \********************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TextFieldComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "incomplete input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "length is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { errorBorder: a0 }; };
class TextFieldComponent {
    constructor() { }
    ngOnInit() { }
    get invalidControl() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorRequired() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.required) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorFormate() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.email) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorminLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return true;
        }
        else {
            return false;
        }
    }
    get errormaxLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.maxlength) {
            return true;
        }
        else {
            return false;
        }
    }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["ns-textField-admin"]], inputs: { rformgroup: "rformgroup", rformControlName: "rformControlName", rtext: "rtext", class: "class", type: "type", hint: "hint" }, decls: 5, vars: 9, consts: [[3, "formGroup"], [1, "form-control", "textFieldStling", 3, "formControlName", "type", "ngClass"], ["class", "errorlbl", 4, "ngIf"], [1, "errorlbl"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextFieldComponent_h3_2_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextFieldComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextFieldComponent_h3_4_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.rformControlName)("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.invalidControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorFormate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorminLength || ctx.errormaxLength);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".textFieldStling[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  size: 10;\n  width: 340px;\n  border-radius: 5px;\n}\n\n.errorBorder[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  border-color: red;\n  border: 5%;\n  \n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGV4dEZpZWxkL3RleHRGaWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90ZXh0RmllbGQvdGV4dEZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dEZpZWxkU3RsaW5nIHtcbiAgICBib3JkZXItd2lkdGg6IDFkcDtcbiAgICBzaXplOiAxMDtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZXJyb3JCb3JkZXJ7XG4gICAgYm9yZGVyLXdpZHRoOiAxZHA7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQgO1xuICAgIGJvcmRlcjogNSU7XG4gICAgLyogbWFyZ2luOiAyJTsgICAqL1xufVxuLmVycm9ybGJse1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-textField-admin",
                templateUrl: './textField.component.html',
                styleUrls: ['./textField.component.scss']
            }]
    }], function () { return []; }, { rformgroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rformControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rtext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BLWB":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customize-option-select/customize-option-select.component */ "Y8YW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");






class ThemeModule {
}
ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ThemeModule_Factory(t) { return new (t || ThemeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeOptionSelectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]], exports: [_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeOptionSelectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
                ],
                declarations: [_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeOptionSelectComponent"]],
                exports: [_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_2__["CustomizeOptionSelectComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "BRKm":
/*!*****************************************!*\
  !*** ./src/app/home/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");






class ProductService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.searchItems = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.categories = [
            {
                thumbImage: 'assets/images/slideimg1.jpg',
                title: 'Bakery & Pastry',
                alt: 'Image alt',
                routeTo: 'vegitables',
            },
            {
                thumbImage: 'assets/images/slideimg2.jpg',
                title: 'Pickles',
                alt: 'alt of image',
                routeTo: 'pickles',
            },
            {
                thumbImage: 'assets/images/slideimg3.jpg',
                title: 'Image title',
                alt: 'Image alt',
                routeTo: 'slideimg3',
            },
            {
                thumbImage: 'assets/images/slideimg4.jpg',
                alt: 'alt of image',
                routeTo: 'fish',
                title: 'Fish & Meat',
            },
            {
                thumbImage: 'assets/images/slideimg5.jpg',
                title: 'TraditionalPowders',
                alt: 'Image alt',
                routeTo: 'traditional_powders',
            },
            {
                thumbImage: 'assets/images/slideimg6.jpg',
                alt: 'alt of image',
                routeTo: 'snakes',
                title: 'Snakes & Beverages',
            },
            {
                thumbImage: 'assets/images/slideimg1.jpg',
                title: 'Bakery & Pastry',
                alt: 'Image alt',
                routeTo: 'bakery',
            },
            {
                thumbImage: 'assets/images/slideimg2.jpg',
                alt: 'alt of image',
                title: 'Pickles',
                routeTo: 'pickles',
            },
            {
                thumbImage: 'assets/images/slideimg3.jpg',
                title: 'Image title',
                alt: 'Image alt',
                routeTo: 'slideimg3',
            },
            {
                thumbImage: 'assets/images/slideimg4.jpg',
                alt: 'alt of image',
                routeTo: 'Fish',
                title: 'Fish & Meat',
            },
            {
                thumbImage: 'assets/images/slideimg5.jpg',
                title: 'TraditionalPowders',
                alt: 'Image alt',
                routeTo: 'slideimg5',
            },
            {
                thumbImage: 'assets/images/slideimg6.jpg',
                alt: 'alt of image',
                routeTo: 'Snakes',
                title: 'Snakes & Beverages',
            },
        ];
        this.phase = "delivery phase";
        this.search = false;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
    }
    searchProducts() {
        return !this.search;
    }
    setSearchItems(value) {
        this.searchItems.next(value);
    }
    getProducts() {
        return this.http.get('http://localhost:8000/api/products', this.httpHeaders);
    }
    getOrders() {
        return this.http.get('http://localhost:8000/api/orders/' + this.myauthService.getID(), this.httpHeaders);
    }
    featuredProducts() {
        return this.http.get('http://localhost:8000/api/products/featuredProducts', this.httpHeaders);
    }
    getCatagoryProducts(catagory) {
        return this.http.get('http://localhost:8000/api/products/catagory/' + catagory, this.httpHeaders);
    }
    productImageUrl(name) {
        return 'http://localhost:8000/api/products/image/' + name;
    }
    getOrsers(id) {
        return this.http.get('http://localhost:8000/api/orders/' + id, this.httpHeaders);
    }
    referFriend(data) {
        return this.http.post('http://localhost:8000/api/users/referFriend', {
            userId: this.myauthService.getID(),
            refrenceCode: data.refrenceCode,
            friendEmail: data.friendEmail
        }, this.httpHeaders);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "DG48":
/*!*****************************************************!*\
  !*** ./src/app/home/discount/discount.component.ts ***!
  \*****************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/signIn"]; };
const _c1 = function () { return ["/"]; };
class DiscountComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get("username");
    }
}
DiscountComponent.ɵfac = function DiscountComponent_Factory(t) { return new (t || DiscountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DiscountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountComponent, selectors: [["app-discount"]], decls: 12, vars: 5, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-6"], [2, "text-align", "right", "margin-bottom", "35%", "padding-right", "10%"], ["routerLinkActive", "router-link-active", 2, "color", "blue", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"]], template: function DiscountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nimage\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Use the app by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Find Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.username, " gives you 10% discount of your First order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discount',
                templateUrl: './discount.component.html',
                styleUrls: ['./discount.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "DfQd":
/*!**************************************************************!*\
  !*** ./src/app/account/emailVerify/emailVerify.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/account/account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class EmailVerifyComponent {
    constructor(accountService, route) {
        this.accountService = accountService;
        this.route = route;
        this.isVerify = true;
    }
    ngOnInit() {
        const token = this.route.snapshot.paramMap.get("token");
        this.accountToken = token;
        this.verify();
    }
    verify() {
        const data = {
            accountToken: this.accountToken,
            isVerify: this.isVerify
        };
        this.accountService.accountVerify(data).subscribe((data) => {
        });
    }
}
EmailVerifyComponent.ɵfac = function EmailVerifyComponent_Factory(t) { return new (t || EmailVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EmailVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerifyComponent, selectors: [["app-emailVerify"]], decls: 3, vars: 0, consts: [[2, "text-align", "center"]], template: function EmailVerifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your account is verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZW1haWxWZXJpZnkvZW1haWxWZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emailVerify',
                templateUrl: './emailVerify.component.html',
                styleUrls: ['./emailVerify.component.scss']
            }]
    }], function () { return [{ type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Eoff":
/*!*******************************************!*\
  !*** ./src/app/home/FAQ/FAQ.component.ts ***!
  \*******************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FAQComponent {
    constructor() { }
    ngOnInit() {
    }
}
FAQComponent.ɵfac = function FAQComponent_Factory(t) { return new (t || FAQComponent)(); };
FAQComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQComponent, selectors: [["app-FAQ"]], decls: 69, vars: 0, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function FAQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.panel-group[_ngcontent-%COMP%] {\n  background: #fff none repeat scroll 0 0;\n  border-radius: 3px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n  margin-bottom: 0;\n  padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border: medium none;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #b4d469 none repeat scroll 0 0;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  color: black;\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 12px 20px 12px 50px;\n  position: relative;\n  transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n  background: white none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n  background: #b4d469 none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n  background: #93bb36 none repeat scroll 0 0;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n  color: #fff;\n  content: \"\uF107\";\n  font-family: fontawesome;\n  font-size: 25px;\n  height: 55px;\n  left: -20px;\n  line-height: 55px;\n  position: absolute;\n  text-align: center;\n  top: -5px;\n  transition: all 0.3s ease 0s;\n  width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n  background: black none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  box-shadow: none;\n  color: white;\n  content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  background: transparent none repeat scroll 0 0;\n  border-top: medium none;\n  padding: 20px 25px 10px 9px;\n  position: auto;\n  font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-left: 1px dashed #8c8c8c;\n  padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  margin-bottom: 14px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GQVEvRkFRLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFHSjtBQURBO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFJSjtBQUZBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDSSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUFTSjtBQVBBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUEE7RUFDSyxpQkFBQTtFQUNELGdCQUFBO0VBRUksbUJBQUE7RUFDSixnQkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9GQVEvRkFRLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFuZWwtZ3JvdXAge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuI2FjY29yZGlvbiAucGFuZWwge1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMTBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWhlYWRpbmcge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEge1xuICAgIGJhY2tncm91bmQ6I2I0ZDQ2OSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZCB7XG4gICAgYmFja2dyb3VuZDp3aGl0ZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6I2I0ZDQ2OSAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGE6OmFmdGVyLCAjYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICM5M2JiMzYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbnRlbnQ6IFwi74SHXCI7XG4gICAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC01cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB3aWR0aDogNTVweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDpibGFjayBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY29udGVudDogXCLvhIVcIjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIG5vbmU7XG4gICAgcGFkZGluZzogMjBweCAyNXB4IDEwcHggOXB4O1xuICAgIHBvc2l0aW9uOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuI2FjY29yZGlvbiAucGFuZWwtYm9keSBwIHtcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjOGM4YzhjO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxubGkucGFuZWwtYm9keSB7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAQComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-FAQ',
                templateUrl: './FAQ.component.html',
                styleUrls: ['./FAQ.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FAXg":
/*!*********************************!*\
  !*** ./src/app/appconstants.ts ***!
  \*********************************/
/*! exports provided: HeaderConstants, PicklesConstants, TraditionalPodulu, SweetsandHotConstants, SpecialConstants, OthersConstants, AboutusConstants, SupportConstants, AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderConstants", function() { return HeaderConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklesConstants", function() { return PicklesConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraditionalPodulu", function() { return TraditionalPodulu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetsandHotConstants", function() { return SweetsandHotConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialConstants", function() { return SpecialConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersConstants", function() { return OthersConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusConstants", function() { return AboutusConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportConstants", function() { return SupportConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
const HeaderConstants = {
    1: "Home",
    2: "Pickles",
    3: "Traditional Powders",
    4: "Sweets & Hot",
    5: "Special Offers",
    6: "Others",
    7: "About-US",
    8: "Support",
};
const PicklesConstants = {
    1: "Non-vegetarian",
    2: "vegetarian",
    3: "With Gralic",
    4: "Without Gralic",
};
const TraditionalPodulu = {
    1: "Podulu(Powders)",
    2: "HomeMade Masala's",
};
const SweetsandHotConstants = {
    1: "Tradaitonal Sweets",
    2: "Tradaitonal Hot"
};
const SpecialConstants = {
    1: "Non-vegetarian Combo",
    2: "Vegetarian Combo",
    3: "Hot Combo",
    4: "Sweets Combo",
};
const OthersConstants = {
    1: "Books",
    2: "",
};
const AboutusConstants = {
    1: "Blog",
    2: "Shipping",
    3: "testimonials",
    4: "Privacy Policy",
    5: "Return & refunds",
    6: "About-US",
};
const SupportConstants = {
    1: "FAQ",
    2: "Chat",
    3: "Call",
    4: "Email",
};
class AppConstants {
}


/***/ }),

/***/ "HZa5":
/*!*****************************************************!*\
  !*** ./src/app/home/mainPage/mainPage.component.ts ***!
  \*****************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../cart.service */ "87QV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mainPage-listItem/mainPage-listItem.component */ "xE3F");









function MainPageComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Stay home & get ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " your tradational food ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Start You'r Shopping with Shrivasafoods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.scrollToFeatured(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Stay home & get ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " your tradational food ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Start You'r Shopping with Shrivasafoods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.scrollToFeatured(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Free Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For all oders over $100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Refundable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "If your item have no damage we agree to refund it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "100% secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "24/7 Customer Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "We have dedicated support.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Free Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "For All Orders Over 100$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Refundable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " If your item have no damage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " we agree to refund it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100% secure payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "24/7 Customer Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "We have dedicated support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "200px", height: "150px", space: 4 }; };
function MainPageComponent_div_1_ng_image_slider_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-image-slider", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageClick", function MainPageComponent_div_1_ng_image_slider_17_Template_ng_image_slider_imageClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onImageClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagePopup", false)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("images", ctx_r6.categories);
} }
const _c1 = function () { return { width: "220px", height: "30%", space: 8 }; };
function MainPageComponent_div_1_ng_image_slider_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-image-slider", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageClick", function MainPageComponent_div_1_ng_image_slider_19_Template_ng_image_slider_imageClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onImageClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagePopup", false)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("images", ctx_r7.categories);
} }
function MainPageComponent_div_1_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r27);
} }
function MainPageComponent_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_div_24_div_1_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.featuredProducts);
} }
function MainPageComponent_div_1_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r29);
} }
function MainPageComponent_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_1_div_25_div_3_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.featuredProducts);
} }
function MainPageComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_27_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.scrollToTrending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_27_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.scrollToTrending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_28_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.scrollToTrending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_28_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.scrollToTrending(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Save upto 20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r37);
} }
function MainPageComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_div_33_div_1_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.allProducts);
} }
function MainPageComponent_div_1_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r39);
} }
function MainPageComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_1_div_34_div_3_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.allProducts);
} }
function MainPageComponent_div_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Fast, Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Contactless Delivery. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Try it now, risk free! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Fast, Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Contactless Delivery. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Try it now, risk free! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_1_div_38_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.scrollToFeatured(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_1_div_3_Template, 11, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_1_div_4_Template, 11, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainPageComponent_div_1_div_7_Template, 35, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainPageComponent_div_1_div_9_Template, 42, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shop by Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visit our shop to see amazing products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainPageComponent_div_1_ng_image_slider_17_Template, 2, 4, "ng-image-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainPageComponent_div_1_ng_image_slider_19_Template, 2, 4, "ng-image-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Featured Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainPageComponent_div_1_div_24_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MainPageComponent_div_1_div_25_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MainPageComponent_div_1_div_27_Template, 29, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainPageComponent_div_1_div_28_Template, 47, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Trending Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainPageComponent_div_1_div_33_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainPageComponent_div_1_div_34_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MainPageComponent_div_1_div_37_Template, 12, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MainPageComponent_div_1_div_38_Template, 11, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceMd || ctx_r0.deviceLg || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceXs || ctx_r0.deviceSm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceSm || ctx_r0.deviceXs);
} }
function MainPageComponent_div_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r45);
} }
function MainPageComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_2_div_3_div_1_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.searchProductsData);
} }
function MainPageComponent_div_2_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r47);
} }
function MainPageComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_2_div_4_div_3_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.searchProductsData);
} }
function MainPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_2_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_2_div_4_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.deviceLg || ctx_r1.deviceMd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.deviceXs || ctx_r1.deviceSm);
} }
class MainPageComponent {
    // @ViewChild('nav') slider: NgImageSliderComponent;
    constructor(mediaObserver, productService, cartService, router) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.loadingData = true;
        this.loadingImage = true;
        this.searchProductsData = [];
        this.cartItems = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getAllProducts();
        this.getfeaturedProducts();
        this.productSearch = this.productService.searchItems.subscribe((searchitem) => {
            if (searchitem) {
                this.searchProductsData = this.allProducts.find((productItem) => {
                    if (productItem && productItem.name && productItem.name.find(searchitem)) {
                        return true;
                    }
                });
                this.searchProductsData;
            }
            else {
                this.searchProductsData = this.allProducts;
            }
        });
        this.categories = this.productService.categories;
    }
    scrollToTrending() {
        document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
    }
    scrollToFeatured() {
        document.getElementById("target").scrollIntoView({ behavior: "smooth" });
    }
    get searchProducts() {
        let search = this.productService.searchProducts();
        return search;
    }
    getAllProducts() {
        this.productService.getProducts().subscribe((products) => {
            // this.allProducts = products;
            // this.searchProductsData = this.allProducts
            let tempProducts = products;
            let cartProducts = this.cartService.getProducts();
            if (tempProducts && cartProducts) {
                tempProducts.forEach(item => {
                    cartProducts.forEach((cartItem) => {
                        if (item._id === cartItem._id) {
                            item.productCount = cartItem.productCount;
                        }
                    });
                });
            }
            this.searchProductsData = this.allProducts = tempProducts;
            // this.searchProductsData = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    getfeaturedProducts() {
        this.productService.featuredProducts().subscribe((products) => {
            let tempProducts = products;
            let cartProducts = this.cartService.getProducts();
            if (tempProducts && cartProducts) {
                tempProducts.forEach(item => {
                    cartProducts.forEach((cartItem) => {
                        if (item._id === cartItem._id) {
                            item.productCount = cartItem.productCount;
                        }
                    });
                });
            }
            this.featuredProducts = tempProducts;
        }, (error) => {
            console.log('error in getting featuredProducts ');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    imageLoaded() {
        this.loadingImage = false;
    }
    get loadingImageGetter() {
        return this.loadingImage;
    }
    getImage(imageId) {
        // this.loadingImage = true;
        // this.loadingImage = false;
        if (!imageId) {
            return '';
        }
        else {
            return this.productService.productImageUrl(imageId);
        }
    }
    removeProduct(product) {
        this.cartService.removeProduct(product);
    }
    onImageClick(index) {
        this.router.navigate(['catagory/' + this.categories[index].routeTo]);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-mainPage"]], inputs: { search: "search" }, decls: 7, vars: 2, consts: [["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["style", "background-color: #f7f7f7; width: 100%", 4, "ngIf"], ["style", "border-radius: 6px; margin: 2%", "id", "target", 4, "ngIf"], [2, "padding", "2%"], [2, "background-color", "#f7f7f7", "width", "100%"], [1, "container-fluid", 2, "width", "100%", "padding-top", "2%"], [1, "block"], [4, "ngIf"], ["style", "padding-top: 3%", 4, "ngIf"], ["src", "../assets/images/home.jpeg", 1, "img-responsive", 2, "min-height", "350px", "width", "auto", "border-radius", "6px"], [2, "margin-top", "4%", "margin-bottom", "4%"], ["style", "display: flex; flex-direction: row; justify-content: space-evenly", 4, "ngIf"], [2, "margin", "3%"], [2, "text-align", "center"], [2, "font-weight", "bold"], [2, "margin", "2%"], [3, "imagePopup", "imageSize", "images", "imageClick", 4, "ngIf"], ["id", "target", 2, "min-height", "50px"], [2, "border-radius", "6px", "margin", "2%"], [2, "font-weight", "bold", "padding-left", "1%", "padding-top", "4%", "font-size", "20px"], ["class", "deviceLg", 4, "ngIf"], [2, "margin", "1%"], ["id", "myCarousel", "class", "carousel slide", "data-ride", "carousel", 4, "ngIf"], ["id", "trending", 2, "min-height", "20px"], [2, "font-weight", "bold", "font-size", "1.5vw", "padding-left", "3%", "padding-top", "4%"], [1, "row", 2, "margin", "1%"], ["class", "block", "style", "padding-top: 5%", 4, "ngIf"], ["class", "block", "style", "padding-top: 20%", 4, "ngIf"], ["src", "../assets/images/slide2.png", 1, "img-responsive", 2, "border-radius", "6px", "min-height", "350px", "width", "100%", "border-radius", "8px"], [1, "text-block"], [2, "color", "white", "padding-top", "15%", "padding-bottom", "2%", "font-size", "xx-large"], [2, "color", "white", "padding-bottom", "7%", "font-size", "xx-large"], [1, "text-block-small", 2, "padding-bottom", "7%"], [1, "btn", 2, "background-color", "#ffffff", "width", "40%", 3, "click"], [2, "padding-top", "3%"], [2, "color", "white", "padding-bottom", "6%", "font-size", "40px"], [2, "color", "white", "padding-bottom", "12%", "font-size", "40px"], [1, "text-block-small", 2, "padding-bottom", "12%", "font-size", "20px"], [1, "btn", 2, "background-color", "#ffffff", "font-size", "14px", "width", "50%", "height", "40px", "font-weight", "bold", 3, "click"], [2, "padding-left", "7%", "padding-bottom", "2%", "display", "flex", "flex-direction", "column", "justify-content", "left"], [1, "row", 2, "padding-bottom", "5%"], [2, "float", "left", "padding-right", "4%"], [1, "fa", "fa-home", 2, "width", "10%", "font-size", "xx-large"], [2, "float", "right"], [2, "float", "left", "padding-right", "2%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], [1, "row"], [1, "col-sm-2"], [1, "fa", "fa-home", 2, "font-size", "xx-large"], [1, "col-sm-10"], [2, "padding-top", "10px"], [3, "imagePopup", "imageSize", "images", "imageClick"], ["nav", ""], [1, "deviceLg"], ["routerLinkActive", "router-link-active", "style", "\n          padding: 1%;\n          width: 200px;\n          height: 200px;\n          background-color: white;\n          margin: 1%;\n        ", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 2, "padding", "1%", "width", "200px", "height", "200px", "background-color", "white", "margin", "1%"], [3, "item"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "\n              padding: 2%;\n              width: 180px;\n              height: 200px;\n              background-color: white;\n              margin: 2%;\n            ", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "180px", "height", "200px", "background-color", "white", "margin", "2%"], ["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide", 2, "padding-right", "5%"], [1, "carousel-indicators"], ["data-target", "#myCarousel", "data-slide-to", "0", 1, "active"], ["data-target", "#myCarousel", "data-slide-to", "1"], ["data-target", "#myCarousel", "data-slide-to", "2"], [1, "carousel-inner"], [1, "item", "active"], [1, "col-sm-12"], [2, "margin-top", "2%"], [1, "text-block1Slider"], [1, "text-block2Slider"], [1, "btn", "btn-imgSlider", 3, "click"], [1, "fa", "fa-arrow"], ["src", "../assets/images/slide1.png", 1, "img-responsive", 2, "width", "100%"], [1, "item"], ["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "col-lg-6"], ["src", "../assets/images/slide1.png", 1, "img-responsive"], ["src", "../assets/images/slide3.png", 1, "img-responsive"], [1, "btn", "btn-imgSlider"], ["src", "../assets/images/slide3.png", 1, "img-responsive", 2, "width", "100%"], [1, "block", 2, "padding-top", "5%"], [2, "color", "black", "padding-bottom", "5%", "font-size", "40px"], [2, "color", "black", "padding-bottom", "10%", "font-size", "40px"], [2, "color", "black", "padding-bottom", "10%", "font-size", "20px"], [1, "btn", 2, "background-color", "#ffffff", "width", "40%", "height", "35px"], [1, "block", 2, "padding-top", "20%"], [2, "color", "black", "padding-bottom", "5%", "font-size", "25px"], [1, "text-block-small", 2, "color", "black", "padding-bottom", "5%"], ["id", "target", 2, "border-radius", "6px", "margin", "2%"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_1_Template, 40, 14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainPageComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copyright \u00A9 2020 RedQ, Inc , All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.searchProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_image_slider__WEBPACK_IMPORTED_MODULE_6__["NgImageSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_7__["MainPageListItemComponent"]], styles: [".textimages[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  position: absolute;\n}\n\n.block[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: white;\n  padding-top: 10%;\n  padding-bottom: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 38px;\n}\n\n.text-blockFooter[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.text-block-large[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n}\n\n.text-block-small[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n\n.text-block-btn[_ngcontent-%COMP%] {\n  width: 35%;\n  font-weight: bold;\n  min-width: 30%;\n  font-size: small;\n  text-align: center;\n  border-radius: 6px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.text-block1Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 10%;\n  padding-left: 5%;\n  margin-bottom: 12px;\n}\n\n.text-block2Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 20%;\n  padding-left: 5%;\n}\n\n.text-block3Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 5%;\n  left: 5%;\n  font-size: small;\n  padding-top: 12px;\n  text-align: center;\n  height: 3vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #e9e6e6;\n}\n\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 9%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 12%;\n  padding-left: 5%;\n}\n\n.text-block4Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 15%;\n  font-weight: bold;\n  margin-top: 15%;\n  margin-left: 1%;\n  left: 5%;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.slide1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.carousel-inner-slider1[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  margin-left: 22%;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 10%;\n  right: 80%;\n}\n\n.btn-imgSlider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 20%;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 3%;\n  left: 7%;\n  top: 15%;\n  font-size: 1.5vw;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.img-main[_ngcontent-%COMP%] {\n  width: 1460px;\n  height: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluUGFnZS9tYWluUGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Qsa0JBQUE7QUFDRDs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0EsZUFBQTtBQUVBOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0Esb0NBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FBQ0Y7O0FBQUM7RUFDQyxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdDO0VBQ0Msa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUdBLGtCQUFBO0VBRUEsa0JBQUE7QUFMRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBTUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBSEE7O0FBS0E7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFGRDs7QUFJQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREE7O0FBTUE7RUFDQSxZQUFBO0FBSEE7O0FBTUE7RUFDQSxnQkFBQTtBQUhBOztBQU1BO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFHQSxrQkFBQTtFQUlBLGtCQUFBO0FBYkY7O0FBZ0JBO0VBRUEsYUFBQTtFQUNBLGFBQUE7QUFkQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpblBhZ2UvbWFpblBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGltYWdlc3tcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxufVxuLmJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udGV4dC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuLnRleHQtYmxvY2tGb290ZXJ7XG5mb250LXNpemU6IDMycHg7XG59XG4udGV4dC1ibG9jay1sYXJnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udGV4dC1ibG9jay1zbWFsbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRleHQtYmxvY2stYnRuIHtcbiAgd2lkdGg6IDM1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMzAlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi50ZXh0LWJsb2NrMVNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC8vIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufS50ZXh0LWJsb2NrMlNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBwYWRkaW5nLXRvcDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAvLyBmb250LXNpemU6IDF2dztcblxufVxuLnRleHQtYmxvY2szU2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMCwgMjMwKTtcbn1cblxuXG4udGV4dC1ibG9jazFGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDYlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxufS50ZXh0LWJsb2NrMkZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnRleHQtYmxvY2szRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiAxMiU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC8vIGZvbnQtc2l6ZTogMXZ3O1xuXG59XG4udGV4dC1ibG9jazRGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiAxNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbGVmdDogNSU7XG5cblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZXZpY2VYc3tcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5mbGV4LXdyYXA6IHdyYXA7XG5mbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zbGlkZTF7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5mb250LXNpemU6IDN2dztcbm1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY2Fyb3VzZWwtaW5uZXJ7XG4gIC8vIHdpZHRoOiAxMDB2dztcbn1cbi5jYXJvdXNlbC1pbm5lci1zbGlkZXIxe1xud2lkdGg6IDEwMHZ3O1xuXG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbm1hcmdpbi1sZWZ0OiAyMiU7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDgwJTtcbn1cbi5pdGVte1xuLy8gaGVpZ2h0OiAxMDBweDtcbn1cbi5jYXJvdXNlbHtcblxufVxuLmJ0bi1pbWdTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbGVmdDogNyU7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDEuNXZ3O1xuICAvLyBwYWRkaW5nLXRvcDogMTBweDtcbiAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gaGVpZ2h0OiAzdnc7XG4gIC8vIHdpZHRoOiAxMHZ3O1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmltZy1tYWluICB7XG5cbndpZHRoOiAxNDYwcHg7XG5oZWlnaHQ6IDU1MHB4XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainPage',
                templateUrl: './mainPage.component.html',
                styleUrls: ['./mainPage.component.scss'],
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "K30+":
/*!***********************************************************!*\
  !*** ./src/app/home/referFriend/referFriend.component.ts ***!
  \***********************************************************/
/*! exports provided: ReferFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferFriendComponent", function() { return ReferFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class ReferFriendComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.allOrders = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    refer() {
        const data = {
            refrenceCode: this.refrenceCode,
            friendEmail: this.friendEmail
        };
        this.productService.referFriend(data).subscribe((products) => {
            alert("refer");
        }, (error) => {
            alert("use correct refrenceId");
        });
    }
}
ReferFriendComponent.ɵfac = function ReferFriendComponent_Factory(t) { return new (t || ReferFriendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
ReferFriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferFriendComponent, selectors: [["app-referFriend"]], decls: 38, vars: 2, consts: [[2, "min-height", "200px", "margin", "10%"], [1, "row"], [1, "col-xs-6"], [2, "width", "50%", "word-wrap", "break-word"], [2, "font-size", "xx-large"], ["placeholder", "Your Friend Email", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "Your Refrence Code", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 2, "margin", "2%", 3, "click"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "margin-left", "5%", "margin-right", "5%"], [2, "width", "40%", "font-weight", "bold", "word-wrap", "break-word"]], template: function ReferFriendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Share GRUBHUB and get 10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Image\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "invite a friend you will both get 10% off ..............");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Share to Your Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "and Get 10$ discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Invite through Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReferFriendComponent_Template_input_ngModelChange_18_listener($event) { return ctx.friendEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReferFriendComponent_Template_input_ngModelChange_19_listener($event) { return ctx.refrenceCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferFriendComponent_Template_button_click_20_listener() { return ctx.refer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Send Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Send your refrence code to your friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ask your friend to use your refrence code to order something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Get 10$ on every order your friend did using your refrence Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.friendEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refrenceCode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVmZXJGcmllbmQvcmVmZXJGcmllbmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferFriendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-referFriend',
                templateUrl: './referFriend.component.html',
                styleUrls: ['./referFriend.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "Kg9S":
/*!******************************************************************!*\
  !*** ./src/app/admin/ordersProgress/ordersProgress.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProgressComponent", function() { return OrdersProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin.service */ "l3fW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OrdersProgressComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersProgressComponent_div_21_Template_p_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.nextPhase(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.phase);
} }
function OrdersProgressComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6, " ");
} }
function OrdersProgressComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7 == null ? null : item_r7.name, " ");
} }
const _c0 = function () { return ["Name"]; };
class OrdersProgressComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.phase = "delievery";
        this.allOrders = [];
    }
    ngOnInit() {
        this.orders();
    }
    orders() {
        this.adminService.getAllOrders().subscribe((data) => {
            this.allOrders = data.product;
        });
    }
    get cartDataValue() {
        return this.cartData;
    }
    nextPhase(item) {
        this.cartData = item.cartData;
        setTimeout(() => {
            this.printOrder(item);
        }, 1000);
        const orderShipped = {
            phase: this.phase = "shipping",
            ownerEmail: item.ownerEmail,
            orderId: item._id
        };
        this.adminService.shippingPhase(orderShipped).subscribe((data) => {
            alert("Shipping");
        });
    }
    printOrder(data) {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["jsPDF"]();
        // let doc = new jsPDF();
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default()(doc, {
            theme: 'plain',
            html: '#tableid',
            useCss: true,
            // showHead: 'everyPage',
            startY: 80,
        });
        doc.setPage(1);
        doc.setFont("helvetica");
        doc.setTextColor("black");
        doc.setFontSize(17);
        doc.text('Shirivas Food', 15, 15);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text('Name', 15, 35);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text((data.firstName.toString() + ' ' + data.lastName.toString()), 15, 40);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text('country', 15, 50);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text(data.contry.toString(), 15, 55);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text('Address', 15, 65);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text(data.adress.toString(), 15, 70);
        // doc.setPage(1)
        // doc.setTextColor("black");
        // doc.setFontSize(10);
        // doc.text("Order No", 160, 35);
        // doc.setPage(1)
        // doc.setTextColor("black");
        // doc.setFontSize(10);
        // doc.text('122322', 160, 40);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text('Status', 160, 35);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text(data.phase.toString(), 160, 40);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text('Total', 160, 50);
        doc.setPage(1);
        doc.setTextColor("black");
        doc.setFontSize(10);
        doc.text(data.total.toString(), 160, 55);
        // Save the PDF
        doc.save('Test.pdf');
    }
}
OrdersProgressComponent.ɵfac = function OrdersProgressComponent_Factory(t) { return new (t || OrdersProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"])); };
OrdersProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersProgressComponent, selectors: [["app-ordersProgress"]], decls: 27, vars: 4, consts: [[2, "margin-top", "10%"], [2, "text-align", "center", "font-weight", "bold"], [2, "border", "1px", "border-style", "groove"], [1, "row", 2, "margin", "1%"], [1, "col-lg-2"], [2, "font-size", "large"], [4, "ngFor", "ngForOf"], [2, "font-size", "14px"], ["id", "tableid"], [1, "row", 2, "border", "1px", "border-style", "groove", "margin", "1%", "padding-top", "3px"], [1, "col-lg-1"], [1, "btn", "green-btn", 2, "color", "white", 3, "click"]], template: function OrdersProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order No #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrdersProgressComponent_div_21_Template, 20, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrdersProgressComponent_th_25_Template, 2, 1, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrdersProgressComponent_tr_26_Template, 3, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartDataValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzUHJvZ3Jlc3Mvb3JkZXJzUHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vb3JkZXJzUHJvZ3Jlc3Mvb3JkZXJzUHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ordersProgress',
                templateUrl: './ordersProgress.component.html',
                styleUrls: ['./ordersProgress.component.scss']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "N3GV":
/*!*************************************************************************!*\
  !*** ./src/app/home/TraditionalPowders/TraditionalPowders.component.ts ***!
  \*************************************************************************/
/*! exports provided: TraditionalPowdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraditionalPowdersComponent", function() { return TraditionalPowdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TraditionalPowdersComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraditionalPowdersComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function TraditionalPowdersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TraditionalPowdersComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.traditionalpowdersProducts);
} }
function TraditionalPowdersComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraditionalPowdersComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function TraditionalPowdersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TraditionalPowdersComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.traditionalpowdersProducts);
} }
class TraditionalPowdersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('traditionalpowders').subscribe((products) => {
            this.traditionalpowdersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
TraditionalPowdersComponent.ɵfac = function TraditionalPowdersComponent_Factory(t) { return new (t || TraditionalPowdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
TraditionalPowdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraditionalPowdersComponent, selectors: [["app-traditionalpowders"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/traditionalpowders.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function TraditionalPowdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TraditionalPowders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TraditionalPowdersComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TraditionalPowdersComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9UcmFkaXRpb25hbFBvd2RlcnMvdHJhZGl0aW9uYWxwb3dkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUdIOztBQURBO0VBQ0UseUVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvVHJhZGl0aW9uYWxQb3dkZXJzL3RyYWRpdGlvbmFscG93ZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraditionalPowdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-traditionalpowders',
                templateUrl: './traditionalpowders.component.html',
                styleUrls: ['./traditionalpowders.component.scss'],
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "OF2f":
/*!*****************************************************!*\
  !*** ./src/app/checkOut/checkOut-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckOutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutRoutingModule", function() { return CheckOutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/checkOut/checkOut.component */ "xHX8");
/* harmony import */ var _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkOutPage/checkOutPage.component */ "iiv8");






const routes = [
    {
        path: '', component: _home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_2__["CheckOutComponent"], children: [
            { path: '', component: _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_3__["CheckOutPageComponent"] },
            { path: 'login', loadChildren: './account/account.module#AccountModule' },
        ]
    },
];
class CheckOutRoutingModule {
}
CheckOutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CheckOutRoutingModule });
CheckOutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CheckOutRoutingModule_Factory(t) { return new (t || CheckOutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckOutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Pk2g":
/*!***********************************************!*\
  !*** ./src/app/home/dairy/dairy.component.ts ***!
  \***********************************************/
/*! exports provided: DairyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DairyComponent", function() { return DairyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DairyComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DairyComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function DairyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DairyComponent_div_8_div_1_Template, 9, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dairyProducts);
} }
function DairyComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DairyComponent_div_9_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function DairyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DairyComponent_div_9_div_3_Template, 9, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dairyProducts);
} }
class DairyComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('dairy').subscribe((products) => {
            this.dairyProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
DairyComponent.ɵfac = function DairyComponent_Factory(t) { return new (t || DairyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
DairyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DairyComponent, selectors: [["app-dairy"]], decls: 10, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [2, "text-align", "center"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/dairy.webp", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function DairyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dairy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DairyComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DairyComponent_div_9_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 43%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYWlyeS9kYWlyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFDSDs7QUFDQTtFQUNFLHlFQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RhaXJ5L2RhaXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiA0MyU7XG5cbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DairyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dairy',
                templateUrl: './dairy.component.html',
                styleUrls: ['./dairy.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "QEFU":
/*!******************************************************************!*\
  !*** ./src/app/account/resetPassword/resetPassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customValidator */ "ga6B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ResetPasswordComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password must have at least 1 Capital letter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " passowrd must have at least 1 Small letter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " passowrd must have at least 1 number! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
} }
function ResetPasswordComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
class ResetPasswordComponent {
    constructor(route, router, formBuilder, accountService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        this.resetToken = id;
        this.rformPassword = this.formBuilder.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[A-Z]/, { hasCapitalCase: true }),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[a-z]/, { hasSmallCase: true }),
                Object(_customValidator__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/[0-9]/, { hasDigit: true }),
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            resetToken: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.resetToken, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    passwordshow() {
        this.showPass = !this.showPass;
    }
    changePassword() {
        if (this.rformPassword.valid) {
            this.accountService.resetPassword(this.rformPassword.value).subscribe(() => {
                alert("Password Reset Successful");
                this.router.navigate(['/']);
            }, (error) => {
                alert(error.error.message);
                // console.log(error)
            });
        }
        else {
            alert("invalid form");
        }
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-resetPassword"]], decls: 43, vars: 8, consts: [[2, "margin-top", "5%", "display", "flex", "flex-direction", "row", "flex", "1", "justify-content", "center"], [2, "margin-bottom", "5%"], [2, "font-size", "xx-large", "font-weight", "bold", "text-align", "center"], [2, "padding-bottom", "2%", "display", "flex", "flex-direction", "row", "width", "400px"], [2, "width", "360px"], ["placeholder", "Password", "name", "password", "rformControlName", "password", 1, "textfieldBorderColor", "font13", 3, "rformgroup", "type"], ["style", "font-size: 14px;", "class", "errorlbl", 4, "ngIf"], ["style", "font-size: 14px;", 4, "ngIf"], [2, "width", "30px"], ["type", "submit", 1, "btn", "btn-default", 2, "height", "35px", 3, "click"], ["class", "glyphicon glyphicon-eye-open", 4, "ngIf"], ["class", "glyphicon glyphicon-eye-close", 4, "ngIf"], ["hint", "min 8 chareacters", "name", "confirmPassword", "type", "password", "rformControlName", "confirmPassword", 1, "textfieldBorderColor", "font13", 2, "width", "400px", 3, "rformgroup"], [2, "text-align", "center"], [1, "btn", "btn-primary", 2, "color", "whitesmoke", "width", "100%", 3, "click"], [2, "font-weight", "bold", "font-size", "small"], [2, "background-color", "rgb(231, 228, 228)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "text-align", "right"], [1, "errorlbl", 2, "font-size", "14px"], [2, "font-size", "14px"], [1, "glyphicon", "glyphicon-eye-open"], [1, "glyphicon", "glyphicon-eye-close"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter new Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ns-textField-account", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetPasswordComponent_p_10_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResetPasswordComponent_p_11_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResetPasswordComponent_p_12_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_14_listener() { return ctx.passwordshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_i_15_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetPasswordComponent_i_16_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ns-textField-account", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_22_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00A9 2020, Shrivasafoods store Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformPassword)("type", ctx.showPass ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rformPassword.controls["password"].hasError("hasCapitalCase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rformPassword.controls["password"].hasError("hasSmallCase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rformPassword.controls["password"].hasError("hasDigit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformPassword);
    } }, directives: [_textField_textField_component__WEBPACK_IMPORTED_MODULE_5__["TextFieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n   position: absolute;\n   color: white;\n   padding-top: 9%;\n   padding-left: 40%;\n   font-size: 2vw;\n   margin-bottom: 12px;\n   font-weight: 500;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixjQUFjO0dBQ2QsbUJBQW1CO0dBQ25CLGdCQUFnQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetPassword',
                templateUrl: './resetPassword.component.html',
                styleUrls: ['./resetPassword.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "S5X1":
/*!***************************************************************!*\
  !*** ./src/app/home/specialoffers/specialoffers.component.ts ***!
  \***************************************************************/
/*! exports provided: SpecialOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOffersComponent", function() { return SpecialOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SpecialOffersComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialOffersComponent_div_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function SpecialOffersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpecialOffersComponent_div_9_div_1_Template, 9, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.specialoffersProducts);
} }
function SpecialOffersComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialOffersComponent_div_10_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function SpecialOffersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpecialOffersComponent_div_10_div_3_Template, 9, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.specialoffersProducts);
} }
class SpecialOffersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('specialoffers').subscribe((products) => {
            this.specialoffersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
SpecialOffersComponent.ɵfac = function SpecialOffersComponent_Factory(t) { return new (t || SpecialOffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
SpecialOffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialOffersComponent, selectors: [["app-specialoffers"]], decls: 11, vars: 2, consts: [[2, "min-height", "400px"], [2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [2, "text-align", "center"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/specialoffers.webp", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function SpecialOffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SpecialOffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpecialOffersComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SpecialOffersComponent_div_10_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 43%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcGVjaWFsb2ZmZXJzL3NwZWNpYWxvZmZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBQ0g7O0FBQ0E7RUFDRSx5RUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zcGVjaWFsb2ZmZXJzL3NwZWNpYWxvZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQzJTtcblxuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialOffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specialoffers',
                templateUrl: './specialoffers.component.html',
                styleUrls: ['./specialoffers.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'SHRIVASAFOODS';
        this.navShow = true;
    }
    ngOnInIt() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .dropdown[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]:active {\n    \n      pointer-events: none;\n  }\n\n  .fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-top: 10px 10px;\n    text-transform: uppercase;\n    font-size: 12px;\n\n    height: 10px;\n}\n\n  .fundpress-tab-nav-v3[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 200 ;\n}\n\n  .nav-menu[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li.focus[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: lighter;\n}\n\n  .fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 25px 10px;\n    text-transform: uppercase;\n\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNkNBQTZDO01BQzNDLG9CQUFvQjtFQUN4Qjs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZUFBZTs7SUFFZixZQUFZO0FBQ2hCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kcm9wZG93bj4uZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSB7XG4gICAgLypXaXRob3V0IHRoaXMsIGNsaWNraW5nIHdpbGwgbWFrZSBpdCBzdGlja3kqL1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmZ1bmRwcmVzcy1tZW51IC5uYXYtbWVudSBsaSBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uZnVuZHByZXNzLXRhYi1uYXYtdjMgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDIwMCA7XG59XG4ubmF2LW1lbnU+bGkuYWN0aXZlPmEsIC5uYXYtbWVudT5saS5mb2N1cz5hLCAubmF2LW1lbnU+bGk6aG92ZXI+YSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGEge1xuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/products"]; };
const _c2 = function () { return ["/addProduct"]; };
class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 12, vars: 6, consts: [[2, "margin", "2%"], [2, "text-align", "center"], [2, "font-size", "larger", "float", "left", 3, "routerLink"], [2, "font-size", "larger", "text-align", "center", 3, "routerLink"], [2, "font-size", "larger", "float", "right", 3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADMIN PORTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Prodcuts Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Prodcut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XUqj":
/*!******************************************************!*\
  !*** ./src/app/admin/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_home_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/product.service */ "BRKm");
/* harmony import */ var src_app_home_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/cart.service */ "87QV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.service */ "l3fW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ProductsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_15_Template_p_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_15_Template_p_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.productOrders);
} }
class ProductsComponent {
    constructor(mediaObserver, productService, cartService, router, adminService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getAllProducts();
    }
    getAllProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.allProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    edit(item) {
        this.router.navigate(['addProduct/', JSON.stringify(item)]);
    }
    delete(item) {
        this.adminService.deleteProduct(item._id).subscribe((campaignData) => {
            alert('Deleted');
        }, (error) => {
            alert('failed');
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_home_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_home_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 16, vars: 1, consts: [[2, "margin-top", "10%"], [2, "text-align", "center", "font-weight", "bold"], [2, "border", "1px", "border-style", "groove"], [1, "row", 2, "margin", "1%"], [1, "col-lg-2"], [2, "font-size", "large"], [4, "ngFor", "ngForOf"], [1, "row", 2, "border", "1px", "border-style", "groove", "margin", "1%", "padding-top", "3px"], [1, "col-lg-1"], [1, "btn", "green-btn", 2, "color", "white", 3, "click"], [1, "btn", "btn-danger", 2, "color", "white", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Name #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsComponent_div_15_Template, 17, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: src_app_home_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: src_app_home_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "Y2rj":
/*!*********************************************!*\
  !*** ./src/app/checkOut/checkOut.module.ts ***!
  \*********************************************/
/*! exports provided: CheckOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutModule", function() { return CheckOutModule; });
/* harmony import */ var _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOutPage/checkOutPage.component */ "iiv8");
/* harmony import */ var _checkOut_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOut-routing.module */ "OF2f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../home/checkOut/checkOut.component */ "xHX8");


























// import { AppMaterialModules } from './material.module';
class CheckOutModule {
}
CheckOutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckOutModule });
CheckOutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CheckOutModule_Factory(t) { return new (t || CheckOutModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _checkOut_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_17__["NgImageSliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_16__["MatCarouselModule"].forRoot(),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_19__["NgxPayPalModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckOutModule, { declarations: [_home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_21__["CheckOutComponent"], _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_0__["CheckOutPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _checkOut_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutRoutingModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_17__["NgImageSliderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_16__["MatCarouselModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_19__["NgxPayPalModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"]], exports: [_home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_21__["CheckOutComponent"], _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_0__["CheckOutPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CheckOutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _checkOut_routing_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutRoutingModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_17__["NgImageSliderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_16__["MatCarouselModule"].forRoot(),
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_19__["NgxPayPalModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"].forRoot()
                ],
                declarations: [_home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_21__["CheckOutComponent"], _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_0__["CheckOutPageComponent"]],
                exports: [_home_checkOut_checkOut_component__WEBPACK_IMPORTED_MODULE_21__["CheckOutComponent"], _checkOutPage_checkOutPage_component__WEBPACK_IMPORTED_MODULE_0__["CheckOutPageComponent"]],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y8YW":
/*!************************************************************************************!*\
  !*** ./src/app/theme/customize-option-select/customize-option-select.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomizeOptionSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeOptionSelectComponent", function() { return CustomizeOptionSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class CustomizeOptionSelectComponent {
    constructor() {
        this.options = [];
        this.currentOptionIndex = 0;
    }
    ngOnInit() {
    }
    nextOption() {
        if (this.currentOptionIndex < (this.options.length - 1)) {
            this.currentOptionIndex++;
        }
    }
    perviousOption() {
        if (this.currentOptionIndex > 0) {
            this.currentOptionIndex--;
        }
    }
    get getCurrentOption() {
        return this.options[this.currentOptionIndex];
    }
}
CustomizeOptionSelectComponent.ɵfac = function CustomizeOptionSelectComponent_Factory(t) { return new (t || CustomizeOptionSelectComponent)(); };
CustomizeOptionSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeOptionSelectComponent, selectors: [["app-customize-option-select"]], inputs: { options: "options" }, decls: 9, vars: 1, consts: [[1, "display-flex"], [1, "m-t-7", 3, "click"], [1, "m-l-10", "m-r-10", "f-13", "w-5vw", "m-b-3"]], template: function CustomizeOptionSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeOptionSelectComponent_Template_div_click_1_listener() { return ctx.perviousOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeOptionSelectComponent_Template_div_click_6_listener() { return ctx.nextOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCurrentOption);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".m-t-7[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.m-r-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.w-5vw[_ngcontent-%COMP%] {\n  width: 5vw;\n  line-height: 20px;\n  text-align: center;\n}\n\n.m-b-3[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY3VzdG9taXplLW9wdGlvbi1zZWxlY3QvY3VzdG9taXplLW9wdGlvbi1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFBUyxpQkFBQTtBQUVUOztBQURBO0VBQVMsa0JBQUE7QUFLVDs7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNJLGtCQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jdXN0b21pemUtb3B0aW9uLXNlbGVjdC9jdXN0b21pemUtb3B0aW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLXQtNyB7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ubS1sLTEwIHttYXJnaW4tbGVmdDogMTBweDt9IFxuLm0tci0xMCB7bWFyZ2luLXJpZ2h0OiAxMHB4O30gXG5cbi5kaXNwbGF5LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnctNXZ3IHtcbiAgICB3aWR0aDogNXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm0tYi0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeOptionSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customize-option-select',
                templateUrl: './customize-option-select.component.html',
                styleUrls: ['./customize-option-select.component.scss']
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YMok":
/*!*********************************************************************!*\
  !*** ./src/app/home/privacyandpolicy/privacyandpolicy.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivacyandpolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyandpolicyComponent", function() { return PrivacyandpolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyandpolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyandpolicyComponent.ɵfac = function PrivacyandpolicyComponent_Factory(t) { return new (t || PrivacyandpolicyComponent)(); };
PrivacyandpolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyandpolicyComponent, selectors: [["app-privacyandpolicy"]], decls: 69, vars: 0, consts: [[2, "margin", "5%"], [1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function PrivacyandpolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Privacy and policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panel-group[_ngcontent-%COMP%] {\n    background: #fff none repeat scroll 0 0;\n    border-radius: 3px;\n    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n    margin-bottom: 0;\n    padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    border: medium none;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background:#b4d469 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 30px;\n    color: black;\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 12px 20px 12px 50px;\n    position: relative;\n    transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n    background:white none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n    background:#b4d469  none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background: #93bb36 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n    color: #fff;\n    content: \"\uF107\";\n    font-family: fontawesome;\n    font-size: 25px;\n    height: 55px;\n    left: -20px;\n    line-height: 55px;\n    position: absolute;\n    text-align: center;\n    top: -5px;\n    transition: all 0.3s ease 0s;\n    width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background:black none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    box-shadow: none;\n    color: white;\n    content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    background: transparent none repeat scroll 0 0;\n    border-top: medium none;\n    padding: 20px 25px 10px 9px;\n    position: auto;\n    font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-left: 1px dashed #8c8c8c;\n    padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n     font-weight: bold;\n    font-size: small;\n    \n        margin-bottom: 14px;\n    text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcml2YWN5YW5kcG9saWN5L3ByaXZhY3lhbmRwb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCO0FBRUE7S0FDSyxpQkFBaUI7SUFDbEIsZ0JBQWdCOztRQUVaLG1CQUFtQjtJQUN2QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcml2YWN5YW5kcG9saWN5L3ByaXZhY3lhbmRwb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhbmVsLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsIHtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDEwcHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0Njkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQge1xuICAgIGJhY2tncm91bmQ6d2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0NjkgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhOjphZnRlciwgI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTNiYjM2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb250ZW50OiBcIu+Eh1wiO1xuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDU1cHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6YmxhY2sgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNvbnRlbnQ6IFwi74SFXCI7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci10b3A6IG1lZGl1bSBub25lO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAxMHB4IDlweDtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkgcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzhjOGM4YztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbmxpLnBhbmVsLWJvZHkge1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyandpolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacyandpolicy',
                templateUrl: './privacyandpolicy.component.html',
                styleUrls: ['./privacyandpolicy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yg7E":
/*!*******************************************************!*\
  !*** ./src/app/home/giftCards/giftCards.component.ts ***!
  \*******************************************************/
/*! exports provided: GiftCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardsComponent", function() { return GiftCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GiftCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GiftCardsComponent.ɵfac = function GiftCardsComponent_Factory(t) { return new (t || GiftCardsComponent)(); };
GiftCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiftCardsComponent, selectors: [["app-giftCards"]], decls: 13, vars: 0, consts: [[1, "row", 2, "min-height", "200px", "margin", "10%"], [1, "col-xs-8"], [1, "col-xs-4"], [2, "width", "50%", "word-wrap", "break-word"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [1, "btn", "btn-primary"]], template: function GiftCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Give the gift of GRUBHUB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "with Grubhub gift cards,friends and family can order anytime from anywhere for their fav resturaunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy a gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Redeam a gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".done[_ngcontent-%COMP%]{\n  height: 35px;\n    width: 40px;\n    padding: 5px;\n    text-align: center;\n    padding-top: 2%;\n    border-radius: 50%;\n    display: inline-block;\n    color:#fff;\n    font-size:1.1em;\n    font-weight:600;\n    background-color:rgb(0, 161, 0);\n    border: 1px solid rgba(0,0,0,0.2);\n}\n\n.inactive[_ngcontent-%COMP%]{\n  height: 35px;\n  width: 40px;\n  padding: 5px;\n  text-align: center;\n  padding-top: 2%;\n  border-radius: 50%;\n  display: inline-block;\n  color:#fff;\n  font-size:1.1em;\n  font-weight:600;\n  background-color:rgb(148, 148, 148);\n  border: 1px solid rgba(0,0,0,0.2);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9naWZ0Q2FyZHMvZ2lmdENhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUNBQWlDOztBQUVuQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2lmdENhcmRzL2dpZnRDYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvbmV7XG4gIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxNjEsIDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmluYWN0aXZle1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOjEuMWVtO1xuICBmb250LXdlaWdodDo2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE0OCwgMTQ4LCAxNDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiftCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-giftCards',
                templateUrl: './giftCards.component.html',
                styleUrls: ['./giftCards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.module */ "v35Q");
/* harmony import */ var _checkOut_checkOut_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOut/checkOut.module */ "Y2rj");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.module */ "jkDv");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.module */ "jcJX");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/auth.service */ "ccyI");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-social-login */ "ahC7");



















const googleid = '';
const facebookid = '2702502043208538';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]('957381003231-bt0brr1vn47vpgg10u2naiekq1tgbo3k.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"]('712246012755918')
                    }
                ]
            },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_10__["NgImageSliderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
            _checkOut_checkOut_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__["AdminModule"],
            _account_account_module__WEBPACK_IMPORTED_MODULE_11__["AccountModule"],
            _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__["CartModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__["MatCarouselModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_10__["NgImageSliderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
        _checkOut_checkOut_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__["AdminModule"],
        _account_account_module__WEBPACK_IMPORTED_MODULE_11__["AccountModule"],
        _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__["CartModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__["MatCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_10__["NgImageSliderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_12__["HomeModule"],
                    _checkOut_checkOut_module__WEBPACK_IMPORTED_MODULE_1__["CheckOutModule"],
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__["AdminModule"],
                    _account_account_module__WEBPACK_IMPORTED_MODULE_11__["AccountModule"],
                    _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__["CartModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_9__["MatCarouselModule"].forRoot(),
                ],
                providers: [_app_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]('957381003231-bt0brr1vn47vpgg10u2naiekq1tgbo3k.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"]('712246012755918')
                                }
                            ]
                        },
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "agvn":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appconstants */ "FAXg");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/admin.service */ "l3fW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function () { return ["/aboutUs"]; };
function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Saftey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Advanced Technoglogy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(4));
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Global CitizenShip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Saftey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Inovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Advanced Technoglogy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getAboutusConstants(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getHeaderNames(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getHeaderNames(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getHeaderNames(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getSpecialConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getSpecialConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getSpecialConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getSpecialConstants(4));
} }
class FooterComponent {
    constructor(mediaObserver, productService, cartService, router, adminService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.getlocation();
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    watchpostion() {
        return new Promise((reslove, reject) => {
            window.navigator.geolocation.watchPosition(position => {
                reslove({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            }, (err) => {
                reject("error" + err);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        });
    }
    getlocation() {
        this.watchpostion().then(resp => {
            this.adminService.getlocation(resp.latitude, resp.longitude).subscribe((data) => {
                let value = data.plus_code.compound_code;
                console.log("lat " + value);
            });
        }, (err) => {
            console.log("error" + err);
        });
    }
    getHeaderNames(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["HeaderConstants"][indx]; }
    getSpecialConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SpecialConstants"][indx]; }
    getAboutusConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["AboutusConstants"][indx]; }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["class", "row", "style", "padding-top: 2%;padding-bottom: 2%; background-color: black;", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "padding-top", "2%", "padding-bottom", "2%", "background-color", "black"], [1, "col-lg-1"], [1, "btn", 2, "color", "white"], [1, "btn", 2, "color", "white", 3, "routerLink"], [1, "col-lg-2"], [2, "color", "white"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "col-lg-1", "p-l-33"], ["routerLink", "/login", 1, "btn", "fa", "fa-facebook-square", 2, "font-weight", "200", "font-size", "xx-large", "margin-right", "2%", "padding", "2%", "color", "white"], ["routerLink", "/login", 1, "btn", "fa", "fa-whatsapp", 2, "font-weight", "200", "font-size", "xx-large", "margin-right", "2%", "padding", "2%", "color", "white"], [1, "row", 2, "padding", "5%", "background-color", "black"], [1, "col-xs-1"], [1, "col-xs-2"], ["routerLink", "/login", 1, "fa", "fa-facebook-square", 2, "font-weight", "200", "font-size", "large", "color", "white"], ["routerLink", "/login", 1, "fa", "fa-whatsapp", 2, "font-weight", "200", "font-size", "large", "margin-right", "2%", "padding", "2%", "color", "white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 57, 39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 51, 39, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "bFHB":
/*!***********************************************************!*\
  !*** ./src/app/home/sweetandhot/sweetandhot.component.ts ***!
  \***********************************************************/
/*! exports provided: SweetandHotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetandHotComponent", function() { return SweetandHotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SweetandHotComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SweetandHotComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function SweetandHotComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SweetandHotComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sweetandhotProducts);
} }
function SweetandHotComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SweetandHotComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function SweetandHotComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SweetandHotComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sweetandhotProducts);
} }
class SweetandHotComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('fish&meat').subscribe((products) => {
            this.sweetandhotProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
SweetandHotComponent.ɵfac = function SweetandHotComponent_Factory(t) { return new (t || SweetandHotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
SweetandHotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SweetandHotComponent, selectors: [["app-sweetandhot"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/fish.webp", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function SweetandHotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sweet & Hot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SweetandHotComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SweetandHotComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zd2VldGFuZGhvdC9zd2VldGFuZGhvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFHSDs7QUFEQTtFQUNFLHlFQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3N3ZWV0YW5kaG90L3N3ZWV0YW5kaG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SweetandHotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sweetandhot',
                templateUrl: './sweetandhot.component.html',
                styleUrls: ['./sweetandhot.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "btZY":
/*!*******************************************************!*\
  !*** ./src/app/home/customize/customize.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _theme_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/customize-option-select/customize-option-select.component */ "Y8YW");








function CustomizeComponent_mat_tab_16_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeComponent_mat_tab_16_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onTopItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-customize-option-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemContent_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemContent_r3 == null ? null : itemContent_r3.tabItemTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", itemContent_r3 == null ? null : itemContent_r3.tabItemOption);
} }
function CustomizeComponent_mat_tab_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomizeComponent_mat_tab_16_div_4_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r1 == null ? null : item_r1.tabsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1 == null ? null : item_r1.tabsContent);
} }
class CustomizeComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.items = [
            {
                tabsTitle: 'Ingredients',
                tabsContent: [
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] }
                ]
            },
            {
                tabsTitle: 'Cheese',
                tabsContent: [
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] }
                ]
            },
            {
                tabsTitle: 'Sauces',
                tabsContent: [
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] },
                    { tabItemTitle: 'Market Tomato Sauce', tabItemOption: ['Regular', 'On the side', 'extra'] }
                ]
            },
        ];
    }
    ngOnInit() {
    }
    onClose() {
        this.dialogRef.close();
    }
    onTopItem(item) {
    }
}
CustomizeComponent.ɵfac = function CustomizeComponent_Factory(t) { return new (t || CustomizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
CustomizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeComponent, selectors: [["app-customize"]], decls: 17, vars: 1, consts: [[1, "page100p"], [1, "headertop"], [1, "customize"], [1, "display-flex", "m-t-10"], [1, "closebtn", 3, "click"], ["mat-align-tabs", "center"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [1, "display-flex-center"], [1, "alignContent"], [1, "lineItem", "p-t-10", "p-b-10"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "display-flex", "pointer", "b-b-1"], [1, "m-t-2", "m-l-15"], [1, "w-50p", "m-l-20"], [3, "options"]], template: function CustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Customise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Qty 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeComponent_Template_div_click_11_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CustomizeComponent_mat_tab_16_Template, 5, 2, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _theme_customize_option_select_customize_option_select_component__WEBPACK_IMPORTED_MODULE_6__["CustomizeOptionSelectComponent"]], styles: [".page100p[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 96vw;\n}\n\n.headertop[_ngcontent-%COMP%] {\n  font-size: 16;\n  height: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.alignTabs[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.alignContent[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 60vh;\n  overflow-y: scroll;\n}\n\n.w-50p[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.m-r-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.f-12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.display-flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.m-l-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.m-t-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.m-t-7[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n\n.lineItem[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.m-l-15[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.p-t-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.p-b-10[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.b-b-1[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eeeeee;\n}\n\n.closebtn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid black;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jdXN0b21pemUvY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUFTLGlCQUFBO0FBQ1Q7O0FBQUE7RUFBUyxrQkFBQTtBQUlUOztBQUhBO0VBQU8sZUFBQTtBQU9QOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBUUo7O0FBTEE7RUFDSSxpQkFBQTtBQVFKOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQUxBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQVFKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUhBO0VBQ0ksaUJBQUE7QUFNSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSEE7RUFDSSxvQkFBQTtBQU1KOztBQUhBO0VBQ0ksZ0NBQUE7QUFNSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2N1c3RvbWl6ZS9jdXN0b21pemUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZTEwMHAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOTZ2dztcbn1cblxuLmhlYWRlcnRvcCB7XG4gICAgZm9udC1zaXplOiAxNjsgICAgICAgXG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uYWxpZ25UYWJzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbGlnbkNvbnRlbnQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnctNTBwIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4ubS1sLTEwIHttYXJnaW4tbGVmdDogMTBweDt9IFxuLm0tci0xMCB7bWFyZ2luLXJpZ2h0OiAxMHB4O30gXG4uZi0xMiB7Zm9udC1zaXplOiAxMnB4O31cblxuLmRpc3BsYXktZmxleC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tLWwtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubS10LTIge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm0tdC03IHtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5saW5lSXRlbSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5cblxuLnBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm0tbC0xNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wLXQtMTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufSBcblxuLnAtYi0xMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5iLWItMSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG59ICAgXG5cbi5jbG9zZWJ0biB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customize',
                templateUrl: './customize.component.html',
                styleUrls: ['./customize.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_home_customize_customize_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/home/customize/customize.component */ "btZY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _home_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../home/cart.service */ "87QV");
/* harmony import */ var _home_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../home/product.service */ "BRKm");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CartComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_19_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_19_div_23_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeProduct(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_19_div_23_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addProduct(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.productCount, " ");
} }
function CartComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_19_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.discardProduct(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartComponent_div_19_div_23_Template, 9, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_19_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onCustomiseModal(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Customize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getImage(item_r4.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unit price : $", item_r4.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units : ", item_r4.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r4.unitTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.productCount > 0);
} }
const _c0 = function () { return ["/"]; };
function CartComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Shop Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/checkOut"]; };
function CartComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Proceed To Check out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class CartComponent {
    constructor(dialog, cartService, productService, authService) {
        this.dialog = dialog;
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.cartItems = [];
        this.total = 0;
        this.totalafterBonus = 0;
        this.detection = 0;
    }
    ngOnInit() {
    }
    get getCartItems() {
        this.cartItems = this.cartService.getProducts();
        console.log(this.cartItems);
        return this.cartItems;
    }
    onCustomiseModal(item) {
        const dialogRef = this.dialog.open(_app_home_customize_customize_component__WEBPACK_IMPORTED_MODULE_1__["CustomizeComponent"], {
            maxWidth: '100% !important',
            height: '100vh',
            data: { item: item }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        this.totalafterBonus = this.total - this.detection;
        return this.totalafterBonus.toFixed(0);
    }
    order() {
        this.authService.getemail();
        const orderData = {
            cartItems: this.cartItems,
            total: this.total,
            refrence: this.refrence,
            phase: "delievry phase",
            ownerEmail: this.authService.getemail()
        };
        this.cartService.order(orderData).subscribe((data) => {
            alert("Order Sent");
        });
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    getBonus() {
        this.detection = (10 / 100) * this.total;
        console.log(this.totalafterBonus);
        return this.totalafterBonus;
    }
    removeProduct(product) {
        this.cartService.removeProduct(product);
    }
    discardProduct(product) {
        this.cartService.discardProduct(product);
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 23, vars: 7, consts: [[1, "row", 2, "margin", "1%"], [1, "col-lg-2", "col-sm-1"], [1, "col-lg-8", "col-xs-12", "col-sm-10", 2, "margin-top", "3%", "margin-bottom", "3%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "font-size", "x-large", "font-weight", "bolder", "padding-left", "2%", "font-weight", "bold"], ["routerLinkActive", "router-link-active", 1, "glyphicon", "glyphicon-remove", 3, "routerLink"], [1, "row", 2, "margin", "1%", "background-color", "rgb(243, 242, 242)"], [1, "col-lg-8", "col-xs-12", "col-sm-10", 2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding-top", "20px"], [2, "padding-left", "2%"], [2, "font-weight", "500"], [1, "container"], ["class", "row", 4, "ngIf"], [1, "cartHeight"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-2", "col-sm-1"], ["style", "\n    box-sizing: border-box;\n    min-width: 0px;\n    max-width: 960px;\n    margin-left: 20%;\n    pointer-events: none;\n    width: calc(100% - 40px);\n  ", 3, "routerLink", 4, "ngIf"], [1, "row"], [1, "col-3"], ["src", "../assets/images/blank.PNG", 1, "img-responsive", 2, "min-height", "260px"], [1, "col-lg-2", "col-md-2", "col-sm-11"], [1, "col-lg-8", "col-xs-12", "col-sm-10"], [1, "row", 2, "padding-top", "2%"], [1, "col-lg-2", "col-xs-4", 3, "click"], [1, "container", 2, "height", "80px", "width", "130px"], [2, "background-color", "grey"], [1, "image", 2, "width", "130px", "height", "80px", 3, "src"], [1, "middle"], [1, "glyphicon", "glyphicon-remove", 2, "background-color", "white", "padding", "15%", "border-radius", "12px"], [1, "col-lg-8", "col-xs-4", 2, "min-width", "30px"], [1, "col-lg-2", "col-xs-4", 2, "text-align", "right", "padding-right", "40px"], ["style", "\n                  display: flex;\n                  flex-direction: row;\n                  width: 100px;\n                  height: 35px;\n                  background-color: rgb(63, 61, 61);\n                  border-radius: 6px;\n                  border-style: groove;\n                  margin: 5%;\n                  color: whitesmoke;\n                  border: 1px solid transparent;\n                  line-height: 35px;\n                ", 4, "ngIf"], [2, "display", "flex", "flex-direction", "row", "width", "100px", "height", "35px", "background-color", "rgb(63, 61, 61)", "border-radius", "6px", "border-style", "groove", "margin", "5%", "color", "whitesmoke", "border", "1px solid transparent", "line-height", "35px"], [2, "padding-left", "16px", "font-weight", "bold", "color", "white", 3, "click"], [1, "btn", 2, "text-align", "center", "width", "40px", "color", "white", "font-size", "large", "font-weight", "bold", "padding", "0px", "margin", "0px", 3, "click"], [2, "width", "20px", "color", "white", "font-size", "large", "text-align", "center", "padding", "0px", "margin", "0px"], [2, "box-sizing", "border-box", "min-width", "0px", "max-width", "960px", "margin-left", "20%", "pointer-events", "none", "width", "calc(100% - 40px)", 3, "routerLink"], [2, "bottom", "32px", "opacity", "1", "transform", "translateY(0px)", "border", "0px", "outline", "0px", "max-width", "960px", "height", "50px", "color", "white", "position", "fixed", "pointer-events", "all", "width", "60% !important", "border-radius", "6px", "display", "flex", "align-items", "center", "justify-content", "space-between", "background-color", "rgb(41, 41, 41)", "box-shadow", "rgba(0, 0, 0, 0.12) 0px 6px 12px", "cursor", "pointer", "left", "auto", "right", "auto", "z-index", "999", "text-align", "center"], [2, "color", "white", "text-align", "center", "width", "100%"], ["width", "16", "height", "16", "viewBox", "0 0 16 16"], ["id", "shopping-bag", "d", "M4.4,3.6H15.6a.8.8,0,0,1,.8.8V15.6a.8.8,0,0,1-.8.8H4.4a.8.8,0,0,1-.8-.8V4.4A.8.8,0,0,1,4.4,3.6ZM2,4.4A2.4,2.4,0,0,1,4.4,2H15.6A2.4,2.4,0,0,1,18,4.4V15.6A2.4,2.4,0,0,1,15.6,18H4.4A2.4,2.4,0,0,1,2,15.6ZM10,10C7.791,10,6,7.851,6,5.2H7.6c0,2.053,1.335,3.2,2.4,3.2s2.4-1.147,2.4-3.2H14C14,7.851,12.209,10,10,10Z", "transform", "translate(-2 -2)", "fill", "#ffffff", "fill-rule", "evenodd"], [2, "margin-left", "5px", "justify-content", "center", "text-align", "center"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Total Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_div_17_Template, 4, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartComponent_div_19_Template, 28, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CartComponent_div_21_Template, 7, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CartComponent_div_22_Template, 7, 2, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.getTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getCartItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getCartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getCartItems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getCartItems.length !== 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.image[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n.cartHeight[_ngcontent-%COMP%] {\n  height: 58vh;\n  overflow-y: overlay;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7O0VBRWQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Uge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubWlkZGxlIHtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jb250YWluZXI6aG92ZXIgLm1pZGRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMzJweDtcbn1cblxuLmNhcnRIZWlnaHQge1xuICBoZWlnaHQ6IDU4dmg7XG4gIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _home_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _home_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "cMot":
/*!*************************************************!*\
  !*** ./src/app/home/others/others.component.ts ***!
  \*************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OthersComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OthersComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function OthersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OthersComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.othersProducts);
} }
function OthersComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function OthersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OthersComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.othersProducts);
} }
class OthersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    // addProduct(item){
    // this.cartService.addProduct(item);
    //   }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('others').subscribe((products) => {
            this.othersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
OthersComponent.ɵfac = function OthersComponent_Factory(t) { return new (t || OthersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
OthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OthersComponent, selectors: [["app-others"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/bakery.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%"]], template: function OthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OthersComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OthersComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9vdGhlcnMvb3RoZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUdIOztBQURBO0VBQ0UseUVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3RoZXJzL290aGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-others',
                templateUrl: './others.component.html',
                styleUrls: ['./others.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "cP+M":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component */ "c2A7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: 'checkOut', loadChildren: '../checkOut/checkOut.module#CheckOutModule' },
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_0__["CartComponent"] },
];
class CartRoutingModule {
}
CartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CartRoutingModule });
CartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CartRoutingModule_Factory(t) { return new (t || CartRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appconstants */ "FAXg");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "agvn");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nav/nav.component */ "2ChW");












function HomeComponent_header_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hi ", ctx_r2.usernameLogin, " ");
} }
function HomeComponent_header_1_ng_template_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_ng_template_14_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ng_template_14_li_29_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_ng_template_14_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_ng_template_14_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 40);
} }
function HomeComponent_header_1_ng_template_14_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Refer Friend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_header_1_ng_template_14_div_2_Template, 5, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " My orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " About ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Testimonals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Blog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_header_1_ng_template_14_li_29_Template, 1, 0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_header_1_ng_template_14_p_30_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gift Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_header_1_ng_template_14_li_37_Template, 1, 0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_header_1_ng_template_14_p_38_Template, 2, 0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.authService == null ? null : ctx_r4.authService.loggedIn());
} }
const _c0 = function () { return ["/supportpage"]; };
function HomeComponent_header_1_ul_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.catagory(ctx_r18.getPicklesConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.catagory(ctx_r20.getPicklesConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.catagory(ctx_r21.getTraditionalPodulu(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.catagory(ctx_r22.getTraditionalPodulu(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.catagory(ctx_r23.getSweetsandHotConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.catagory(ctx_r24.getSweetsandHotConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.catagory(ctx_r25.getSpecialConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.catagory(ctx_r26.getSpecialConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.catagory(ctx_r27.getSpecialConstants(3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_ul_20_Template_a_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.catagory(ctx_r28.getSpecialConstants(4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getPicklesConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getPicklesConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getTraditionalPodulu(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getTraditionalPodulu(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSweetsandHotConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSweetsandHotConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSpecialConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSpecialConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSpecialConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSpecialConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getHeaderNames(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSupportConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSupportConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSupportConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getSupportConstants(4));
} }
function HomeComponent_header_1_p_21_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_p_21_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_div_22_div_1_Template_p_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_header_1_div_22_div_1_Template, 6, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isSHowSearch == true);
} }
function HomeComponent_header_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_1_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_1_div_26_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.cartPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Added ", ctx_r34.getCartProducts.length, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r34.getTotal, "");
} }
function HomeComponent_header_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_header_1_div_26_div_1_Template, 9, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.getCartProducts.length != 0);
} }
function HomeComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SHIRIVAS FOODS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_header_1_Template_input_input_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onSearchChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_header_1_p_11_Template, 2, 1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_header_1_ng_template_14_Template, 39, 5, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_header_1_ul_20_Template, 79, 26, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_header_1_p_21_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_header_1_div_22_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_header_1_div_23_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_header_1_div_24_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_header_1_div_26_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSHowSearch == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visibleI && ctx_r0.isSHowSearch == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visibleI);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visibleI && !ctx_r0.authService.loggedIn() && ctx_r0.isSHowSearch == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visibleI && ctx_r0.isSHowSearch == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deviceLg || ctx_r0.deviceMd);
} }
function HomeComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.cartPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Added ", ctx_r39.getCartProducts.length, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r39.getTotal, "");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_div_2_Template, 8, 2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getCartProducts.length != 0);
} }
class HomeComponent {
    constructor(mediaObserver, cartService, productService, authService, router) {
        this.mediaObserver = mediaObserver;
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.enableSearchProduct = '';
        this.cart = [];
        this.username = ' username';
        this.checkOutTab = false;
        this.visible = false;
        this.isSHowSearch = false;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        console.log(this.mediaSub);
        this.getScrollingElement();
    }
    onScroll(event) {
        if (window.pageYOffset >= 80) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }
    toggleDisplay() {
        this.isSHowSearch = !this.isSHowSearch;
    }
    get visibleI() {
        return this.visible;
    }
    getScrollingElement() {
        return document.scrollingElement || document.documentElement;
    }
    get usernameLogin() {
        return this.authService.getusername();
    }
    get getCartProducts() {
        this.cart = this.cartService.getProducts();
        return this.cart;
    }
    cartPage() {
        this.router.navigate(['cart']);
        this.checkOutTab = true;
    }
    checkOut() {
        this.router.navigate(['checkOut']);
        this.checkOutTab = false;
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        return this.total;
    }
    onLogoutClick() {
        this.authService.loggedOutName();
        this.authService.loggedOutEmail();
        this.authService.loggedOutuserId();
        this.authService.loggedOutRefrenceId();
    }
    getAllProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.allProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    catagory(page) {
        this.router.navigate(['catagory/', page]);
    }
    getHeaderNames(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["HeaderConstants"][indx]; }
    getPicklesConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["PicklesConstants"][indx]; }
    getTraditionalPodulu(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["TraditionalPodulu"][indx]; }
    getSweetsandHotConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SweetsandHotConstants"][indx]; }
    getSpecialConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SpecialConstants"][indx]; }
    getOthersConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SupportConstants"][indx]; }
    getAboutusConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["AboutusConstants"][indx]; }
    getSupportConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SupportConstants"][indx]; }
    getVegpickles(indx) { }
    getNonvegpickles(indx) { }
    getMasalas(indx) { }
    getSweets(indx) { }
    getHot(indx) { }
    getOthers(indx) { }
    getFAQ(indx) { }
    getTermsAndCondition(indx) { }
    getShipping(indx) { }
    getChat(indx) { }
    getBlog(indx) { }
    getSupport(indx) { }
    getPayments(indx) { }
    onSearchChange(searchValue) {
        if (searchValue) {
            this.productService.search = true;
        }
        else {
            this.productService.search = false;
        }
        this.productService.setSearchItems(searchValue);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 2, consts: [[4, "ngIf"], [2, "padding-top", "0.5%", "margin-left", "2%", "margin-right", "2%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["routerLink", "/", 2, "padding-left", "0.5%", "font-size", "2vw", "font-weight", "500", "padding-top", "2%"], [2, "width", "60%", "padding", "10px"], [2, "border-radius", "6px", "font-weight", "300px", "margin-left", "5%", "margin-right", "5%", "background-color", "rgb(240, 238, 238)", "display", "flex", "padding", "10px"], ["routerLink", "/login", 1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "margin-right", "2%", "padding", "2%", "color", "rgb(134, 132, 132)"], ["placeholder", "What Are You Looking For?", 1, "searchHome", 3, "input"], [2, "display", "flex", "flex-direction", "row", "padding-top", "1%"], ["style", "font-size: large; padding-top: 5%", 4, "ngIf"], [1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large", 3, "popover"], ["popTemplate", ""], [2, "padding-top", "1%"], ["routerLink", "/cart", 1, "fa", "fa-shopping-cart", 2, "font-size", "xx-large"], [2, "height", "1px", "margin", "0px 0px"], [1, "navbar", "sticky-top", "fundpress-menu", "navbar", "sticky-top", "navbar-light", 2, "display", "flex", "flex-direction", "row", "min-height", "60px", "line-height", "60px", "background-color", "white"], ["class", "nav-menu", "style", "width: 90%;", 4, "ngIf"], [3, "click", 4, "ngIf"], [2, "font-size", "large", "padding-top", "5%"], [1, "row"], [1, "col-lg-6"], ["routerLink", "/myOrders", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/myOrders", "routerLinkActive", "router-link-active"], ["routerLink", "/supportpage", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/supportpage", "routerLinkActive", "router-link-active"], ["routerLink", "/aboutUs", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/aboutUs", "routerLinkActive", "router-link-active"], ["routerLink", "/testimonals", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/testimonals", "routerLinkActive", "router-link-active"], ["routerLink", "/blog", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/blog", "routerLinkActive", "router-link-active"], ["routerLink", "/admin", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/admin", "routerLinkActive", "router-link-active"], ["style", "font-size: xx-large", "class", "fa fa-sign-out", 3, "click", 4, "ngIf"], ["routerLink", "/giftCards", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/giftCards"], ["style", "font-size: xx-large", "routerLink", "/referFriend", "class", "fa fa-sign-out", 4, "ngIf"], ["routerLink", "/referFriend ", 4, "ngIf"], ["routerLink", "/login", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/login", "routerLinkActive", "router-link-active"], [1, "fa", "fa-sign-out", 2, "font-size", "xx-large", 3, "click"], ["routerLink", "/referFriend", 1, "fa", "fa-sign-out", 2, "font-size", "xx-large"], ["routerLink", "/referFriend "], [1, "nav-menu", 2, "width", "90%"], ["routerLink", "/", 1, "dropdown"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "dropdown-menu"], [3, "click"], ["routerLink", "/specialoffers", 1, "dropdown"], ["routerLink", "/faq"], [3, "routerLink"], [1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "color", "rgb(134, 132, 132)"], ["style", " margin-left: 2%;margin-top: 1%;  margin-bottom: 1%", 4, "ngIf"], [2, "margin-left", "2%", "margin-top", "1%", "margin-bottom", "1%"], [2, "border-radius", "6px", "font-weight", "300px", "background-color", "rgb(240, 238, 238)"], ["routerLink", "/login", 1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "padding", "2%", "color", "rgb(134, 132, 132)"], [1, "col-xs-1", 2, "font-weight", "300px", "color", "grey", 3, "click"], [1, "fa", "fa-times"], ["style", "\n            box-sizing: border-box;\n            min-width: 0px;\n            max-width: 960px;\n            margin-left: 20%;\n            pointer-events: none;\n            width: calc(100% - 40px);\n          ", 3, "click", 4, "ngIf"], [2, "box-sizing", "border-box", "min-width", "0px", "max-width", "960px", "margin-left", "20%", "pointer-events", "none", "width", "calc(100% - 40px)", 3, "click"], [2, "bottom", "32px", "opacity", "1", "transform", "translateY(0px)", "border", "0px", "outline", "0px", "max-width", "960px", "height", "50px", "color", "white", "padding", "0px 30px", "position", "fixed", "pointer-events", "all", "width", "60% !important", "border-radius", "6px", "display", "flex", "align-items", "center", "justify-content", "space-between", "background-color", "rgb(41, 41, 41)", "box-shadow", "rgba(0, 0, 0, 0.12) 0px 6px 12px", "cursor", "pointer", "left", "auto", "right", "auto", "z-index", "999"], [2, "color", "white", "width", "100%"], ["width", "16", "height", "16", "viewBox", "0 0 16 16"], ["id", "shopping-bag", "d", "M4.4,3.6H15.6a.8.8,0,0,1,.8.8V15.6a.8.8,0,0,1-.8.8H4.4a.8.8,0,0,1-.8-.8V4.4A.8.8,0,0,1,4.4,3.6ZM2,4.4A2.4,2.4,0,0,1,4.4,2H15.6A2.4,2.4,0,0,1,18,4.4V15.6A2.4,2.4,0,0,1,15.6,18H4.4A2.4,2.4,0,0,1,2,15.6ZM10,10C7.791,10,6,7.851,6,5.2H7.6c0,2.053,1.335,3.2,2.4,3.2s2.4-1.147,2.4-3.2H14C14,7.851,12.209,10,10,10Z", "transform", "translate(-2 -2)", "fill", "#ffffff", "fill-rule", "evenodd"], [2, "margin-left", "5px"], [2, "color", "white"], ["style", "\n          box-sizing: border-box;\n          min-width: 0px;\n          max-width: 960px;\n          margin-left: 20%;\n          pointer-events: none;\n          width: calc(100% - 40px);\n        ", 3, "click", 4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_header_1_Template, 27, 8, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  \n  \n  height: 10px;\n  background-color: green;\n  border: 1px solid transparent;\n}\n.textimages[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  position: absolute;\n}\n.text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n\n  color: white;\n  padding-top: 10%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n.text-block2[_ngcontent-%COMP%] {\n  position: absolute;\n\n  color: white;\n  padding-top: 20%;\n  padding-left: 5%;\n  font-size: 1vw;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: rgb(233, 230, 230);\n}\n.text-block3[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 5%;\n  font-size: 1vw;\n  padding-top: 12px;\n  text-align: center;\n  height: 3vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n\n  padding-top: 15%;\n  padding-left: 5%;\n  font-size: 1vw;\n}\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 18%;\n  margin-left: 5%;\n  font-size: 1vw;\n  padding-top: 12px;\n  text-align: center;\n  height: 3.5vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.slide1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n.bignodisplay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 40px;\n}\n.posright[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}\n.dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.nav-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li.focus[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #93bb36;\n}\n.fundpress-menu[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 18px 10px;\n}\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  background-color: #b4d469;\n}\n.nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n  \n}\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  font-family: \"Open Sans, sans-serif\";\n}\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-family: \"Open Sans\", sans-serif;\n  color: rgb(117, 117, 117);\n  font-size: 12px;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  align-items: center;\n  color: var(--theme-ui-colors-text, #5a5a5a);\n  cursor: pointer;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: color 0.2s ease 0s;\n}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  \n  \n  font-weight: 100;\n}\n.searchHome[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: rgb(240, 238, 238);\n  border: 0px solid transparent;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztFQUV2QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCOztFQUVsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixPQUFPO0FBQ1Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOzs7RUFHRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLEtBQUs7QUFDUDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQztBQUNBOzs7RUFHRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAvKiBtaW4taGVpZ2h0OiA1MHB4OyAqL1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50ZXh0aW1hZ2VzIHtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4udGV4dC1ibG9jazIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDF2dztcbn1cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzAsIDIzMCk7XG59XG4udGV4dC1ibG9jazMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnRleHQtYmxvY2sxRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4udGV4dC1ibG9jazJGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAxdnc7XG59XG4udGV4dC1ibG9jazNGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTglO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMuNXZ3O1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZXZpY2VYcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6IDE7XG59XG4uZGV2aWNlTGcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zbGlkZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmJpZ25vZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucG9zcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5kcm9wZG93bjpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2LW1lbnUgPiBsaS5hY3RpdmUgPiBhLFxuLm5hdi1tZW51ID4gbGkuZm9jdXMgPiBhLFxuLm5hdi1tZW51ID4gbGk6aG92ZXIgPiBhIHtcbiAgY29sb3I6ICM5M2JiMzY7XG59XG4uZnVuZHByZXNzLW1lbnUge1xuICBoZWlnaHQ6IDEwcHg7XG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGEge1xuICBwYWRkaW5nOiAxOHB4IDEwcHg7XG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGE6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDQ2OTtcbn1cbi5uYXYtbWVudSA+IGxpID4gYSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogICovXG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zLCBzYW5zLXNlcmlmXCI7XG59XG5cbi5mdW5kcHJlc3MtbWVudSAubmF2LW1lbnUgbGkgYSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICBmb250LXNpemU6IDEycHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtdWktY29sb3JzLXRleHQsICM1YTVhNWEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlIDBzO1xufVxuLm1hdC1ib2R5LFxuLm1hdC1ib2R5LTEsXG4ubWF0LXR5cG9ncmFwaHkge1xuICAvKiBmb250OiAxMCA3cHgvMTBweCBSb2JvdG8sIDsgKi9cbiAgLyogbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDsgKi9cbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnNlYXJjaEhvbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMzgsIDIzOCk7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "cYb6":
/*!*****************************************************!*\
  !*** ./src/app/home/catagory/catagory.component.ts ***!
  \*****************************************************/
/*! exports provided: CatagoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryComponent", function() { return CatagoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mainPage-listItem/mainPage-listItem.component */ "xE3F");








function CatagoryComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
} }
function CatagoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatagoryComponent_div_7_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.catagoryProducts);
} }
function CatagoryComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mainPage-listItem", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r5);
} }
function CatagoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatagoryComponent_div_8_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.catagoryProducts);
} }
class CatagoryComponent {
    constructor(route, mediaObserver, productService, cartService, _route) {
        this.route = route;
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this._route = _route;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this._route.paramMap.subscribe((params) => {
            if (params && params.params.page) {
                let categoryRoute = params.params.page;
                this.currentCategory = this.productService.categories.find((item) => {
                    if (item.routeTo === categoryRoute) {
                        return true;
                    }
                });
            }
            //change the value of showRoutes based on your requirements
        });
        if (this.currentCategory && this.currentCategory.routeTo) {
            this.getCatagoryProducts(this.currentCategory.routeTo);
        }
    }
    // get selectedPage() {
    //   // this.page = this.route.snapshot.paramMap.get('page');
    //   // return this.page
    // }
    getCatagoryProducts(page) {
        this.productService.getCatagoryProducts(page).subscribe((products) => {
            this.catagoryProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
CatagoryComponent.ɵfac = function CatagoryComponent_Factory(t) { return new (t || CatagoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CatagoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatagoryComponent, selectors: [["app-catagory"]], decls: 9, vars: 4, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%", "min-height", "700px"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "50vh"], [1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px", "height", "100%", 3, "src"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["routerLinkActive", "router-link-active", "style", "\n          padding: 1%;\n          width: 200px;\n          height: 200px;\n          background-color: white;\n          margin: 1%;\n        ", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 2, "padding", "1%", "width", "200px", "height", "200px", "background-color", "white", "margin", "1%"], [3, "item"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "\n              padding: 2%;\n              width: 180px;\n              height: 200px;\n              background-color: white;\n              margin: 2%;\n            ", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "180px", "height", "200px", "background-color", "white", "margin", "2%"]], template: function CatagoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CatagoryComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CatagoryComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCategory == null ? null : ctx.currentCategory.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentCategory == null ? null : ctx.currentCategory.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_6__["MainPageListItemComponent"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n.deviceXs[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex:1\n}\n.deviceLg[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n   flex-wrap: wrap;\n}\n.gradient[_ngcontent-%COMP%]{\n  background-color:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRhZ29yeS9jYXRhZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7R0FDN0IsZUFBZTtBQUNsQjtBQUNBO0VBQ0UsMEVBQTBFO0FBQzVFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXRhZ29yeS9jYXRhZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiAzOSU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatagoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catagory',
                templateUrl: './catagory.component.html',
                styleUrls: ['./catagory.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    loggedIn() {
        return !!localStorage.getItem('userId');
    }
    getID() {
        return JSON.parse(localStorage.getItem('userId'));
    }
    getusername() {
        if (localStorage.getItem('username')) {
            return JSON.parse(localStorage.getItem('username'));
        }
    }
    getRefrenceId() {
        return JSON.parse(localStorage.getItem('refrenceId'));
    }
    getemail() {
        return JSON.parse(localStorage.getItem('email'));
    }
    loggedOutuserId() {
        return localStorage.removeItem('userId');
    }
    loggedOutName() {
        return localStorage.removeItem('username');
    }
    loggedOutRefrenceId() {
        return localStorage.removeItem('refrenceId');
    }
    loggedOutEmail() {
        return localStorage.removeItem('email');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referFriend/referFriend.component */ "K30+");
/* harmony import */ var _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCards/giftCards.component */ "Yg7E");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "8zhZ");
/* harmony import */ var _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonals/testimonals.component */ "hTs5");
/* harmony import */ var _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catagory/catagory.component */ "cYb6");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "agvn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myorders/myorders.component */ "/BOD");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "2ChW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Pickles/Pickles.component */ "j67j");
/* harmony import */ var _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TraditionalPowders/TraditionalPowders.component */ "N3GV");
/* harmony import */ var _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sweetandhot/sweetandhot.component */ "bFHB");
/* harmony import */ var _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dairy/dairy.component */ "Pk2g");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./others/others.component */ "cMot");
/* harmony import */ var _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./specialoffers/specialoffers.component */ "S5X1");
/* harmony import */ var _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./productDetail/productDetail.component */ "xbwq");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mainPage/mainPage.component */ "HZa5");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./supportPage/supportPage.component */ "sjMi");
/* harmony import */ var _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./FAQ/FAQ.component */ "Eoff");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./discount/discount.component */ "DG48");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blog/blog.component */ "tFkF");
/* harmony import */ var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./privacyandpolicy/privacyandpolicy.component */ "YMok");
/* harmony import */ var _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./returnandrefunds/returnandrefunds.component */ "kH2C");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./mainPage-listItem/mainPage-listItem.component */ "xE3F");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./customize/customize.component */ "btZY");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../theme/theme.module */ "BLWB");



















































class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_24__["NgImageSliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__["MatCarouselModule"].forRoot(),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"].forRoot(),
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_46__["ThemeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
        _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_17__["DairyComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
        _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"],
        _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_22__["MainPageComponent"],
        _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__["CatagoryComponent"],
        _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
        _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
        _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
        _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
        _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"],
        _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_43__["MainPageListItemComponent"],
        _customize_customize_component__WEBPACK_IMPORTED_MODULE_44__["CustomizeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_24__["NgImageSliderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__["MatCarouselModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_46__["ThemeModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
        _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_17__["DairyComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
        _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"],
        _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_22__["MainPageComponent"],
        _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
        _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
        _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
        _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
        _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
        _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_24__["NgImageSliderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_23__["MatCarouselModule"].forRoot(),
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"],
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"].forRoot(),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_45__["MatCheckboxModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_46__["ThemeModule"]
                ],
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
                    _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_17__["DairyComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
                    _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"],
                    _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_22__["MainPageComponent"],
                    _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__["CatagoryComponent"],
                    _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
                    _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
                    _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
                    _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
                    _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"],
                    _mainPage_listItem_mainPage_listItem_component__WEBPACK_IMPORTED_MODULE_43__["MainPageListItemComponent"],
                    _customize_customize_component__WEBPACK_IMPORTED_MODULE_44__["CustomizeComponent"]
                ],
                exports: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
                    _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_17__["DairyComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
                    _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"],
                    _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_22__["MainPageComponent"],
                    _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
                    _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
                    _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
                    _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_14__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_15__["TraditionalPowdersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_19__["SpecialOffersComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_18__["OthersComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_16__["SweetandHotComponent"],
                    _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
                    _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dvA0":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");












function LoginComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_p_7_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.createAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ns-textField-account", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx_r1.rformLogin);
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-intl-tel-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.rformLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cssClass", "customInput")("enableAutoCountrySelect", false)("enablePlaceholder", true)("searchCountryFlag", true)("selectFirstCountry", false)("maxLength", 15)("phoneValidation", true);
} }
function LoginComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 39);
} }
function LoginComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 40);
} }
function LoginComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.signInGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignIn With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_28_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.signInFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " SignIn With facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.signInGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignIn With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.signInFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " SignIn With facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hello Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fill up the Form and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "start Journey with us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.createAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "borderRight": a0 }; };
class LoginComponent {
    constructor(mediaObserver, router, formBuilder, accountService, authService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.authService = authService;
        this.isLoggedIn = true;
        this.loginType = 'email';
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
            this.show = false;
        });
        this.rformLogin = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
        });
    }
    createAccount() {
        this.router.navigate(['/signUp']);
    }
    passwordshow() {
        this.show = !this.show;
    }
    login() {
        let loginData = {};
        if (this.loginType == 'email') {
            loginData.email = this.rformLogin.value.email;
            loginData.password = this.rformLogin.value.password;
        }
        if (this.loginType == 'phone') {
            loginData.email = this.rformLogin.value.phone.internationalNumber;
            loginData.password = this.rformLogin.value.password;
        }
        console.log(loginData);
        if (loginData.email && loginData.password) {
            this.accountService.login(loginData).subscribe((data) => {
                alert("Login Successful");
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
                this.router.navigate(['/']);
            }, (error) => {
                alert(error.error.message);
            });
        }
    }
    forgetPassword() {
        this.router.navigate(['/forgetPassword']);
    }
    setId(userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
    }
    setRefrenceId(refrenceId) {
        localStorage.setItem('refrenceId', JSON.stringify(refrenceId));
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setcontact(contact) {
        localStorage.setItem('contact', JSON.stringify(contact));
    }
    passwordResetToken(token) {
        localStorage.setItem('resetToken', JSON.stringify(token));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
    signInGoogle(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            const userAccount = {
                email: Response.email,
                firstName: Response.firstName,
                lastName: Response.lastName,
                contact: Response.provider,
                provider: Response.provider,
                password: Response.id,
            };
            this.accountService.signIn(userAccount).subscribe((data) => {
                alert('login successfull');
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
                this.router.navigate(['/']);
            }, (error) => {
                if (error.error.message == 'No Account Create Account First') {
                    alert(error.error.message);
                    this.router.navigate(['/signUp']);
                }
                else if (error.error.message == 'Account not verified') {
                    alert(error.error.message);
                }
            });
        });
    }
    signInFacebook(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID;
        this.authService
            .signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            // tslint:disable-next-line: no-unused-expression
            const userAccount = {
                email: Response.name,
                firstName: Response.firstName,
                lastName: Response.lastName,
                password: Response.id,
                token: Response.authToken,
            };
            this.accountService.signIn(userAccount).subscribe((data) => {
                alert('login successfull');
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
                this.router.navigate(['/']);
            }, (error) => {
                if (error.error.message == 'No Account Create Account First') {
                    alert(error.error.message);
                    this.router.navigate(['/signUp']);
                }
                else if (error.error.message == 'Account not verified') {
                    alert(error.error.message);
                }
            });
        });
    }
    socailLogin(userAccount) {
        this.accountService.login(userAccount).subscribe((data) => {
            alert("Login Successful");
            this.setId(data.userId);
            this.setusername(data.username);
            this.setemail(data.email);
            this.setRefrenceId(data.refrenceId);
            this.isLoggedIn = true;
            this.router.navigate(['/']);
        }, (error) => {
            alert(error.error.message);
        });
    }
    toggleLoginType() {
        if (this.loginType == 'email') {
            this.loginType = 'phone';
        }
        else {
            this.loginType = 'email';
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 51, vars: 17, consts: [[1, "row", 2, "margin-top", "2%", "margin-bottom", "2%"], [1, "col-lg-2", "col-xs-1", "col-sm-1"], [1, "col-lg-8", "col-xs-10", "col-sm-12"], [1, "cardLeft", "col-lg-8", "col-xs-12", "col-sm-12", 3, "ngClass"], [2, "width", "100%", "padding-bottom", "8%"], [1, "btn", 2, "text-align", "left", "padding-top", "5%", "font-weight", "500"], ["style", "font-size:small;font-weight: 500;padding-top: 5%;text-align: right;justify-content: right;float: right;", "class", "btn text-primary", 3, "click", 4, "ngIf"], [2, "padding-bottom", "2%"], ["style", "width: 100%;", 4, "ngIf"], [4, "ngIf"], [1, "text-primary", 2, "display", "flex", "width", "100%", "margin-top", "10px", "justify-content", "flex-end", "cursor", "pointer", 3, "click"], [1, "row", 2, "display", "flex"], [2, "flex", "1"], ["placeholder", "Password (8 characters minimun)", "name", "password", "rformControlName", "password", 1, "textfieldBorderColor", "font13", 3, "type", "rformgroup"], [2, "margin-left", "20px"], ["type", "submit", 1, "btn", "btn-default", 2, "height", "35px", 3, "click"], ["class", "glyphicon glyphicon-eye-open", 4, "ngIf"], ["class", "glyphicon glyphicon-eye-close", 4, "ngIf"], [1, "text-primary", 2, "display", "flex", "width", "100%", "margin-top", "10px", "justify-content", "flex-end", "cursor", "pointer"], [2, "text-align", "right"], [1, "text", "text-primary", "btn", 3, "click"], [1, "row", 2, "margin-left", "1%", "margin-right", "1%"], ["type", "button", 1, "col-12", "btn", "btn-primary", 3, "click"], ["class", "row", "style", "margin-left:1%;margin-right: 1%;margin-top: 3%;", 4, "ngIf"], ["class", "col-lg-4 col-xs-12 col-sm-12 cardRight", 4, "ngIf"], [2, "background-color", "rgb(189, 187, 187)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold", "font-size", "small"], [1, "btn", "text-primary", 2, "font-size", "small", "font-weight", "500", "padding-top", "5%", "text-align", "right", "justify-content", "right", "float", "right", 3, "click"], [2, "width", "100%"], ["placeholder", "Email", "name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [3, "formGroup"], ["name", "phone", "formControlName", "phone", 3, "cssClass", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "selectFirstCountry", "maxLength", "phoneValidation"], [1, "glyphicon", "glyphicon-eye-open"], [1, "glyphicon", "glyphicon-eye-close"], [1, "row", 2, "margin-left", "1%", "margin-right", "1%", "margin-top", "3%"], [1, "col-5", "btn", "btn-danger", 3, "click"], [1, "col-2"], [1, "col-5", "btn", "btn-primary", 2, "font-size", "small", 3, "click"], [1, "col-12", "btn", "btn-danger", 3, "click"], [1, "col-12", "btn", "btn-primary", 2, "font-size", "small", 3, "click"], [1, "col-lg-4", "col-xs-12", "col-sm-12", "cardRight"], [1, "btn"], [2, "text-align", "center", "width", "100%"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Login Your Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_p_7_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 3, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_12_listener() { return ctx.toggleLoginType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ns-textField-account", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.passwordshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_i_19_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_i_20_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_p_click_23_listener() { return ctx.forgetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Forget Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 6, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LoginComponent_div_31_Template, 10, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_45_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u00A9 2020, picksystore Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.deviceXs));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.deviceXs || ctx.deviceSm ? "15" : "25", "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginType == "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginType == "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loginType == "email" ? "Phone login instead" : "Email login instead", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.show ? "text" : "password")("rformgroup", ctx.rformLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceMd || ctx.deviceSm || ctx.deviceLg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.deviceXs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_7__["TextFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["NgxIntlTelInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_8__["NativeElementInjectorDirective"]], styles: [".hr[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.cardLeft[_ngcontent-%COMP%] {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\n\n.borderRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n\n.cardRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #b4d469;\n}\n\n.coloumnChange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceSmClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceLgFontClass[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.deviceSmFontClass[_ngcontent-%COMP%] {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQ0FBQTtBQUVGOztBQUFDO0VBQ0MsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBRTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUZFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLGFBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSUY7O0FBREE7RUFDQSxnQkFBQTtBQUlBOztBQURBO0VBQ0EsZ0JBQUE7QUFJQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gfVxuIC5jYXJkTGVmdHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDR2dztcbiAgcGFkZGluZy1yaWdodDogNHZ3O1xuXG4gIH1cbiAgLmJvcmRlclJpZ2h0e1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEycHggO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB9XG4gIC5lcnJvcmxibHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cbiAgLmNhcmRSaWdodHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDQ2OTtcbiAgfVxuLmNvbG91bW5DaGFuZ2V7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGV2aWNlTGdDbGFzc3tcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZXZpY2VTbUNsYXNze1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuLmRldmljZUxnRm9udENsYXNze1xuZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmRldmljZVNtRm9udENsYXNze1xuZm9udC1zaXplOiBzbWFsbDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "fDLK":
/*!**********************************************************!*\
  !*** ./src/app/admin/addProduct/addProduct.component.ts ***!
  \**********************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin.service */ "l3fW");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textField/textField.component */ "Awi1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function AddProductComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catagory_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", catagory_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", catagory_r3, " ");
} }
function AddProductComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.addProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ADD PRODCUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit PRODCUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Home", "Pickles", "TraditionalPowders", "Sweets&Hot", "SpecialOffers", "Others", "About-US", "Support", "Non-vegetarian", "vegetarian", "WithGralic", "WithoutGralic", "Podulu(Powders)", "HomeMadeMasala", "TradaitonalSweets", "TradaitonalHot", "Non-vegetarianCombo", "VegetarianCombo", "HotCombo", "SweetsCombo"]; };
class AddProductComponent {
    constructor(route, adminService, formBuilder) {
        this.route = route;
        this.adminService = adminService;
        this.formBuilder = formBuilder;
        this.toppingList = [
            "Siting 100",
            "Siting 300",
            "Siting 100",
            "Wifi",
            "Parking",
            "Decoration",
            "DJ",
            "PhotoGrapher",
        ];
        this.productOrders = '1';
    }
    ngOnInit() {
        const object = this.route.snapshot.paramMap.get('id');
        this.data = JSON.parse(object);
        if (this.data) {
            this.productForm = this.formBuilder.group({
                _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data._id),
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.name),
                catagory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.catagory),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.price),
                detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.detail),
                productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.productImage),
            });
        }
        else {
            this.productForm = this.formBuilder.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                catagory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            });
        }
    }
    selectProductImage(event) {
        const file = event.target.files[0];
        this.image = file;
        this.productForm.controls.productImage.setValue(this.image);
    }
    addProduct() {
        if (this.productForm.valid) {
            const fd = new FormData();
            fd.append('name', this.productForm.value.name);
            fd.append('catagory', this.productForm.value.catagory);
            fd.append('price', this.productForm.value.price);
            fd.append('detail', this.productForm.value.detail);
            fd.append('productOrders', this.productOrders);
            if (this.productForm.value.productImage) {
                fd.append('productImage', this.productForm.value.productImage);
            }
            this.adminService.addProducts(fd).subscribe((data) => {
                alert("Product Added");
            }, (error) => {
                alert("No Product Added");
            });
        }
        else {
            alert("Please Fill All the entries of the Form");
        }
    }
    edit() {
        const fd = new FormData();
        fd.append('_id', this.productForm.value._id);
        fd.append('name', this.productForm.value.name);
        fd.append('catagory', this.productForm.value.catagory);
        fd.append('price', this.productForm.value.price);
        fd.append('detail', this.productForm.value.detail);
        fd.append('productOrders', this.productOrders);
        if (this.productForm.value.productImage) {
            fd.append('productImage', this.productForm.value.productImage);
        }
        this.adminService.edit(fd).subscribe((campaignData) => {
            alert('Edited');
        }, (error) => {
            alert('failed');
        });
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-addProduct"]], decls: 49, vars: 9, consts: [[2, "margin-top", "5%", "display", "flex", "flex-direction", "row", "flex", "1", "justify-content", "center"], [2, "margin-bottom", "5%"], [2, "font-size", "xx-large", "font-weight", "500", "text-align", "center"], [3, "formGroup"], [1, "", 2, "padding-bottom", "2%"], [2, "padding-bottom", "1%"], ["name", "name", "rformControlName", "name", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "price", "type", "number", "rformControlName", "price", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["formControlName", "catagory"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "detail", "rformControlName", "detail", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [1, "form-group"], ["type", "file", "name", "imagePath", 1, "form-control", 2, "float", "left", "width", "30%", 3, "change"], [2, "text-align", "center"], ["class", "btn", "style", "padding-left:2.5%;padding-right: 2.5%; background-color: rgb(63, 61, 61); color: whitesmoke", 3, "click", 4, "ngIf"], [2, "background-color", "rgb(231, 228, 228)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold", "font-size", "small"], [2, "text-align", "right"], [3, "value"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke", 3, "click"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ns-textField-admin", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ns-textField-admin", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "catagory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddProductComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ns-textField-admin", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_26_listener($event) { return ctx.selectProductImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddProductComponent_button_29_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddProductComponent_button_30_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_div_click_43_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u00A9 2020, Shrivasafoods store Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkUHJvZHVjdC9hZGRQcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZFByb2R1Y3QvYWRkUHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nLXRvcDogOSU7XG4gICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gfSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-addProduct',
                templateUrl: './addProduct.component.html',
                styleUrls: ['./addProduct.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "gK4h":
/*!********************************************************************!*\
  !*** ./src/app/account/forgetPassword/forgetPassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");









function ForgetPasswordComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPasswordComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forget Your Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We got you . Just enter the email below and we will send you a link to get in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ns-textField-account", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgetPasswordComponent_div_0_button_9_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgetPasswordComponent_div_0_button_10_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Customer Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx_r0.forgetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.passresetToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.passresetToken);
} }
function ForgetPasswordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forget Your Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We got you . Just enter the email below and we will send you a link to get in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ns-textField-account", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Customer Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx_r1.forgetPasswordForm);
} }
class ForgetPasswordComponent {
    constructor(mediaObserver, router, formBuilder, accountService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
    }
    ngOnInit() {
        // this.passresetToken = JSON.parse(localStorage.getItem('resetToken'));
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.forgetPasswordForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    reset() {
        if (this.forgetPasswordForm.valid) {
            this.accountService.forgetPassword(this.forgetPasswordForm.value).subscribe((data) => {
                alert("Mail send to your gmail");
            }, (error) => {
                alert(error.error.message);
            });
        }
        else {
            alert("Enter correct Gmail Account");
        }
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forgetPassword"]], decls: 2, vars: 2, consts: [["style", "text-align: center;margin: 10%;", 4, "ngIf"], [2, "text-align", "center", "margin", "10%"], [2, "font-size", "xx-large", "padding-bottom", "3%", "font-weight", "bold"], [2, "font-size", "x-large", "font-weight", "bold", "padding-bottom", "3%"], [2, "text-align", "center", "margin-left", "30%", "margin-right", "30%", "margin-bottom", "3%"], [2, "font-weight", "bold", "text-align", "left"], ["name", "email", "placeholder", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["style", "width: 40%;margin-bottom: 3%;", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "text", "text-primary", 2, "font-weight", "bold"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "40%", "margin-bottom", "3%", 3, "click"], [2, "font-size", "large", "padding-bottom", "3%", "font-weight", "bold"], [2, "font-size", "large", "font-weight", "bold", "padding-bottom", "3%"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgetPasswordComponent_div_0_Template, 13, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetPasswordComponent_div_1_Template, 13, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ2V0UGFzc3dvcmQvZm9yZ2V0UGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetPassword',
                templateUrl: './forgetPassword.component.html',
                styleUrls: ['./forgetPassword.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "ga6B":
/*!********************************************!*\
  !*** ./src/app/account/customValidator.ts ***!
  \********************************************/
/*! exports provided: patternValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
function patternValidator(regex, error) {
    return (control) => {
        if (!control.value) {
            // if control is empty return no error
            return null;
        }
        // test the value of the control against the regexp supplied
        const valid = regex.test(control.value);
        // if true, return no error (no error), else return error passed in the second parameter
        return valid ? null : error;
    };
}


/***/ }),

/***/ "glWx":
/*!**********************************************************!*\
  !*** ./src/app/account/textField/textField.component.ts ***!
  \**********************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TextFieldComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.rformControlName, " is required");
} }
function TextFieldComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email format is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("password must be minimum ", ctx_r2.minlength, " character ");
} }
const _c0 = function (a0) { return { errorBorder: a0 }; };
class TextFieldComponent {
    constructor() { }
    ngOnInit() { }
    get invalidControl() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorRequired() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.required) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorFormate() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.email) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorminLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return true;
        }
        else {
            return false;
        }
    }
    get minlength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return this.rformgroup.controls[this.rformControlName].errors.minlength.requiredLength;
        }
        else {
            return false;
        }
    }
    get errormaxLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.maxlength) {
            return true;
        }
        else {
            return false;
        }
    }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["ns-textField-account"]], inputs: { rformgroup: "rformgroup", rformControlName: "rformControlName", rtext: "rtext", placeholder: "placeholder", class: "class", type: "type", hint: "hint" }, decls: 5, vars: 11, consts: [[3, "formGroup"], [1, "form-control", "textFieldStling", 3, "formControlName", "placeholder", "hint", "type", "ngClass"], ["class", "errorlbl", 4, "ngIf"], [1, "errorlbl"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextFieldComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextFieldComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextFieldComponent_p_4_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.rformControlName)("placeholder", ctx.placeholder)("hint", ctx.hint)("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.invalidControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorFormate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorminLength || ctx.errormaxLength);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".textFieldStling[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  size: 10;\n  border-radius: 5px;\n}\n\n.errorBorder[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  border-color: red;\n  border: 5%;\n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC90ZXh0RmllbGQvdGV4dEZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvdGV4dEZpZWxkL3RleHRGaWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHRGaWVsZFN0bGluZyB7XG4gICAgYm9yZGVyLXdpZHRoOiAxZHA7XG4gICAgc2l6ZTogMTA7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lcnJvckJvcmRlcntcbiAgICBib3JkZXItd2lkdGg6IDFkcDtcbiAgICBib3JkZXItY29sb3I6IHJlZCA7XG4gICAgYm9yZGVyOiA1JTtcblxufVxuLmVycm9ybGJse1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-textField-account',
                templateUrl: './textField.component.html',
                styleUrls: ['./textField.component.scss']
            }]
    }], function () { return []; }, { rformgroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rformControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rtext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hTs5":
/*!***********************************************************!*\
  !*** ./src/app/home/testimonals/testimonals.component.ts ***!
  \***********************************************************/
/*! exports provided: TestimonalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonalsComponent", function() { return TestimonalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TestimonalsComponent {
    constructor() { }
    ngOnInit() {
    }
    submit() {
    }
}
TestimonalsComponent.ɵfac = function TestimonalsComponent_Factory(t) { return new (t || TestimonalsComponent)(); };
TestimonalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonalsComponent, selectors: [["app-testimonals"]], decls: 62, vars: 3, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%", "min-height", "500px"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [1, "card", 2, "text-align", "center", "margin-top", "5%", "margin-left", "20%", "margin-right", "20%", "display", "flex", "flex-direction", "column"], [2, "word-wrap", "break-word"], [2, "margin-left", "5%", "margin-right", "5%"], [2, "margin-left", "10%", "margin-right", "10%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["placeholder", "username", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "message", "type", "text", "name", "refrence", 1, "form-control", 2, "margin-top", "5%", "width", "100%", "height", "120%", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [1, "btn", "btn-primary", 3, "click"], [2, "text-align", "center", "margin-top", "5%", "margin-left", "5%", "margin-right", "5%", "display", "flex", "flex-direction", "column"], [1, "row", 2, "margin-bottom", "1%"], [1, "col-xs-5", 2, "border", "1px", "border-style", "groove", "padding", "5%"], [1, "col-xs-1"]], template: function TestimonalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Testimonals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Top Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Leave Your Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonalsComponent_Template_p_click_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "What our Clients say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZXN0aW1vbmFscy90ZXN0aW1vbmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFHSDs7QUFEQTtFQUNFLHlFQUFBO0FBSUY7O0FBRkE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Rlc3RpbW9uYWxzL3Rlc3RpbW9uYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiAzOSU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICBwYWRkaW5nOjIlXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonals',
                templateUrl: './testimonals.component.html',
                styleUrls: ['./testimonals.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "heGf":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AccountComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccountComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 10, vars: 1, consts: [[2, "padding-left", "3%", "padding-right", "3%", "display", "flex", "justify-content", "space-between", "flex-direction", "row", "padding-top", "2.5", "padding-bottom", "2.5"], ["routerLink", "", 2, "font-size", "large", "font-weight", "500", "margin-top", "2%"], ["routerLink", "", 2, "font-size", "larger", "font-weight", "500", "margin-top", "2%", "padding-right", "3%"], ["style", "margin-top: 1%;", 4, "ngIf"], [2, "padding-top", "1%"], ["routerLink", "/cart", 1, "fa", "fa-shopping-cart", 2, "font-size", "xx-large"], [2, "margin-top", "1%"], ["routerLink", "/profile", "routerLink", "/profile", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SHRIVASAFOODS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nLXRvcDogOSU7XG4gICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gfSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "iiv8":
/*!*****************************************************************!*\
  !*** ./src/app/checkOut/checkOutPage/checkOutPage.component.ts ***!
  \*****************************************************************/
/*! exports provided: CheckOutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutPageComponent", function() { return CheckOutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/cart.service */ "87QV");
/* harmony import */ var _home_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/product.service */ "BRKm");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["stepper"];
function CheckOutPageComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Information");
} }
function CheckOutPageComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Shipping");
} }
function CheckOutPageComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Paymemt");
} }
function CheckOutPageComponent_ng_template_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
} }
function CheckOutPageComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.getImage(item_r6.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", item_r6.unitTotal, "");
} }
const _c1 = function () { return ["/login"]; };
class CheckOutPageComponent {
    constructor(_formBuilder, cartService, productService, authService, router) {
        this._formBuilder = _formBuilder;
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.printCol = [
            { name: 'Name' },
            { name: 'Total' },
        ];
        this.title = 'newMat';
        this.isLinear = true;
    }
    ngOnInit() {
        this.initConfig();
        this.getCartItems();
        this.firstFormGroup = this._formBuilder.group({
            email: ['',],
            fname: ['',],
            lname: ['',],
            city: ['',],
            adress: ['',],
            contry: ['',],
            code: [''],
        });
        this.secondFormGroup = this._formBuilder.group({
            method: ['',]
        });
        this.thirdFormGroup = this._formBuilder.group({
        // contact: ['', Validators.required],
        });
        // this.getAllOrders()
        this.gotoPayment();
    }
    gotoPayment() {
        // let  loggedin  =this.authService.loggedIn()
        // if(loggedin == true){
        // this.move(2)
        // }
    }
    getCartItems() {
        this.cartItems = this.cartService.getProducts();
        console.log(this.cartItems);
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        return this.total;
    }
    order() {
        this.authService.getemail();
        const orderData = {
            cartItems: this.cartItems,
            total: this.total,
            firstName: this.firstFormGroup.value.fname,
            lastName: this.firstFormGroup.value.lname,
            city: this.firstFormGroup.value.city,
            adress: this.firstFormGroup.value.adress,
            code: this.firstFormGroup.value.code,
            contry: this.firstFormGroup.value.contry,
            method: this.secondFormGroup.value.method,
            refrence: this.refrence,
            phase: "delievry phase",
            ownerEmail: this.authService.getemail()
        };
        // this.printOrder(orderData);
        this.cartService.order(orderData).subscribe((data) => {
            this.router.navigate(['/']);
        });
        // this.cartService.emptyProduct()
    }
    move(index) {
        this.stepper.selectedIndex = index;
    }
    getAllOrders() {
    }
    //  let id= this.authService.getID()
    //  this.productService.getOrders().subscribe((data: any) => {
    //    this.dataOrder = data.orders
    // })
    // getAllOrders() {
    //   let id = this.authService.getID()
    //   this.productService.getOrders().subscribe((data: any) => {
    //     this.dataOrder = data.orders.toString()
    //   })
    // }
    get useAdress() {
        if (this.dataOrder) {
            this.previousData = this.dataOrder[0].adress;
            return this.previousData;
        }
    }
    initConfig() {
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'sb',
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            createOrderOnClient: (data) => ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: '9.99'
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'EUR',
                                    value: '9.99',
                                },
                            }
                        ]
                    }
                ]
            }),
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            },
        };
    }
}
CheckOutPageComponent.ɵfac = function CheckOutPageComponent_Factory(t) { return new (t || CheckOutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CheckOutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutPageComponent, selectors: [["app-checkOutPage"]], viewQuery: function CheckOutPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 176, vars: 20, consts: [[2, "min-height", "500px"], [1, "col-lg-7", 2, "padding-top", "5%", ";background-color", "#ffffff"], [2, "font-size", "large", "font-weight", "bold", "padding-left", "5%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding-left", "5%"], ["routerLinkActive", "router-link-active", 1, "text", "text-primary", "btn", 3, "routerLink"], [1, "row"], [1, "col-lg-1"], [1, "col-lg-10", "col-xs-12", "col-sm-12"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "formControlName", "email"], [2, "font-size", "large"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["matInput", "", "formControlName", "fname"], ["matInput", "", "formControlName", "lname"], ["matInput", "", "formControlName", "adress"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "contry"], ["matInput", "", "formControlName", "code"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input", 2, "padding-right", "4%"], [2, "margin-left", "3%"], [2, "text-align", "right", "padding-top", "5%"], ["matStepperNext", "", 1, "btn", "btn-primary"], [2, "border", "1px", "border-style", "groove", "padding", "1%", "margin-top", "2%", "border-radius", "6px", "border-color", "rgb(160, 158, 158)"], [1, "row", 2, "height", "10px"], [1, "col-3"], [1, "col-6"], [1, "col-3", "text-primary", "btn", 3, "click"], [1, "col-3", "text-primary", "btn"], [2, "margin", "3%"], [1, "row", 2, "border", "1px", "border-style", "groove", "padding-left", "3%", "border-radius", "6px", "border-color", "rgb(145, 141, 141)"], ["type", "checkbox", "id", "exampleCheck2", 1, "form-check-input"], ["matStepperPrevious", "", 1, "col-2", "btn", "text-primary"], [1, "col-8"], ["matStepperNext", "", 1, "col-2", "btn", "btn-primary"], [3, "config"], [2, "border", "1px", "padding", "1%", "margin-top", "2%"], [1, "btn", "btn-primary", 2, "margin", "1%", 3, "click"], [1, "col-lg-5", 2, "padding-top", "5%", "min-height", "700px", "background-color", "#f3f3f3"], [2, "padding-left", "7%", "padding-right", "7%", "padding-top", "5%"], [4, "ngFor", "ngForOf"], [1, "hr", 2, "background-color", "grey", "height", "2px", "width", "100%"], [2, "font-weight", "500"], [1, "row", 2, "width", "100%"], [1, "col-xs-4"], [2, "width", "50%", 3, "src"], [1, "col-xs-8", 2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "min-width", "30px"]], template: function CheckOutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shirivas Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Already have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-horizontal-stepper", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckOutPageComponent_ng_template_18_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email or Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Shipping Adress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Adress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Save details for next time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Continue to Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CheckOutPageComponent_ng_template_62_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_69_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Shipping Adress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Shipping Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, CheckOutPageComponent_ng_template_94_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "ngx-paypal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, CheckOutPageComponent_ng_template_103_Template, 1, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "You are now done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_113_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_121_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Adress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_129_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_137_listener() { return ctx.move(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Shipping Method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_p_click_145_listener() { return ctx.move(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckOutPageComponent_Template_button_click_152_listener() { return ctx.order(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, CheckOutPageComponent_div_157_Template, 13, 3, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "hr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Calculated at next step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "hr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.useAdress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.payPalConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.adress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firstFormGroup.value.method);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.getTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.getTotal, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], ngx_paypal__WEBPACK_IMPORTED_MODULE_9__["NgxPaypalComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: 'Open Sans', sans-serif;\n  background-color: #3498db;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{\n  font-weight: 200;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\n  font-size: 14px;\n}\n\nfieldset[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n\n\n.twelve[_ngcontent-%COMP%] { width: 100%; }\n\n.eleven[_ngcontent-%COMP%] { width: 91.53%; }\n\n.ten[_ngcontent-%COMP%] { width: 83.06%; }\n\n.nine[_ngcontent-%COMP%] { width: 74.6%; }\n\n.eight[_ngcontent-%COMP%] { width: 66.13%; }\n\n.seven[_ngcontent-%COMP%] { width: 57.66%; }\n\n.six[_ngcontent-%COMP%] { width: 49.2%; }\n\n.five[_ngcontent-%COMP%] { width: 40.73%; }\n\n.four[_ngcontent-%COMP%] { width: 32.26%; }\n\n.three[_ngcontent-%COMP%] { width: 23.8%; }\n\n.two[_ngcontent-%COMP%] { width: 15.33%; }\n\n.one[_ngcontent-%COMP%] { width: 6.866%; }\n\n\n\n.col[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tfloat:left;\n\tmargin: 0 0 0 1.6%;\n}\n\n.col[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 0;\n}\n\n.container[_ngcontent-%COMP%]{\n  width: 100%;\n  max-width: 700px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.row[_ngcontent-%COMP%]{\n  padding: 20px 0;\n}\n\n\n\n.cf[_ngcontent-%COMP%]:before, .cf[_ngcontent-%COMP%]:after {\n    content: \" \";\n    display: table;\n}\n\n.cf[_ngcontent-%COMP%]:after {\n    clear: both;\n}\n\n.cf[_ngcontent-%COMP%] {\n    *zoom: 1;\n}\n\n.wrapper[_ngcontent-%COMP%]{\n  width: 100%;\n  margin: 30px 0;\n}\n\n\n\n.steps[_ngcontent-%COMP%]{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  text-align: center;\n}\n\n.steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  display: inline-block;\n  margin: 20px;\n  color: #ccc;\n  padding-bottom: 5px;\n}\n\n.steps[_ngcontent-%COMP%]   li.is-active[_ngcontent-%COMP%]{\n  border-bottom: 1px solid #3498db;\n  color: #3498db;\n}\n\n\n\n.form-wrapper[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{\n  padding: 0px 20px 30px 20px;\n  box-sizing: border-box;\n  background-color: #fff;\n  opacity: 0;\n  transform: scale(1, 0);\n  transform-origin: top center;\n  transition: all 0.5s ease-in-out;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  min-height: 300px\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  margin-bottom: 30px;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .section.is-active[_ngcontent-%COMP%]{\n  opacity: 1;\n  transform: scale(1, 1);\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{\n  background-color: #3498db;\n  display: inline-block;\n  padding: 8px 30px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 14px !important;\n  font-family: 'Open Sans', sans-serif !important;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{\n  border: none;\n  outline: none;\n  box-sizing: content-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]{\n  display: block;\n  padding: 10px;\n  margin: 10px auto;\n  background-color: #f1f1f1;\n  border: none;\n  width: 50%;\n  outline: none;\n  font-size: 14px !important;\n  font-family: 'Open Sans', sans-serif !important;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]{\n  display: none;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]{\n  display: block;\n  border: 1px solid #ccc;\n  width: 100%;\n  max-width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before{\n  content: \"\u2714\";\n  position: absolute;\n  right: -10px;\n  top: -10px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 100%;\n  background-color: #3498db;\n  color: #fff;\n  display: none;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before{\n  display: block;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  margin: 15px;\n  color: #ccc;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]{\n  border: 1px solid #3498db;\n}\n\n.form-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n  color: #3498db;\n}\n\n.hr[_ngcontent-%COMP%]{\n  border-top: 1px solid #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tPdXQvY2hlY2tPdXRQYWdlL2NoZWNrT3V0UGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUEsU0FBUzs7QUFFVCxVQUFVLFdBQVcsRUFBRTs7QUFDdkIsVUFBVSxhQUFhLEVBQUU7O0FBQ3pCLE9BQU8sYUFBYSxFQUFFOztBQUN0QixRQUFRLFlBQVksRUFBRTs7QUFDdEIsU0FBUyxhQUFhLEVBQUU7O0FBQ3hCLFNBQVMsYUFBYSxFQUFFOztBQUN4QixPQUFPLFlBQVksRUFBRTs7QUFDckIsUUFBUSxhQUFhLEVBQUU7O0FBQ3ZCLFFBQVEsYUFBYSxFQUFFOztBQUN2QixTQUFTLFlBQVksRUFBRTs7QUFDdkIsT0FBTyxhQUFhLEVBQUU7O0FBQ3RCLE9BQU8sYUFBYSxFQUFFOztBQUV0QixZQUFZOztBQUVaO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixrQkFBa0I7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxhQUFhOztBQUViOztJQUVJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0tBQ0ksT0FBUTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztBQUNoQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsMkJBQTJCO0VBRzNCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsVUFBVTtFQUlWLHNCQUFzQjtFQUt0Qiw0QkFBNEI7RUFHNUIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBSVYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFHYix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUdiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrT3V0L2NoZWNrT3V0UGFnZS9jaGVja091dFBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHl7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUgLGg2e1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnAsIGxpLCBhe1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmZpZWxkc2V0e1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyogR1JJRCAqL1xuXG4udHdlbHZlIHsgd2lkdGg6IDEwMCU7IH1cbi5lbGV2ZW4geyB3aWR0aDogOTEuNTMlOyB9XG4udGVuIHsgd2lkdGg6IDgzLjA2JTsgfVxuLm5pbmUgeyB3aWR0aDogNzQuNiU7IH1cbi5laWdodCB7IHdpZHRoOiA2Ni4xMyU7IH1cbi5zZXZlbiB7IHdpZHRoOiA1Ny42NiU7IH1cbi5zaXggeyB3aWR0aDogNDkuMiU7IH1cbi5maXZlIHsgd2lkdGg6IDQwLjczJTsgfVxuLmZvdXIgeyB3aWR0aDogMzIuMjYlOyB9XG4udGhyZWUgeyB3aWR0aDogMjMuOCU7IH1cbi50d28geyB3aWR0aDogMTUuMzMlOyB9XG4ub25lIHsgd2lkdGg6IDYuODY2JTsgfVxuXG4vKiBDT0xVTU5TICovXG5cbi5jb2wge1xuXHRkaXNwbGF5OiBibG9jaztcblx0ZmxvYXQ6bGVmdDtcblx0bWFyZ2luOiAwIDAgMCAxLjYlO1xufVxuXG4uY29sOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yb3d7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLyogQ0xFQVJGSVggKi9cblxuLmNmOmJlZm9yZSxcbi5jZjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jZjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5jZiB7XG4gICAgKnpvb206IDE7XG59XG5cbi53cmFwcGVye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi8qIFNURVBTICovXG5cbi5zdGVwc3tcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uc3RlcHMgbGl7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnN0ZXBzIGxpLmlzLWFjdGl2ZXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNDk4ZGI7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuXG4vKiBGT1JNICovXG5cbi5mb3JtLXdyYXBwZXIgLnNlY3Rpb257XG4gIHBhZGRpbmc6IDBweCAyMHB4IDMwcHggMjBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4XG59XG5cbi5mb3JtLXdyYXBwZXIgLnNlY3Rpb24gaDN7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5mb3JtLXdyYXBwZXIgLnNlY3Rpb24uaXMtYWN0aXZle1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuXG4uZm9ybS13cmFwcGVyIC5idXR0b24sIC5mb3JtLXdyYXBwZXIgLnN1Ym1pdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLXdyYXBwZXIgLnN1Ym1pdHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5mb3JtLXdyYXBwZXIgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uZm9ybS13cmFwcGVyIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmZvcm0td3JhcHBlciBpbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLXdyYXBwZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLXdyYXBwZXIgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3Jle1xuICBjb250ZW50OiBcIuKclFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAtMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybS13cmFwcGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3Jle1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm0td3JhcHBlciBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCBoNHtcbiAgbWFyZ2luOiAxNXB4O1xuICBjb2xvcjogI2NjYztcbn1cblxuLmZvcm0td3JhcHBlciBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVse1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ5OGRiO1xufVxuXG4uZm9ybS13cmFwcGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgaDR7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuXG4uaHJ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkOutPage',
                templateUrl: './checkOutPage.component.html',
                styleUrls: ['./checkOutPage.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _home_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
        }] }); })();


/***/ }),

/***/ "j67j":
/*!***************************************************!*\
  !*** ./src/app/home/Pickles/Pickles.component.ts ***!
  \***************************************************/
/*! exports provided: PicklesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklesComponent", function() { return PicklesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PicklesComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicklesComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function PicklesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicklesComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pickelProducts);
} }
function PicklesComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicklesComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function PicklesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicklesComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pickelProducts);
} }
class PicklesComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('pickles').subscribe((products) => {
            this.vegProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
PicklesComponent.ɵfac = function PicklesComponent_Factory(t) { return new (t || PicklesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
PicklesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicklesComponent, selectors: [["app-pickles"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function PicklesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pickles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PicklesComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PicklesComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9QaWNrbGVzL3BpY2tsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBR0g7O0FBREE7RUFDRSx5RUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9QaWNrbGVzL3BpY2tsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDM5JTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV2aWNlWHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6MVxufVxuLmRldmljZUxne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JhZGllbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicklesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pickles',
                templateUrl: './pickles.component.html',
                styleUrls: ['./pickles.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "jEA1":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");









class ProfileComponent {
    constructor(formBuilder, accountService, router, http, myauthService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.router = router;
        this.http = http;
        this.myauthService = myauthService;
    }
    ngOnInit() {
        this.username = this.myauthService.getusername();
        this.email = this.myauthService.getemail();
        this.refrenceId = this.myauthService.getRefrenceId();
        this.rformEdit = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.username),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact)
        });
        // tslint:disable-next-line: align
        this.rformEditPassword = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    editInfo() {
        this.accountService.editInfo(this.rformEdit.value).subscribe((data) => {
            alert("Edited");
            this.setusername(data.username);
            this.setemail(data.email);
        }, (error) => {
            alert(error.error.message);
        });
    }
    editPassowrd() {
        this.accountService.editPassword(this.rformEditPassword.value).subscribe((data) => {
            alert("Edited");
        }, (error) => {
            alert(error.error.message);
        });
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 36, vars: 7, consts: [[2, "margin-left", "5%", "margin-right", "5%"], [1, "card", 2, "margin-left", "10%", "margin-right", "10%"], [2, "font-size", "large", "font-weight", "bold"], [3, "formGroup"], [2, "display", "flex", "flex-direction", "row"], [1, "", 2, "padding-bottom", "2%", "padding-right", "20%", "float", "left"], [2, "padding-bottom", "1%"], ["name", "username", "rformControlName", "username", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%", "float", "right"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%"], ["name", "contact", "type", "text", "rformControlName", "contact", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "text-align", "right"], [1, "btn", 2, "color", "rgb(104, 104, 209)", 3, "click"], ["name", "oldPassword", "type", "password", "rformControlName", "oldPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "newPassword", "type", "password", "rformControlName", "newPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ns-textField-account", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ns-textField-account", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ns-textField-account", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_p_click_21_listener() { return ctx.editInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ns-textField-account", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ns-textField-account", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_p_click_34_listener() { return ctx.editPassowrd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformEditPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEditPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEditPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n  padding: 2%;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 18px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 22px;\n  color: black;\n}\n\nbutton[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgcGFkZGluZzoyJVxufVxuXG4udGl0bGUge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYnV0dG9uOmhvdmVyLCBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetPassword/forgetPassword.component */ "gK4h");
/* harmony import */ var _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/emailVerify/emailVerify.component */ "DfQd");
/* harmony import */ var _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetPassword/resetPassword.component */ "QEFU");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "2rwd");
/* harmony import */ var _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../account/textField/textField.component */ "glWx");
/* harmony import */ var _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signUp/signUp.component */ "+3gi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "dvA0");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-intl-tel-input */ "t34c");


















class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, providers: [
        _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
        _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
        _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"]], exports: [_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
        _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
        _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"]
                ],
                declarations: [
                    _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
                    _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
                    _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]
                ],
                exports: [
                    _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
                    _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
                    _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]
                ], providers: [
                    _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersProgress/ordersProgress.component */ "Kg9S");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "l3fW");
/* harmony import */ var _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProduct/addProduct.component */ "fDLK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../admin/textField/textField.component */ "Awi1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "XUqj");













class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]], exports: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]],
                declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]],
                exports: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]],
                providers: [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kH2C":
/*!*********************************************************************!*\
  !*** ./src/app/home/returnandrefunds/returnandrefunds.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReturnandrefundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnandrefundsComponent", function() { return ReturnandrefundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReturnandrefundsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReturnandrefundsComponent.ɵfac = function ReturnandrefundsComponent_Factory(t) { return new (t || ReturnandrefundsComponent)(); };
ReturnandrefundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnandrefundsComponent, selectors: [["app-returnandrefunds"]], decls: 69, vars: 0, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function ReturnandrefundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return and Refunds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panel-group[_ngcontent-%COMP%] {\n    background: #fff none repeat scroll 0 0;\n    border-radius: 3px;\n    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n    margin-bottom: 0;\n    padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    border: medium none;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background:#b4d469 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 30px;\n    color: black;\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 12px 20px 12px 50px;\n    position: relative;\n    transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n    background:white none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n    background:#b4d469  none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background: #93bb36 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n    color: #fff;\n    content: \"\uF107\";\n    font-family: fontawesome;\n    font-size: 25px;\n    height: 55px;\n    left: -20px;\n    line-height: 55px;\n    position: absolute;\n    text-align: center;\n    top: -5px;\n    transition: all 0.3s ease 0s;\n    width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background:black none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    box-shadow: none;\n    color: white;\n    content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    background: transparent none repeat scroll 0 0;\n    border-top: medium none;\n    padding: 20px 25px 10px 9px;\n    position: auto;\n    font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-left: 1px dashed #8c8c8c;\n    padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n     font-weight: bold;\n    font-size: small;\n    \n        margin-bottom: 14px;\n    text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXR1cm5hbmRyZWZ1bmRzL3JldHVybmFuZHJlZnVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCO0FBRUE7S0FDSyxpQkFBaUI7SUFDbEIsZ0JBQWdCOztRQUVaLG1CQUFtQjtJQUN2QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXR1cm5hbmRyZWZ1bmRzL3JldHVybmFuZHJlZnVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhbmVsLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsIHtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDEwcHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0Njkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQge1xuICAgIGJhY2tncm91bmQ6d2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0NjkgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhOjphZnRlciwgI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTNiYjM2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb250ZW50OiBcIu+Eh1wiO1xuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDU1cHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6YmxhY2sgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNvbnRlbnQ6IFwi74SFXCI7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci10b3A6IG1lZGl1bSBub25lO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAxMHB4IDlweDtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkgcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzhjOGM4YztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbmxpLnBhbmVsLWJvZHkge1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnandrefundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-returnandrefunds',
                templateUrl: './returnandrefunds.component.html',
                styleUrls: ['./returnandrefunds.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l3fW":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AdminService {
    constructor(http) {
        this.http = http;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
        this.phase = "delivery phase";
    }
    addProducts(fd) {
        return this.http.post('http://localhost:8000/api/products/', fd);
    }
    shippingPhase(shippingPhase) {
        return this.http.post('http://localhost:8000/api/orders/shipping', {
            phase: this.phase = "shipping",
            ownerEmail: shippingPhase.ownerEmail,
            orderId: shippingPhase.orderId
        }, this.httpHeaders);
    }
    getAllOrders() {
        return this.http.get('http://localhost:8000/api/orders/', this.httpHeaders);
    }
    getPhase() {
        return this.phase;
    }
    // getlocations(latitude: number, longitude: number ){
    //   return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAYJvPnMzFkvkeka7kw_aV4Pjn3TeeACv8`);
    // }
    getlocation(latitude, longitude) {
        return this.http.post('http://localhost:8000/api/location', {
            latitude: latitude,
            longitude: longitude
        }, this.httpHeaders);
    }
    edit(data) {
        return this.http.post('http://localhost:8000/api/products/editProduct', data);
    }
    deleteProduct(id) {
        return this.http.post('http://localhost:8000/api/products/delete', {
            id: id
        }, this.httpHeaders);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetPassword/forgetPassword.component */ "gK4h");
/* harmony import */ var _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/emailVerify/emailVerify.component */ "DfQd");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");
/* harmony import */ var _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetPassword/resetPassword.component */ "QEFU");
/* harmony import */ var _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signUp/signUp.component */ "+3gi");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "dvA0");











const routes = [
    { path: '', component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], children: [
            { path: 'resetPassword/:id', component: _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"] },
            { path: 'signUp', component: _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
            { path: 'forgetPassword', component: _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"] },
            { path: 'accountVerify/:token', component: _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"] },
            // { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
        ]
    },
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sjMi":
/*!***********************************************************!*\
  !*** ./src/app/home/supportPage/supportPage.component.ts ***!
  \***********************************************************/
/*! exports provided: SupportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageComponent", function() { return SupportPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/product.service */ "BRKm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class SupportPageComponent {
    constructor(mediaObserver, formBuilder, productService, router, http) {
        this.mediaObserver = mediaObserver;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        // this.rformSupport = this.formBuilder.group({
        //   username: new FormControl(''),
        //   email: new FormControl('', Validators.email),
        //   subjcet: new FormControl('' ),
        //   message: new FormControl('' )
        // });
    }
    submit() {
        //   this.productService.supportPage(this.rformSupport.value).subscribe((data: any) => {
        //    alert("Query Sent")
        //    }, (error) => {
        //      alert(error.error.message);
        //    });
    }
}
SupportPageComponent.ɵfac = function SupportPageComponent_Factory(t) { return new (t || SupportPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
SupportPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPageComponent, selectors: [["app-supportPage"]], decls: 14, vars: 4, consts: [[2, "margin-left", "5%", "margin-right", "5%"], [2, "margin-left", "10%", "margin-right", "10%"], [2, "font-size", "large", "font-weight", "bold", "text-align", "left"], [2, "margin-top", "5%", "display", "flex", "flex-direction", "column", "justify-content", "space-evenly"], ["placeholder", "username", "type", "text", "name", "username", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "email", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "contact", "type", "text", "name", "contact", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "message", "name", "message", "rows", "5", 1, "form-control", 2, "margin-bottom", "2%", "margin-top", "2%", "width", "100%", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function SupportPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Support Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportPageComponent_Template_p_click_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n\n  padding:2%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdXBwb3J0UGFnZS9zdXBwb3J0UGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLGNBQWM7O0VBRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3VwcG9ydFBhZ2Uvc3VwcG9ydFBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICBwYWRkaW5nOjIlXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supportPage',
                templateUrl: './supportPage.component.html',
                styleUrls: ['./supportPage.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tFkF":
/*!*********************************************!*\
  !*** ./src/app/home/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
    submit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 41, vars: 4, consts: [[2, "min-height", "500px"], [2, "margin", "2%", "padding", "1%", "background-color", "rgb(236, 236, 236)"], [1, "row"], [1, "col-9", 2, "padding", "2%"], [2, "word-wrap", "break-word"], [1, "col-3", 2, "padding", "2%"], ["src", "../assets/images/7.jpg", 1, "img-responsive", "gradient", 2, "height", "200px", "width", "200px", "object-fit", "cove\n    r", "border-radius", "6px"], [2, "font-weight", "bold"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["placeholder", "username", "type", "text", "name", "username", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "email", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "contact", "type", "text", "name", "contact", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "comment", "name", "comment", "rows", "5", 1, "form-control", 2, "margin-top", "5%", "width", "100%", 3, "ngModel", "ngModelChange"], [2, "margin-top", "4%"], [1, "btn", "btn-primary", 3, "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What our Clients say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Post your Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_34_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_35_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_36_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_textarea_ngModelChange_37_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_p_click_39_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            alert('Kindly login First');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "v35Q":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "c2A7");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-routing.module */ "cP+M");





class CartModule {
}
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartModule_Factory(t) { return new (t || CartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"]
                ],
                declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: 'login', loadChildren: './account/account.module#AccountModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xE3F":
/*!***********************************************************************!*\
  !*** ./src/app/home/mainPage-listItem/mainPage-listItem.component.ts ***!
  \***********************************************************************/
/*! exports provided: MainPageListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageListItemComponent", function() { return MainPageListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customize/customize.component */ "btZY");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function MainPageListItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageListItemComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addProduct(ctx_r3.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageListItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageListItemComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeProduct(ctx_r6.item, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageListItemComponent_div_3_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addProduct(ctx_r8.item, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.item == null ? null : ctx_r1.item.productCount, " ");
} }
function MainPageListItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/detail"]; };
class MainPageListItemComponent {
    constructor(productService, cartService, dialog) {
        this.productService = productService;
        this.cartService = cartService;
        this.dialog = dialog;
        this.loadingImage = true;
    }
    ngOnInit() {
    }
    imageLoaded() {
        this.loadingImage = false;
    }
    get loadingImageGetter() {
        return this.loadingImage;
    }
    getImage(imageId) {
        // this.loadingImage = true;
        // this.loadingImage = false;
        if (!imageId) {
            return '';
        }
        else {
            return this.productService.productImageUrl(imageId);
        }
    }
    addProduct(item, productRef) {
        if (productRef) {
            let x = parseInt(productRef.innerText);
            productRef.innerText = x + 1;
        }
        this.cartService.addProduct(item);
    }
    removeProduct(item, productRef) {
        if (productRef) {
            let x = parseInt(productRef.innerText);
            productRef.innerText = x - 1;
        }
        this.cartService.removeProduct(item);
    }
    onCustomiseModal(item) {
        const dialogRef = this.dialog.open(_customize_customize_component__WEBPACK_IMPORTED_MODULE_1__["CustomizeComponent"], {
            maxWidth: '100% !important',
            height: '100vh',
            data: { item: item }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
MainPageListItemComponent.ɵfac = function MainPageListItemComponent_Factory(t) { return new (t || MainPageListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
MainPageListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageListItemComponent, selectors: [["app-mainPage-listItem"]], inputs: { item: "item" }, decls: 10, vars: 6, consts: [[2, "height", "180px", "width", "160px"], [2, "min-height", "45px"], ["style", "text-align: right;", 3, "click", 4, "ngIf"], ["style", "display: flex;flex-direction: row;width: 100px;height: 35px;\n   background-color: rgb(63, 61, 61);border-radius: 6px;border-style: groove;cursor: pointer;\n   color: rgb(8, 5, 5);float: right; user-select: none; border: 1px solid transparent; padding: 0px;margin:0px;line-height: 35px;", 4, "ngIf"], [2, "margin-left", "35px", 3, "routerLink"], [2, "height", "100px", "width", "auto", 3, "src", "load"], ["style", "margin-left: 35px;", "class", "spinner-border", "role", "status", 4, "ngIf"], [2, "padding-bottom", "20px", "padding-top", "10px", "padding-left", "3px", "height", "30px"], [2, "width", "100px", "background-color", "rgb(63, 61, 61)", "border-radius", "6px", "border-style", "groove", "color", "white", "margin-left", "35px", 3, "click"], [2, "text-align", "right", 3, "click"], [2, "border", "0px solid transparent", "padding", "3px 10px 3px 10px"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], [2, "display", "flex", "flex-direction", "row", "width", "100px", "height", "35px", "background-color", "rgb(63, 61, 61)", "border-radius", "6px", "border-style", "groove", "cursor", "pointer", "color", "rgb(8, 5, 5)", "float", "right", "user-select", "none", "border", "1px solid transparent", "padding", "0px", "margin", "0px", "line-height", "35px"], [2, "text-align", "center", "width", "40px", "color", "white", "user-select", "none", "font-size", "large", "font-weight", "bold", 3, "click"], [2, "width", "20px", "color", "white", "font-size", "15", "user-select", "none", "text-align", "center"], ["productRef", ""], ["role", "status", 1, "spinner-border", 2, "margin-left", "35px"], [1, "sr-only"]], template: function MainPageListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainPageListItemComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageListItemComponent_div_3_Template, 10, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MainPageListItemComponent_Template_img_load_5_listener() { return ctx.imageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainPageListItemComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageListItemComponent_Template_button_click_8_listener() { return ctx.onCustomiseModal(ctx.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.productCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.productCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImage(ctx.item.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingImageGetter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".textimages[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  position: absolute;\n}\n\n.block[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: white;\n  padding-top: 10%;\n  padding-bottom: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 38px;\n}\n\n.text-blockFooter[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.text-block-small[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n\n.text-block-btn[_ngcontent-%COMP%] {\n  width: 35%;\n  font-weight: bold;\n  min-width: 30%;\n  font-size: small;\n  text-align: center;\n  border-radius: 6px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.text-block1Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 10%;\n  padding-left: 5%;\n  margin-bottom: 12px;\n}\n\n.text-block2Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 20%;\n  padding-left: 5%;\n}\n\n.text-block3Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 5%;\n  left: 5%;\n  font-size: small;\n  padding-top: 12px;\n  text-align: center;\n  height: 3vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #e9e6e6;\n}\n\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 9%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 12%;\n  padding-left: 5%;\n}\n\n.text-block4Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 15%;\n  font-weight: bold;\n  margin-top: 15%;\n  margin-left: 1%;\n  left: 5%;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.slide1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.carousel-inner-slider1[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 10%;\n  right: 80%;\n}\n\n.btn-imgSlider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 20%;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 3%;\n  left: 7%;\n  top: 15%;\n  font-size: 1.5vw;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.img-main[_ngcontent-%COMP%] {\n  width: 1460px;\n  height: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluUGFnZS1saXN0SXRlbS9tYWluUGFnZS1saXN0SXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Qsa0JBQUE7QUFDRDs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0EsZUFBQTtBQUVBOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQ0FBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUFDRjs7QUFBQztFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0M7RUFDQyxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBR0Esa0JBQUE7RUFFQSxrQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFNQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFIQTs7QUFLQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUZEOztBQUlBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFEQTs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNBLFlBQUE7QUFDQTs7QUFHQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FBQUY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFJQSxrQkFBQTtBQVZGOztBQWFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7QUFYQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpblBhZ2UtbGlzdEl0ZW0vbWFpblBhZ2UtbGlzdEl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGltYWdlc3tcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxufVxuLmJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udGV4dC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuLnRleHQtYmxvY2tGb290ZXJ7XG5mb250LXNpemU6IDMycHg7XG59XG4udGV4dC1ibG9jay1zbWFsbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRleHQtYmxvY2stYnRuIHtcbiAgd2lkdGg6IDM1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1pbi13aWR0aDogMzAlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi50ZXh0LWJsb2NrMVNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC8vIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufS50ZXh0LWJsb2NrMlNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBwYWRkaW5nLXRvcDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAvLyBmb250LXNpemU6IDF2dztcblxufVxuLnRleHQtYmxvY2szU2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMCwgMjMwKTtcbn1cblxuXG4udGV4dC1ibG9jazFGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDYlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxufS50ZXh0LWJsb2NrMkZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnRleHQtYmxvY2szRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiAxMiU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC8vIGZvbnQtc2l6ZTogMXZ3O1xuXG59XG4udGV4dC1ibG9jazRGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiAxNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgbGVmdDogNSU7XG5cblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZXZpY2VYc3tcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5mbGV4LXdyYXA6IHdyYXA7XG5mbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zbGlkZTF7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5mb250LXNpemU6IDN2dztcbm1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY2Fyb3VzZWwtaW5uZXJ7XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5jYXJvdXNlbC1pbm5lci1zbGlkZXIxe1xud2lkdGg6IDEwMHZ3O1xuXG59XG5cbi5jYXJvdXNlbC1jYXB0aW9ue1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDgwJTtcbn1cbi5pdGVte1xuLy8gaGVpZ2h0OiAxMDBweDtcbn1cbi5jYXJvdXNlbHtcblxufVxuLmJ0bi1pbWdTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOiAyMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbGVmdDogNyU7XG4gIHRvcDogMTUlO1xuICBmb250LXNpemU6IDEuNXZ3O1xuICAvLyBwYWRkaW5nLXRvcDogMTBweDtcbiAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gaGVpZ2h0OiAzdnc7XG4gIC8vIHdpZHRoOiAxMHZ3O1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmltZy1tYWluICB7XG5cbndpZHRoOiAxNDYwcHg7XG5oZWlnaHQ6IDU1MHB4XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainPage-listItem',
                templateUrl: './mainPage-listItem.component.html',
                styleUrls: ['./mainPage-listItem.component.scss']
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xHX8":
/*!*****************************************************!*\
  !*** ./src/app/home/checkOut/checkOut.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class CheckOutComponent {
    constructor(_formBuilder, cartService, productService, authService) {
        this._formBuilder = _formBuilder;
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.title = 'newMat';
        this.isLinear = true;
    }
    ngOnInit() {
        this.getCartItems();
        this.firstFormGroup = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    getCartItems() {
        this.cartItems = this.cartService.getProducts();
        console.log(this.cartItems);
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        return this.total;
    }
    submit() {
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
CheckOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["app-checkOut"]], decls: 1, vars: 0, template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hlY2tPdXQvY2hlY2tPdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkOut',
                templateUrl: './checkOut.component.html',
                styleUrls: ['./checkOut.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "xbwq":
/*!***************************************************************!*\
  !*** ./src/app/home/productDetail/productDetail.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductDetailComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Fast, Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Contactless Delivery. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Try it now, risk free! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Fast, Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Contactless Delivery. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Try it now, risk free! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_57_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.scrollToFeatured(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductDetailComponent {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-productDetail"]], decls: 63, vars: 4, consts: [[2, "margin", "5%"], [1, "row"], [1, "col-lg-6"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], [2, "margin", "2%", "border-radius", "5px", "min-width", "150px", "min-height", "150px", "border", "2px", "border-style", "groove"], ["src", "../assets/images/veg1.jpg", 2, "width", "20vw", "padding", "5px", "min-width", "150px", "min-height", "150px"], [2, "margin", "2%", "border-radius", "5px", "border", "2px", "border-style", "groove", "min-width", "150px", "min-height", "150px"], [2, "margin", "2%", "border-radius", "5px", "min-width", "150px", "min-height", "150px", ";border", "2px", "border-style", "groove"], [1, "col-lg-6", 2, "margin-top", "5%", "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "font-size", "larger", "font-weight", "500"], [2, "padding-top", "5%"], [2, "float", "left", "font-size", "larger", "font-weight", "500"], [2, "float", "right", "margin-right", "20%"], [1, "btn", 2, "width", "140px", "height", "50px", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold"], [2, "padding-bottom", "5%", "word-wrap", "break-word"], [2, "margin-bottom", "5%", "display", "flex", "flex-direction", "row"], [2, "margin-right", "5%", "font-size", "larger"], [1, "btn", 2, "margin-right", "2%", "border", "2px", "border-style", "groove"], [2, "display", "flex", "flex-direction", "row"], [2, "border-radius", "6px", "margin", "2.5%", "background-color", "white"], [2, "font-weight", "bold", "font-size", "1.5vw", "padding-left", "3%", "padding-top", "4%"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "margin", "1%"], [1, "container-fluid", 2, "width", "100%", "padding-top", "2%"], ["class", "block", "style", "padding-top: 5%", 4, "ngIf"], ["class", "block", "style", "padding-top: 20%", 4, "ngIf"], ["src", "../assets/images/slide2.png", 1, "img-responsive", 2, "border-radius", "6px", "min-height", "350px", "width", "100%", "border-radius", "8px"], [2, "padding", "2%"], [1, "deviceLg"], [2, "padding", "2%", "width", "20%"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], ["src", "../assets/images/veg1.jpg", 1, "img-responsive"], [2, "padding", "2%", ";width", "20%"], ["src", "../assets/images/trend1.jpg", 1, "img-responsive"], ["src", "../assets/images/trend2.jpg", 1, "img-responsive"], ["src", "../assets/images/trend3.jpg", 1, "img-responsive"], ["src", "../assets/images/trend4.jpg", 1, "img-responsive"], [2, "width", "17vw"], [1, "block", 2, "padding-top", "5%"], [2, "color", "black", "padding-bottom", "5%", "font-size", "40px"], [2, "color", "black", "padding-bottom", "10%", "font-size", "40px"], [2, "color", "black", "padding-bottom", "10%", "font-size", "20px"], [1, "btn", 2, "background-color", "#ffffff", "width", "40%", "height", "35px"], [1, "block", 2, "padding-top", "20%"], [2, "color", "black", "padding-bottom", "5%", "font-size", "25px"], [1, "text-block-small", 2, "color", "black", "padding-bottom", "5%"], [1, "btn", 2, "background-color", "#ffffff", "font-size", "14px", "width", "50%", "height", "40px", "font-weight", "bold", 3, "click"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Market Corner Classic Burger Buns 400g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "0.50$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Shrivasafoods is a React Gatsby based E-commerce Template that uses two Headless API. One of them is Shopify Storefront API for E-commerce purposes and another one is for Static Content Management [ Prismic ]. You can easily change any text or product data from there. As we\u2019ve used Shopify E-commerce api, it\u2019s behaving like a fully functional E-commerce template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tag :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Buns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Fresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Packed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Share on :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Twiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Related Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductDetailComponent_div_52_Template, 51, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductDetailComponent_div_53_Template, 48, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProductDetailComponent_div_56_Template, 12, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProductDetailComponent_div_57_Template, 11, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Copyright \u00A9 2020 RedQ, Inc , All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceSm || ctx.deviceXs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: medium;\n  padding-top: 12%;\n  padding-left: 5%;\n}\n\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 18%;\n  color: black;\n  font-weight: 700;\n  margin-left: 5%;\n  font-size: 1vw;\n  padding-top: 12px;\n  text-align: center;\n  height: large;\n  width: 10vw;\n  border-radius: 6px;\n}\n\n.block[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: white;\n  padding-top: 10%;\n  padding-bottom: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 38px;\n}\n\n.text-blockFooter[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.text-block-large[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n}\n\n.text-block-small[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n\n.text-block-btn[_ngcontent-%COMP%] {\n  width: 35%;\n  font-weight: bold;\n  min-width: 30%;\n  font-size: small;\n  text-align: center;\n  border-radius: 6px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.text-block1Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 10%;\n  padding-left: 5%;\n  margin-bottom: 12px;\n}\n\n.text-block2Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 20%;\n  padding-left: 5%;\n}\n\n.text-block3Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 5%;\n  left: 5%;\n  font-size: small;\n  padding-top: 12px;\n  text-align: center;\n  height: 3vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBR0g7O0FBREE7RUFDRSx5RUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFIQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDQSxlQUFBO0FBUUE7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQ0FBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUFPRjs7QUFOQztFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV2aWNlWHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6MVxufVxuLmRldmljZUxne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JhZGllbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xufVxuLnRleHQtYmxvY2sxRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59LnRleHQtYmxvY2syRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDEyJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcblxuXG59XG4udGV4dC1ibG9jazNGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBsYXJnZTtcbiAgd2lkdGg6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnRleHQtYmxvY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cbi50ZXh0LWJsb2NrRm9vdGVye1xuZm9udC1zaXplOiAzMnB4O1xufVxuLnRleHQtYmxvY2stbGFyZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRleHQtYmxvY2stc21hbGwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LWJsb2NrLWJ0biB7XG4gIHdpZHRoOiAzNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4udGV4dC1ibG9jazFTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAvLyBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn0udGV4dC1ibG9jazJTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgLy8gZm9udC1zaXplOiAxdnc7XG5cbn1cbi50ZXh0LWJsb2NrM1NsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblxuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGxlZnQ6IDUlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productDetail',
                templateUrl: './productDetail.component.html',
                styleUrls: ['./productDetail.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../cart/cart.module": "v35Q",
	"../checkOut/checkOut.module": "Y2rj",
	"./account/account.module": "jcJX",
	"./admin/admin.module": "jkDv",
	"./home/home.module": "ct+p"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map