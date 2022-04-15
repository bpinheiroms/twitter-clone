import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { profileModalState } from '../../store/modals/atoms';
import Modal from '../Modal';

const ProfileModal = () => {
  const [profileModal, setProfileModal] = useRecoilState(profileModalState);

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
  return (
    <Modal opened={profileModal.opened} onClose={onClose}>
      <p>profile here</p>
    </Modal>
  );
};

export default ProfileModal;
