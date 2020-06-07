import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { CropPhotoComponent } from './crop-photo/crop-photo.component';
import { DropPhotoComponent } from './drop-photo/drop-photo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, CropPhotoComponent, DropPhotoComponent],
  exports: [AvatarComponent, CropPhotoComponent, DropPhotoComponent],
})
export class SharedUiPhotoModule {}
