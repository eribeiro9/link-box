import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private user: any;

  getUser(): any {
    return this.user;
  }
}
