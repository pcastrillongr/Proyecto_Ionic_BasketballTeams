import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import'rxjs/add/observable/of';

@Injectable()
export class EliteApi {

  currentTourney:any={};

  private url="https://elite-schedule-app-9580a.firebaseio.com/";
  private currentTorney:any={};
  private tourneyData={};
  constructor(public http: Http)
   {

  }


  getTournaments(){

    return new Promise(resolve=>{

      this.http.get(this.url+'tournaments.json').subscribe(res=>resolve(res.json()));

    })
  }

  getTournamentData(tourneyId, forceRefresh: boolean = false): Observable<any>{
    if(!forceRefresh && this.tourneyData[tourneyId]){
    this.currentTourney = this.tourneyData[tourneyId];
    return Observable.of(this.currentTourney);
    }
    
    return this.http.get(this.url+ "/tournaments-data/" + tourneyId + ".json")
    .map(response => {
    this.tourneyData[tourneyId] = response.json();
    this.currentTourney = this.tourneyData[tourneyId];
    return this.currentTourney;
    });
    } 
    
  refreshCurrentTourney()
  {


    return this.getTournamentData(this.currentTorney.tournament.id,true);
  }

  getCurrentTourney()
  {

    return this.currentTourney;
  }


}
