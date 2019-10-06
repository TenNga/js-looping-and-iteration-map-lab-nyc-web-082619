// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  return drivers.map( (driver) => driver.toLowerCase())
}

nameToAttributes = (drivers) => {
  return drivers.map( (driver) => ({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}))
}