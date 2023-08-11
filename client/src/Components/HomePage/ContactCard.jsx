import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import * as ReactBootstrap from "react-bootstrap";
import edit from "../../Assets/edit.svg";
import del from "../../Assets/bin.svg";
import {
  deleteNoteThunk,
  editContact,
  editContactThunk,
} from "../../Redux/contactSlice";
import linkedinImg from "../../Assets/linkedin.svg";
import twitterImg from "../../Assets/twitter.svg";
import instaImg from "../../Assets/instagram.svg";
import githubImg from "../../Assets/github.svg";
import fbImg from "../../Assets/facebook.svg";

const ContactCard = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [deleteID, setDeleteID] = useState("");
  const [editID, setEditID] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [FaceBook, setFacebook] = useState("");
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log(props.id, "id-1");
    dispatch(editContactThunk(props.id))
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.reponse;
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
    setEditID(props.id);
    console.log(editID);
  };

  const handleClickOpen2 = () => {
    // setDeleteID(props._id);
    // console.log(id);
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

    dispatch(deleteNoteThunk())
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.reponse;
      });

    dispatch(editContact());
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
                    type="submit"
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

                <form className="form-class" onSubmit={handleEdit}>
                  <label className="label-class">Name</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Edit name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="label-class">Email</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Edit email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <label className="label-class">Phone No.</label>
                  <input
                    type="text"
                    id="input-class"
                    placeholder="Edit Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <form className="form-class" onSubmit={handleDelete}>
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
            <h5 className="card-title">Contact Information</h5>
            <hr />
            <p className="card-text">Name: {props.name} </p>
            <p className="card-text">Email:{props.email} </p>
            <p className="card-text">Phone: {props.phone}</p>
            <p className="card-text">
              <img src={linkedinImg} alt="" className="icon-class" />
              {/* {linkedin} */}
            </p>
            <p className="card-text">
              <img src={instaImg} alt="" className="icon-class" />
              {/* {instagram} */}
            </p>
            <p className="card-text">
              <img src={twitterImg} alt="" className="icon-class" />
              {/* {twitter} */}
            </p>
            <p className="card-text">
              <img src={githubImg} alt="" className="icon-class" />
              {/* {github} */}
            </p>
            <p className="card-text">
              <img src={fbImg} alt="" className="icon-class" />
              {/* {fb} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
