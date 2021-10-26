import { Component,ViewChild, TemplateRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("modalRegistoMain", {static: false}) modalRegistoMain: TemplateRef<any>;

  closeResult = '';

  constructor(
    private modalService: NgbModal
  ) {}

}
