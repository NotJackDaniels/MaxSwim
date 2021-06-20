import Dependencies from '../../services/Dependencies';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export interface AddLearnerScreenViewInterface {
  addTelephone: () => void;
  setImage: (image: any) => void;
}

export default class AddLearnerScreenPresenter {
  view?: AddLearnerScreenViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  AddPhone = () => {
    this.view?.addTelephone();
  };

  AddUser = async (user: any, image: any) => {
    const imageUrl = await this.dependencies.storageService.addImage(image);
    user.userImg = imageUrl;
    if (imageUrl) {
      this.dependencies.storageService.AddUser(user);
    }
  };

  addImage = async (image: any) => {
    this.dependencies.storageService.addImage(image);
  };

  imageGalleryLaunch = () => {
    console.warn(1);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image: any) => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      this.view?.setImage(imageUri);
    });
  };
}
