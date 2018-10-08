// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const newobj = {...driver}
  newobj[key] = value
  return newobj
}

function destructivelyUpdateDriverWithKeyAndValue(drive, key, value){
  drive[key] = value
  return drive
}

function deleteFromDriverByKey(drive, key){
  const newobj = {...drive}
  delete newobj[key]
  return newobj
}

function destructivelyDeleteFromDriverByKey(drive, key){
  delete drive[key]
  return drive
}
