import { useState } from 'react';

export default function Send() {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState();
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(image);
  };

  const clearForm = () => {
    setImage();
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Check if form
    console.log('Successfully submitted');
    console.log('Other middleware to send message link to database');

    clearForm();
  };

  return (
    <div>
      <form>
        <h2>Add your message:</h2>
        <textarea
          name='message'
          id=''
          cols='30'
          rows='10'
          onChange={() => setMessage(e.target.value)}
        ></textarea>
        <h2>Upload image</h2>
        <input type='file' name='img' id='' onChange={handleImageChange} />
        <button type='submit'>Submit</button>
      </form>
      <div>{image && <img src={image} alt='' />}</div>
    </div>
  );
}
