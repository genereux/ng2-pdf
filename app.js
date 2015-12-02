/// <reference path="./node_modules/angular2/angular2.d.ts" />
/// <reference path="./typings/pdf/pdf.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ng2_pdf_1 = require("./components/ng2-pdf");
var DemoPdfViewer = (function () {
    function DemoPdfViewer() {
    }
    DemoPdfViewer = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ng2_pdf_1.Ng2Pdf],
            template: "<ng2-pdf>"
        }), 
        __metadata('design:paramtypes', [])
    ], DemoPdfViewer);
    return DemoPdfViewer;
})();
angular2_1.bootstrap(DemoPdfViewer);
