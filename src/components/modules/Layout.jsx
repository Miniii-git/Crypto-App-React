import React from "react";
import styles from "./layout.module.css";
import { FaCoins } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <span>
          <FaCoins />
        </span>
        <h1>Crypto App</h1>
      </div>

      {children}

      <div className={styles.footer}>
        <div className={styles.about}>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>

            <p>mroostapoor@gmail.com</p>
            <p>youremail@gmail.com</p>
          </div>

          <div className={styles.links}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
        <hr />
        <h5>
          <a href="#" id={styles.mini}>
            Made By Mini ♥
          </a>{" "}
          | React.js
        </h5>
      </div>
    </>
  );
}

export default Layout;
