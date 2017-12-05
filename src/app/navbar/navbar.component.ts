import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingService } from '../service/settings.service'
import { UrlService } from '../service/url.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public applicationTitle: string;
  public hostSiteUrl: string;

  @Output() menuClick: EventEmitter<boolean>

  constructor(private settingService: SettingService,
              private urlService: UrlService) {
      this.hostSiteUrl = '';
      this.menuClick = new EventEmitter();
   }

  ngOnInit() {
    this.applicationTitle = this.settingService.appTitle;
    this.urlService.getQueryStringParameter(this.urlService.hostUrlName).then(value => this.hostSiteUrl = value)
  }

  menuClicked() {
    this.menuClick.emit(true);
  }

}
