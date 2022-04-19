import React from "react";
// import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { Grid} from '@material-ui/core';
import {Form} from "./components/Form";
import {Input} from "./components/Input";
import { MainContainer } from "./components/MainContainer";
import { Typography } from "@material-ui/core";


const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  department: yup.string().required(),
  phoneno: yup.string().min(10).max(10).required(),
});

function Forms() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    alert("Employee is created");
  };
  return (
    // <div className="Form">
    //   <div className="title">Create Employee</div>
    //   <div className="inputs">
    //     <form onSubmit={handleSubmit(submitForm)}>
    //       <input
    //         type="text"
    //         name="firstName"
    //         ref={register}
    //         placeholder="First Name..."
    //       />
    //       <p> {errors.firstName?.message} </p>
    //       <input
    //         type="text"
    //         name="lastName"
    //         placeholder="Last Name..."
    //         ref={register}
    //       />
    //       <p> {errors.lastName?.message} </p>
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Email..."
    //         ref={register}
    //       />
    //       <p> {errors.email?.message} </p>
    //       <input type="text" name="age" placeholder="Age..." ref={register} />
    //       <p> {errors.age?.message} </p>
    //       <input
    //         type="text"
    //         name="department"
    //         placeholder="Department..."
    //         ref={register}
    //       />
    //       <p> {errors.department?.message} </p>
    //       <input
    //         type="number"
    //         name="phoneno"
    //         placeholder="Phone number..."
    //         ref={register}
    //       />
    //       <p> {errors.phoneno?.message} </p>
    //       <input type="submit" id="submit" />
    //     </form>
    //   </div>
    // </div>





  
        // <Form onSubmit={handleSubmit(submitForm)}>
        //       <Grid container>
        //         <Grid item xs={6}></Grid>
        //   <Controls.Input
        //     type="text"
        //     name="firstName"
        //     ref={register}
        //     placeholder="First Name..."
        //   />
        //   <p> {errors.firstName?.message} </p>
        //   <Controls.Input
        //     type="text"
        //     name="lastName"
        //     placeholder="Last Name..."
        //     ref={register}
        //   />
        //   <p> {errors.lastName?.message} </p>
        //   <Controls.Input
        //     type="text"
        //     name="email"
        //     placeholder="Email..."
        //     ref={register}
        //   />
        //   <p> {errors.email?.message} </p>
        //   <Controls.Input type="text" name="age" placeholder="Age..." ref={register} />
        //   <p> {errors.age?.message} </p>
        //   <Controls.Input
        //     type="text"
        //     name="department"
        //     placeholder="Department..."
        //     ref={register}
        //   />
        //   <p> {errors.department?.message} </p>
        //   <Controls.Input
        //     type="number"
        //     name="phoneno"
        //     placeholder="Phone number..."
        //     ref={register}
        //   />
        //   <p> {errors.phoneno?.message} </p>
        //   <Controls.Input type="submit" id="submit" />
        //   </Grid>
        // </Form>


            <MainContainer>
      <Typography component="h2" variant="h5">
        Create Employee
      </Typography>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Input
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name..."
          />
          <p> {errors.firstName?.message} </p>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            ref={register}
          />
          <p> {errors.lastName?.message} </p>
          <Input
            type="text"
            name="email"
            placeholder="Email..."
            ref={register}
          />
          <p> {errors.email?.message} </p>
          <Input type="text" name="age" placeholder="Age..." ref={register} />
          <p> {errors.age?.message} </p>
          <Input
            type="text"
            name="department"
            placeholder="Department..."
            ref={register}
          />
          <p> {errors.department?.message} </p>
          <Input
            type="number"
            name="phoneno"
            placeholder="Phone number..."
            ref={register}
          />
          <p> {errors.phoneno?.message} </p>
          <Input type="submit" id="submit" />
        </Form>
        </MainContainer>

  );
}

export default Forms;
