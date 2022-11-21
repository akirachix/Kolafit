import React from "react";
import "./style.css";
import { axiosInstance } from "../Utils-Folder/Useaxios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Details() {
  const [user, setUser] = useState({
    location: "",
    id_number: "",
    id_picture: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    location: Yup.string().required("location is required"),
    id_number: Yup.string().required("id_number is required"),
    upload_id: Yup.string().required("upload_id  is required"),
    upload_id: Yup.object()
      .shape({ name: Yup.string().required("upload id") })
      .label("File"),
  });
  const submitDetails = () => {
    const { location, id_number, id_picture } = user;
    if (location && id_number && id_picture) {
      console.log(user);
      var data = new FormData();
      data.append("location", location);
      data.append("id_number", id_number);
      data.append("id_picture", id_picture);
      console.log(data);
      // data.append('customer', '2');
      axiosInstance
        .post(
          "https://frozen-mesa-94052.herokuapp.com/api/identification/",
          data
        )
        .then((res) => {
          console.log(res);
          //   toast('You have successfully been registered to Kolafit, Login to continue')
          navigate("/uploadetails");
        })
        .catch((error) => {
          console.log(error);
          //   toast('Unable to register, to try again')
        });
    } else {
      console.log(user);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className="Details">
      {/* <div className="logo">
        <img className="logo" src={kolafit} alt="Logo"></img>
      </div> */}
      <div className="fill">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Location">
            <input
              className="container"
              type="text"
              placeholder=" Location"
              name="location"
              {...register("location")}
              onChange={handleChange}
            ></input>
          </div>
          <div className="Id">
            <input
              className="container"
              type="number"
              placeholder=" Id number"
              name="id_number"
              {...register("id_number")}
              onChange={handleChange}
            ></input>
          </div>
          <div className="Upload">
            <input
              className="container"
              type="file"
              placeholder=" upload picture"
              accept="image/*"
              name="id_picture"
              {...register("id_picture")}
              onChange={handleChange}
            ></input>
          </div>
          <div className="But">
            <Link to="/">
              <button className="previous" type="submit">
                Back
              </button>
            </Link>
            {/* <Link to="/uploadetails"> */}
            <button className="proceed" type="submit" onClick={submitDetails}>
              {" "}
              Proceed{" "}
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Details;
