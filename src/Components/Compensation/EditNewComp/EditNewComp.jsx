import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./EditNewComp.scss";

// UI
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Loader from "../../UI/Loader/Loader";

const EditNewComp = (props) => {
  let data = props.data;

  const { t } = useTranslation();
  const [formValues, setFormValues] = useState({
    fullName: data ? data.fullName : "",
    phone: data ? data.phone : "",
    address: data ? data.address : "",
    comment: data ? data.comment : "",
    compensation: data ? data.compensation : "",
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  //   form fields..
  let formInputs = [
    {
      label: t("compensation.fullName"),
      name: "fullName",
      value: formValues.fullName,
      type: "text",
    },
    {
      label: t("compensation.phone"),
      name: "phone",
      value: formValues.phone,
      type: "text",
    },
    {
      label: t("compensation.address"),
      name: "address",
      value: formValues.address,
      type: "text",
    },
    {
      label: t("compensation.comment"),
      name: "comment",
      value: formValues.comment,
      type: "text",
    },
    {
      label: t("compensation.compensation"),
      name: "compensation",
      value: formValues.compensation,
      type: "text",
    },
  ];

  //   update form values hook
  const handelChange = (e) => {
    let temp = { ...formValues };
    setFormValues({ ...temp, [e.target.name]: e.target.value });
  };

  // title
  let modalTitle = t("compensation.modalTitleNew");
  if (props.data) {
    modalTitle = t("compensation.modalTitleEdit");
    if (!props.data.status && !editMode) {
      modalTitle = t("compensation.modalTitleConfirm");
    }
  }

  //   render th form
  let form = null;
  if (!loading) {
    if (editMode || !props.data || props.data.status) {
      form = formInputs.map((item, idx) => {
        return (
          <Input
            key={idx}
            type={item.type}
            label={item.label}
            onChange={handelChange}
            value={item.value}
            name={item.name}
          />
        );
      });
    }
  }

  //   modal action buttons
  let btn = null;
  if (!loading) {
    btn = (
      <div className="btns-row">
        <Button
          text={t("compensation.addNewBtn")}
          onClick={() => alert("post")}
        />
      </div>
    );
    if (props.data) {
      btn = (
        <div className="btns-row">
          <Button
            text={t("compensation.updateBtn")}
            onClick={() => alert("update")}
            //   className="greenBtn"
          />
          <Button
            text={t("compensation.delete")}
            onClick={() => alert("delete")}
            className="redBtn"
          />
        </div>
      );
      if (!props.data.status && !editMode) {
        btn = (
          <div className="btns-row">
            <Button
              text={t("compensation.confirm")}
              onClick={() => alert("post confirm")}
              className="greenBtn"
            />
            <Button
              text={t("compensation.modalTitleEdit")}
              onClick={() => setEditMode(true)}
              // className="redBtn"
            />
          </div>
        );
      }
    }
  }

  //   shoe loader..
  let loader = null;
  if (loading) {
    loader = <Loader />;
  }

  return (
    <Modal close={props.close} closeBtn className="EditNewComp">
      <span className="modal-title">{modalTitle}</span>
      {form}
      {btn}
      {loader}
    </Modal>
  );
};

export default EditNewComp;
