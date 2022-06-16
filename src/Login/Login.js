import React,{useState} from "react";
import "antd/dist/antd.min.css";
import { Checkbox, message } from "antd";
import login_img from "./login_desktop.png";
import "./Login.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [checked, setChecked] = useState(true);
  const onChange = (e) => {
    console.log("State of Checkbox = " + !checked)
    setChecked(e.target.checked);
  };
  const onSubmit = (data) => {
    axios.post("https://reqres.in/api/login", data).then((response) => {
      console.log(response.data);
      message.info('Login Successful');
    }).catch(function(error){
      if(error.response){
        console.log(error.response.data);
        message.info('Missing Password');
      }
    });
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  return (
    <div style={{ display: "flex" }}>
      <div className="loginContainer">
        <div
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#00171F",
            minWidth: "30%",
          }}
        >
          Welcome Back
        </div>
        <div style={{ fontSize: "10px" }}>Sub-title text goes here</div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form
            className="widthAdjust"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Field
              className="loginStyle"
              id="inputUser"
              name="email"
              placeholder="Email Address *"
            />
            <Field
              className="loginStyle"
              id="inputUsers"
              type="password"
              name="password"
              placeholder="Password *"
            />
            <button
              className="loginStyle"
              type="submit"
              style={{
                background: "#023047",
                color: "#FBFAFC",
                display: "block",
                borderRadius: "2px",
              }}
            >
              Login
            </button>
          </Form>
        </Formik>
        <div style={{color:'#00171F',display:'flex',marginLeft:'10px'}}>
        <Checkbox checked={checked} onChange={onChange}></Checkbox>Rememeber Password
        <div style={{marginLeft:'auto'}}>Forgot Password?</div>
        </div>
      </div>
      <div style={{width:'70%'}}>
      <img style={{marginLeft:'auto',width:'100%'}} src={login_img} alt="ATools." />
      </div>
    </div>
  );
}
