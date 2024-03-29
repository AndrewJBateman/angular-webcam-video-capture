# :zap: Angular Webcam Video Capture

* Displays webcam video stream and captures images from local PC web browser.
* Photos can be captured using a button that will save the images in an array.
* Works in Chrome only.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-webcam-video-capture?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-webcam-video-capture?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-webcam-video-capture?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-webcam-video-capture?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Webcam Video Capture](#zap-angular-webcam-video-capture)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* The captured pictures are added to a 'captures' array. This is cleared each time after the app initialises as part of the ngOnInit lifecycle hook.
* The `srcObject` property of the HTMLMediaElement interface is now used to get webcam video stream due to [deprecation of "createObjectURL"](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject).
* This a simple app. No Jasmine/Karma testing included this time.

## :camera: Screenshots

![Example screenshot](./img/webcam-video-capture.png).

## :signal_strength: Technologies

* [Angular v15](https://angular.io/)
* [Angular ElementRefs](https://angular.io/api/core/ElementRef#description) used as a wrapper inside of a View. Security issues with this method and it means service workers cannot be used. Better to use templating and databinding or use Renderer2.
* [Angular ViewChild](https://angular.io/api/core/ViewChild) decorator used to configure a view query.
* [navigator.mediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) method used to prompt the user for permission to use a media input which produces a MediaStream. It returns a Promise that resolves to a MediaStream object (assuming permission is given). A catch function was added to alert the user to any errors.

## :floppy_disk: Setup

* `npm i` to install dependencies
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* Extract from `app.component.ts` showing code to get video stream.

```typescript

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            });
        }
    }
```

## :cool: Features

* Works with [Google Chrome Version 86 Official Build 64 bits](https://www.google.com/chrome/).

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Add an improved UI. Add database connection to store captured photos.

## :clap: Inspiration

* [Nic Raboy of X-Team blog: CAPTURE WEBCAM IMAGES FROM A BROWSER WITH ANGULAR](https://x-team.com/blog/webcam-image-capture-angular/)]
* [Matt McAlister: Get You Some Media With getUserMedia()](https://medium.com/@matt.mcalister93/get-you-some-media-with-getusermedia-726cde161cd7)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
