import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';



@Component({
  selector: 'app-payment-success-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success-model.component.html',
  styleUrl: './payment-success-model.component.scss'
})
export class PaymentSuccessModelComponent implements AfterViewInit {
  isModalOpen = false;

  @ViewChild('confettiCanvas') confettiCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    if (this.confettiCanvas) {
      this.setupConfettiCanvas();
    }
  }

  openModal() {
    this.isModalOpen = true;
    // Use a timeout to ensure that the modal is rendered before accessing the canvas
    setTimeout(() => {
      if (this.confettiCanvas) {
        this.launchConfetti();
      }
    }, 0);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  setupConfettiCanvas() {
    const canvas = this.confettiCanvas.nativeElement;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  launchConfetti() {
    const canvas = this.confettiCanvas.nativeElement;
    const myConfetti = confetti.create(canvas, { resize: true });

    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration); // Increase particle count for more confetti
      myConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ['circle'], // Use circle shapes for diversity
        colors: ['#4CAF50', '#FFC107', '#FF5722', '#2196F3'], // Success-themed colors
      });
      myConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ['square'], // Add square shapes
        colors: ['#4CAF50', '#FFC107', '#FF5722', '#2196F3'],
      });
      myConfetti({
        ...defaults,
        particleCount: particleCount / 2,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.2 },
        shapes: ['star'], // Use custom shapes like stars or dollar signs
        colors: ['#FFD700'],
        scalar: 1.5, // Scale the custom shapes to make them more visible
      });
    }, 250);
  }
}
