import { TypeDocument } from "./type-document";


export class Document {
    public id:number;
    public name: string;
    public type: TypeDocument;
    public description: string;
    public imagen: string;
    public codeNumber: string;
    public isActive: boolean;
    public isLossed: boolean;
    public creationDate: Date;
    public updatedDated: Date;


    constructor(id:number,name: string, type: TypeDocument, description: string, imagen: string,
        codeNumber: string, isActive: boolean, isLossed: boolean, creationDate: Date,
        updatedDated: Date) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.imagen = imagen;
        this.codeNumber = codeNumber;
        this.isActive = isActive;
        this.isLossed = isLossed;
        this.creationDate = creationDate;
        this.updatedDated = updatedDated;
        this.id=id;
    }

    createDocument(document:Document){
        // here i need add call to de service to createDocument
        return document;
    }
    // getDocumentById
}
