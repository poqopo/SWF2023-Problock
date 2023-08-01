import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import { useInfiniteQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import ComplaintBlock from '@/components/ComplaintBlock';
import Block from '@/components/Block';
import api from '@/api';

interface interfaceContent {
  complaint_id: number;
  profile: string;
  username: string;
  total_pros: number;
  total_cons: number;
  title: string;
  text: string;
}

function ViewMore() {
  const dispatch = useDispatch();
  const location = useLocation();
  const subcategory = location.pathname.split('/')[2];
  const { data, fetchNextPage, isSuccess } = useInfiniteQuery(
    ['ViewMoreComplaint'],
    ({ pageParam = 1 }) => api.get(`/${subcategory}?size=10&page=${pageParam}`),
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length + 1;
      },
    },
  );

  const observeRef = useRef<IntersectionObserver | null>(null);
  const ref = useRef(null);

  const intersectionObserver = (entries: any, io: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    dispatch(pageChange({ curPage: 'Complaint' }));
  }, []);

  return (
    <div className="w-full h-[600px] flex flex-col gap-y-4 pt-4 px-5 pb-20">
      <img src="/logo.png" className="absolute" alt="logo" />
      <h3 className="mx-auto text-[22px] font-bold uppercase">{subcategory}</h3>

      <div className="w-full rounded-[19px] border p-3">
        {data?.pages.map((page, pageIndex) => {
          const list = page.data;
          return list.map((content: interfaceContent, idx: any) => {
            return (
              <Link to={`/ViewComplaint/${content.complaint_id}`} className="">
                <div className="flex place-content-between py-2">
                  <div className="flex">
                    <img
                      src={content.profile}
                      className="w-[17px] h-[17px]"
                      alt="loading..."
                    />
                    <p className="text-[11px] font-bold px-1">
                      {content.username}
                    </p>
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
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold">{content.title}</p>
                  <p className="py-1 text-[11px]">{content.text}</p>
                </div>
              </Link>
            );
          });
        })}
      </div>
    </div>
  );
}

export default ViewMore;
