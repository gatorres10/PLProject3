/**
 * Created by pcannata on 2/20/16.
 */

var Person = function(){
    var data = {
        firstName: '',
        $firstName: function(n){data.firstName = n},
        lastName: '',
        $lastName: function(n){data.lastName = n},
        email: '',
        $email: function(n){data.email = n}
    };

    var F = function(){};
    f = new F();

    // public data
    f.toString = "Name: " + firstName + " " + lastName + "\nEmail: " + email + "\n";
    f.run = function (e) {
        return data[e];
    };

    return f;
}();

var Customer = function(p){
    var data = {
        cNum:'',
        $cNum: function(n){data.cNum = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();


    f.getDisplayText = this.toString() + "Customer Number: " + cNum;
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(Person);

var Employee = function(p){
    var data = {
        socialSecNum:'',
        $socialSecNum: function(n){data.socialSecNum = n}
    };

    var F = function(){};
    F.prototype = p;
    f = new F();


    f.getDisplayText = this.toString() + cNum;
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(Person);


