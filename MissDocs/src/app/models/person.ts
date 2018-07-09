import { Document } from "./document";

export class Person {
    public name: string;
    public email: string;
    public phone: string;
    public alternateMail: string;
    public document: Document[];

    constructor(name: string, email: string, phone: string, alternateMail: string, document: Document[]) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.alternateMail = alternateMail;
        this.document=document; 
    }
}

