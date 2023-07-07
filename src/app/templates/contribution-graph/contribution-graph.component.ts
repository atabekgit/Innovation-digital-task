import {Component, OnInit} from '@angular/core';
import {ContributionGraphService} from "../../services/contribution-graph.service";
import {ContributionData} from "../../models/contributionData";

@Component({
  selector: 'app-contribution-graph',
  templateUrl: './contribution-graph.component.html',
  styleUrls: ['./contribution-graph.component.css']
})
export class ContributionGraphComponent implements OnInit {
  contributionData: any;

  constructor(private contributionGraphServiceService: ContributionGraphService) {
  }

  ngOnInit(): void {
    this.getContributionData()
  }
  getContributionData() {
    this.contributionGraphServiceService.getContributionGraph().pipe().subscribe((contributionData1: ContributionData) => this.contributionData)
  }

}
