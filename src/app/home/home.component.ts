import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PubSubService } from '../sd-services/pub-sub.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private titleService: Title, private pubsub: PubSubService) { }

    ngOnInit() {
        this.titleService.setTitle('Home');
        this.pubsub.$pub('active-page','home');
    }
}
