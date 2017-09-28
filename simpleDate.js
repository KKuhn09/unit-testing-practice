//Function that will convert the difference in time between 2 dates into an 
//understandable string
function simpleDate(now, time){
    //creates var date that will store the time we pass into it
    var date = new Date(time || "");
    /*
    creates var diff that will store the difference in ms (since Jan 1, 1970)
    between now(current date) and time(time we are passing in for comparison)
    */
    var diff = (((new Date(now)).getTime() - date.getTime()) / 1000);
    /*
    creates var day_diff that will store the number of days difference between
    our 2 dates as an integer value
    */
    var day_diff = Math.floor(diff / 86400);
    /*
    If day_diff is (N)ot (a) (N)umber, is less than 0, or greater than 31(a month)
    then the function will stop execution and return undefined
    */
    if(isNaN(day_diff) || day_diff < 0 || day_diff >= 31){
        return;
    }
    /*
    Else, the function will determine about how much of a difference is between
    the 2 dates, and return a string appropriate to the difference 
    */
    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
    day_diff == 1 && "Yesterday" ||
    day_diff < 7 && day_diff + " days ago" ||
    //Math.ceil returns the smallest integer greater than or equal to its given number
    day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}