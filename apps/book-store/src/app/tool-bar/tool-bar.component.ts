import { Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

import { APP_NAME } from '../constants/app.constants';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  public appName: string = APP_NAME;

  @Output() public toggleSideNav = new EventEmitter();

  public onMenuClick() {
    this.toggleSideNav.emit();
  }
}
