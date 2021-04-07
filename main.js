(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/oDq":
/*!****************************************************!*\
  !*** ./src/app/edit-terms/edit-terms.component.ts ***!
  \****************************************************/
/*! exports provided: EditTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTermsComponent", function() { return EditTermsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");












function EditTermsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " *Field Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditTermsComponent {
    constructor(apiService, fb, spinnerService, toastr, _location, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this._location = _location;
        this.router = router;
        this.Image = null;
        this.paymentInfo = '';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        // this.getPrivacy();
    }
    ngOnInit() {
        this.authForm = this.fb.group({
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
        });
        this.createForm();
    }
    /*getPrivacy() {
      this.apiService.getPrivacy().subscribe((response) => {
        this.details = response.data[0];
      });
    }*/
    createForm() {
        this.apiService.getTerms().subscribe((response) => {
            this.details = response.data[0];
            this.authForm = this.fb.group({
                userid: [this.details._id],
                desc: [this.details.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            });
        });
    }
    updateTerms() {
        //	if(this.Image == null){
        this.spinnerService.show();
        let dict = this.authForm.value;
        console.log('PRIVACY POLICY DATA', dict);
        dict.userid = this.details._id;
        dict.desc = dict.desc;
        this.apiService.updateTerms(dict).subscribe((response) => {
            this.spinnerService.hide();
            if (response.status === true) {
                this._location.back();
                this.toastr.success('Terms & Conditions has been updated successfully!');
            }
            else {
                this.toastr.error('Terms & Conditions Not Updatd!');
            }
        });
    }
    backView() {
        this._location.back();
    }
}
EditTermsComponent.ɵfac = function EditTermsComponent_Factory(t) { return new (t || EditTermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
EditTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditTermsComponent, selectors: [["app-edit-terms"]], decls: 171, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "privcyTab", "stretch-card"], [1, "card"], [1, "card-body"], [1, "info-sma"], [1, "brdr-db"], [1, "row"], [1, "col-md-12"], [1, "form-frms", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["placeholder", "", "formControlName", "desc", "name", "desc", 1, "form-control", 3, "editor", "ngClass"], [4, "ngIf"], [1, "sv-cncl-all", "pull-right", "m-t-0"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", 3, "click"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], ["id", "add-address", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "exampleInputEmail1"], ["type", "name", "placeholder", "", "value", "", 1, "form-control"], [1, "col-md-6"], [1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["id", "edit-address", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "name", "placeholder", "", "value", "123 Town Street", 1, "form-control"], ["type", "name", "placeholder", "", "value", "Alaska", 1, "form-control"], ["type", "name", "placeholder", "", "value", "12433", 1, "form-control"], ["selected", ""], ["id", "delete-pop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], ["type", "button", 1, "btn", "btn-primary"], [2, "color", "#f70101 !important"]], template: function EditTermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Terms & Conditions Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Terms & Conditions Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditTermsComponent_Template_form_ngSubmit_19_listener() { return ctx.updateTerms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ckeditor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EditTermsComponent_span_24_Template, 3, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTermsComponent_Template_button_click_26_listener() { return ctx.updateTerms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTermsComponent_Template_a_click_28_listener() { return ctx.updateTerms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Add New Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Edit Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Are you sure wants to delete it ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.Editor)("ngClass", ctx.authForm.controls.desc.hasError("required") && ctx.authForm.controls.desc.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.controls.desc.hasError("required") && ctx.authForm.controls.desc.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRlcm1zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/indiit/Documents/Indiit Projects/FunFun/new/new-admin/src/main.ts */"zUnb");


/***/ }),

/***/ "1C5u":
/*!**************************************************************!*\
  !*** ./src/app/diffrent-levels/diffrent-levels.component.ts ***!
  \**************************************************************/
/*! exports provided: DiffrentLevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffrentLevelsComponent", function() { return DiffrentLevelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DiffrentLevelsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiffrentLevelsComponent.ɵfac = function DiffrentLevelsComponent_Factory(t) { return new (t || DiffrentLevelsComponent)(); };
DiffrentLevelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiffrentLevelsComponent, selectors: [["app-diffrent-levels"]], decls: 2, vars: 0, template: function DiffrentLevelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "diffrent-levels works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWZmcmVudC1sZXZlbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.profileData = { profile_image: null, firstName: '', lastName: '' };
        if (localStorage.getItem('IsLoggedIn') == 'true') {
            this.profileData = JSON.parse(localStorage.getItem('profile'));
        }
        console.log('here');
    }
    ngOnInit() { }
    // logout() {
    //   localStorage.setItem("IsLoggedIn", "false");
    //   localStorage.setItem("profile", "null");
    //   this.router.navigateByUrl("/");
    // }
    logout() {
        localStorage.removeItem('isLoggedIn');
        this.router.navigateByUrl('/');
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 40, vars: 2, consts: [["id", "sidebar", 1, "sidebar", "sidebar-offcanvas", "sidebar-dark"], [1, "nav"], [1, "nav-item", "nav-profile"], [1, "text-center", "font-weight-medium"], [1, "nav-item"], ["routerLink", "/dashboard", "routerLinkActive", "active", "href", "javascript:;", 1, "nav-link"], [1, "menu-icon", "icon-home"], [1, "menu-title"], ["routerLink", "/user", "href", "javascript:;", 1, "nav-link"], [1, "menu-icon", "icon-people"], ["routerLink", "/all-levels", "href", "javascript:;", 1, "nav-link"], [1, "menu-icon", "icon-docs"], ["routerLink", "/points", "href", "javascript:;", 1, "nav-link"], [1, "menu-icon", "icon-handbag"], ["routerLink", "/edit-privacy", 1, "nav-link"], [1, "menu-icon", "icon-key"], ["routerLink", "/edit-terms", 1, "nav-link"], [1, "menu-icon", "icon-folder"], [1, "nav-item", 3, "click"], [1, "nav-link"], [1, "menu-icon", "icon-logout"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Diffrent Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "User Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Privacy Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_li_click_35_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.profileData == null ? null : ctx.profileData.fname, " ", ctx.profileData == null ? null : ctx.profileData.lname, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "5lyI":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function OrdersComponent_tr_32_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questions_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", questions_r1.friends_allowed, " ");
} }
function OrdersComponent_tr_32_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.fa, " ");
} }
function OrdersComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrdersComponent_tr_32_td_9_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrdersComponent_tr_32_td_10_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questions_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questions_r1.level_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questions_r1.level_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questions_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questions_r1.pts_needed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", questions_r1.friends_allowed !== "" && questions_r1.friends_allowed !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", questions_r1.friends_allowed === undefined);
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class OrdersComponent {
    constructor(apiService, toastr, router, spinnerService) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.spinnerService = spinnerService;
        this.deletesinglequestion = "";
        // p: number = 1;
        this.p = [];
        this.all_Questions = "";
    }
    ngOnInit() {
        this.getAllQuestionsByUserType();
    }
    getAllQuestionsByUserType() {
        this.apiService.all_levels().subscribe((response) => {
            console.log(response);
            this.all_Questions = response.data;
            this.fa = Infinity;
            this.collection = this.all_Questions;
        });
    }
    _deleteSingleQuestion(qid) {
        this.deletesinglequestion = qid;
    }
    _deleteQuestion() {
        const data = {
            qid: this.deletesinglequestion,
        };
        console.log(data);
        this.apiService.delete_level(data).subscribe((response) => {
            console.log(response);
            this.getAllQuestionsByUserType();
            document.getElementById("closedeletemodal").click();
            this.toastr.success("Deleted successfully!");
        });
    }
    viewDetails(index) {
        localStorage.setItem("item", JSON.stringify(this.all_Questions[index]));
        this.router.navigateByUrl("/order-details");
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 50, vars: 6, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "col-12", "table-responsive"], ["id", "order-listing", 1, "table"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["id", "delete-pop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", "id", "closedeletemodal", 1, "btn", "btn-danger"], [4, "ngIf"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Diffrent Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Level Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Level Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Colour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Points Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Friends Allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OrdersComponent_tr_32_Template, 11, 6, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function OrdersComponent_Template_pagination_controls_pageChange_34_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Are you sure wants to delete it ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_46_listener() { return ctx._deleteQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 1, ctx.all_Questions, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "5oS5":
/*!********************************************************!*\
  !*** ./src/app/add-customer/add-customer.component.ts ***!
  \********************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");









function AddCustomerComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field First Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field Last Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field User Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Email must be a valid email address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Please Select the Gender! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Please select Date of Birth! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Password must be at least 8 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field Confirm Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCustomerComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Password do not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
// const stripe = require('stripe')('sk_test_h2KWJ6tZJ51osA8TJG83eE8000g92mj71d');
class AddCustomerComponent {
    constructor(apiService, fb, spinnerService, toastr, _location) {
        this.apiService = apiService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this._location = _location;
        this.submitted = false;
        this.Image = null;
        this.udata = "";
        this.allInterests = "";
        this.createForm();
        //  this.getInterestsAreas();
    }
    ngOnInit() {
        // 	this.creditCardForm = this.fb.group({
        // 		cardName : ['',[Validators.required]],
        // 		number: ['', [Validators.required,<any>CreditCardValidator.validateCCNumber]],
        // 		expMonth: ['', [Validators.required ,<any>CreditCardValidator.validateExpDate]]
        // 	},{});
        // }
        // getInterestsAreas(){
        // 	this.apiService.getAllInterests().subscribe((data)=>{
        // 		console.log(data);
        // 		this.allInterests = data;
        // 	})
    }
    /***********PASSWORD MATCHING********** */
    equalto(field_name) {
        return (control) => {
            let input = control.value;
            let isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { equalTo: { isValid } };
            else
                return null;
        };
    }
    createForm() {
        this.authForm = this.fb.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dob: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            cpassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.equalto("password")]],
        });
    }
    //  createCreditCardForm(){
    //   }
    // updateInterestAreas(userid) {
    //   var data = {
    //     userid: userid,
    //     interests: this.interestArr,
    //   };
    //   this.apiService.updateUserInterests(data).subscribe((res) => {
    //     console.log(res);
    //   });
    // }
    addCustomer() {
        console.log("add cust");
        this.saveCustomerDetails(this.authForm);
        document.getElementById("contact-tab1").click();
    }
    // onImageChanged(event) {
    //   console.log(event);
    //   let reader = new FileReader();
    //   this.Image = event.target.files[0];
    //   this.selectedFile = event.target.files[0];
    //   let extn = event.target.value.split(".")[1];
    //   if (extn == "jpg" || extn == "png" || extn == "jpeg") {
    //     reader.onload = () => {
    //       this.Image = reader.result;
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //   } else if (extn == "pdf") {
    //     this.Image = event.target.files[0].name;
    //   }
    //   //this.authForm.patchValue({profile_image : this.Image});
    // }
    // uploadImage() {
    //   this.spinnerService.show();
    //   let dict = {
    //     email: this.authForm.value.email,
    //     item_type: "customer",
    //     new: true,
    //   };
    //   this.apiService.is_email_exist(dict).subscribe((response) => {
    //     if (response.status == 1) {
    //       var payload = new FormData();
    //       payload.append("image", this.selectedFile, this.selectedFile.name);
    //       this.apiService.UploadImage(payload).subscribe((response) => {
    //         console.log(response);
    //         this.authForm.value.profile_image = response.image;
    //         console.log(this.authForm.value);
    //         this.Image = null;
    //         this.addCustomer();
    //       });
    //     } else {
    //       this.spinnerService.hide();
    //       this.toastr.error(response.msg);
    //     }
    //   });
    // }
    // /*************SELECT INTERESTS*************** */
    // interestArr: any = [];
    // selectInterests(interest, id) {
    //   console.log(interest);
    //   console.log(id);
    //   console.log(this.interestArr);
    //   if (this.interestArr.length > 0) {
    //     for (var i = 0; i < this.interestArr.length; i++) {
    //       if (interest == this.interestArr[i].interest) {
    //         this.interestArr.splice(i, 1);
    //         console.log(this.interestArr);
    //         //   this.updateInterestAreas();
    //         break;
    //       } else if (
    //         interest != this.interestArr[i].interest &&
    //         i == this.interestArr.length - 1
    //       ) {
    //         this.interestArr.push({
    //           interest: interest,
    //           _id: id,
    //           checked: true,
    //         });
    //         console.log(this.interestArr);
    //         //   this.updateInterestAreas();
    //         break;
    //       }
    //     }
    //   } else {
    //     this.interestArr.push({
    //       interest: interest,
    //       _id: id,
    //       checked: true,
    //     });
    //     console.log(this.interestArr);
    //     // this.updateInterestAreas();
    //   }
    // }
    // randomString() {
    //   let charSet = "";
    //   let len = 10;
    //   charSet =
    //     charSet ||
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   var randomString = "";
    //   for (var i = 0; i < len; i++) {
    //     var randomPoz = Math.floor(Math.random() * charSet.length);
    //     randomString += charSet.substring(randomPoz, randomPoz + 1);
    //     console.log(randomString);
    //   }
    //   return randomString;
    // }
    // validateCard: any = false;
    // validateExpMonthYear: any = false;
    // validateCvv: any = false;
    // getCreditCardType(accountNumber) {
    //   //start without knowing the credit card type
    //   var result = "unknown";
    //   //first check for MasterCard
    //   if (/^5[1-5]/.test(accountNumber)) {
    //     result = "mastercard";
    //   }
    //   //then check for Visa
    //   else if (/^4/.test(accountNumber)) {
    //     result = "visa";
    //   }
    //   //then check for AmEx
    //   else if (/^3[47]/.test(accountNumber)) {
    //     result = "amex";
    //   } else if (/^6(?:011|5[0-9]{2})[0-9]{12}/.test(accountNumber)) {
    //     result = "Discover";
    //   } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}/.test(accountNumber)) {
    //     result = "Diners Club";
    //   } else if (/^(?:2131|1800|35\d{3})\d{11}/.test(accountNumber)) {
    //     result = "JCB";
    //   }
    //   return result;
    // }
    // saveCard(uid, value) {
    //   console.log(value.expMonth.split("/")[0]);
    //   var data = {
    //     userid: uid,
    //     card: {
    //       id: this.randomString(),
    //       name: value.cardName,
    //       number: value.number,
    //       expMonth: value.expMonth.split("/")[0],
    //       expYear: value.expMonth.split("/")[1],
    //       cvc: null,
    //       cardtype: this.getCreditCardType(value.number),
    //     },
    //   };
    //   console.log("SAVE PAYMENT DATA");
    //   console.log(data);
    //   // return false;
    //   this.apiService.updatePaymentDetails(data).subscribe((res) => {
    //     console.log(res);
    //   });
    // }
    saveCustomerDetails(value) {
        var dict = {
            firstName: this.authForm.value.firstName,
            lastName: this.authForm.value.lastName,
            dob: this.authForm.value.dob,
            gender: this.authForm.value.gender,
            email: this.authForm.value.email,
            password: this.authForm.value.password,
            username: this.authForm.value.username,
        };
        console.log("DICT", dict);
        this.spinnerService.show();
        this.apiService.add_user(dict).subscribe((response) => {
            this.spinnerService.hide();
            if (response.status === true) {
                console.log(response);
                this.toastr.success("User has been added successfully!");
                this.udata = response.data;
                this.add_points();
                this._location.back();
            }
            else {
                this.toastr.error("Error in adding user");
            }
        });
    }
    add_points() {
        console.log("NEW CREATED DATA", this.udata);
        const data = {
            userid: this.udata._id,
            username: this.udata.username,
            total_points: 1000,
            given_points: 0,
            recived_points: 0,
            level: 1,
        };
        console.log("POINTS DATA", data);
        this.apiService.add_points(data).subscribe((res) => {
            // this.helperService.presentLoading();
            console.log("Response From Points Table", res);
            this.diff_levels(this.udata._id);
            // this.helperService.stopLoading();
        });
        // this.diff_levels();
    }
    diff_levels(userida) {
        console.log(userida);
        const data = {
            userid: userida,
        };
        this.apiService.diff_levels(data).subscribe((res) => {
            console.log("NOTIFICATION RESPONSE", res);
        });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
AddCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], decls: 120, vars: 13, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-basic"], [1, "nav-item"], ["id", "home-tab1", "data-toggle", "tab", "href", "#whoweare1", "role", "tab", "aria-controls", "whoweare", "aria-selected", "true", 1, "nav-link", "active"], [1, "tab-content", "tab-content-basic"], ["id", "whoweare1", "role", "tabpanel", "aria-labelledby", "home-tab1", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "form-frms", 3, "formGroup", "ngSubmit"], [1, "profile-page", "new-on-tb", "m-t-20"], [1, "col-12"], [1, "card", "left-profl"], [1, "card-body", "p-0"], [1, "col-md-12"], [1, "profile-body", "pt-0"], ["id", "profile-log-switch ", 1, "tab-content", "tab-body"], ["id", "user-profile-info ", 1, "tab-pane", "fade", "show", "active"], [1, "info-sma"], [1, "brdr-db"], [1, "col-md-6"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "placeholder", "", "formControlName", "firstName", "name", "firstName", 1, "form-control"], [4, "ngIf"], ["type", "text", "placeholder", "", "formControlName", "lastName", "name", "lastName", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "username", "name", "username", 1, "form-control"], ["type", "text", "placeholder", "", "formControlName", "email", "name", "email", 1, "form-control"], ["type", "radio", "value", "Male", "formControlName", "gender"], ["type", "radio", "value", "Female", "formControlName", "gender"], ["type", "date", "formControlName", "dob", 1, "form-control"], ["type", "password", "placeholder", "", "formControlName", "password", "name", "password", 1, "form-control"], ["type", "password", "placeholder", "", "formControlName", "cpassword", "name", "cpassword", 1, "form-control"], [1, "sv-cncl-all", "pull-right", "m-t-0"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "btn-lg"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["id", "remarks", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm", "modl-shad"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer", "pull-left"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [2, "color", "#f70101 !important"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCustomerComponent_Template_form_ngSubmit_21_listener() { return ctx.addCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Basic Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AddCustomerComponent_span_42_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AddCustomerComponent_span_48_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AddCustomerComponent_span_54_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AddCustomerComponent_span_60_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddCustomerComponent_span_61_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, AddCustomerComponent_span_77_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "DOB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, AddCustomerComponent_span_84_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, AddCustomerComponent_span_91_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, AddCustomerComponent_span_92_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, AddCustomerComponent_span_98_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, AddCustomerComponent_span_99_Template, 3, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "footer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.firstName.hasError("required") && ctx.authForm.controls.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.lastName.hasError("required") && ctx.authForm.controls.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.username.hasError("required") && ctx.authForm.controls.username.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.email.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.gender.hasError("required") && ctx.authForm.controls.gender.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.dob.hasError("required") && ctx.authForm.controls.dob.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.password.hasError("required") && ctx.authForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.cpassword.hasError("required") && ctx.authForm.controls.cpassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.cpassword.hasError("equalTo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"] });


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

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function DashboardComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dataIndex", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", item_r1.image ? item_r1.image : "assets/img/user-dummy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1 == null ? null : item_r1.mood, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.friends_count, " ");
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class DashboardComponent {
    constructor(apiService, spinnerService, toastr, router) {
        this.apiService = apiService;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.router = router;
        this.totalcustomers = "";
        this.totalvendors = "";
        this.all_Questions_Count = "";
        this.listing = [];
        this.customer = "";
        this.p = [];
        /********GET TOTAL VENDORS **** */
        // getVendorsListing() {
        //   this.spinnerService.show();
        //   this.apiService.influencer_listing().subscribe(
        //     (response) => {
        //       console.log(response);
        //       this.spinnerService.hide();
        //       this.totalvendors = response.length;
        //     },
        //     (err) => {
        //       this.toastr.error("Something went wrong.Please try later.");
        //     }
        //   );
        // }
        /*********GET ALL TRANSACTIONS***** */
        this.all_transactionsCount = "";
    }
    ngOnInit() {
        this.all_users();
        // this.getVendorsListing();
        this.all_levels();
        this.getAllQuestionsByUserType();
        this.getCustomersListing();
    }
    getCustomersListing() {
        this.spinnerService.show();
        this.apiService.all_users().subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.listing = response.data;
            this.collection = this.listing;
        }, (err) => {
            this.toastr.error("Something went wrong.Please try later.");
        });
    }
    /********GET TOTAL CUSTOMERS **** */
    all_users() {
        this.spinnerService.show();
        this.apiService.all_users().subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.totalcustomers = response.data.length;
        }, (err) => {
            this.toastr.error("Something went wrong.Please try later.");
        });
    }
    all_levels() {
        this.apiService.all_points().subscribe((response) => {
            this.all_transactionsCount = response.data.length;
            console.log(this.all_transactionsCount);
        });
    }
    /********GET ALL QUESTIONS COUNT***** */
    getAllQuestionsByUserType() {
        this.apiService.all_levels().subscribe((response) => {
            console.log(response);
            this.all_Questions_Count = response.data.length;
            console.log(this.all_Questions_Count);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 81, vars: 9, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row"], [1, "col-12", "card-statistics"], [1, "col-12", "col-sm-6", "col-md-3", "grid-margin", "stretch-card", "card-tile"], [1, "card", "bg-chng-br"], [1, "card-body"], [1, "pb-2", "d-flex", "justify-content-between"], [1, "icon-people"], [1, "d-flex", "justify-content-between"], [1, "text-muted"], [1, "progress", "progress-md"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", "w-25"], [1, "card", "bg-chng-br", "bg-prp-d"], [1, "icon-speech"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", "w-25"], [1, "card", "bg-chng-br", "bg-grn-sd"], [1, "icon-handbag"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", "w-25"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-title"], [1, "col-12", "table-responsive"], ["id", "order-listing", 1, "table"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], [1, "round-tbl"], [1, "badge", "badge-success"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total User Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Customers List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DashboardComponent_tr_74_Template, 14, 6, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pagination-controls", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DashboardComponent_Template_pagination_controls_pageChange_76_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "footer", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalcustomers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.all_Questions_Count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.all_transactionsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](75, 4, ctx.listing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.p)));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: ["div#order-listing_length[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNvcmRlci1saXN0aW5nX2xlbmd0aCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });


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
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'new-admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loader-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxLoaderSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TsVY":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");







class PrivacyComponent {
    constructor(apiService, router, spinnerService, toastr) {
        this.apiService = apiService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.p = [];
        //   if(this.details.paymentInfo.length>0){
        // 	for(var i=0;i<this.details.paymentInfo.length;i++){
        // 		console.log(this.details.paymentInfo[i]);
        // 		var num = this.details.paymentInfo[i].number;
        // 		num = num.toString();
        // 		this.details.paymentInfo[i].number = num.replace(/.(?=.{4,}$)/g, 'X');
        // 			console.log(this.details.paymentInfo[i].number);
        // 			console.log(this.details);
        // 	}
        // }
    }
    ngOnInit() {
        this.getPrivacy();
    }
    getPrivacy() {
        this.spinnerService.show();
        this.apiService.getPrivacy().subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.listing = response.data[0];
            console.log(this.listing);
            this.pid = response.data._id;
        }, (err) => {
            this.toastr.error("Something went wrong.Please try later.");
        });
    }
    editDetails() {
        this.router.navigateByUrl("/edit-privacy");
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 31, vars: 1, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [3, "click"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], [1, "row"], [1, "profile-page", "privcyTab", "new-on-tb"], [1, "col-12"], [1, "card", "left-profl"], [1, "p-0", "card-body"], [1, "info-sma"], [1, "lin-nam"], [1, "mbb", "headh3"], [1, "parad", 3, "innerHTML"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], ["id", "remarks", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Privacy Policy Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyComponent_Template_button_click_10_listener() { return ctx.editDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.listing == null ? null : ctx.listing.desc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]], styles: [".privcyTab[_ngcontent-%COMP%]   .left-profl[_ngcontent-%COMP%]\n{\n  margin-bottom: 0;\n}\n\n.privcyTab.new-on-tb[_ngcontent-%COMP%]   .card.left-profl[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  padding: 0;\n  box-shadow: none;\n  border: none;\n}\n\n.privcyTab[_ngcontent-%COMP%]   .info-sma[_ngcontent-%COMP%]\n{\n  padding: 0;\n}\n\n.privcyTab[_ngcontent-%COMP%]   ul.lin-nam[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]\n{\n  color: #000;\n}\n\n.privcyTab[_ngcontent-%COMP%]   ul.lin-nam[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n{\n  width: 100%;\n  color: #777;\n}\n\n.mbb[_ngcontent-%COMP%]\n{\n  margin-bottom: 6px;\n}\n\n.headh3[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dbdaf6;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  margin-bottom: 13px;\n  position: relative;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 25px;\n  color: #000;\n}\n\n.headh3[_ngcontent-%COMP%]:after {\n  width: 60px;\n  height: 4px;\n  background: linear-gradient(to right,#25DEEC,#25DEEC);\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n}\n\n.parad[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: #777;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gscURBQXFEO0VBQ3JELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQUNqQiIsImZpbGUiOiJwcml2YWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpdmN5VGFiIC5sZWZ0LXByb2ZsXG57XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wcml2Y3lUYWIubmV3LW9uLXRiIC5jYXJkLmxlZnQtcHJvZmxcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnByaXZjeVRhYiAuaW5mby1zbWFcbntcbiAgcGFkZGluZzogMDtcbn1cblxuLnByaXZjeVRhYiB1bC5saW4tbmFtIHN0cm9uZ1xue1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnByaXZjeVRhYiB1bC5saW4tbmFtIGxpXG57XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzc3Nztcbn1cblxuLm1iYlxue1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5oZWFkaDMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGFmNjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkaDM6YWZ0ZXIge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMjVERUVDLCMyNURFRUMpO1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG59XG5cbi5wYXJhZCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "UMdc":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");










function UserListComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_36_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.viewDetails(item_r1 == null ? null : item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_36_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.editCustomer(item_r1 == null ? null : item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_36_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deletePopUpCustomer(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dataIndex", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", item_r1.image ? item_r1.image : "assets/img/user-dummy.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1 == null ? null : item_r1.mood, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1 == null ? null : item_r1.friends_count, " ");
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class UserListComponent {
    constructor(apiService, spinnerService, toastr, router, route) {
        this.apiService = apiService;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.router = router;
        this.listing = [];
        this.customer = "";
        this.p = [];
        this.getCustomersListing();
        const id = route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((listing) => listing._id));
    }
    ngOnInit() {
        console.log("enter");
        this.getCustomersListing();
    }
    getCustomersListing() {
        this.spinnerService.show();
        this.apiService.all_users().subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.listing = response.data;
            this.collection = this.listing;
        }, (err) => {
            this.toastr.error("Something went wrong.Please try later.");
        });
    }
    viewDetails(index) {
        console.log("VIEW DETAIL", index);
        // localStorage.setItem("item", JSON.stringify(this.listing[index]));
        console.log(localStorage.getItem("item"));
        this.router.navigateByUrl("/customer-details/" + index);
    }
    editCustomer(index) {
        // localStorage.setItem("item", JSON.stringify(this.listing[index]));
        this.router.navigateByUrl("/edit-customer/" + index);
    }
    deletePopUpCustomer(row) {
        console.log("SELECTED FOR DELETE:", row);
        this.customer = row;
    }
    deleteCustomer() {
        this.spinnerService.show();
        let dict = {
            userid: this.customer._id,
        };
        this.apiService.user_delete(dict).subscribe((response) => {
            this.spinnerService.hide();
            this.apiService.delete_point(dict).subscribe((response) => {
                console.log(response);
            });
            this.getCustomersListing();
            this.toastr.success(response.msg);
        });
    }
    block_unblock(block_status, id) {
        this.spinnerService.show();
        var data = {
            block_status: block_status,
            userid: id,
        };
        this.apiService
            .influencer_user_block_unblock(data)
            .subscribe((response) => {
            this.spinnerService.hide();
            this.getCustomersListing();
        });
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 54, vars: 6, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], ["routerLink", "/add-customer", 1, "btn", "btn-success", "pull-right"], [1, "row"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "col-12", "table-responsive"], ["id", "order-listing", 1, "table"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["id", "delete-pop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "round-tbl"], [1, "badge", "badge-success"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "icn-mns"], [1, "dropdown-toggle-wrapper"], [1, "inner"], [1, "icon-options-vertical"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown", "men-sml"], [1, "dropdown-item", "mt-2", 3, "click"], ["href", "javascript:void(0)", "data-toggle", "modal", "data-target", "#delete-pop", 1, "dropdown-item", "mt-2", 3, "click"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Users List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Add User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Customers List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Mood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UserListComponent_tr_36_Template, 25, 6, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "pagination-controls", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function UserListComponent_Template_pagination_controls_pageChange_38_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Are you sure wants to delete it ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_50_listener() { return ctx.deleteCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](37, 1, ctx.listing, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.p)));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ProfileComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field first name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field last name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " field email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field contact number is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field house/flat no. is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field city is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field country is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field Zip Code is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field New Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " New Password must contains atleast 5 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Field Confirm Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Confirm Password must contains atleast 5 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(apiService, fb, globalService, spinnerService, toastr) {
        this.apiService = apiService;
        this.fb = fb;
        this.globalService = globalService;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.profileData = JSON.parse(localStorage.getItem('profile'));
        this.Image = null;
        this.createForm();
        console.log(this.profileData);
    }
    ngOnInit() {
        //  this.getProfileDetails();
    }
    getProfileDetails() {
        // code
        this.apiService.getAdminDetails().subscribe((res) => {
            console.log(res);
            this.profileData = res.data;
        });
    }
    createForm() {
        console.log('PROFILE DATA', this.profileData);
        this.authForm = this.fb.group({
            firstName: [
                this.profileData.firstName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            lastName: [
                this.profileData.lastName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            email: [
                this.profileData.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                ]),
            ],
            contact: [
                this.profileData.contact,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]{4,17}'),
                ]),
            ],
            address: [
                this.profileData.address,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            city: [
                this.profileData.city,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z -']+"),
                ]),
            ],
            country: [
                this.profileData.country,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z -']+"),
                ]),
            ],
            zipCode: [
                this.profileData.zipCode,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]{6}'),
                ]),
            ],
            profile_image: [this.profileData.profile_image],
        });
        this.authForm1 = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            newPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
            ],
            confirmPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
            ],
        });
    }
    updatePassword() {
        var passwordData = {
            _id: localStorage.getItem('adminId'),
            password: this.authForm1.value.password,
            newPassword: this.authForm1.value.newPassword,
        };
        console.log(passwordData);
        if (this.authForm1.value.password === '') {
            alert('Password is required for updating new password');
        }
        else if (this.authForm1.value.newPassword === '') {
            alert('New Password Field is required');
        }
        else if (this.authForm1.value.confirmPassword === '') {
            alert('Confirm Password Field is required');
        }
        else if (this.authForm1.value.newPassword !== this.authForm1.value.confirmPassword) {
            alert('Your new password and confirm password does not match!');
        }
        else {
            this.spinnerService.show();
            this.apiService
                .admin_update_password(passwordData)
                .subscribe((response) => {
                console.log(response);
                if (response.status === false) {
                    alert(response.msg);
                }
                else if (response.status === true) {
                    this.profileData.password = this.authForm1.value.newPassword;
                    localStorage.setItem('profile', JSON.stringify(response.data[0]));
                    this.toastr.success('Your password updated successfully!');
                    this.spinnerService.hide();
                }
            });
        }
    }
    updateProfile() {
        this.spinnerService.show();
        if (this.Image === null) {
            var profileData = {
                id: this.profileData.id,
                address: this.authForm.value.address,
                city: this.authForm.value.city,
                contact: this.authForm.value.contact,
                country: this.authForm.value.country,
                email: this.authForm.value.email,
                firstName: this.authForm.value.firstName,
                lastName: this.authForm.value.lastName,
                profile_image: this.profileData.profile_image,
                password: this.profileData.password,
                zipCode: this.profileData.zipCode,
            };
            this.apiService.UpdateProfile(profileData).subscribe((response) => {
                localStorage.setItem('profile', JSON.stringify(response.data[0]));
                this.profileData = this.authForm.value;
                this.toastr.success('Profile updated successfully!');
                this.globalService.publishSomeData({
                    foo: { data: '', page: 'profile' },
                });
                this.spinnerService.hide();
            });
        }
        else if (this.Image !== null) {
            //upload image
            console.log('UPDATING IMAGE');
            this.uploadImage();
        }
    }
    onImageChanged(event) {
        let reader = new FileReader();
        this.Image = event.target.files[0];
        this.selectedFile = event.target.files[0];
        let extn = event.target.value.split('.')[1];
        if (extn === 'jpg' || extn === 'png' || extn === 'jpeg') {
            reader.onload = () => {
                this.Image = reader.result;
                console.log(this.Image);
                // this.uploadImage();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        else if (extn == 'pdf') {
            this.Image = event.target.files[0].name;
        }
    }
    uploadImage() {
        this.spinnerService.show();
        var payload = new FormData();
        payload.append('image', this.selectedFile, this.selectedFile.name);
        payload.append('userid', this.profileData.userid);
        console.log('IMAGE DATA', payload);
        this.apiService.UploadImages(payload).subscribe((response) => {
            console.log(response);
            this.authForm.value.profile_image = response.image;
            console.log(this.authForm.value);
            this.Image = null;
            this.profileData.profile_image =
                'http://52.15.150.221:3000/images/image/uploads/' + response.image;
            this.updateProfile();
            // setTimeout(() => {
            //   window.location.reload();
            // }, 1000);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 161, vars: 33, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-4"], [1, "card"], [1, "card-body", "p-0"], [1, "profile-body", "pt-0"], [1, "row"], [1, "col-12", "col-md-12"], ["id", "profile-log-switch ", 1, "tab-content", "tab-body"], ["id", "user-profile-info ", 1, "tab-pane", "fade", "show", "active"], [1, "table", "table-borderless", "w-100"], [1, "col-md-8", "grid-margin", "stretch-card"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-basic"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#whoweare", "role", "tab", "aria-controls", "whoweare", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#ourgoal", "role", "tab", "aria-controls", "ourgoal", "aria-selected", "false", 1, "nav-link"], [1, "tab-content", "tab-content-basic", "p-30-20"], ["id", "whoweare", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-12"], [1, "form-frms", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "formControlName", "firstName", "name", "firstName", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["type", "text", "formControlName", "lastName", "name", "lastName", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "email", "name", "email", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "contact", "name", "contact", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "address", "name", "address", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "city", "name", "city", 1, "form-control", 3, "ngClass"], ["formControlName", "country", "name", "country", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "India"], ["value", "Canada"], ["value", "USA"], ["type", "text", "formControlName", "zipCode", "name", "zipCode", 1, "form-control", 3, "ngClass"], [1, "sv-cncl-all"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "ourgoal", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [3, "formGroup", "ngSubmit"], [1, "col-md-12"], ["formControlName", "password", "type", "password", "placeholder", "", 1, "form-control"], ["formControlName", "newPassword", "type", "password", "placeholder", "", 1, "form-control"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "", 1, "form-control"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], [2, "color", "#f70101 !important"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Role :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Location :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Zip Code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Password Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_64_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ProfileComponent_span_71_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, ProfileComponent_span_77_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, ProfileComponent_span_84_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ProfileComponent_span_90_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, ProfileComponent_span_97_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, ProfileComponent_span_103_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, ProfileComponent_span_118_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, ProfileComponent_span_124_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_131_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, ProfileComponent_span_138_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, ProfileComponent_span_145_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, ProfileComponent_span_146_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](152, ProfileComponent_span_152_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, ProfileComponent_span_153_Template, 3, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "footer", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.contact, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx.profileData == null ? null : ctx.profileData.address, ", ", ctx.profileData == null ? null : ctx.profileData.city, ", ", ctx.profileData == null ? null : ctx.profileData.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.profileData == null ? null : ctx.profileData.zipCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.firstName.hasError("required") && ctx.authForm.controls.firstName.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.firstName.hasError("required") && ctx.authForm.controls.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.lastName.hasError("required") && ctx.authForm.controls.lastName.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.lastName.hasError("required") && ctx.authForm.controls.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.contact.hasError("required") && ctx.authForm.controls.contact.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.contact.hasError("required") && ctx.authForm.controls.contact.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.address.hasError("required") && ctx.authForm.controls.address.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.address.hasError("required") && ctx.authForm.controls.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.city.hasError("required") && ctx.authForm.controls.city.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.city.hasError("required") && ctx.authForm.controls.city.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.country.hasError("required") && ctx.authForm.controls.country.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.country.hasError("required") && ctx.authForm.controls.country.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.zipCode.hasError("required") && ctx.authForm.controls.zipCode.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.zipCode.hasError("required") && ctx.authForm.controls.zipCode.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm1.controls.password.hasError("required") && ctx.authForm1.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm1.controls.newPassword.hasError("required") && ctx.authForm1.controls.newPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm1.controls.newPassword.hasError("minlength") && ctx.authForm1.controls.newPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm1.controls.confirmPassword.hasError("required") && ctx.authForm1.controls.confirmPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm1.controls.confirmPassword.hasError("minlength") && ctx.authForm1.controls.confirmPassword.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm1.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "WKf4":
/*!******************************************************************!*\
  !*** ./src/app/transactions-list/transactions-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsListComponent", function() { return TransactionsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");








function TransactionsListComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transactions_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](5 * (ctx_r0.p - 1) + i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.given_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.recived_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.total_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transactions_r1.daily_limit);
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class TransactionsListComponent {
    constructor(apiService, toastr, router) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.router = router;
        this.p = 1;
        this.all_transactions = "";
    }
    ngOnInit() {
        this.all_levels();
    }
    all_levels() {
        this.apiService.all_points().subscribe((response) => {
            this.all_transactions = response.data;
            console.log(response);
            this.collection = this.all_transactions;
        });
        // get_all_TransactionsHistory(){
        //   this.apiService.get_all_TransactionsHistory().subscribe((response) => {
        //     this.all_transactions = response;
        //     this.collection = this.all_transactions;
        //   })
        // }
    }
    _deleteSingleQuestion(qid) {
        this.deletesinglequestion = qid;
        console.log(this.deletesinglequestion);
    }
}
TransactionsListComponent.ɵfac = function TransactionsListComponent_Factory(t) { return new (t || TransactionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TransactionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsListComponent, selectors: [["app-transactions-list"]], decls: 45, vars: 6, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "col-12", "table-responsive"], ["id", "order-listing", 1, "table"], [4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["id", "delete-pop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"]], template: function TransactionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Points List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Level Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Given Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Recived Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Daily Sent Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Daily Recive Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TransactionsListComponent_tr_36_Template, 16, 7, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TransactionsListComponent_Template_pagination_controls_pageChange_38_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 1, ctx.all_transactions, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/orders.component */ "5lyI");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transactions-list/transactions-list.component */ "WKf4");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./terms/terms.component */ "eIz4");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "s60O");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "aQbd");
/* harmony import */ var _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-privacy/edit-privacy.component */ "gFjy");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "5oS5");
/* harmony import */ var _edit_terms_edit_terms_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-terms/edit-terms.component */ "/oDq");
/* harmony import */ var _diffrent_levels_diffrent_levels_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./diffrent-levels/diffrent-levels.component */ "1C5u");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _base_api__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./base-api */ "t4oD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _base_api__WEBPACK_IMPORTED_MODULE_27__["ApiInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_16__["TransactionsListComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyComponent"],
        _terms_terms_component__WEBPACK_IMPORTED_MODULE_18__["TermsComponent"],
        _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_19__["CustomerDetailsComponent"],
        _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_20__["EditCustomerComponent"],
        _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_21__["EditPrivacyComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_23__["AddCustomerComponent"],
        _edit_terms_edit_terms_component__WEBPACK_IMPORTED_MODULE_24__["EditTermsComponent"],
        _diffrent_levels_diffrent_levels_component__WEBPACK_IMPORTED_MODULE_25__["DiffrentLevelsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_26__["CKEditorModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();


/***/ }),

