import {AgmCoreModule} from '@agm/core';
import{IonicStorageModule} from '@ionic/storage';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApi } from '../providers/elite-api/elite-api';
import {HttpModule}from '@angular/http';
import {UserSettingsProvider} from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';


@NgModule({
  declarations: [
    MyApp,
   GamePage,TeamsPage,
   TeamDetailPage
   ,TournamentsPage,
    MyTeamsPage,
    MapPage,
    StandingsPage,
    TeamHomePage,
  ],
  imports: [
    AgmCoreModule.forRoot({apiKey:'AIzaSyAg3GE3bP62mkIGc2U7jdwzLVERW7-S3dI'}),
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GamePage,TeamsPage,
    TeamDetailPage
    ,TournamentsPage,
    MyApp,MyTeamsPage,StandingsPage
    ,TeamHomePage,MapPage  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,UserSettingsProvider
  ]
})
export class AppModule {}
