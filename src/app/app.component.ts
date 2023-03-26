import { Component } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  portfolioData!: Portfolio;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getData().subscribe((data) => {
      this.portfolioData = data;
    });
  }
}
