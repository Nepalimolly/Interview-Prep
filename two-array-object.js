// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let combinedObject = {};

  for (let i = 0; i < arr1.length; i++) {
    const key = arr1[i];
    const value = i < arr2.length ? arr2[i] : null;

    combinedObject[key] = value;
  }
  return combinedObject;
}
