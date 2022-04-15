import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IPostItem } from '../../interfaces';
import { dataByUserNameState } from '../../store/feed/selectors';
import { profileModalState } from '../../store/modals/atoms';
import Modal from '../Modal';
import PostInput from '../PostInput';
import PostItem from '../PostItem';
import ProfileData from '../ProfileData';

const ProfileModal = () => {
  const [profileModal, setProfileModal] = useRecoilState(profileModalState);

  const { user, posts, followedByMe, isMe } =
    useRecoilValue(dataByUserNameState);

  const router = useRouter();

  useEffect(() => {
    if (!!router?.query?.profile) {
      const profileQuery = router?.query?.profile.toString();

      setProfileModal({
        opened: true,
        username: profileQuery,
      });
    } else {
      setProfileModal({
        opened: false,
        username: '',
      });
    }
  }, [router?.query]);

  const onClose = () => {
    const newQuery = router?.query;
    delete newQuery['profile'];

    router.push({
      pathname: '/',
      query: newQuery,
    });
  };

  if (!user) {
    return <></>;
  }

  return (
    <Modal opened={profileModal.opened} onClose={onClose}>
      <ProfileData
        user={user}
        postsCount={posts?.length ?? 0}
        isMe={isMe}
        followedByMe={followedByMe}
      />

      {isMe && <PostInput />}

      {posts?.map((post: IPostItem) => (
        <PostItem key={post.id} post={post} disabledFooter />
      ))}
    </Modal>
  );
};

export default ProfileModal;
