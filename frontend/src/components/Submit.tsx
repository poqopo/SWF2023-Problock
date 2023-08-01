import { TbPencilMinus } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface Submit {
  onClick(): void;
}

function Submit({ onClick }: Submit) {
  return (
    <button
      className="w-full h-[63px] bg-[#13BD7E] rounded-xl text-white text-[22px]"
      onClick={onClick}
      type="button"
    >
      Submit
    </button>
  );
}

export default Submit;