/***/ "aQbd":
/*!**********************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.ts ***!
  \**********************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");










function EditCustomerComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field First name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditCustomerComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field Last Name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditCustomerComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field User name is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditCustomerComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Field email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditCustomerComponent {
    constructor(apiService, fb, spinnerService, toastr, _location, router, _activatedRoute) {
        this.apiService = apiService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this._location = _location;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.details = "";
        this.Image = null;
        this.submitted = false;
        this.cardid = "";
        this.name = "";
        this.email = "";
        this.userInterests = "";
        this.createForm();
        this.getDetails();
        //	  this.createCreditCardForm();
        this.createForm();
        //	  this.addNewCardForm();
        //this.details = JSON.parse(localStorage.getItem("item"));
        //	  this.userInterests = this.details.interests;
        //   if(this.details.paymentInfo.length>0){
        // 	  for(var i=0;i<this.details.paymentInfo.length;i++){
        // 			console.log(this.details.paymentInfo[i]);
        // 			var num = this.details.paymentInfo[i].number;
        // 			num = num.toString();
        // 		  	this.details.paymentInfo[i].number = num.replace(/.(?=.{4,}$)/g, 'X');
        // 			console.log(this.details.paymentInfo[i].number);
        // 			console.log(this.details);
        // 			console.log(JSON.parse(localStorage.getItem('item')).paymentInfo);
        // 			this.details.paymentInfo[i].card_number = JSON.parse(localStorage.getItem('item')).paymentInfo[i].number;
        // 			console.log(this.details);
        // 	  }
        //   }
        //	  this.getInterestsAreas();
    }
    ngOnInit() {
        // this.editCreditCardForm = this.fb.group({
        // 	cardName : ['',[Validators.required]],
        // 	number: ['', [Validators.required,<any>CreditCardValidator.validateCCNumber]],
        // 	expMonth: ['', [Validators.required ,<any>CreditCardValidator.validateExpDate]]
        // })
    }
    createForm() {
        this.parameterValue = this._activatedRoute.snapshot.params.id;
        const data = {
            uid: this.parameterValue,
        };
        console.log(data);
        this.apiService.getDetails(data).subscribe((res) => {
            console.log(res);
            this.details = res.data[0];
            console.log(this.details);
            console.log(this.details.firstName);
        });
        this.authForm = this.fb.group({
            firstName: [
                this.details.firstName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            lastName: [
                this.details.lastName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            username: [
                this.details.username,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ],
            email: [
                this.details.email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"),
                ]),
            ],
        });
    }
    // addNewCardForm(){
    // 	this.addNewForm = this.fb.group({
    // 		cardName : ['',[Validators.required]],
    // 		number: ['', [Validators.required,<any>CreditCardValidator.validateCCNumber]],
    // 		expMonth: ['', [Validators.required ,<any>CreditCardValidator.validateExpDate]]
    //     });
    // }
    // createCreditCardForm(){
    // 	this.creditCardForm = this.fb.group({
    // 	  cardname : ['',[Validators.required]],
    // 	  cardnumber: ['', [Validators.required]],
    // 	  expMonth: ['', [Validators.required]],
    // 	  expYear: ['', [Validators.required]],
    // 	  cvc: ['', [Validators.required]]
    // 	},{});
    // }
    // updateInterestAreas(){
    // 	var data = {
    // 		userid : this.details._id,
    // 		interests : this.interestArr
    // 	}
    // 	console.log(data);
    // 	this.apiService.updateUserInterests(data).subscribe((res)=>{
    // 	  console.log(res);
    // 	})
    // }
    updateCustomer() {
        this.spinnerService.show();
        let dict = this.authForm.value;
        dict.userid = this.details._id;
        console.log("FORM VALUES:", dict);
        this.apiService.update_user(dict).subscribe((response) => {
            this.spinnerService.hide();
            if (response.status === true) {
                console.log(response);
                this._location.back();
                //this.navCtrl.dismiss();
                //	this.updateInterestAreas();
                this.toastr.success(response.msg);
            }
            else {
                this.toastr.error(response.msg);
            }
        });
    }
    getDetails() {
        this.parameterValue = this._activatedRoute.snapshot.params.id;
        const data = {
            uid: this.parameterValue,
        };
        console.log(data);
        this.apiService.getDetails(data).subscribe((res) => {
            console.log(res);
            this.details = res.data[0];
            this.authForm.patchValue(this.details);
            console.log(this.details);
            console.log(this.details.firstName);
        });
    }
    backView() {
        this._location.back();
    }
}
EditCustomerComponent.ɵfac = function EditCustomerComponent_Factory(t) { return new (t || EditCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
EditCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditCustomerComponent, selectors: [["app-edit-customer"]], decls: 88, vars: 11, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-basic"], [1, "nav-item"], ["id", "home-tab1", "data-toggle", "tab", "href", "#whoweare1", "role", "tab", "aria-controls", "whoweare", "aria-selected", "true", 1, "nav-link", "active"], [1, "tab-content", "tab-content-basic"], ["id", "whoweare1", "role", "tabpanel", "aria-labelledby", "home-tab1", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "form-frms", 3, "formGroup", "ngSubmit"], [1, "profile-page", "new-on-tb", "m-t-20"], [1, "col-12"], [1, "card", "left-profl"], [1, "card-body", "p-0"], [1, "col-4"], [1, "card", "crd-s"], [1, "profile-header", "text-white", "d-none", "d-md-block"], [1, "d-flex", "justify-content-around"], [1, "profile-info", "d-flex", "justify-content-center", "align-items-md-center", "set-pos-s"], [1, "rounded-circle", "img-lg"], [1, "col-md-8"], [1, "profile-body", "pt-0"], [1, "col-md-12"], ["id", "profile-log-switch ", 1, "tab-content", "tab-body"], ["id", "user-profile-info ", 1, "tab-pane", "fade", "show", "active"], [1, "info-sma"], [1, "brdr-db"], [1, "col-md-6"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "placeholder", "First Name", "formControlName", "firstName", "name", "firstName", 1, "form-control", 3, "ngClass"], [4, "ngIf"], ["type", "text", "placeholder", "Last Name", "formControlName", "lastName", "name", "lastName", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "User Name", "formControlName", "username", "name", "username", 1, "form-control", 3, "ngClass"], ["type", "text", "placeholder", "Email", "formControlName", "email", "name", "email", 1, "form-control", 3, "ngClass"], [1, "sv-cncl-all", "pull-right", "m-t-0"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", 3, "click"], [1, "footer"], [1, "container-fluid", "clearfix"], [1, "text-muted", "d-block", "text-center", "text-sm-left", "d-sm-inline-block"], ["id", "remarks", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm", "modl-shad"], [1, "modal-content"], [1, "modal-body"], [2, "color", "#f70101 !important"]], template: function EditCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditCustomerComponent_Template_form_ngSubmit_21_listener() { return ctx.updateCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Basic Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, EditCustomerComponent_span_49_Template, 3, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, EditCustomerComponent_span_56_Template, 3, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, EditCustomerComponent_span_63_Template, 3, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, EditCustomerComponent_span_70_Template, 3, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCustomerComponent_Template_a_click_74_listener() { return ctx.backView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "footer", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", ctx.details.image ? ctx.details.image : "assets/img/user-dummy.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.firstName.hasError("required") && ctx.authForm.controls.firstName.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.firstName.hasError("required") && ctx.authForm.controls.firstName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.lastName.hasError("required") && ctx.authForm.controls.lastName.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.lastName.hasError("required") && ctx.authForm.controls.lastName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.username.hasError("required") && ctx.authForm.controls.username.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.username.hasError("required") && ctx.authForm.controls.username.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWN1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "dVwY":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eIz4":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");







class TermsComponent {
    constructor(apiService, spinnerService, toastr, router) {
        this.apiService = apiService;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.router = router;
        this.listing = [];
        this.p = [];
        this.getTerms();
    }
    ngOnInit() { }
    getTerms() {
        this.spinnerService.show();
        this.apiService.getTerms().subscribe((response) => {
            console.log(response);
            this.spinnerService.hide();
            this.listing = response.data[0];
            console.log(this.listing);
            this.pid = response.data._id;
        }, (err) => {
            this.toastr.error('Something went wrong.Please try later.');
        });
    }
    editDetails() {
        this.router.navigateByUrl('/edit-terms');
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 31, vars: 1, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [3, "click"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], [1, "row"], [1, "profile-page", "privcyTab", "new-on-tb"], [1, "col-12"], [1, "card", "left-profl"], [1, "p-0", "card-body"], [1, "info-sma"], [1, "lin-nam"], [1, "mbb", "headh3"], [1, "parad", 3, "innerHTML"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], ["id", "remarks", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terms & Conditions Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_Template_button_click_10_listener() { return ctx.editDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.listing == null ? null : ctx.listing.desc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function HeaderComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
class HeaderComponent {
    constructor(globalService, router) {
        this.globalService = globalService;
        this.router = router;
        this.profileData = { profile_image: null, firstName: '', lastName: '' };
        if (localStorage.getItem('IsLoggedIn') == 'true') {
            this.profileData = JSON.parse(localStorage.getItem('profile'));
        }
        console.log('here');
        console.log(localStorage.getItem('profile'));
        this.globalService.getObservable().subscribe((data) => {
            console.log('Data received', data);
            if (localStorage.getItem('IsLoggedIn') == 'true') {
                this.profileData = JSON.parse(localStorage.getItem('profile'));
            }
        });
    }
    ngOnInit() { }
    logout() {
        localStorage.removeItem('isLoggedIn');
        this.router.navigateByUrl('/');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 34, vars: 4, consts: [[1, "flex-row", "p-0", "navbar", "default-layout", "col-lg-12", "col-12", "fixed-top", "d-flex"], [1, "text-center", "navbar-brand-wrapper", "d-flex", "align-items-top", "justify-content-center"], ["href", "index.html", 1, "navbar-brand", "brand-logo", "flex-column"], ["src", "./assets/images/logo.png", "alt", "logo"], [1, "logoText"], ["href", "index.html", 1, "navbar-brand", "brand-logo-mini"], [1, "navbar-menu-wrapper", "d-flex", "align-items-center"], ["type", "button", "data-toggle", "minimize", "onclick", "myFunction()", 1, "navbar-toggler", "align-self-center"], [1, "icon-menu"], [1, "navbar-nav", "navbar-nav-right"], [1, "nav-item", "search-wrapper", "d-none", "d-md-block"], ["action", "#"], [1, "nav-item", "dropdown", "d-none", "d-xl-inline-block", "user-dropdown"], ["id", "UserDropdown", "href", "#", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-toggle-wrapper"], [1, "inner"], ["class", "img-xs rounded-circle", "src", "./assets/images/aduser.png", "alt", "logo", 4, "ngIf"], [1, "profile-text", "font-weight-bold"], [1, "profile-text", "small"], ["aria-labelledby", "UserDropdown", 1, "dropdown-menu", "dropdown-menu-right", "navbar-dropdown"], ["routerLink", "/profile", 1, "mt-2", "dropdown-item"], [1, "mt-2", "dropdown-item", 3, "click"], ["type", "button", "onclick", "myFunction_small()", 1, "navbar-toggler", "navbar-toggler-right", "d-lg-none", "align-self-center"], ["src", "./assets/images/aduser.png", "alt", "logo", 1, "img-xs", "rounded-circle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fun Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_img_19_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_img_20_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Profile Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_30_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profileData == null ? null : ctx.profileData.profile_image) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profileData == null ? null : ctx.profileData.profile_image) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileData == null ? null : ctx.profileData.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileData == null ? null : ctx.profileData.lastName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".logoText[_ngcontent-%COMP%] {\n    font-size: 16px;\n    position: relative;\n    top: -11px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb1RleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTFweDtcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "gFjy":
/*!********************************************************!*\
  !*** ./src/app/edit-privacy/edit-privacy.component.ts ***!
  \********************************************************/
