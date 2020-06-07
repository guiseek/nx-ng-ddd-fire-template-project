import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'seek-drop-photo',
  templateUrl: './drop-photo.component.html',
  styleUrls: ['./drop-photo.component.scss']
})
export class DropPhotoComponent implements OnInit {

  isHovering: boolean;

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  drop(event) {
    console.log(event);
  }

}

interface ReadFile {
  file: File;
  data: string;
}

export function dropPhotoHandler(
  file: File,
  width = 600
)
// : Observable<ReadFile>
{
  const reader = new FileReader();
  reader.readAsDataURL(file);

  const img = new Image();

  fromEvent(img, 'load').pipe(
    map(photo => {
      console.log(photo);

      // img.src = (event.targe())
    })
  )
  // var canvas = document.getElementById('myCanvas');
  // var context = canvas.getContext('2d');
  // var imageObj = new Image();

  // imageObj.onload = function() {
  //   // draw cropped image
  //   var sourceX = 150;
  //   var sourceY = 0;
  //   var sourceWidth = 150;
  //   var sourceHeight = 150;
  //   var destWidth = sourceWidth;
  //   var destHeight = sourceHeight;
  //   var destX = canvas.width / 2 - destWidth / 2;
  //   var destY = canvas.height / 2 - destHeight / 2;

  //   context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
  // };
  // imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';


  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // return new Observable(observer => {
  //   reader.onload = ev => {
  //     const img = new Image();
  //     img.src = (ev.target as any).result;
  //     (img.onload = () => {
  //       const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
  //       const scaleFactor = width / img.width;
  //       elem.width = width;
  //       elem.height = img.height * scaleFactor;
  //       const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
  //       ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
  //       ctx.canvas.toBlob(
  //         blob => {
  //           observer.next(
  //             {
  //               file: new File([blob], file.name, {
  //                 type: 'image/jpeg',
  //                 lastModified: Date.now(),
  //               }),
  //               data: ctx.canvas.toDataURL()
  //             }
  //           );
  //         },
  //         'image/jpeg',
  //         1,
  //       );
  //     }),
  //       (reader.onerror = error => observer.error(error));
  //   };
  // });
}