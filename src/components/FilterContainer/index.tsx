import SearchInput from './SearchInput';
import SwitchFilter from './SwitchFilter';

const FilterContainer = () => {
  return (
    <div className="border-b border-gray-700 p-3 flex space-x-3 scrollbar-hide">
      <div className=" w-full flex">
        <SearchInput />
        <SwitchFilter />
      </div>
    </div>
  );
};

export default FilterContainer;
