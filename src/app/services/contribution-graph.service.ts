import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContributionData} from "../models/contributionData";

@Injectable({
  providedIn: 'root'
})
export class ContributionGraphService {

  baseUrl = ``;

  constructor(private http: HttpClient) {
  }

  getContributionGraph(): Observable<ContributionData> {
    return this.http.get<ContributionData>(``);
  }
}
