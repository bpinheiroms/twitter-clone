import { HomeIcon } from '@heroicons/react/solid';
import { UserIcon } from '@heroicons/react/outline';
import SidebarLink from '../SideBarLink';

function Sidebar() {
  return (
    <div className="md:fixed sm:fixed flex-col items-center xl:items-start xl:w-[340px] p-2 h-full">
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="User Profile" Icon={UserIcon} />
      </div>
    </div>
  );
}

export default Sidebar;
