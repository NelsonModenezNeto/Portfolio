import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Injectable({
  providedIn: 'root',
})
export class SpeedInsightsService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public inject(): void {
    if (isPlatformBrowser(this.platformId)) {
      injectSpeedInsights();
    }
  }
}
