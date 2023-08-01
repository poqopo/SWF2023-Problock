import { TbPencilMinus } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ComplaintBlock() {
  return (
    <div className="w-full p-3 bg-[#13BD7E] rounded-xl text-white hover:animate-pulse ">
      <Link
        to="/WriteComplaint"
        className="w-full h-full flex place-content-between px-5"
      >
        <div className="flex">
          <TbPencilMinus size="40px" className="my-auto text-white " />
          <p className="my-auto px-4 text-start text-xl font-bold  ">
            WRITE PROPOSAL
          </p>
        </div>
        <IoIosArrowForward size="36px" className="my-auto" />
      </Link>
    </div>
  );
}

export default ComplaintBlock;
