import { ReplyIcon } from '@heroicons/react/outline';

const RetweetFlag = () => {
  return (
    <span className="flex text-sm sm:text-[15px] text-slate-400 ">
      <div className="mr-2 icon group">
        <ReplyIcon className="h-5 group-hover:text-blue-400" />
      </div>
      You Retweeted
    </span>
  );
};

export default RetweetFlag;
