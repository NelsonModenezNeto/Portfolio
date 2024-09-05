import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrl: './typing-animation.component.css'
})
export class TypingAnimationComponent implements OnInit, OnDestroy {
  message = '';
  typingInterval: any;
  deletingInterval: any;
  textsToType = ['DEV FULL STACK', 'EU SOU O NETO'];
  currentTextIndex = 0; 
  typingSpeed = 140; // velocidade de digitação em milissegundos
  deletingSpeed = 50; 

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    this.stopTypingAnimation();
  }

  startTypingAnimation(): void {
    let i = 0;
    const currentText = this.textsToType[this.currentTextIndex];
    this.typingInterval = setInterval(() => {
      if (i < currentText.length) {
        this.message += currentText.charAt(i);
        i++;
      } else {
        clearInterval(this.typingInterval);
        this.startDeletingAnimation();
      }
    }, this.typingSpeed);
  }

  startDeletingAnimation(): void {
    let i = this.message.length - 1;
    this.deletingInterval = setInterval(() => {
      if (i >= 0) {
        this.message = this.message.slice(0, -1);
        i--;
      } else {
        clearInterval(this.deletingInterval);
        this.currentTextIndex = (this.currentTextIndex + 1) % this.textsToType.length; // Move para o próximo texto no array circularmente
        this.startTypingAnimation();
      }
    }, this.deletingSpeed);
  }

  stopTypingAnimation(): void {
    clearInterval(this.typingInterval);
    clearInterval(this.deletingInterval);
  }
}