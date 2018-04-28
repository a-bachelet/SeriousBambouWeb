import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatDatepicker } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'bambou-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public users = [];
  public quizzs = [];
  public questions = [];
  public themes = [];

  public usersDataSource = new MatTableDataSource();
  public quizzsDataSource = new MatTableDataSource();
  public questionsDataSource = new MatTableDataSource();
  public themesDataSource = new MatTableDataSource();

  public usersLabels = ['username', 'password', 'validUntil', 'authToken', 'exp', 'profilepic'];
  public quizzsLabels = ['label', 'theme'];
  public questionsLabels = ['label', 'quizz'];
  public themesLabels = ['label'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/users').subscribe((res: any[]) => {
      this.users = res;
      this.usersDataSource = new MatTableDataSource(this.users);
    });
    this.http.get('/api/quizzs').subscribe((res: any[]) => {
      this.quizzs = res;
      this.quizzsDataSource = new MatTableDataSource(this.quizzs);
    });
    this.http.get('/api/questions').subscribe((res: any[]) => {
      this.questions = res;
      this.questionsDataSource = new MatTableDataSource(this.questions);
    });
    this.http.get('/api/themes').subscribe((res: any[]) => {
      this.themes = res;
      this.themesDataSource = new MatTableDataSource(this.themes);
    });
  }

}
