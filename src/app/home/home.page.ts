import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    browser: InAppBrowserObject;
    showFrame = false;

    constructor(
      private iab: InAppBrowser,
      private network: Network,
      private router: Router
    ) {
      this.showHideWebsite();
    }

    ionViewWillEnter() {
      this.showHideWebsite();
    }

    isConnected(): boolean {
      const conntype = this.network.type;
      const isConnected = conntype && conntype !== 'unknown' && conntype !== 'none';
      console.log(`${conntype} meansis connected: ${isConnected}`);
      return isConnected;
    }

    showHideWebsite() {
      if (!this.isConnected()) {
        this.showFrame = false;
        this.router.navigate(['offline']);
      } else {
        this.showFrame = true;
        this.browser = this.iab.create('https://ionicframework.com/', '_self', 'location=no,toolbar=no');
        this.browser.show();
      }
    }

}
