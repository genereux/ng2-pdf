import { Component, NgFor, View, bootstrap } from "angular2/angular2";
import * as PDFJS from 'PDFJS';

@Component({
	selector: 'ng2-pdf-main'
})


@View({
	directives: [NgFor],
	templateUrl: './components/ng2-pdf-main.html'
})

export class Ng2PdfMain {
	constructor() {
		var page = new PDFPageView();
	}

}

export class PDFPageView {
	private pageNum: number;
	private pdfDoc: PDFDocumentProxy

	constructor() {
		this.load();
	}


	public load (){
		var target = this;
		PDFJS.getDocument('helloworld.pdf').then(function(pdf) {
			// Using promise to fetch the page
			target.pdfDoc = pdf;
			target.pageNum = 1;
			target.renderPage(target.pageNum);
		});
	}
	
	public renderPage(pageNum: number) {
		this.pdfDoc.getPage(pageNum).then(function(page) {
			var scale = 1.5;
			var viewport = page.getViewport(scale);
	
			//
			// Prepare canvas using PDF page dimensions
			//
			var canvas = document.getElementById('the-canvas') as HTMLCanvasElement;
			var context = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;
	
			//
			// Render PDF page into canvas context
			//
			var renderContext = {
				canvasContext: context,
				viewport: viewport
			};
			page.render(renderContext);
		});
	}

	goNext() {
		if (this.pdfDoc && this.pageNum < this.pdfDoc.numPages) {
			++this.pageNum;
			this.renderPage(this.pageNum);
		}
	}
}
