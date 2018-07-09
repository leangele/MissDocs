import { Component, OnInit } from '@angular/core';
import{Document}from '../../models/document';
import { TypeDocument} from '../../models/type-document';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  document:Document;

  constructor() { 
   let typeDoc= new TypeDocument(1,
    'cedulas');
    let creationDate:Date;

    this.document=new Document(
      1,
      'cedula colombiana',
      typeDoc,
      'documento principal',
      '',
      '1017126482',
      true,
      true,
      creationDate,
      creationDate
    );
    console.log(this.document);
  }

  ngOnInit() {
  }

}
