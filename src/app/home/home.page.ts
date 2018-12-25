import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    browser: InAppBrowserObject;
    showSplash = true;

    constructor (
      private iab: InAppBrowser,
      private network: Network,
      private router: Router,
      private nav: NavController
    ) {

    }

    ionViewWillEnter() {
      if (this.showSplash) {
        timer(6000).subscribe(() => {
          this.showSplash = false;
          this.showHideWebsite();
        });
      } else {
        this.showHideWebsite();
      }

    }

    // ngOnInit () {
    //   console.log(this.route.snapshot.paramMap.get('showSplash'));
    //   this.showSplash = this.route.snapshot.paramMap.get('showSplash') === '1';
    // }


    isConnected(): boolean {
      const conntype = this.network.type;
      const isConnected = conntype && conntype !== 'unknown' && conntype !== 'none';
      console.log(`${conntype} means is connected: ${isConnected}`);
      return isConnected;
    }

    showHideWebsite() {
      if (!this.isConnected()) {
        // this.router.navigate(['offline']);
        this.nav.navigateForward('/offline');
      } else {
        this.browser = this.iab.create('https://modaayelen.com/', '_self', 'location=no,toolbar=no');
        this.browser.show();
      }
    }

}
