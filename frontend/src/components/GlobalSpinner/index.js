import React from "react";
import { Spinner, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./spinner.scss";

const GobalSpinner = (props) => {
  const { loader } = props;
  return loader ? (
    <Modal
      show={loader}
      dialogClassName="modal-spinner"
      backdrop="static"
      keyboard={false}
      backdropClassName={"spinnerBackdrop"}
      centered
    >
      <Spinner animation="border" className={"spinnerLg"} />
    </Modal>
  ) : null;
};

const mapStateToProps = (state) => ({
  loader: state.loader.loader,
});

export default connect(mapStateToProps, null)(GobalSpinner);
