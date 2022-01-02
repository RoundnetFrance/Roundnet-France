import storage from '../../lib/init-firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function uploadFileToStorage({ file, endpoint, handleStateChange }) {

  // handleStateChange in optional, make it void if not provided
  if (!handleStateChange) {
    handleStateChange = () => {};
  }
 
  // Create a Promise to return upload and return url
  return new Promise((resolve, reject) => {
    // Prepare storage ref and upload task
    const storageRef = ref(storage, `${endpoint}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Handle loading, error and success
    uploadTask.on('state_changed', handleStateChange,
      // Handle error
      (error) => {
        reject(error);
      },
      // Handle success
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        return resolve(url);
      }
    );
  });

}