import React from 'react';
import { useTranslation } from "react-i18next";
import './EditNewComp.scss';

// UI
import Modal from '../../UI/Modal/Modal';

const EditNewComp = props => {
    const { t } = useTranslation();

    // title
    let modalTitle = t('compensation.modalTitleNew');
    if(props.data) {
        modalTitle = t('compensation.modalTitleEdit')
    }
    return (
        <Modal close={props.close} closeBtn>
            <span className="modal-title">{modalTitle}</span>
        </Modal>
    )
}

export default EditNewComp;