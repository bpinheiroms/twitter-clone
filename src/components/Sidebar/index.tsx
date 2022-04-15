import { HomeIcon } from '@heroicons/react/solid';
import { UserIcon } from '@heroicons/react/outline';
import SidebarLink from '../SideBarLink';
import { useRouter } from 'next/router';
import { userDataMock } from '../../data';

function Sidebar() {
  const router = useRouter();

  const onProfileClick = () => {
    const newQuery = { ...router?.query, profile: userDataMock.username };

    router.push({
      pathname: '/',
      query: newQuery,
    });
  };

  return (
    <div className="md:fixed sm:fixed flex-col items-center xl:items-start xl:w-[340px] p-2 h-full">
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink
          text="User Profile"
          Icon={UserIcon}
          onClick={onProfileClick}
        />
      </div>
    </div>
  );
}

export default Sidebar;
