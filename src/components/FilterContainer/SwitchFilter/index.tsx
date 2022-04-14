import { useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import { feedListFilterState } from '../../../store/feed/atoms';
import { useRouter } from 'next/router';

const SwitchFilter = () => {
  const router = useRouter();

  const [filter, setFilter] = useRecoilState(feedListFilterState);

  const onChange = () => {
    const param = filter ? 'all' : 'following';
    router.push(`/?filter=${param}`, undefined, { shallow: true });
  };

  useEffect(() => {
    if (!!router?.query?.filter) {
      const filter = router?.query?.filter.toString().toLowerCase();

      if (filter === 'all' || filter === 'following') {
        setFilter(filter === 'following');
      }
    }
  }, [router?.query]);

  return (
    <div className="flex  text-slate-400 pt-5">
      <p>All</p>
      <Switch
        checked={filter}
        onChange={onChange}
        className={`${filter ? 'bg-blue-400' : 'bg-slate-400'}
         ml-2 mr-2 relative inline-flex flex-shrink-0 h-[23px] w-[40px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${filter ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <p>Following</p>
    </div>
  );
};

export default SwitchFilter;
