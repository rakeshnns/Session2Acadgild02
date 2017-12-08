//Onclick Function ..
function Onclickk(){
    //Input value from HTML page  
    let name = (<HTMLInputElement>document.getElementById("Ename")).value;
    let age = parseInt((<HTMLInputElement>document.getElementById("Eage")).value); 
// Class and constructor     
class Submit{
    //Constructor
    private cutoffage: number;
    Name: string;
    Age:  number;
    constructor(name,age){
        this.Name = name;     //Name property
        this.Age  = age;      //Age  Property
        this.cutoffage = 18;  //Private Cutoff age property
        
    }
    //Method
    authorisor(){
        //To check whether user has crossed the cutoff age.
        if(this.Age >= this.cutoffage){
            return `Hi ${this.Name} as your ${this.Age} years aged your are welcome to this site.`
        }else{
            return `Hi ${this.Name} as your ${this.Age} years aged only,
             sorry we cannot grant you access.` 
        }
    }

}

//Creating Instance of Submit.
let Ssubmit = new Submit(name,age);

// To display result in HTML view.
let el:HTMLElement = document.getElementById('Result');
el.innerHTML = Ssubmit.authorisor();

}