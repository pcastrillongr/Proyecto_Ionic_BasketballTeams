import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import _ from 'lodash';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {


  public allStandings:any;
  public standings:any;
  public divisionFilter:any;
  public team:any;

  constructor(private eliteApi:EliteApi,public navCtrl: NavController, public navParams: NavParams) {
  }

 ionViewDidLoad(){

  this.team=this.navParams.data;
  let tourneydata=this.eliteApi.getCurrentTourney();
  this.standings=tourneydata.standings;
  this.allStandings=tourneydata.standings;
  //_.chain(this.standings)
  //.groupBy('division')
  //.toPairs()
  //.map(item=> 
   // _.zipObject(['divisionName','divisionStandings'],item))
  //.value();     
  this.filterDivision();
  console.log('division',this.allStandings);

 }

 getHeader(record,recordIndex,records)
 {

  if(recordIndex ===0 ||record.division!==records[recordIndex-1].division)
  {
return record.division;

  }
  return null;
 }


 filterDivision()
 {
if(this.divisionFilter === 'all')
{

  this.standings=this.allStandings;
}else{

  this.standings=_.filter(this.allStandings,s=>s.division===this.team.division);
}

 }

}
