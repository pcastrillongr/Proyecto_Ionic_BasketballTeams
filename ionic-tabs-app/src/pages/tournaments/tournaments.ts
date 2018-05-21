import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams';
import { TeamsPage } from '../teams/teams';
import { EliteApi } from '../../providers/elite-api/elite-api';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  public tournaments:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController:LoadingController,
    private eliteApi:EliteApi) {
  }

  itemTapped($event,tourney)
  {

    this.navCtrl.push(TeamsPage,tourney);
  }

  ionViewDidLoad() {

    let loader=this.loadingController.create({

      content:"Loading Tournaments..."
    });
    loader.present().then(data=>{

      this.eliteApi.getTournaments().then(
        data=>{
          this.tournaments=data,
          loader.dismiss();
        }
      
      );

      
    })
  }
}
