import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  quizName:string;
  resultQuiz:any;

  constructor(private _httpClient: HttpClient) { }

  get(url: string) {
    return this._httpClient.get(url);
  }

  getAll() {
    return [
      { id: 'assets/javascript.json', name: 'JavaScript' },
      { id: 'assets/aspnet.json', name: 'Asp.Net' },
      { id: 'assets/csharp.json', name: 'C Sharp' },
      { id: 'assets/designPatterns.json', name: 'Design Patterns' }
    ];
  }
}
