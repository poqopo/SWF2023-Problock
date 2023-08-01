import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Item = styled.div<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#13BD7E' : '#D9D9D9')};
`;

function Header() {
  const curPage = useSelector((state: any) => state.page.page);

  return (
    <div className="fixed bottom-0 backdrop-blur w-screen h-[84px] px-5 border-t">
      <div className="flex text-black text-center place-content-between py-4">
        <Link to="/Community" className="w-1/3">
          <Item isSelected={curPage === 'Community'}>
            <BsFillPeopleFill size="25px" className="m-auto" />
            <p className="mx-auto text-sm ">Community</p>
          </Item>
        </Link>
        <Link to="/" className="w-1/3">
          <Item isSelected={curPage === 'Complaint'}>
            <AiFillHome size="25px" className="m-auto" />
            <p className="mx-auto text-sm">Proposal</p>
          </Item>
        </Link>
        <Link to="/Profile" className="w-1/3">
          <Item isSelected={curPage === 'Profile'}>
            <CgProfile size="25px" className="m-auto" />
            <p className="mx-auto text-sm">Profile</p>
          </Item>
        </Link>
      </div>
    </div>
  );
}

export default Header;
