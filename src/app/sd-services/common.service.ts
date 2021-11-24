import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PubSubService } from './pub-sub.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public pageTitle = ''
  constructor(private titleService: Title,public pubsub: PubSubService) { }

  setPageTitle(title){
    this.titleService.setTitle(title);
    this.pageTitle = title;
    this.pubsub.$pub('page_switch')
  }
}
