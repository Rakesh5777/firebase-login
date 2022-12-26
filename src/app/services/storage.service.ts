import { Injectable } from '@angular/core';
import { Storage, uploadBytes, ref, UploadResult, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  uploadProfilePic(file: File, path: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const reference = ref(this.storage, path);
      uploadBytes(reference, file)
        .then((uploadResult: UploadResult) => getDownloadURL(uploadResult.ref).then((url: string) => resolve(url)))
        .catch((error: any) => reject(error));
    });
  };

}
