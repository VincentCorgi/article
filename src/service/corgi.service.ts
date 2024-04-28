export const corgiList = [
  {
    corgiId: 1,
    name: "John",
    age: 30,
  },
  {
    corgiId: 2,
    name: "Jane",
    age: 25,
  },
];

/**
 * @param
 */
export async function addCorgi(corgiInput) {
  // 找到最後一筆 corgi 的 corgiId
  const lastCorgiId = corgiList[corgiList.length - 1].corgiId;
  // 新的 corgiId 是最後一筆的 corgiId 加一
  const newCorgiId = lastCorgiId + 1;
  const newCorgi = {
    corgiId: newCorgiId,
    ...corgiInput,
  };
  corgiList.push(newCorgi);
  return newCorgi;
}
export async function getCorgiById() {}
export async function getCorgis() {}
export async function updateCorgi() {}
export async function deleteCorgi() {
  corgiList.filter;
}
