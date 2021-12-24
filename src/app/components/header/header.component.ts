import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //@ViewChild('header')
  //private headerElement: ElementRef;

  @ViewChild('navcontent')
  private content: ElementRef;

  private isopen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {
    /*document.addEventListener('scroll', (e) => {
      const topPosition = this.viewportScroller.getScrollPosition()[1];
      if (topPosition > 75) {
        this.headerElement.nativeElement.classList.add("gradient");
      } else {
        this.headerElement.nativeElement.classList.remove("gradient");
      }
    })*/
  }

  scrollTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  toogleMenu() {
    if(this.isopen) {
      this.close()
    } else {
      this.open()
    }
  }

  close() {
    this.content.nativeElement.classList.add("hidden");
    this.isopen = false;
  }

  open() {
    this.content.nativeElement.classList.remove("hidden");
    this.isopen = true;
  }
}
