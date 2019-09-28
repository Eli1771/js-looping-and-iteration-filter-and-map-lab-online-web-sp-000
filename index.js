// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = []; 
  driverNamesWithRevenueOver(drivers,revenue).map(function(driver) {names.push(driver.name)});
  return names;
}

function exactMatch(drivers, match) {
  
}

function exactMatchToList(drivers, match) {
  
}