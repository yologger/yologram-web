import styled, { theme } from '~/styledComponents';

import Popup from '~/components/molecules/Popup';
import OutlinedButton from '~/components/atom/button/OutlinedButton';

interface IProps {
    onClose: () => void
    showPopup: boolean
}

const TestPopup = ({ onClose, showPopup }: IProps) => {
    const children = <PopupContent>
        <div>This is TestPopup</div>
        <OutlinedButton type='button' onClick={onClose}>Close</OutlinedButton>
    </PopupContent>

    return <Popup children={children} showPopup={showPopup} />
}

const PopupContent = styled.div`
  width: 700px;
  background: ${({ theme }) => theme.color.white};
`

export default TestPopup