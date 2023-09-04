import axios  from "axios";

export interface IPosts  {
userId: number;
id:number;
title:string;
body:string;
}
export const getPosts = async () => (await axios.get<IPosts[]>("https://jsonplaseholder.typicode.com/posts")).data