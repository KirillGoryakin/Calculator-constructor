import { ReactComponent as ImgIcon } from 'assets/icons/add_image.svg';
import './index.scss';

const AssemblyZone = () => {
  return (
    <div
      className='assembly-zone'
    >
      <div className='assembly-zone__inner'>
        <ImgIcon className='assembly-zone__icon' />
        <div className='assembly-zone__text_big'>Перетащите сюда</div>
        <div className='assembly-zone__text'>любой элемент из левой панели</div>
      </div>
    </div>
  );
};

export { AssemblyZone };