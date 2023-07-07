import {Component, OnInit} from '@angular/core';
import {ContributionGraphService} from "../../services/contribution-graph.service";

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
    console.log(this.contributionGraphServiceService.createDb())
  }

}
