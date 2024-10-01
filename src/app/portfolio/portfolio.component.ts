import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  // AfterViewInit lifecycle hook for observing elements after the view is initialized
  ngAfterViewInit() {
    // Observe elements with ID 'game-one' and 'game-two', applying styles to '.text-one' and '.text-two' respectively
    this.observeElementById('game-one', '.text-one');
    this.observeElementById('game-two', '.text-two');
  }

  // Function to handle the rotation effect on mouseover
  rotate(event: MouseEvent) {
    const image = (event.currentTarget as HTMLElement).querySelector('.right-border-image');
    if (image) {
      image.classList.add('rotate-animation');
    }
  }

  // Function to observe when an element with a specific ID becomes visible and apply styles
  observeElementById(elementId: string, targetSelector: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    const targetElement = this.elementRef.nativeElement.querySelector(targetSelector);

    if (element && targetElement) {
      // Create an IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Apply styles when the element is visible
            targetElement.style.left = '0px';
            targetElement.style.zIndex = '1';
          } else {
            // Reset the styles when the element is out of view
            targetElement.style.left = elementId === 'game-one' ? '-800px' : '800px'; // Off-screen position
            targetElement.style.zIndex = '-1';  // Default z-index
          }
        });
      }, { threshold: 0.1 }); // Adjust threshold as necessary

      // Observe the element
      observer.observe(element);
    }
  }
}
