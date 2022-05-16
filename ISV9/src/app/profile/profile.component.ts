import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { Author } from '../authors/author';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id: Number = 0;
  page: Number = 1;
  author: Author = { id: 0, name: '' };
  constructor(private route: ActivatedRoute, private service: AuthorsService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      (p) => (this.page = +(p.get('page') || '1'))
    );
    this.route.params.subscribe((p) => (this.id = +p['id']));
    console.log('Id = ' + this.id);
    this.service.GetById(this.id).subscribe(
      (res) => (this.author = res),
      (error) => console.log(error)
    );
  }
}