/*! exports provided: EditPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPrivacyComponent", function() { return EditPrivacyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");












function EditPrivacyComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " *Field Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class EditPrivacyComponent {
    constructor(apiService, fb, spinnerService, toastr, _location, router) {
        this.apiService = apiService;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this._location = _location;
        this.router = router;
        this.Image = null;
        this.paymentInfo = '';
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        // this.getPrivacy();
    }
    ngOnInit() {
        this.authForm = this.fb.group({
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
        });
        this.createForm();
    }
    /*getPrivacy() {
      this.apiService.getPrivacy().subscribe((response) => {
        this.details = response.data[0];
      });
    }*/
    createForm() {
        this.apiService.getPrivacy().subscribe((response) => {
            this.details = response.data[0];
            this.authForm = this.fb.group({
                userid: [this.details._id],
                desc: [this.details.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            });
        });
    }
    updatePrivacy() {
        //	if(this.Image == null){
        this.spinnerService.show();
        let dict = this.authForm.value;
        console.log('PRIVACY POLICY DATA', dict);
        dict.userid = this.details._id;
        dict.desc = dict.desc;
        this.apiService.updatePrivacy(dict).subscribe((response) => {
            this.spinnerService.hide();
            if (response.status == true) {
                this._location.back();
                this.toastr.success('Privacy Policy has been updated successfully!');
            }
            else {
                this.toastr.error('Privacy Policy Not Updatd!');
            }
        });
    }
    backView() {
        this._location.back();
    }
}
EditPrivacyComponent.ɵfac = function EditPrivacyComponent_Factory(t) { return new (t || EditPrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxLoaderSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
EditPrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditPrivacyComponent, selectors: [["app-edit-privacy"]], decls: 171, vars: 5, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "privcyTab", "stretch-card"], [1, "card"], [1, "card-body"], [1, "info-sma"], [1, "brdr-db"], [1, "row"], [1, "col-md-12"], [1, "form-frms", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["placeholder", "", "formControlName", "desc", "name", "desc", 1, "form-control", 3, "editor", "ngClass"], [4, "ngIf"], [1, "sv-cncl-all", "pull-right", "m-t-0"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-lg", 3, "click"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], ["id", "add-address", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "exampleInputEmail1"], ["type", "name", "placeholder", "", "value", "", 1, "form-control"], [1, "col-md-6"], [1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["id", "edit-address", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["type", "name", "placeholder", "", "value", "123 Town Street", 1, "form-control"], ["type", "name", "placeholder", "", "value", "Alaska", 1, "form-control"], ["type", "name", "placeholder", "", "value", "12433", 1, "form-control"], ["selected", ""], ["id", "delete-pop", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], ["type", "button", 1, "btn", "btn-primary"], [2, "color", "#f70101 !important"]], template: function EditPrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Privacy Policy Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Privacy Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditPrivacyComponent_Template_form_ngSubmit_19_listener() { return ctx.updatePrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ckeditor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EditPrivacyComponent_span_24_Template, 3, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPrivacyComponent_Template_button_click_26_listener() { return ctx.updatePrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPrivacyComponent_Template_a_click_28_listener() { return ctx.updatePrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Add New Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Edit Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Are you sure wants to delete it ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.Editor)("ngClass", ctx.authForm.controls.desc.hasError("required") && ctx.authForm.controls.desc.touched ? "has-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authForm.controls.desc.hasError("required") && ctx.authForm.controls.desc.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"]], styles: [".privcyTab[_ngcontent-%COMP%]   .left-profl[_ngcontent-%COMP%]\n{\n  margin-bottom: 0;\n}\n\n.privcyTab.new-on-tb[_ngcontent-%COMP%]   .card.left-profl[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  padding: 0;\n  box-shadow: none;\n  border: none;\n}\n\n.privcyTab[_ngcontent-%COMP%]   .info-sma[_ngcontent-%COMP%]\n{\n  padding: 0;\n}\n\n.privcyTab[_ngcontent-%COMP%]   ul.lin-nam[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]\n{\n  color: #000;\n}\n\n.privcyTab[_ngcontent-%COMP%]   ul.lin-nam[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]\n{\n  width: 100%;\n  color: #777;\n}\n\n.mbb[_ngcontent-%COMP%]\n{\n  margin-bottom: 6px;\n}\n\n.headh3[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dbdaf6;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n  margin-bottom: 13px;\n  position: relative;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 25px;\n  color: #000;\n}\n\n.headh3[_ngcontent-%COMP%]:after {\n  width: 60px;\n  height: 4px;\n  background: linear-gradient(to right,#25DEEC,#25DEEC);\n  content: '';\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n}\n\n.parad[_ngcontent-%COMP%] {\n  line-height: 30px;\n  color: #777;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJpdmFjeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxxREFBcUQ7RUFDckQsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztBQUNUOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImVkaXQtcHJpdmFjeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaXZjeVRhYiAubGVmdC1wcm9mbFxue1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJpdmN5VGFiLm5ldy1vbi10YiAuY2FyZC5sZWZ0LXByb2ZsXG57XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcml2Y3lUYWIgLmluZm8tc21hXG57XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcml2Y3lUYWIgdWwubGluLW5hbSBzdHJvbmdcbntcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wcml2Y3lUYWIgdWwubGluLW5hbSBsaVxue1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5tYmJcbntcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaGVhZGgzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmRhZjY7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGgzOmFmdGVyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzI1REVFQywjMjVERUVDKTtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xufVxuXG4ucGFyYWQge1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "s60O":
/*!****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CustomerDetailsComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friendslist_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", friendslist_r2.image ? friendslist_r2.image : "assets/img/user-dummy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", friendslist_r2.username, " ");
} }
function CustomerDetailsComponent_div_88_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 61);
} }
function CustomerDetailsComponent_div_88_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 62);
} }
function CustomerDetailsComponent_div_88_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 63);
} }
function CustomerDetailsComponent_div_88_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 64);
} }
function CustomerDetailsComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomerDetailsComponent_div_88_img_3_Template, 1, 0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerDetailsComponent_div_88_img_4_Template, 1, 0, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomerDetailsComponent_div_88_img_5_Template, 1, 0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomerDetailsComponent_div_88_img_6_Template, 1, 0, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mycards_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mycards_r3.cardtype == "jcb" || mycards_r3.cardtype == "JCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mycards_r3.cardtype == "Visa" || mycards_r3.cardtype == "visa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mycards_r3.cardtype == "Discover" || mycards_r3.cardtype == "discover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mycards_r3.cardtype != "Visa" && mycards_r3.cardtype != "Discover" && mycards_r3.cardtype != "visa" && mycards_r3.cardtype != "discover" && mycards_r3.cardtype != "JCB" && mycards_r3.cardtype != "jcb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mycards_r3.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mycards_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Expiry Date: ", mycards_r3.expMonth + "/" + mycards_r3.expYear, " ");
} }
class CustomerDetailsComponent {
    constructor(apiService, router, _activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.userInterests = "";
        this.frdata = '';
        this.getDetails();
        this.show_friends();
        //  this.userInterests = this.details.interests;
        //  console.log(this.details.paymentInfo);
        //  if (this.details.paymentInfo.length > 0) {
        //    for (var i = 0; i < this.details.paymentInfo.length; i++) {
        //      console.log(this.details.paymentInfo[i]);
        //      var num = this.details.paymentInfo[i].number;
        //      num = num.toString();
        //      this.details.paymentInfo[i].number = num.replace(/.(?=.{4,}$)/g, "X");
        //      console.log(this.details.paymentInfo[i].number);
        //      console.log(this.details);
        //    }
    }
    //  this.getInterestsAreas();
    // }
    // allInterests: any = "";
    // interestArr: any = [];
    // getInterestsAreas() {
    //   this.apiService.getAllInterests().subscribe((data) => {
    //     this.allInterests = data;
    //     if (this.userInterests.length > 0) {
    //       for (var i = 0; i < this.userInterests.length; i++) {
    //         if (this.userInterests[i].checked == true) {
    //           // console.log(this.userInterests[i]._id);
    //           for (var j = 0; j < this.allInterests.length; j++) {
    //             if (this.allInterests[j]._id == this.userInterests[i]._id) {
    //               this.allInterests[j].checked = true;
    //               this.interestArr.push({
    //                 interest: this.allInterests[j].interest,
    //                 _id: this.allInterests[j]._id,
    //                 checked: true,
    //               });
    //               //   console.log(this.allInterests);
    //               break;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   });
    // }
    ngOnInit() {
        this.parameterValue = this._activatedRoute.snapshot.params.id;
    }
    getDetails() {
        this.parameterValue = this._activatedRoute.snapshot.params.id;
        const data = {
            uid: this.parameterValue,
        };
        console.log(data);
        this.apiService.getDetails(data).subscribe((res) => {
            console.log(res);
            this.details = res.data[0];
            console.log(this.details);
            console.log(this.details.firstName);
        });
    }
    show_friends() {
        const data = {
            id: this.parameterValue,
        };
        console.log('Id For Fetching Friends', data);
        // this.helperService.presentLoading();
        this.apiService.show_friends(data).subscribe((res) => {
            // this.helperService.stopLoading();
            this.frdata = res.data;
            this.frcount = res.data.length;
            console.log('show----friends');
            console.log(this.frdata);
        });
    }
}
CustomerDetailsComponent.ɵfac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CustomerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerDetailsComponent, selectors: [["app-customer-details"]], decls: 104, vars: 13, consts: [[1, "container-scroller"], [1, "container-fluid", "page-body-wrapper"], [1, "main-panel"], [1, "content-wrapper"], [1, "mb-4", "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "page-title"], [1, "row", "profile-page"], [1, "col-md-12", "grid-margin", "stretch-card"], [1, "card"], [1, "card-body"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-basic"], [1, "nav-item"], ["id", "home-tab1", "data-toggle", "tab", "href", "#whoweare1", "role", "tab", "aria-controls", "whoweare", "aria-selected", "true", 1, "nav-link", "active"], [1, "tab-content", "tab-content-basic"], ["id", "whoweare1", "role", "tabpanel", "aria-labelledby", "home-tab1", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "profile-page", "new-on-tb", "m-t-20"], [1, "col-12"], [1, "card", "left-profl"], [1, "p-0", "card-body"], [1, "col-md-4"], [1, "text-white", "profile-header", "d-none", "d-md-block"], [1, "d-flex", "justify-content-around"], [1, "profile-info", "d-flex", "justify-content-center", "align-items-md-center"], [1, "rounded-circle", "img-lg", "m-t-30"], [1, "col-md-8"], [1, "pt-0", "profile-body"], [1, "col-md-12"], ["id", "profile-log-switch ", 1, "tab-content", "tab-body"], ["id", "user-profile-info ", 1, "tab-pane", "fade", "show", "active"], [1, "info-sma"], [1, "brdr-db"], [1, "lin-nam"], ["class", "d-flex justify-content-start align-items-center", 4, "ngFor", "ngForOf"], ["id", "history1", "role", "tabpanel", "aria-labelledby", "contact-tab1", 1, "tab-pane", "fade"], [1, "row", "m-b-20"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "clearfix", "container-fluid"], [1, "text-center", "text-muted", "d-block", "text-sm-left", "d-sm-inline-block"], ["id", "remarks", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm", "modl-shad"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer", "pull-left"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "img_cont_msg"], ["alt", "", 1, "fiximg", "rounded-circle", "user_img_msg"], [1, "msg_cotainer"], [1, "col-4"], [1, "card-dtls"], [1, "rty-cv"], ["src", "assets/images/jcb.jpeg", "class", "card-logi", 4, "ngIf"], ["src", "assets/images/visa.png", "class", "card-logi", 4, "ngIf"], ["src", "assets/images/discover.jpg", "class", "card-logi", 4, "ngIf"], ["src", "assets/images/card.png", "class", "card-logi", 4, "ngIf"], [1, "card-numb"], [1, "hold-nm"], [1, "exprt"], ["src", "assets/images/jcb.jpeg", 1, "card-logi"], ["src", "assets/images/visa.png", 1, "card-logi"], ["src", "assets/images/discover.jpg", 1, "card-logi"], ["src", "assets/images/card.png", 1, "card-logi"]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Basic Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "First Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Last Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "User Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Email Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "DOB :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mood :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Level :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Friends Allowed :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Friends :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sent Requests :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Friends List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CustomerDetailsComponent_div_85_Template, 5, 2, "div", 34);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CustomerDetailsComponent_div_88_Template, 13, 7, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "footer", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Copyright \u00A9 2021. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.details.image ? ctx.details.image : "assets/images/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.dob, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.mood, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.level, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.friends_allowed, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.friends_count, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.request_count, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.frdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details == null ? null : ctx.details.paymentInfo);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".fiximg[_ngcontent-%COMP%]\n{\n  width: 55px;\n  height: 55px;\n  object-fit: cover;\n  margin-right: 11px;\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4aW1nXG57XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi5tc2dfY290YWluZXIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "t4oD":
/*!*****************************!*\
  !*** ./src/app/base-api.ts ***!
  \*****************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ApiInterceptor {
    intercept(req, next) {
        const baseUrl = "http://52.15.150.221:3000/";
        // send the cloned, request to the next handler.
        const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
        return next.handle(apiReq);
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(); };
ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "5lyI");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transactions-list/transactions-list.component */ "WKf4");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./privacy/privacy.component */ "TsVY");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms/terms.component */ "eIz4");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "s60O");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "aQbd");
/* harmony import */ var _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-privacy/edit-privacy.component */ "gFjy");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-customer/add-customer.component */ "5oS5");
/* harmony import */ var _edit_terms_edit_terms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-terms/edit-terms.component */ "/oDq");
/* harmony import */ var _diffrent_levels_diffrent_levels_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diffrent-levels/diffrent-levels.component */ "1C5u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"] },
    { path: 'diff-levels', component: _diffrent_levels_diffrent_levels_component__WEBPACK_IMPORTED_MODULE_15__["DiffrentLevelsComponent"] },
    { path: 'user', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: 'customer-details/:id', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_9__["CustomerDetailsComponent"] },
    { path: 'edit-customer/:id', component: _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__["EditCustomerComponent"] },
    { path: 'add-customer', component: _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__["AddCustomerComponent"] },
    { path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_8__["TermsComponent"] },
    { path: 'all-levels', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"] },
    { path: 'edit-privacy', component: _edit_privacy_edit_privacy_component__WEBPACK_IMPORTED_MODULE_11__["EditPrivacyComponent"] },
    { path: 'edit-terms', component: _edit_terms_edit_terms_component__WEBPACK_IMPORTED_MODULE_14__["EditTermsComponent"] },
    { path: 'points', component: _transactions_list_transactions_list_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsListComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loader-spinner */ "fbKr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Username is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Password is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Password must contains at least 5 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, apiService, router, toastr, spinnerService) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.loading = false;
        this.createForm();
        if (localStorage.getItem("isLoggedIn") != null &&
            localStorage.getItem("isLoggedIn") != undefined &&
            localStorage.getItem("isLoggedIn") != "") {
            this.router.navigateByUrl("/dashboard");
        }
        else {
        }
    }
    ngOnInit() { }
    createForm() {
        this.authForm = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
            ],
        });
    }
    login() {
        this.spinnerService.show();
        console.log(this.authForm.value);
        var loginData = {
            email: this.authForm.value.email,
            password: this.authForm.value.password,
        };
        console.log('credentials', loginData);
        this.apiService.adminLogin(loginData).subscribe((response) => {
            console.log(response);
            // this.loading = false;
            this.spinnerService.hide();
            if (response.status === true) {
                localStorage.setItem("adminId", response.data._id);
                localStorage.setItem("IsLoggedIn", "true");
                localStorage.setItem("profile", JSON.stringify(response.data));
                this.toastr.success(response.msg);
                this.router.navigateByUrl("/dashboard");
            }
            // if (
            //   this.authForm.value.email == "admin" &&
            //   this.authForm.value.password == "admin"
            // ) {
            //   this.spinnerService.hide();
            //   localStorage.setItem("isLoggedIn", "true");
            //   this.router.navigateByUrl("/dashboard");
            //   this.toastr.success("Logged in successfully!");
            // } 
            else {
                this.spinnerService.hide();
                this.toastr.error(response.msg);
            }
            // } else {
            //   this.toastr.error("Wrong credentials!");
            //   }
            // });
        });
    }
    ;
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_loader_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxLoaderSpinnerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 5, consts: [[1, "login-bg"], [1, "container-scroller"], [1, "container-fluid", "page-body-wrapper", "full-page-wrapper"], [1, "content-wrapper", "d-flex", "align-items-center", "auth", "auth-bg-1", "theme-one"], [1, "row", "w-100", "mx-auto"], [1, "col-lg-4", "mx-auto"], [1, "auto-form-wrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "label"], [1, "input-group"], ["type", "text", "placeholder", "Username", "formControlName", "email", "autocomplete", "off", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "icon-user"], [4, "ngIf"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "icon-key"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", "btn-block", 3, "disabled"], [1, "form-group", "d-flex", "justify-content-between"], [1, "footer-text", "text-center", "m-t-10"], [2, "color", "#f70101 !important"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginComponent_span_26_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Copyright \u00A9 2021. All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.email.hasError("required") && ctx.authForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.password.hasError("required") && ctx.authForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authForm.controls.password.hasError("minlength") && ctx.authForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".login-bg[_ngcontent-%COMP%] {\n  \n  background-size: cover;\n  position: relative;\n  z-index: 0;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  background: #269bff;\n}\n.login-bg[_ngcontent-%COMP%]:after {\n  \n  \n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n.new-rem[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.new-rem[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBZ0Q7RUFDaEQsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZyB7XG4gIC8qIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnLnBuZyk7Ki9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICMyNjliZmY7XG59XG4ubG9naW4tYmc6YWZ0ZXIge1xuICAvKmNvbnRlbnQ6IFwiXCI7Ki9cbiAgLypiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTgpOyovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAtMTtcbn1cbi5uZXctcmVtIC5jaGVja21hcmsge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ubmV3LXJlbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


// import { map } from 'rxjs/operators';
// import "rxjs/Rx";
class ApiService {
    constructor(http) {
        this.http = http;
    }
    loggedIn(data) {
        return this.http.post('admin_login', data);
    }
    /*************ALL USERS LISTING*********** */
    all_users() {
        return this.http.get('api/v1/auth/all_users');
    }
    /*************PRIVACY LISTING*********** */
    privacy_listing() {
        return this.http.get('api/v1/auth/privacy_listing');
    }
    /*************TERMS LISTING*********** */
    terms_listing() {
        return this.http.get('api/v1/auth/terms_listing');
    }
    /**********APPROVE/Disapprove Influencer ACCOUNT******* */
    approve_disapprove(data) {
        return this.http.post('api/v1/admin/pimm/influencer_account_approval_status', data);
    }
    /*********BLOCK/UNBLOCK USER***************** */
    influencer_user_block_unblock(data) {
        return this.http.post('api/v1/admin/pimm/influencer_user_block_unblock', data);
    }
    /**********DELETE USER******* */
    user_delete(data) {
        return this.http.post('api/v1/auth/user_delete', data);
    }
    /**********update_customer_influencer***** */
    update_customer_influencer(data) {
        return this.http.post('api/v1/admin/pimm/update_customer_influencer', data);
    }
    /***********UPDATE INFLUENCER IMAGE********** */
    UpdateInfluencerImage(data) {
        return this.http.post('api/v1/admin/pimm/UpdateInfluencerImage', data);
    }
    /*********UPDATE PAYMENT DETAILS*********** */
    updatePaymentDetails(data) {
        return this.http.post('api/v1/user/pimm/update_payment_Details', data);
    }
    /*********EDIT PAYMENT DETAILS*********** */
    editPaymentDetails(data) {
        return this.http.post('api/v1/user/pimm/edit_payment_Details', data);
    }
    /*********DELETE PAYMENT DETAILS*********** */
    delete_payment_Details(data) {
        return this.http.post('api/v1/user/pimm/delete_payment_Details', data);
    }
    /***********ADD CARD********** */
    create_card(data) {
        return this.http.post('/api/v1/user/pimm/update_payment_Details', data);
    }
    /***********ADD CARD********** */
    all_points() {
        return this.http.get('api/v1/auth/all_points');
    }
    /*********SHOW FRIENDS ************/
    show_friends(data) {
        return this.http.post('api/v1/auth/show_friends', data);
    }
    /***********ADD CARD********** */
    all_levels() {
        return this.http.get('api/v1/auth/all_levels');
    }
    add_admin() {
        return this.http.get('api/v1/auth/add_admin');
    }
    delete_level(data) {
        return this.http.post('api/v1/auth/delete_level', data);
    }
    delete_points(data) {
        return this.http.post('api/v1/auth/delete_points', data);
    }
    delete_point(data) {
        return this.http.post('api/v1/auth/delete_points', data);
    }
    getAllInterests() {
        return this.http.get('api/v1/user/pimm/get_all_Interests');
    }
    add_user(data) {
        console.log(data);
        return this.http.post('api/v1/auth/add_user', data);
    }
    add_points(data) {
        console.log(data);
        return this.http.post('api/v1/auth/add_points', data);
    }
    diff_levels(data) {
        console.log(data);
        return this.http.post('api/v1/auth/diff_levels', data);
    }
    updateUserInterests(data) {
        return this.http.post('api/v1/user/pimm/update_Interests', data);
    }
    update_user(data) {
        return this.http.post('api/v1/auth/update_user', data);
    }
    deleteCustomer(data) {
        return this.http.post('admin/delete_customer', data);
    }
    add_vendor(data) {
        return this.http.post('admin/add_vendor', data);
    }
    vendor_listing() {
        return this.http.get('admin/vendor_listing');
    }
    update_vendor(data) {
        return this.http.post('admin/update_vendor', data);
    }
    deleteVendor(data) {
        return this.http.post('admin/delete_vendor', data);
    }
    is_email_exist(data) {
        return this.http.post('admin/is_email_exist', data);
    }
    UploadImage(image) {
        const formData = new FormData();
        formData.append('image', image);
        return this.http.post('api/v1/auth/UploadImage', formData);
    }
    // UploadImages(data: { image: string; userid: any; }): Observable<any>{
    //   return this.http.post('api/v1/auth/UploadImages', data)
    // }
    UploadImages(data) {
        return this.http.post('api/v1/auth/UploadImages', data);
    }
    adminLogin(data) {
        return this.http.post('api/v1/auth/adminLogin', data);
    }
    admin_update_password(data) {
        return this.http.post('api/v1/auth/admin_update_password', data);
    }
    UpdateProfile(data) {
        return this.http.post('api/v1/auth/UpdateProfile', data);
    }
    getDetails(data) {
        return this.http.post('api/v1/auth/getDetails', data);
    }
    getPrivacy() {
        return this.http.get('api/v1/auth/getPrivacy');
    }
    getTerms() {
        return this.http.get('api/v1/auth/getTerms');
    }
    updatePrivacy(data) {
        return this.http.post('api/v1/auth/updatePrivacy', data);
    }
    updateTerms(data) {
        return this.http.post('api/v1/auth/updateTerms', data);
    }
    getAdminDetails() {
        return this.http.get('api/v1/auth/adminDetails');
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map