import { Network } from '@ionic-native/network/ngx';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-offline',
    templateUrl: 'offline.page.html',
    styleUrls: ['offline.page.scss']
})
export class OfflinePage {

    constructor (
        private router: Router,
        private network: Network,
        private nav: NavController
    ) { }

    // ngOnInit() {
    //     this.showHideWebsite();
    // }

    ionViewWillEnter() {
        this.showHideWebsite();
    }

    goHome() {
        // this.router.navigateByUrl(`/home`);
        this.nav.navigateBack('/home');
    }

    isConnected(): boolean {
        const conntype = this.network.type;
        const isConnected = conntype && conntype !== 'unknown' && conntype !== 'none';
        console.log(`offline: ${conntype} means is connected: ${isConnected}`);
        return isConnected;
      }

      showHideWebsite() {
        if (this.isConnected()) {
            this.goHome();
        }
      }

}
