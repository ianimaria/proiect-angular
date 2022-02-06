import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'menu.component.html' })
export class MenuComponent {
  user: User;


  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
