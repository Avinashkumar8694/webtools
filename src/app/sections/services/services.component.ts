import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceList = [
    {
      name: "QuestionExplorer",
      title: "Question Explorer",
      description: "Question Explorer page can bring in new visitors to your website via organic search and drive them to related pages.",
      does_src_exist:false,
      src:'',
      icon_class:'fa fa-desktop',
      redirect_url: '/questionsexplorer'
    },
    {
      name: "BusinessNameGenerator",
      title: "Business Name Generator",
      description: "Business Name Generator provides the suggested name based on provided hint names.",
      does_src_exist:false,
      src:'',
      icon_class:'fa fa-desktop',
      redirect_url: '/business-name-generator'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
