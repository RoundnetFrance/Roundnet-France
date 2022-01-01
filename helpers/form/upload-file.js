import storage from '../../lib/init-firebase';
import { ref, uploadBytesResumable } from 'firebase/storage';

export default async function uploadFileToStorage({ file, endpoint, handleStateChange, handleSuccess }) {

  const storageRef = ref(storage, `${endpoint}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  // Handle loading, error and success 
  uploadTask.on('state_changed', handleStateChange,
    (error) => {
      throw new Error(error.message)
      // setLoading(false);
      // setError({
      //   name: 'Error',
      //   message: error.message || 'Une erreur est survenue lors de l\'upload du fichier.',
      // });
    },
    // Custom callback after success
    () => {
      handleSuccess(uploadTask)
    }
  );
}