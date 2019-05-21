class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }

    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
}
      class Manager extends Employee {
         constructor(descriptionOfJob,name, salary, hireDate){
         super(name, salary, hireDate);
         this.descriptionOfJob = descriptionOfJob;
          
     }
      
 
      jobDescription() {
     console.log (this.name + " was hired on "+ this.hireDate +" and makes " + this.salary +" dollars a month because she" + this.descriptionOfJob + ".");
      }
    }
      
       class Designer extends Employee {
           constructor(experience, name, salary, hireDate) {
               super(name,salary,hireDate);
               this.experience = experience;
           }
           yearsExperience(){
               console.log(this.name +" was Hired on " + this.hireDate +" and makes " + this.salary + "  dollars a month because she has " + this.experience + " years of experience.");

           }
       }
             class SalesAssociate extends Employee{
                 constructor(degree,name, salary, hireDate){
                     super(name,salary,hireDate);
                     this.degree = degree;
                 }
             
              degreeCompleted(){
                 console.log(this.name +  " was hired on " + this.hireDate + " and makes " + this.salary + " dollars a month because she has a " + this.degree+".");
             }
             }
               let Tara = new Manager(" manages the sales staff","Tara",5000,"9/13/2018");
               let Margaret = new Designer(6,"Margaret",6000,"8/13/2008");
               let Tania = new SalesAssociate("Masters Degree","Tania",  7000,"6/25/2009");

             Tara.jobDescription();
             Margaret.yearsExperience();
             Tania.degreeCompleted();