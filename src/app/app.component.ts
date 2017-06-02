import { Component, AfterContentChecked, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  /**
   *
   */
  isload = true;
  constructor(private elementRef: ElementRef) {
  }
  ngAfterContentChecked() {
    if (this.isload) {
      var m = document.createElement("script");
      m.type = "text/javascript";
      m.src = "../assets/js//material.min.js";
      this.elementRef.nativeElement.appendChild(m);

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "../assets/js/material-dashboard.js";
      this.elementRef.nativeElement.appendChild(s);
      this.isload = false;
    }

  }
}
