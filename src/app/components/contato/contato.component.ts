import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
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
