
lowerCaseDrivers = (drivers) => {
  return drivers.map( (driver) => driver.toLowerCase())
}

nameToAttributes = (array) => {
  return array.map( (driver) => ({
    firstName: driver.split(" ")[0], 
    lastName: driver.split(" ")[1]
  })
  )
}