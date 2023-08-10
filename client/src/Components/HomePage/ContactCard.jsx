import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import * as ReactBootstrap from "react-bootstrap";
import edit from "../../Assets/edit.svg";
import del from "../../Assets/bin.svg";
import plus from "../../Assets/plus.svg";
import { deleteNoteThunk } from "../../Redux/contactSlice";

const ContactCard = ({ contactID, id, name, email, phone }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [deleteID, setDeleteID] = useState("");

  const [Instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [FaceBook, setFacebook] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleEdit = () => {};
  const handleClickOpen = () => {
    setOpen(true);
    // console.log(editID);
  };

  const handleClickOpen2 = () => {
    setDeleteID(id);
    console.log(id);
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleCancelDelete = (e) => {
    e.preventDefault();

    setOpen2(false);
  };
  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteNoteThunk(id));
  };
  return (
    <>
      <div className="container mt-3">
        <div className="card">
          <div className="btns">
            <button className="edit-btn" onClick={handleClickOpen}>
              <img src={edit} alt="edit" />
            </button>
            <Dialog open={open} onClose={handleClose}>
              <div className="dialog-class">
                <DialogTitle fontSize={"20px"} color={"white"}>
                  {" "}
                  <button
                    style={{
                      outline: "none",
                      background: "none",
                    }}
                    onClick={handleClickOpen3}
                  >
                    <span
                      className="span-class"
                      style={{
                        paddingRight: "19px",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "white",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <Dialog open={open3} onClose={handleClose3}>
                    <div className="dialog-class">
                      <DialogTitle fontSize={"20px"} color={"white"}>
                        {" "}
                        ADD MORE DETAILS
                      </DialogTitle>

                      <form
                        className="form-class"
                        //  onSubmit={handleSubmit}
                      >
                        <label className="label-class">LinkedIn</label>
                        <input
                          type="text"
                          id="input-class"
                          placeholder="Enter LinkedIn URL"
                          value={linkedin}
                          onChange={(e) => setLinkedin(e.target.value)}
                        />
                        <label className="label-class">GitHub</label>
                        <input
                          type="text"
                          id="input-class"
                          placeholder="Enter GitHub Profile"
                          value={github}
                          onChange={(e) => setGithub(e.target.value)}
                        />{" "}
                        <label className="label-class">Instagram</label>
                        <input
                          type="text"
                          id="input-class"
                          placeholder="Enter Instagram ID"
                          value={Instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                        <label className="label-class">Twitter</label>
                        <input
                          type="text"
                          id="input-class"
                          placeholder="Enter Twitter UserName"
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                        <label className="label-class">FaceBook</label>
                        <input
                          type="text"
                          id="input-class"
                          placeholder="Enter FaceBook ID"
                          value={FaceBook}
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                        <button
                          className="btn btn-outline-light btn-lg px-5 add"
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            textAlign: "center",
                            marginBottom: "3vh",
                            // position: "absolute",
                            // transform: "translateX(-50%)",
                            // marginTop: "2vh",
                            width: "60px",
                          }}
                        >
                          EDIT
                        </button>
                        {/* {loading ? (
                <div className="loading-overlay">
                  <ReactBootstrap.Spinner
                    animation="border"
                    className="spinner"
                    variant="success"
                  />
                </div>
              ) : null} */}
                      </form>
                    </div>
                  </Dialog>
                  EDIT CONTACT
                </DialogTitle>

                <form
                  className="form-class"
                  //  onSubmit={handleSubmit}
                >
                  <label className="label-class">Name</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Enter name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <label className="label-class">Email</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Enter email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <label className="label-class">Phone No.</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Enter Phone Number"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-light btn-lg px-5 add"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                      marginBottom: "3vh",
                      // position: "absolute",
                      // transform: "translateX(-50%)",
                      // marginTop: "2vh",
                      width: "60px",
                    }}
                  >
                    EDIT
                  </button>
                  {/* {loading ? (
                <div className="loading-overlay">
                  <ReactBootstrap.Spinner
                    animation="border"
                    className="spinner"
                    variant="success"
                  />
                </div>
              ) : null} */}
                </form>
              </div>
            </Dialog>

            <button className="del-btn" onClick={handleClickOpen2}>
              <img src={del} alt="delete" />
            </button>
            <Dialog open={open2} onClose={handleClose2}>
              <div className="dialog-class">
                <DialogTitle fontSize={"20px"} color={"white"}>
                  {" "}
                  DELETE CONTACT
                </DialogTitle>
                <form
                  className="form-class"
                  //  onSubmit={handleSubmit}
                >
                  <label className="label-class">
                    {" "}
                    Are you sure you want to delete this contact?
                  </label>
                  <div className="two-btns">
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-lg px-5 "
                      onClick={handleDelete}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        textAlign: "center",
                        marginBottom: "3vh",
                        // position: "absolute",
                        // transform: "translateX(-50%)",
                        // marginTop: "2vh",
                        // width: "60px",
                      }}
                    >
                      YES
                    </button>
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-lg px-5 "
                      onClick={handleCancelDelete}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        textAlign: "center",
                        marginBottom: "3vh",
                        // position: "absolute",
                        // transform: "translateX(-50%)",
                        // marginTop: "2vh",

                        width: "60px",
                        marginLeft: "1vw",
                      }}
                    >
                      NO
                    </button>
                  </div>

                  {/* {loading ? (
                <div className="loading-overlay">
                  <ReactBootstrap.Spinner
                    animation="border"
                    className="spinner"
                    variant="success"
                  />
                </div>
              ) : null} */}
                </form>
              </div>
            </Dialog>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Contact Information
              {/* <div className="btns">
                <button className="edit-btn">
                  <img src={edit} alt="edit" />
                  <img src={del} alt="" className="del-btn" />
                </button>
              </div> */}
            </h5>
            <hr />
            <p className="card-text">Name: {name} </p>
            <p className="card-text">Email:{email} </p>
            <p className="card-text">Phone: {phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
