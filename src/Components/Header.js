import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Box, TextField } from "@mui/material";
import "./style.css";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const headerStrap = {
    backgroundColor: "blue",
    width: "100%",
    height: "4rem",
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
              </div>
              <div className="col-6">
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
                <Box
                  style={{ padding: "0.5rem", margin: "0rem" }}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    label="Name"
                    fullWidth
                  />
                </Box>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            Save
          </button>
          <button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
      <div style={headerStrap} className="headerStrap">
        <div>
          <img src="img" logo="logo" />
        </div>
        <div>
          <span>
            <button className="btn btn-light" onClick={() => handleShow()}>
              +
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
