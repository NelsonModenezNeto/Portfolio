import { Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  @ViewChildren('card') cardElements: QueryList<ElementRef> | undefined;

  projectsReady: number = 0;
  projectsOngoing: number = 0;
  programmedHours: number = 0;
  workedHours: number = 0;

  ngOnInit() {
    setTimeout(() => this.observeVisibility(), 0);
  }

  observeVisibility() {
    if (!this.cardElements) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting ) {
          this.animateNumbers();
          observer.disconnect();
        }
      });
    });

    this.cardElements.forEach(card => observer.observe(card.nativeElement));
  }

  animateNumbers() {
    this.animateNumber('projectsReady', 4);
    this.animateNumber('projectsOngoing', 1);
    this.animateNumber('programmedHours', 2000);
    this.animateNumber('workedHours', 750);
  }

  animateNumber(property: string, endValue: number) {
    let startValue = 0;
    const duration = 2000;
    const stepTime = 50;
    const steps = Math.ceil(duration / stepTime);
    const stepValue = endValue / steps;

    const interval = setInterval(() => {
      startValue += stepValue;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(interval);
      }
      (this as any)[property] = Math.round(startValue);
    }, stepTime);
  }
}
