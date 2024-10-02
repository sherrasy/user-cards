import { AppMessage } from '@/utils/constant';

function Loader(): JSX.Element {
  return (
    <div className='loader'>
      <h1 className='loader__text'>{AppMessage.Loading}</h1>
      <div className='loader__dots'>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}
export default Loader;
