import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number
  employee: Employee= new Employee();
  constructor(private employeeService: EmployeeService,private route:ActivatedRoute,private router :Router) { }
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
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
      this.selectedHobby = this.employee.hobby.split(",");
    },error => console.log(error));
  
    
    
    }

    // updatedEmployee(){
    //   this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
    //     console.log(data);
    //     this.employee=new Employee();
    //     this.goToList();
    //   }, error => console.log(error));
    // }

    onSubmit(){
      this.employee.hobby= this.selectedHobby.toString();
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
     
        this.goToEmployeeList();
      },error => console.log(error));
       
    }
    
    goToEmployeeList(){
      this.router.navigate(['/employees'])
  
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
