import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  initializeIntersectionObserver() {
    const elements = document.querySelectorAll('.part1, .part2');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Opcional: parar de observar o elemento após a animação
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
