import React from "react";
import { use } from "react";
import { useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-secondary">
        <div className="container">
          <a className="navbar-brand text-light">Todo-list</a>
          <form className="d-flex" role="search">
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;