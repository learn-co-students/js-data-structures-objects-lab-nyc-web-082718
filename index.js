// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  newDriver = {...driver}
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}

//
// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
// deleteFromDriverByKey() - this function should take in a driver Object and a key. It should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
