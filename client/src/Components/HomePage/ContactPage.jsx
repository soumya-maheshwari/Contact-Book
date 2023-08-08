import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as ReactBootstrap from "react-bootstrap";
import { addContactThunk } from "../../Redux/contactSlice";

const ContactPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = React.useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const sm = useSelector((state) => state.contact);
  // console.log(sm);

  const user = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(user.accessToken);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const userData = {
    name,
    email,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(name && email && phone)) {
      toast.error(`Please enter all the fields`, {
        position: "top-right",
        // theme: "DARK",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    dispatch(addContactThunk(userData)).then((res) => {
      console.log(res);

      if (res.payload.data.success) {
        toast.success(`${res.payload.data.msg}`, {
          position: "top-right",
          // theme: "DARK",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setName("");
        setEmail("");
        setPhone("");
      }
      // setOpen(false);

      const currentContact = {
        name: name,
        email: email,
        phone: phone,
        _id: 1,
      };

      setContacts([currentContact, ...contacts]);

      return res;
    });
  };

  useEffect(() => {
    setLoading(sm.isLoading);
  }, [sm]);

  return (
    <>
      <div className="contact-page">
        <button
          className="btn btn-outline-light btn-lg px-5"
          type="submit"
          onClick={handleClickOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
            marginBottom: "3vh",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "2vh",
          }}
        >
          Create Contact
        </button>

        <Dialog open={open} onClose={handleClose}>
          <div className="dialog-class">
            <DialogTitle fontSize={"20px"} color={"white"}>
              {" "}
              NEW CONTACT
            </DialogTitle>
            <form className="form-class" onSubmit={handleSubmit}>
              <label className="label-class">Name</label>
              <input
                type="text"
                id="input-class"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="label-class">Email</label>
              <input
                type="text"
                id="input-class"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <label className="label-class">Phone No.</label>
              <input
                type="text"
                id="input-class"
                placeholder="Enter Phone Number"
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
                  //   position: "absolute",
                  transform: "translateX(-50%)",
                  marginTop: "2vh",
                }}
              >
                ADD
              </button>
              {loading ? (
                <div className="loading-overlay">
                  <ReactBootstrap.Spinner
                    animation="border"
                    className="spinner"
                    variant="success"
                  />
                </div>
              ) : null}
            </form>
          </div>
        </Dialog>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactPage;
