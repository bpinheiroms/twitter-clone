import { SearchIcon } from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import useDebounce from '../../../hooks/useDebounce';
import { feedListFilterState } from '../../../store/feed/atoms';

const SearchInput = () => {
  const [filter, setFilter] = useRecoilState(feedListFilterState);

  const filterPosts = (value: any) => {
    setFilter({ searchText: value, isFollowing: filter.isFollowing });
  };

  const debouncedChange = useDebounce(filterPosts, 500);

  const onChange = (event: any) => {
    debouncedChange(event.target.value);
  };

  return (
    <div className="ml-1 w-full py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex  bg-[#202327] p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            onChange={onChange}
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
