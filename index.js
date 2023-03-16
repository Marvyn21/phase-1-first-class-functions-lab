// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driversList){
    return driversList.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(thisArgs){
    return function(fare){
        return fare * thisArgs
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}