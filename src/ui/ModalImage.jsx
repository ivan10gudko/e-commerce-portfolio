import CloseIcon from '@mui/icons-material/Close';
import Button from "./Button";
import { ProductContext } from '../context/productContext';
import { useContext } from 'react';
function ModalImage({ image, alt, setIsOpen }) {
  const {name} = useContext(ProductContext);
  return (
    <div className="w-screen h-screen bg-black/90 fixed top-0 left-0 z-50 overflow-x-hidden ">
      <Button action={() => setIsOpen(false)} color='white' type='text-only' className="absolute right-6 top-5">
        <CloseIcon fontSize='large'/>
      </Button>
      <div className='pb-20 top-24 absolute left-1/2 -translate-x-1/2'>
      <img src={image} alt={name}></img>
      </div>
    </div>
  );
}

export default ModalImage;
