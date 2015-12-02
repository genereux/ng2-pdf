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
var ng2_pdf_sidebar_1 = require("./ng2-pdf-sidebar");
var ng2_pdf_main_1 = require("./ng2-pdf-main");
var Ng2Pdf = (function () {
    function Ng2Pdf() {
    }
    Ng2Pdf = __decorate([
        angular2_1.Component({
            selector: 'ng2-pdf'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor, ng2_pdf_sidebar_1.Ng2PdfSideBar, ng2_pdf_main_1.Ng2PdfMain],
            templateUrl: './components/ng2-pdf.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Pdf);
    return Ng2Pdf;
})();
exports.Ng2Pdf = Ng2Pdf;
