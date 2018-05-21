import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';
@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {


  favorites=[];

  constructor(public eliteApi:EliteApi,
   public  loadingController:LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
  private userSettings:UserSettingsProvider) {
  }

  public goToTournaments()
  {
  
    this.navCtrl.push(TournamentsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  favoriteTapped($event,favorite)
  {

    let loader=this.loadingController.create({

      content:'Getting Data...',
      dismissOnPageChange:true

    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
    .subscribe(t=>this.navCtrl.push(TeamHomePage,favorite.team));
  }

  ionViewDidEnter(){


    this.favorites=this.userSettings.getAllFavorites();
  }
}
