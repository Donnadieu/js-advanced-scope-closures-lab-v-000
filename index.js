function produceDrivingRange(limit) {
  return function(pointA, pointB) {
    let start = parseInt(pointA);
    let finish = parseInt(pointB);
    let distance = Math.abs(start - finish);
    let difference = Math.abs(distance - limit);

    if (distance <= limit) {
      return `within range by ${difference}`;
    }
    else {
      return `${difference} blocks out of range`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function (amount) {
    return amount * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name;
    }
  }
}
