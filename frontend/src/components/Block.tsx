import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/api';

type Blanktype = {
  title: string;
  category: string;
  query: string;
  subcategory: any;
};

interface interfaceContent {
  complaint_id: number;
  profile: string;
  username: string;
  total_pros: number;
  total_cons: number;
  title: string;
  text: string;
}

function Block({ title, category, subcategory, query }: Blanktype) {
  const [data, setData] = useState([]);
  function searchApi() {
    api
      .get(query)
      .then(function (response) {
        console.log('hello');
        console.log(response);
        setData(response.data[subcategory]);
      })
      .catch(function (error) {
        console.log('실패');
      });
  }

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <div className="w-full rounded-[19px] border p-3">
      <div className="flex place-content-between py-2">
        <p className="text-[18px] font-bold">{title}</p>
        <Link
          to={`/ViewMore/${subcategory}`}
          className="text-[10px] my-auto align-bottom font-bold"
        >
          MORE
        </Link>
      </div>

      {data.length > 0 ? (
        data.map((content: interfaceContent, idx) => (
          <Link to={`/ViewComplaint/${content.complaint_id}`} className="">
            <div className="flex place-content-between py-2">
              <div className="flex">
                <img
                  src={content.profile}
                  className="w-[17px] h-[17px]"
                  alt="loading..."
                />
                <p className="text-[11px] font-bold px-1">{content.username}</p>
              </div>
              <div className="flex">
                <div className="flex w-[50px] bg-[#DDFFD1] rounded-lg p-1">
                  <img
                    src="/good.png"
                    className="mx-1 my-auto w-[13px]"
                    alt="loading..."
                  />
                  <p className="my-auto text-[9px] text-[#13BD7E]">
                    {content.total_pros}
                  </p>
                </div>
                {category === 'Complaint' ? (
                  <div className="flex w-[50px] bg-[#FFECEC] rounded-lg p-1 mx-2">
                    <img
                      src="/bad.png"
                      className="mx-1 my-auto w-[13px]"
                      alt="loading..."
                    />
                    <p className="my-auto text-[9px] text-[#FF8080]">
                      {content.total_cons}
                    </p>
                  </div>
                ) : (
                  <div className="flex w-[50px] bg-[#EDEDED] rounded-lg p-1 mx-2">
                    <img
                      src="/comment.png"
                      className="mx-1 my-auto w-[13px]"
                      alt="loading..."
                    />
                    <p className="my-auto text-[9px] text-[#5E5E5E]">
                      {content.total_cons}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold">{content.title}</p>
              <p className="py-1 text-[11px]">{content.text}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>Fetching Data...</div>
      )}
    </div>
  );
}

export default Block;
