import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild("video", {static: true}) //variable from html
    public video: ElementRef;

    @ViewChild("canvas", {static: true}) //variable from html
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

    // “navigator” is an object that contains information and about the user’s browser
    // Calling “mediaDevices” on the “navigator” object returns info about what media input
    // devices are connected tot he browser.
    // view DOM elements. Get user permission first
    public ngAfterViewInit() {
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(
            { video: true }
          )
          .then(stream => {
            // this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
          })
          .catch( err =>
            alert(`Bummer! ${err.name}.`)
          );
      }
    }
    //capture an image and add it to the captures array.
    public capture() {
        const context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        console.log('picture taken');
    }

}
