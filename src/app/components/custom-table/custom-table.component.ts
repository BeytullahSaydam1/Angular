import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UptadeComponent } from 'src/app/pages/uptade/uptade.component';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-custom-table' ,
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],

})
export class CustomTableComponent implements OnInit {

  @Input() data: any[] = []
  @Input() columns: any[] = []
  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()
  searchText = "";

   editUser = {} as user;
   edit: number = -1;
    size: number = 5;

    public page =1;
    public pageSize =5;

  constructor( private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.columns)
  }

  buttonEvent(item: any) {
    this.buttonFunction.emit(item)
  }
  buttonEvent2(id: number) {
    this.router.navigate(['uptade',id]);

  }
  Detay(user:any): void {
    this.router.navigateByUrl(`/usersdetay/${user.id}`).then(r => r.valueOf());
  }
}
