import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const underlineElement = this.elRef.nativeElement.querySelector('.underline');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          underlineElement.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(underlineElement);
  }
}
