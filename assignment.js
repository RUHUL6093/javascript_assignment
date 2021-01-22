function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "You have to put positive value ";
    }
    var meter = kilo * 1000;
    return meter;

}

function budgetCalculator(watch, mobile, laptop) {
    var totalPrice = watch * 50 + mobile * 100 + laptop * 500;
    return totalPrice;
}

function hotelCost(day) {
    var rent;
    if (day <= 10) {
        rent = day * 100;
    } else if (day <= 20) {
        var upTen = day - 10;
        rent = 10 * 100 + upTen * 80;
    } else {
        var upTwenty = day - 20;
        rent = 10 * 100 + 10 * 80 + 50 * upTwenty;
    }
    return rent;

}

function megaFriend(friendName) {

    var length = friendName[0].length;
    var string;
    for (i = 1; i < friendName.length; i++) {
        if (length < friendName[i].length) {
            length = friendName[i].length;
            string = friendName[i];
        }
    }
    return string;
}

var resKilo = kilometerToMeter(5.5);
console.log(resKilo);

var budgetPrice = budgetCalculator(10, 5, 1);
console.log(budgetPrice);

var totalRent = hotelCost(25);
console.log(totalRent);

var friendName = ["ruhul", "mrittunjoy", "mithun", "prosenjit", "tamannabhatia", "kaysara"];
var friendRes = megaFriend(friendName);
console.log(friendRes);