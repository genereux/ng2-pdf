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
var PDFJS = require('PDFJS');
var Ng2PdfMain = (function () {
    function Ng2PdfMain() {
        var page = new PDFPageView();
    }
    Ng2PdfMain = __decorate([
        angular2_1.Component({
            selector: 'ng2-pdf-main'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            templateUrl: './components/ng2-pdf-main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2PdfMain);
    return Ng2PdfMain;
})();
exports.Ng2PdfMain = Ng2PdfMain;
var PDFPageView = (function () {
    function PDFPageView() {
        this.load();
    }
    PDFPageView.prototype.load = function () {
        var target = this;
        PDFJS.getDocument('helloworld.pdf').then(function (pdf) {
            target.pdfDoc = pdf;
            target.pageNum = 1;
            target.renderPage(target.pageNum);
        });
    };
    PDFPageView.prototype.renderPage = function (pageNum) {
        this.pdfDoc.getPage(pageNum).then(function (page) {
            var scale = 1.5;
            var viewport = page.getViewport(scale);
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    };
    PDFPageView.prototype.goNext = function () {
        if (this.pdfDoc && this.pageNum < this.pdfDoc.numPages) {
            ++this.pageNum;
            this.renderPage(this.pageNum);
        }
    };
    return PDFPageView;
})();
exports.PDFPageView = PDFPageView;
