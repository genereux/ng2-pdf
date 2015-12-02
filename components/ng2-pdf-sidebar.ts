import { Component, NgFor, View, bootstrap } from "angular2/angular2";


@Component({
  selector: 'ng2-pdf-sidebar'
})


@View({
  directives: [NgFor],
  templateUrl: './components/ng2-pdf-sidebar.html'
})

export class Ng2PdfSideBar {
	constructor(){}
	
}