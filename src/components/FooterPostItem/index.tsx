import { ReplyIcon, SwitchHorizontalIcon } from '@heroicons/react/outline';

const FooterPostItem = () => {
  return (
    <div className="text-slate-400 flex space-x-10 w-full mx-auto pt-2">
      <div className="icon group">
        <ReplyIcon className="h-5 group-hover:text-blue-400" />
      </div>
      <div className="icon group">
        <SwitchHorizontalIcon className="h-5 group-hover:text-green-300" />
      </div>
    </div>
  );
};

export default FooterPostItem;
