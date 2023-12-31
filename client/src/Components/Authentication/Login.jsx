import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as ReactBootstrap from "react-bootstrap";
import { loginUser } from "../../Redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sm = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(sm);

  useEffect(() => {
    setLoading(sm.isLoading);
  }, [sm]);

  const userData = {
    email,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData)).then((res) => {
      return res;
    });
  };

  useEffect(() => {
    if (sm.isSuccess) {
      toast.success(`${sm.response}`, {
        position: "top-right",
        // theme: "DARK",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/contactPage");
      }, 3000);

      localStorage.setItem("userInfo", JSON.stringify(sm.profile));
    } else {
      if (sm.response !== "") {
        toast.error(`${sm.response}`, {
          position: "top-right",
          // theme: "DARK",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // }
      }
    }
  }, [sm]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <section className="vh-100 gradient-custom">
          <div className="container py-3 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your Email and Password!
                      </p>

                      <div className="form-outline form-white mb-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="typeEmailX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div className="form-outline form-white mb-3">
                        <input
                          type="password"
                          id="typePasswordX"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>

                      <p className="small mb-3 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
