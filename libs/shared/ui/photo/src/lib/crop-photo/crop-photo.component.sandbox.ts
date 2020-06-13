import { sandboxOf } from 'angular-playground';
import { CropPhotoComponent } from './crop-photo.component';

export default sandboxOf(CropPhotoComponent)
  .add('default', {
    template: `<seek-crop-photo></seek-crop-photo>`
  });
