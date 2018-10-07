// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = function(driver, key, value) {
  return Object.assign({}, driver, { [key] : value });
};

const destructivelyUpdateDriverWithKeyAndValue = function(driver, key, value) {
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = function(driver, key) {
  const newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}

const destructivelyDeleteFromDriverByKey = function(driver, key) {
  delete driver[key];
  return driver;
}
