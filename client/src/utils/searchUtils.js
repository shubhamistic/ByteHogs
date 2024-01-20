export function searchInArray(arr, key) {
  const result = arr.filter(element => element.toLowerCase().includes(key.toLowerCase()));
  return result.length > 0 ? result : arr;
}