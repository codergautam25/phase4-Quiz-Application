import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';


@Component({
  selector: 'app-result-andreview',
  templateUrl: './result-andreview.component.html',
  styleUrls: ['./result-andreview.component.css']
})
export class ResultAndreviewComponent implements OnInit {

  quiz: Quiz = new Quiz(null);
  isLoaded=false;

  constructor(private communication:CommunicationService) { }

  ngOnInit(): void {
    this.quiz = this.communication.resultQuiz;
    this.isLoaded=true;
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

}
