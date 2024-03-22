import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular_app1';
  data: any[] = [];

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
    this.fetchDataFromDockerizedApi();
  }

  fetchDataFromDockerizedApi(){
    this.httpClient.get('https://net-app.azurewebsites.net/weatherForecast').subscribe({
        next: (response) => {
          this.data = response as [];
        },
        error: (err) => {}
    });
  }
  getSuccess(){
    this.httpClient.get('https://net-app.azurewebsites.net/api/Home/need_success').subscribe({
      next: (response) => {
        window.prompt("Hello From Docker  "+ response);
      },
      error: (err) => {}
    });
  }
}
