import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <input
          type="text"
          className="doc__name"
          placeholder="Untitled document"
        />
        <div className="docs__menubar">
          <span className="docs__menuitem">File</span>
          <span className="docs__menuitem">Edit</span>
          <span className="docs__menuitem">View</span>
          <span className="docs__menuitem">Insert</span>
          <span className="docs__menuitem">Format</span>
          <span className="docs__menuitem">Tools</span>
          <span className="docs__menuitem">Extensions</span>
          <span className="docs__menuitem">Help</span>
        </div>
      </div>
      <div className="header__right">
        <div className="share__button">
          <span>Share</span>
        </div>
        <div className="google__image">
          <img
            src="https://lh3.googleusercontent.com/fife/APg5EOZJqB7SXM-oNyx7c5Y44lQ3hBkfo_pzr4t1HCtwXnH_QFJ5oCq2JmidDisIha_Iz2Mn5J78SFqESGGPiA8jHHu--LC358yafFBzf7mMh0W1UHs3UjOvmcztP33hH7NhDQPyBQiI80HpqK60fSu1mYUC6zAKQreBAhC4MOwGlYJ0PYwrVenE_izaR8dT61313ZbYqVMZdrSSi5gcNrhR7bBiyLY_wfDKGZ0GBYBAFDGAFMnIZrRbAc5P4YIhBbn-tYCOGCJ1IISvpbbgGwV8XUAvC_fJUVZV4VLjBZEVYXqvtfsCb9pdtD3T5RVdFlLHPqJK-KubECsSYGdv2EjG6UVelpJnGTh0ESdwcYg7Jni-UuvFNM2A-_qmQlLOY7qI9K5sBrwaGlgEmXyZ7CjxgceRjsINnouvvcMCDxVZzpukwjdUOTwUKHuuBiHJVHxpBMmU9kxdipoW_3QFWJJq-BhmNWdXdLulntYi9AAv0mELm8E0o49ySC243hduvzaETh1h7gGGM1UsIg6Dqln5524569jnXFqIuuztlJKt-vVsu2PIVeMfDpmVYIiHKIqcE2WSJ7BYjSgD8c0fCXbKWd-tSvvnirQVGnYkGjwfG80PeJ96IB_U-4t83Glz_ai4A8SqNmY69rypnt458WgS5er8FnXI49HQVIb5gskAUtjJSN-RQMz4O9qfof9cUDuT1OfxUO71ERW1CSBpRIDfrowWTh-_c7m6X5kdJcWyvhbml-fgQV2bwdAuekMoFlQc3sS4dih8-IFHXO6QZE38SwIeC2ghhms1V0GOSwRCPCVDXIau3w2t3yu7MBoLK4Lx5qxEPQ6cN1nVLV9IEejfWytL8IdKIA-JLZd4eA1TKlPuOxfHBFDjaG9HXYU2BGuZbRDaX-6t9CFSQwNv8JfHgnNgq-_z1PM5HRn4HoD-fdA3hTvT994x-xSF1uUoIE1_9EAEPQol_ao7Lwzl0jFjAhX2aI5q9-1z0LIDvhpyIMtKJuOU4T7kYXqxSyBn47heE_0C1VoNec9pcizhGct0IGfUOX4qMQ33xt2ZyjaoZiGfNm6SLwMUR5npiZLvORbgn11d9TQjykAYWiw5gO4mpZTzt9sGWVe3GfN7KYsDb0NhJLxbzAv5LvkT23fcRDxymuVukjiKae9bLEd__JfvEvanRgTudGwme3LZ6310hzFj6bWvIbku8TQgUZZjI0km6xPfeMXImsxVL3AX5Vwz9rKzMVgvpKnXHf9i2a-5_cl_v6BIasyCNu5Jx_vqBrF0yei4tNeVym5cuZAAXUw_YcHPZpcZY7mcJpeFIawyhOAfLOsEUrFU9KeOXdrG1a_4tAl-n8LxJHCHCbb_pDC4ThTGkSoc7_2AqgUoN_sd-ibmjw5w6O9JVvatscnnSyg=s32-c"
            alt="google__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
