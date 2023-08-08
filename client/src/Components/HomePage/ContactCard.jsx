import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import * as ReactBootstrap from "react-bootstrap";
import edit from "../../Assets/edit.svg";
import del from "../../Assets/bin.svg";

const ContactCard = ({ contactID, id, name, email, phone }) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleEdit = () => {};
  const handleClickOpen = () => {
    setOpen(true);
    // console.log(editID);
  };

  const handleClickOpen2 = () => {
    // console.log(deleteID);
    setOpen2(true);
  };
  const handleCancelDelete = (e) => {
    e.preventDefault();

    setOpen2(false);
  };
  const handleDelete = () => {};
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
