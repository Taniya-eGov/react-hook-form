import React, { useState } from "react";
// import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { Grid} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import {Form} from "./components/Form";
import {Input} from "./components/Input";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@material-ui/core";
import { useMutation} from "react-query";
import service from "./services";

const schema = yup.object().shape({
  empfname: yup.string().required("First Name should be required please"),
  emplname: yup.string().required(),
  emailid: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  city: yup.string().required(),
  phoneNo: yup.string().min(10).max(10).required(),
});

function Forms() {
  // const [data,setData]=useState();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const create=useMutation(service.create);
  const navigate=useNavigate();

  const submitForm = (data) => {
    console.log(data);
    create.mutate({...data});
    // onClick={()=>{navigate("/emp")}}
    // alert("Employee is created");
    navigate("/emp");
  };
  return (
    <>
            <MainContainer>
      <Typography component="h2" variant="h5">
        Create Employee
      </Typography>
        <Form onSubmit={handleSubmit(submitForm)} >
          <Input
            type="text"
            name="empfname"
            ref={register}
            placeholder="First Name..."
          />
          <p> {errors.empfname?.message} </p>
          <Input
            type="text"
            name="emplname"
            placeholder="Last Name..."
            ref={register}
          />
          <p> {errors.emplname?.message} </p>
          <Input
            type="text"
            name="emailid"
            placeholder="Email..."
            ref={register}
          />
          <p> {errors.emailid?.message} </p>
          <Input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p>
          <Input
            type="text"
            name="city"
            placeholder="city..."
            ref={register}
          />
          <p> {errors.city?.message} </p>
          <Input
            type="number"
            name="phoneNo"
            placeholder="Phone number..."
            ref={register}
          />
          <p> {errors.phoneNo?.message} </p>
          <Input type="submit" id="submit" 
          //  onClick={()=>{navigate("/emp")}}
            />
        </Form>
        </MainContainer>

       {/* <div>{data}</div> */}
       </>
  );
}

export default Forms;
