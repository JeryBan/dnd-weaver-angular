/**
 * Possible endpoints to make a call:
 * classes/
 * features/
 * monsters/
 * spells/
 * equipment/
 *
 * For more information visit:
 * https://5e-bits.github.io/docs/api
 */
import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MonsterInfo} from "../interfaces/monster";
import {HttpClient} from "@angular/common/http";
import {Spell} from "../interfaces/spell";
import {Feat} from "../interfaces/feat";

const apiUrl = environment.dnd5api;
const headers = {Accept: 'application/json'};

@Injectable({
  providedIn: 'root'
})
export class DndApiService {
  http: HttpClient = inject(HttpClient);

  constructor() { }

  searchMonster(index: string): Observable<MonsterInfo> {
    return this.http.get<MonsterInfo>(apiUrl + "monsters/" + index, {headers: headers});
  }

  searchSpell(index: string): Observable<Spell> {
    return this.http.get<Spell>(apiUrl + "spells/" + index, {headers: headers});
  }

  searchFeat(index: string): Observable<Feat> {
    return this.http.get<Feat>(apiUrl + "feats/" + index, {headers: headers});
  }
}
