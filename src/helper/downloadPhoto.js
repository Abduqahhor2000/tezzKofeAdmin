
import { useGetPhoto } from "../api";

export function handleFileDownload(url) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useGetPhoto(("/uploads/"+url), {
      responseType: 'blob',
    })
      .then(({data}) => {
        // Create a temporary URL object for download
  
        return window.URL.createObjectURL(new Blob([data])); 
      })
      .catch(error => {
        console.error('File download failed:', error);
      });
  }