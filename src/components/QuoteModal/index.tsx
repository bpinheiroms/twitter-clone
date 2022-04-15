import { useRecoilState } from 'recoil';
import { quoteModalState } from '../../store/modals/atoms';
import Modal from '../Modal';
import PostInput from '../PostInput';

const QuoteModal = () => {
  const [quoteModal, setQuoteModal] = useRecoilState(quoteModalState);

  const onClose = () => {
    setQuoteModal({
      opened: false,
      post: undefined,
    });
  };

  return (
    <Modal opened={quoteModal.opened} onClose={onClose}>
      <PostInput isFromModal />
    </Modal>
  );
};

export default QuoteModal;
