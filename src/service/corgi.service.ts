import { addCorgiInput } from "../schema/corgi.schema";

export const corgiList = [
  {
    corgiId: "001",
    name: "John",
    age: 30,
  },
  {
    corgiId: "002",
    name: "Jane",
    age: 25,
  },
];

export async function addCorgi(corgiInput: addCorgiInput["body"]) {
  corgiList.push(corgiInput);
}
export async function getCorgiById(corgiId: string) {
  const corgi = corgiList.find((c) => c.corgiId === corgiId);
  return corgi;
}
export async function getCorgiList() {
  return corgiList;
}
