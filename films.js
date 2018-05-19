class Movie {
    constructor(name, genre, aloowedAge, price, rating, discountCode) {
        this.name = name;
        this.duration = duration;
        this.childAllow = childAllow;
        this.price = price;
        this.rating = rating;
    }
    getGenre = function () {
        return this.genre;
    }
    getDuration = function () {
        return this.duration;
    }
    ChildAllow = function () {
        (this.allowedAge > 18) ? false : true; 
    }
    ApplyDiscount = function () {
        return this.price * this.discountCode;
    }
}

class MovieSession {
    constructor (duration, hall, time) {
        this.duration = duration;
        this.hall = hall;
        this.time = time;
    }
}

class Movie2dSession extends MovieSession {
    constructor(duration, hall, time) {
        super(duration, hall, time)
    }
    
}

class Movie3dSession extends MovieSession {
    constructor(duration, hall, time) {
        super (duration, hall, time)
    }
}