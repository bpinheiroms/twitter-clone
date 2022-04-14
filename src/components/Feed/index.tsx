import ListPosts from '../ListPosts';
import PostInput from '../PostInput';
import FilterContainer from '../FilterContainer';

const Feed = () => {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      </div>
      <PostInput />
      <FilterContainer/>
      <ListPosts />
    </div>
  );
};

export default Feed;
