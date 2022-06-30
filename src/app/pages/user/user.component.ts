import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user} from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userListSearch : user[] = []
  userList: user[] =  []
  userColumns: string[] = ['id','name','username','email','phone','website']
  searchText = "";

  constructor(private userService: UserService,
    private http: HttpClient,) { }


  ngOnInit(): void {
    this.getUsers()

  }


  getUsers() {
    this.userService.getAllUsers().subscribe((res: user[]) => {

      this.userList = res
      this.userColumns
      this.userColumns.push('Delete')
      this.userColumns.push('Uptade')
      this.userListSearch = res;
    })
  }
  DeleteUser(user: user) {
    this.userList=this.userList.filter(x => x.id !== user.id)
    this.userListSearch = this.userList;
  }
  UptadeUser(user: user) {
    this.userList=this.userList.filter(x =>x.id !== user.id)

  }

  Search(){
    this.userListSearch = this.userList.filter(user =>{
      if(user.name.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.username.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.email.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.phone.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.website.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      return false;
    })
  }

}
