// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driverNamesWithRevenueOver(drivers, revenue).map(function(driver) {return driver.name});
}

function exactMatch(drivers, match) {
  
}

function exactMatchToList(drivers, match) {
  
}