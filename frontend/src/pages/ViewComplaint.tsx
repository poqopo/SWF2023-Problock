import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/api';

interface datatype {
  complaint_id: number;
  part: string;
  status: string;
  title: string;
  text: string;
  user_id: number;
  username: string;
  released_time: string;
  views: number;
  total_pros: number;
  total_cons: number;
  profile: string;
}
interface votetype {
  complaint_id: number;
  vote: string;
  position: string;
}

function ViewComplaint() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const user = 3;

  const [data, setData] = useState<datatype>({
    complaint_id: 1,
    part: '',
    status: '',
    title: '',
    text: '',
    user_id: 1,
    username: '',
    released_time: '',
    views: 1,
    total_pros: 1,
    total_cons: 1,
    profile: '',
  });
  const [vote, setVote] = useState<votetype>({
    complaint_id: 1,
    vote: 'F',
    position: '',
  });

  function searchApi() {
    api
      .get(`/${id}?user_id=3`)
      .then(function (response) {
        setData(response.data.complaint[0]);
        const tempData = vote;
        tempData.vote = response.data.vote;
        tempData.position = response.data.position;
        setVote(tempData);
      })
      .catch(function (error) {
        console.log('실패');
      });
  }
  function delComp() {
    api
      .delete(`/${id}?user_id=3`)
      .then(function (response) {
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function addViews() {
    api
      .post(`api/${id}/views`)
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addPros() {
    api
      .post(`api/${id}/total_pros?user_id=3`)
      .then(function (response) {
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addCons() {
    api
      .post(`api/${id}/total_cons?user_id=3`)
      .then(function (response) {
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function voteAgatin() {
    window.alert('You already voted');
  }
  useEffect(() => {
    searchApi();
    addViews();
  }, []);

  return (
    <div className="w-full pb-20">
      <div className="p-5">
        <div className="flex place-content-between">
          <button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
          >
            <IoIosArrowBack size="24px" className="text-[#8B8B8B] " />
          </button>
          {user === data.user_id ? (
            <button
              onClick={delComp}
              type="button"
              className="text-[13px] flex items-center bg-[#D5FFC1] bg-opacity-30 px-4 py-2 border-2 rounded-md hover:border-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span className="ml-1">DELETE</span>
            </button>
          ) : (
            <div />
          )}
        </div>

        <div className="flex place-content-between pt-5">
          <div className="flex">
            <img
              src={data.profile}
              className="w-[45px] h-[45px]"
              alt="loading..."
            />
            <div className="px-2">
              <span className="text-[20px] font-bold">{data.username}</span>
              {user === data.user_id ? (
                <span className="text-[20px] font-bold px-1">(Me)</span>
              ) : (
                <div />
              )}
              <p className="text-[13px] text-[#A4A4A4]">
                {data.released_time.substring(0, 10)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[56px] mt-5 mb-4 ">
          <div className="bg-[#D5FFC1] bg-opacity-30 w-full h-full text-black rounded-xl px-5 pt-3 border-2 font-bold">
            {data.title}
          </div>
        </div>
        <div className="w-full h-[240px] mt-5 mb-4 ">
          <div className="bg-[#D5FFC1] bg-opacity-30 w-full h-full text-black rounded-xl px-5 pt-3 border-2 ">
            {data.text}
          </div>
        </div>
        {vote.vote === 'T' ? (
          <div className="flex place-content-evenly">
            {vote.position === 'G' ? (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] border-2 border-[#13BD7E] rounded-full"
              >
                <img
                  src="/fillgood.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                  {data.total_pros}
                </p>
              </button>
            ) : (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] border-2 rounded-full"
              >
                <img
                  src="/good.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                  {data.total_pros}
                </p>
              </button>
            )}
            {vote.position === 'G' ? (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] border-2 rounded-full"
              >
                <img
                  src="/bad.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                  {data.total_cons}
                </p>
              </button>
            ) : (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] border-[#FF8080] border-2 rounded-full"
              >
                <img
                  src="/fillbad.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                  {data.total_cons}
                </p>
              </button>
            )}
          </div>
        ) : (
          <div className="flex place-content-evenly">
            <button
              onClick={addPros}
              type="button"
              className="p-4 w-[108px] h-[108px] border-2 rounded-full hover:border-[#13BD7E]"
            >
              <img
                src="/good.png"
                className="m-auto w-[45px] h-[45px]"
                alt="loading..."
              />
              <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                {data.total_pros}
              </p>
            </button>
            <button
              onClick={addCons}
              type="button"
              className="p-4 w-[108px] h-[108px] border-2 hover:border-[#FF8080] rounded-full"
            >
              <img
                src="/bad.png"
                className="m-auto w-[45px] h-[45px]"
                alt="loading..."
              />
              <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                {data.total_cons}
              </p>
            </button>
          </div>
        )}

        {user === data.user_id ? (
          <div />
        ) : (
          <div className="mx-auto text-center text-[12px] py-7">
            <p className="font-bold">Press button to show your opinion</p>
            <p className="text-[#7C7C7C]">You are given only one vote.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewComplaint;
