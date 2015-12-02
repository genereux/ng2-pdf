import { Component, NgFor, View, bootstrap } from "angular2/angular2";
import {Ng2PdfSideBar } from "./ng2-pdf-sidebar";
import {Ng2PdfMain} from "./ng2-pdf-main";

@Component({
  selector: 'ng2-pdf'
})


@View({
  directives: [NgFor, Ng2PdfSideBar, Ng2PdfMain],
  templateUrl: './components/ng2-pdf.html'
})
export class Ng2Pdf {
  
}