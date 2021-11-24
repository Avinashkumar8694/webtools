import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { CommonService } from "../../sd-services/common.service";
declare function StartupNameGenerator(name): any;
@Component({
  selector: "app-business-name-generator",
  templateUrl: "./business-name-generator.component.html",
  styleUrls: ["./business-name-generator.component.css"],
})
export class BusinessNameGeneratorComponent implements OnInit {
  businessNames = [];
  page = {
    params: {
      searchKeyword: "Project World",
    },
  };
  constructor(public route: ActivatedRoute, public commonService : CommonService) {}

  ngOnInit(): void {
    this.commonService.setPageTitle('Business Name Generator');
    this.getBusinessNames();
  }
  getBusinessNames() {
    if (this.page.params.searchKeyword.length > 0) {
      this.businessNames = StartupNameGenerator(this.page.params.searchKeyword);
    }
  }
}
