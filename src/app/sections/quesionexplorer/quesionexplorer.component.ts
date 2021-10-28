import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quesionexplorer',
  templateUrl: './quesionexplorer.component.html',
  styleUrls: ['./quesionexplorer.component.css']
})
export class QuesionexplorerComponent implements OnInit {
  selectedOption=2;
  constructor() { }

  ngOnInit(): void {
  }

  setval(event){
    console.log(this.selectedOption)
  }

}
