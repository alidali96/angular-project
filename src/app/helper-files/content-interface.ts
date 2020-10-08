export interface Content {
    /*
    id as a number
    author as a string
    imgUrl as an optional string
    type as an optional string
    title as a string
    body as a string
    tags as an optional array of strings
    */
   id: number;
   author: string;
   imgUrl?: string;
   type?: string;
   title: string;
   body: string;
   tags?: string[];
}