import { Component, OnInit } from '@angular/core';
import { TypeDocument } from '../../models/type-document';
import { Document } from '../../models/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: Document[]=[
    new Document(
      1,
      'cedula colombiana',
      new TypeDocument(1,
        'cedulas'),
      'documento principal',
      '',
      '1017126482',
      true,
      true,
      new Date,
      new Date
    ),
    new Document(
      1,
      'visa  colombiana',
      new TypeDocument(2,
        'visa'),
      'documento principal',
      '',
      '1017126483',
      true,
      true,
      new Date,
      new Date
    )
  ];

  constructor() {
    console.log(this.documents);
  }

  ngOnInit() {
  }

}
