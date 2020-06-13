import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'seek-drop-photo',
  templateUrl: './drop-photo.component.html',
  styleUrls: ['./drop-photo.component.scss']
})
export class DropPhotoComponent implements AfterContentInit {
  @ContentChild(AvatarComponent) avatar: AvatarComponent;

  files: File[] = [];

  isHovering: boolean;

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  ngAfterContentInit() {
    console.log(this.avatar);
  }

  /**
   * @TODO
   * @Output de saída do componente
   * passando o resultado do observable.
   *
   * @param {FileList} files
   * @memberof DropPhotoComponent
   */
  onDrop(files: FileList) {
    console.log(this.avatar);

    console.log(files);
    const photo = files.item(0);
    // console.log(photo);
    dropPhotoHandler(photo)
      .subscribe(({ data, file}) => {
        console.log(data);

        this.avatar.src = data;
      })

    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
}

interface ReadFile {
  file: File;
  data: string;
}

const getCanvasConntext = () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
}

export function dropPhotoHandler(
  file: File,
  width = 600
)
: Observable<ReadFile>
{
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Observable(observer => {
    reader.onload = ev => {
      const img = new Image();
      img.src = (ev.target as any).result;
      (img.onload = () => {
        const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
        const scaleFactor = width / img.width;
        elem.width = width;
        elem.height = img.height * scaleFactor;
        const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
        ctx.canvas.toBlob(
          blob => {
            observer.next(
              {
                file: new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                }),
                data: ctx.canvas.toDataURL()
              }
            );
          },
          'image/jpeg',
          1,
        );
      }),
        (reader.onerror = error => observer.error(error));
    };
  });
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // const img = new Image();
  // const canvas = document.createElement('canvas');
  // const context = canvas.getContext('2d');

  // return fromEvent(reader, 'load').pipe(
  //   map((photo: ProgressEvent) => {
  //     console.log(photo);
  //     return photo.target
  //     // img.src = (event.targe())
  //   })
  // );
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

}