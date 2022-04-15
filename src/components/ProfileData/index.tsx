import Moment from 'react-moment';
import { IUsers } from '../../interfaces';
import { CalendarIcon } from '@heroicons/react/outline';
import { followingListState } from '../../store/profile/atoms';
import { useSetRecoilState } from 'recoil';

interface IProps {
  user: IUsers;
  postsCount: number;
  isMe: boolean;
  followedByMe: boolean;
}

const ProfileData: React.FC<IProps> = ({
  user,
  postsCount,
  isMe,
  followedByMe,
}) => {
  const setFollowingListState = useSetRecoilState(followingListState);

  const followUnFollowHandle = () => {
    if (!followedByMe) {
      setFollowingListState((oldList: number[]) => [...oldList, user.idUser]);
      return;
    }

    setFollowingListState((oldList: number[]) =>
      oldList.filter((element: number) => element !== user.idUser),
    );
  };

  return (
    <div className="text-white relative">
      <div className="mb-1 ">
        <p>{user?.nameUser}</p>
        <p className="text-slate-400 text-sm">@{user?.username}</p>
      </div>

      <div className="flex text-slate-400 text-sm mb-3">
        <CalendarIcon className="text-slate-400  h-5 z-50 mr-2" />
        <p className="mr-2">Joined</p>{' '}
        <Moment format="MMM DD, YYYY">{user?.joined}</Moment>
      </div>
      <div className=" mb-5 w-full border-b-2 border-slate-400 pb-3">
        <div className="flex">
          <p className="flex items-center ">
            {user?.followers}
            <span className="ml-1 mr-5 text-slate-400 text-sm">Followers</span>
          </p>
          <p className="flex items-center">
            {user?.following}
            <span className="ml-1 mr-5 text-slate-400 text-sm">Following</span>
          </p>
          <p className="flex items-center">
            {postsCount}
            <span className="ml-1 mr-5 text-slate-400 text-sm">Posts</span>
          </p>
        </div>

        {!isMe && (
          <button
            onClick={followUnFollowHandle}
            className={`absolute top-0 right-0 ${
              followedByMe
                ? 'bg-black text-slate-200 border-2 border-slate-400'
                : 'bg-slate-200 text-black  hover:bg-slate-300'
            }  rounded-full px-4 py-1.5 font-bold shadow-md `}>
            {followedByMe ? 'Unfollow' : 'Follow'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileData;
