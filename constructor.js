//Onclick Function ..
function Onclickk() {
    //Input value from HTML page  
    var name = document.getElementById("Ename").value;
    var age = parseInt(document.getElementById("Eage").value);
    // Class and constructor     
    var Submit = /** @class */ (function () {
        function Submit(name, age) {
            this.Name = name; //Name property
            this.Age = age; //Age  Property
            this.cutoffage = 18; //Private Cutoff age property
        }
        //Method
        Submit.prototype.authorisor = function () {
            //To check whether user has crossed the cutoff age.
            if (this.Age >= this.cutoffage) {
                return "Hi " + this.Name + " as your " + this.Age + " years aged your are welcome to this site.";
            }
            else {
                return "Hi " + this.Name + " as your " + this.Age + " years aged only,\n             sorry we cannot grant you access.";
            }
        };
        return Submit;
    }());
    //Creating Instance of Submit.
    var Ssubmit = new Submit(name, age);
    // To display result in HTML view.
    var el = document.getElementById('Result');
    el.innerHTML = Ssubmit.authorisor();
}
