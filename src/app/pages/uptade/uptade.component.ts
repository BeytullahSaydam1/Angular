import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-uptade',
  templateUrl: './uptade.component.html',
  styleUrls: ['./uptade.component.scss']
})
export class UptadeComponent implements OnInit {
  user = {} as user;
  edit = {} as user;
  constructor(
    private userServices: UserService,
    private router:Router,
    private route: ActivatedRoute
  ) { }
  userUptade ={
    name:"",
    username :"",
    email:"",
    phone:"",
    website:""
  }
  load: boolean = true;

  editUptade(user: { name: string; username: string; email: string; phone: string; website: string; }){
    this.userUptade =user;
  }
  getUser(){
    this.userServices.getAllUsers();
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userServices.getSelectedUser(id).subscribe(value => {
      this.user = value;
      this.load = false;
    });
}
  ngOnInit(): void {
    this.getUser();
  }
  Uptade()
  {
    this.userServices.updateUser(this.user).subscribe(()=>{
      this.router.navigate(['']);
    });
    console.log(this.user);
    console.log("günceleme");
  }

}
