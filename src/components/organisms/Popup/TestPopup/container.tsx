import TestPopup from "./TestPopup"

interface IContainerPros {
    onClose: () => void
    showPopup: boolean
}

const Container = ({ onClose, showPopup }: IContainerPros) => {
    return <>
        <TestPopup showPopup={showPopup} onClose={onClose} />
    </>
}

export default Container