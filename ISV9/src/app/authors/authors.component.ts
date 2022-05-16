import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { Author, SaveAuthor } from './author';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  listAuthors: Author[] = [];
  authorId: Number = 0;
  author: Author = { id: 0, name: '' };
  createAuthor: SaveAuthor = { name: '' };
  updateAuthor: SaveAuthor = { name: '' };
  poruka: boolean = false;
  constructor(private service: AuthorsService, private router: Router) {
    service.GetAll().subscribe(
      (res) => {
        this.listAuthors = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // Nakon logovanja pozicionirati se na home stranicu
  openAuthors() {
    this.router.navigate(['/authors'], {
      queryParams: { page: 1, pageSize: 10 },
    });
  }
  GetAuthor() {
    this.poruka = false;
    if (this.authorId > 0) {
      this.service.GetById(this.authorId).subscribe(
        (res) => {
          this.author = res;
        },
        (error: Response) => {
          if (error.status == 404) {
            this.poruka = true;
          }
        }
      );
    } else console.log('Nije moguce poslati negativan ili 0 id');
  }
  AddAuthor() {
    if (this.createAuthor.name !== '') {
      this.service.Add(this.createAuthor).subscribe(
        (res) => {
          this.listAuthors.push(res);
          this.createAuthor.name = '';
        },
        (error) => {
          console.log(error);
        }
      );
    } else console.log('Polje ime je obavezno');
  }

  RemoveAuthor(id: Number) {
    this.service.Remove(id).subscribe(
      (res) => {
        const index = this.listAuthors.indexOf(res);
        this.listAuthors.splice(index, 1);
        // this.listAuthors = this.listAuthors.filter(a => a.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateAuthor(id: Number) {
    this.service.Update(3, this.updateAuthor).subscribe(
      (res) => {
        const index = this.listAuthors.indexOf(res);
        const author = res;
        this.listAuthors.splice(index, 1, author);
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }
}
