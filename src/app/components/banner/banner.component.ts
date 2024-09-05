import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  private stripTop: HTMLElement | null = null;
  private stripBottom: HTMLElement | null = null;

  ngOnInit(): void {
    this.stripTop = document.querySelector('.strip-top');
    this.stripBottom = document.querySelector('.strip-bottom');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.stripTop || !this.stripBottom) return;

    const scrollPosition = window.scrollY;

    // Movendo as faixas conforme a rolagem
    this.stripTop.style.top = `${20 + scrollPosition / 1}%`;
    this.stripBottom.style.bottom = `${20 + scrollPosition / 1}%`;
  }
}
