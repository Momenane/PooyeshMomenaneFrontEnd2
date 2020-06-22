import React, { useState } from "react";
import InputForm from "../../../components/InputForm";

const VolunteerForm = (props) => {


  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
      }}
    >
      <h2 className="needy-Title">ثبت اطلاعات شخصی</h2>
      <div className="col-md-8 col-sm-12  m-0 p-1">
        <InputForm
          onChange={props.onChange}
          value={props.groupName}
          name="groupName"
          placeholder="نام گروه"
        />
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <div className="d-flex justify-content-between ">
          <div className="col-4 p-1">
            <InputForm  
            onChange={props.onChange} 
            placeholder="نام سرگروه"
            value={props.leaderName}
            name="leaderName"
           />
          </div>
          <div className="col-8 p-1">
            <InputForm
               onChange={props.onChange}
              placeholder=" نام خانوادگی سرگروه"
              value={props.leaderLastName}
              name="leaderLastName"
            />
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12  m-0 p-1">
        <InputForm
           onChange={props.onChange}
          placeholder=" شماره تلفن سرگروه"
          value={props.leaderPhonenumber}
          name="leaderPhonenumber"   
        />
      </div>
      <div className="col-md-8 col-sm-12  m-0 p-1">
        <InputForm
          onChange={props.onChange}
          placeholder="شماره تلفن اضطراری"
          value={props.urgentNumber}
          name="urgentNumber"  
        />
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <textarea
          onChange={props.onChange}
          cols="30"
          rows="5"
          className="needyTextAreaForm"
          placeholder="نشانی"
          value={props.volunteerAddress}
          name="volunteerAddress"  
        />
      </div>
    </form>
  );
};

export default VolunteerForm;
