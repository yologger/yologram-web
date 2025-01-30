import styled from '~/styles';

import Popup from '../../template/Popup';
import OutlinedButton from '~/components/atom/button/OutlinedButton';

interface TestPopupProps {
  onClose: () => void;
  showPopup: boolean;
}

const TestPopup = ({ onClose, showPopup }: TestPopupProps) => {
  return (
    <Popup showPopup={showPopup}>
      <TestPopupWrapper>
        <div>This is TestPopup</div>
        <OutlinedButton type="button" onClick={onClose}>
          Close
        </OutlinedButton>
      </TestPopupWrapper>
    </Popup>
  );
};

const TestPopupWrapper = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.color.white};
`;

export default TestPopup;
