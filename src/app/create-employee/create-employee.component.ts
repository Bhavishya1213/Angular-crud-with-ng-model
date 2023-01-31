// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   constructor(private employeeService: EmployeeService,
//     private router:Router) { }

//   ngOnInit(): void {
//   }

//   saveEmployee(){
//     this.employeeService.createEmployee(this.employee).subscribe(data=>{
//       console.log(data);
//       this.goToEmployeeList();
//     }, error=> console.log(error));
//   }

//   goToEmployeeList(){
//     this.router.navigate(["/employee"])
//   }
//   onSubmit(){
//    console.log(this.employee)
//    this.saveEmployee();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  employee: Employee= new  Employee();
  constructor(private employeeService: EmployeeService,
  private router:Router, private formBuilder:FormBuilder) {}
  selectedHobby:any = [];
  hobbyArr = [
    {
      "key": "cricket",
      "value":"cricket"
    },
    {
      "key": "chess",
      "value":"chess"
    },
    {
      "key": "dance",
      "value":"dance"
    },
    
  ]
 
  ngOnInit(): void {
     
  }

  saveEmloyee(){
    this.employee.hobby= this.selectedHobby.toString();
    console.log(this.employee.hobby);
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
       console.log(data);
       this.goToEmployeeList();
    },error =>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])

  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmloyee();
  }

  hobbyChange(event:any){
    let index = this.selectedHobby.indexOf(event.target.value)

    if(index == -1){
      this.selectedHobby.push(event.target.value);
    }else{
     this.selectedHobby.splice(index,1)
    }
  
  }
}