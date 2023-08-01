import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import ComplaintBlock from '@/components/ComplaintBlock';
import Block from '@/components/Block';

function Community() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Community' }));
  }, []);

  return (
    <div className="w-full px-5 pb-[80px] pt-4">
      <Block
        title="Best Posts"
        category="Community"
        subcategory="popular"
        query="/?size=2&page=1"
      />
      <div className="my-4">
        <Block
          title="Tips"
          category="Community"
          subcategory="protected"
          query="/?size=2&page=1"
        />
      </div>
      <Block
        title="Recent Posts"
        category="Community"
        subcategory="popular"
        query="/?size=2&page=1"
      />
    </div>
  );
}

export default Community;
