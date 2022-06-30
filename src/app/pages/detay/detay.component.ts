import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.scss']
})
export class DetayComponent implements OnInit {
  load: boolean = true;
  user = {} as user;
  postColumns: string[]=[];
  postList: Post[]=[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.userService.getSelectedUser(id).subscribe(value => {
      this.user = value;
      this.load = false;

    });
    this.userService.getAllPosts(id).subscribe(value => {
      this.postList = value
      this.postColumns = Object.keys(this.postList[0]);
      this.load = false
    });
  }


  }

