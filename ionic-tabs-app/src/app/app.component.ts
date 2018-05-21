import { Component } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import {IonicStorageModule} from '@ionic/Storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MyTeamsPage;

  constructor(public app:App,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }
  public goToTournaments()
{

  this.app.getActiveNav().push(TournamentsPage);
}
goHome()
    {
    
      
    }
   

}
