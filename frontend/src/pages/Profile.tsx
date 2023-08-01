import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import { IoIosArrowForward } from 'react-icons/io';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Profile' }));
  }, []);

  return (
    <div className="w-full pt-4">
      <img src="/logo.png" className="fixed px-5" alt="logo" />
      <div className="flex place-content-between pt-10 px-5 pb-5 border-b-[10px] border-[#F5F5F5]">
        <img
          className="my-auto w-[100px] h-[100px]"
          src="/Profile.png"
          alt="profile"
        />
        <div>
          <h3 className="text-[24px] text-[#13BD7E] font-bold">ISEOULU</h3>
          <p className="text-[16px] font-semibold">Australia</p>
          <p className="text-[16px] text-[#595959]">In Korea Since 2011</p>
        </div>
        <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
      </div>
      <div className="px-5">
        <div className="border-b-2 border-[#F5F5F5] py-5">
          <p className="text-[12px] text-[#BFBFBF]">Proposal Activity</p>
          <div className="flex place-content-between py-5">
            <p className="text-[15px] text-[#434343] font-semibold">
              My Proposals
            </p>
            <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
          </div>
          <div className="flex place-content-between">
            <p className="text-[15px] text-[#434343] font-semibold">My Votes</p>
            <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
          </div>
        </div>
        <div className="border-b-2 border-[#F5F5F5] py-5">
          <p className="text-[12px] text-[#BFBFBF]">Community Activity</p>
          <div className="flex place-content-between py-5">
            <p className="text-[15px] text-[#434343] font-semibold">My Posts</p>
            <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
          </div>
          <div className="flex place-content-between">
            <p className="text-[15px] text-[#434343] font-semibold">
              My Comments
            </p>
            <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
          </div>
        </div>
        <div className="border-b-2 border-[#F5F5F5] py-5">
          <p className="text-[12px] text-[#BFBFBF]">Account</p>
          <div className="flex place-content-between py-5">
            <p className="text-[15px] text-[#FF6868] font-semibold">LOGOUT</p>
            <IoIosArrowForward size="10px" className="my-auto text-[#8C8C8C]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
