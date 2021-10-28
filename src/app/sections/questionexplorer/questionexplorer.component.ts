import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionexplorer',
  templateUrl: './questionexplorer.component.html',
  styleUrls: ['./questionexplorer.component.css']
})
export class QuestionexplorerComponent implements OnInit {

  selectedOption=2;
  constructor() { }

  ngOnInit(): void {
  }

  setval(event){
    console.log(this.selectedOption)
  }
}
