/// <reference path="./node_modules/angular2/angular2.d.ts" />
/// <reference path="./typings/pdf/pdf.d.ts" />

import { Component, NgFor, View, bootstrap } from "angular2/angular2";
import {Ng2Pdf} from "./components/ng2-pdf";

@Component({
  selector: 'my-app'
})


@View({
  directives: [NgFor,Ng2Pdf],
  template: `<ng2-pdf>`
})
class DemoPdfViewer {
  constructor() {
  }
}

bootstrap(DemoPdfViewer);
