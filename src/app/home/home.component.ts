import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import{CommunicationService} from '../communication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   

  constructor(private router: Router, private communication:CommunicationService) { }

  ngOnInit(): void {
  
  }

  setQuizName(name: string){
    this.communication.quizName = name;
    console.log(this.communication.quizName);
  }
  
}
