import React, { useState } from "react";
import styled from "styled-components";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`;
const Center = styled.div`
  display: flex;
  justifycontent: center;
  text-align: center;
`;
const BasicHeader = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      {/* Top BasicHeader */}
      <div className="Announcement ">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      {/* BasicHeader */}
      <div className="BasicHeader">
        <div className="container">
          {/* PC BasicHeader */}
          <div className="pc-BasicHeader">
            <div className="row " style={{ justifyContent: "space-between" }}>
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Center>
                  <Logo>
                    <img alt="logo" src="/img/flamingoCircle.png" style={{height:"50px", marginRight:"10px"}}></img>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Flamingo.
                    </Link>
                  </Logo>
                </Center>
              </div>

              <div
                className="col-md-3 d-flex align-items-center justify-content-end Login-Register"
                style={{
                  background: "#FFFFFF",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicHeader;
