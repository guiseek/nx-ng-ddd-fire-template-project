import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from './avatar/avatar.component';
import { CropPhotoComponent } from './crop-photo/crop-photo.component';
import { DropPhotoComponent } from './drop-photo/drop-photo.component';
import { DropPhotoDirective } from './drop-photo/drop-photo.directive';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    AvatarComponent,
    CropPhotoComponent,
    DropPhotoComponent,
    DropPhotoDirective
  ],
  exports: [
    AvatarComponent,
    CropPhotoComponent,
    DropPhotoComponent,
    DropPhotoDirective
  ],
})
export class SharedUiPhotoModule {}
