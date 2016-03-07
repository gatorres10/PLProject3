/**
 * Created by Genesis on 3/6/2016.
 */


//var keepGoing = true;
//while (keepGoing) {

function myFunction() {
    var person = window.prompt("Create customer or employee? (c/e):");

    if (person.equalsIgnoreCase('c')) {
        //Customer; customer = new Customer();
        var Person = function () {
            var data = {
                firstName: '',
                $firstName: function (n) {
                    data.firstName = n
                },
                lastName: '',
                $lastName: function (n) {
                    data.lastName = n
                },
                email: '',
                $email: function (n) {
                    data.email = n
                }
            };

            var F = function () {
            };
            f = new F();

            // public data
            f.toString = "Name: " + firstName + " " + lastName + "\nEmail: " + email + "\n";
            f.run = function (e) {
                return data[e];
            };

            return f;
        }();

        var Customer = function (p) {
            var data = {
                cNum: '',
                $cNum: function (n) {
                    data.cNum = n
                }
            };

            var F = function () {
            };
            F.prototype = p;
            f = new F();


            f.getDisplayText = this.toString() + "Customer Number: " + cNum;
            f.run = function (e) {
                var r = data[e];
                if (r === undefined) return F.prototype.run(e);
                else return r;
            };

            return f;
        }(Person);

        var Employee = function (p) {
            var data = {
                socialSecNum: '',
                $socialSecNum: function (n) {
                    data.socialSecNum = n
                }
            };

            var F = function () {
            };
            F.prototype = p;
            f = new F();


            f.getDisplayText = this.toString() + cNum;
            f.run = function (e) {
                var r = data[e];
                if (r === undefined) return F.prototype.run(e);
                else return r;
            };

            return f;
        }(Person);


        var a1 = Object.create(Person);
        var fName = prompt("Enter first name");
        var lName = prompt("Enter last name");
        var emailAdress = prompt("Enter email address");
        var customerNum = prompt("Enter your Customer Number");
        document.write("You entered:" + "<br>");
        document.write("Name:  " + fName + "" + lName + "<br>");
        document.write("Email:  " + emailAdress + "<br>");
        document.write("Customer Number:  " + customerNum);

        var cont = Console.getString("\nContinue? (y/n): ");
        if (cont.equalsIgnoreCase("y")) {

        } else if (cont.equalsIgnoreCase("n")) {
            keepGoing = false;
        }
    }
}
