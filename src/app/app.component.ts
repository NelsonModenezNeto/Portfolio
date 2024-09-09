import { Component } from '@angular/core';
import { SpeedInsightsService } from './speed-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  
  constructor(private speedInsightsService: SpeedInsightsService) { }

  ngOnInit(): void {
    this.speedInsightsService.inject();
  }
}
