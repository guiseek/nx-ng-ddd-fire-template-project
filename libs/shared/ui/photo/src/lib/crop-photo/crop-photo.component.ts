import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ReadFile } from './read-file.decorator';

@Component({
  selector: 'seek-crop-photo',
  templateUrl: './crop-photo.component.html',
  styleUrls: ['./crop-photo.component.scss']
})
export class CropPhotoComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @ReadFile()
  photo: File | string;

  constructor() { }

  ngAfterViewInit(): void {
  }

  // @DrawCanvas()

  onChange([file]: File[]) {
    console.log(file);
    this.photo = file
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ev => {
      console.log(ev.target.result);

    }
  }

}

