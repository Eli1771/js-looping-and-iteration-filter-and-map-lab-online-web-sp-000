// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, match) {
  let matches = false;
  return drivers.filter(function(driver) {
    for (const key in match) {
      matches = driver[key] === match[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(function(driver) {
    return driver.name;
  });
}