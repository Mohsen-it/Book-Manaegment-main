export interface IBook{
    id:number;
    name:string;
    bookPrice:number;
    bookSize?:number;
    bookDescription:string;
    bookDetail:string;
    bookImage:string;
}
export class Book{
    id?= 0;
    name= '';
    bookPrice?= 0;
    bookSize?=0 ;
    bookDescription='';
    bookDetail= '';
    bookImage='' ;
}