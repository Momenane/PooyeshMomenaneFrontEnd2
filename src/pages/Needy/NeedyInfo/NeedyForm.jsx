import React, { useState } from "react";
import InputForm from "../../../components/InputForm";
import Switch from "react-switch";
import Select from "react-select";

const NeedyForm = (props) => {
  const handleChange = (checked) => {
    setstate(checked);
  };

  const [state, setstate] = useState(false);

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
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <div className="d-flex justify-content-between ">
          <div className="col-6 p-1">
            <InputForm 
              onChange={props.onChange}
              placeholder="نام"
              name="needyName"
              value={props.needyName} 
             />
          </div>
          <div className="col-6 p-1">
            <InputForm
              onChange={props.onChange}
              placeholder="نام خانوادگی"
              name="needyLastname"
              value={props.needyLastname}
            />
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <div className="d-flex justify-content-between ">
          <div className="col-6 p-1">
            <InputForm
              onChange={props.onChange}
              placeholder=" تاریخ تولد مثلا 1354/02/01"
              name="needyBirthDate"
              value={props.needyBirthDate}
            />
          </div>
          <div className="col-6 p-1">
            <InputForm 
              onChange={props.onChange} 
              placeholder="کد ملی"
              name="needyZipCode"
              value={props.needyZipCode}
            />
          </div>
        </div>
      </div>

      <div className="col-md-8 col-sm-12  m-0 p-1">
        <InputForm
          onChange={props.onChange}
          placeholder="شماره تلفن در صورت وجود"
          name="needyPhonenumber"
          value={props.needyPhonenumber}
        />
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <textarea
          cols="30"
          rows="5"
          onChange={props.onChange}
          className="needyTextAreaForm"
          placeholder="نشانی"
          name="needyAddress"
          value={props.needyAddress}
        />
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <div className="d-flex justify-content-center align-items-center">
          <span style={{ marginLeft: 30, fontFamily: "IRANSans" }}>
            من سرپرست خانوار
          </span>
          <Switch onColor="#004182" onChange={props.switchHandler} checked={props.checkState} />
        </div>
      </div>
      <div className="col-md-8 col-sm-12 m-0 p-1">
        <div className="d-flex justify-content-between ">
          <div className="col-6 p-1">
            <InputForm
              onChange={props.onChange}
              placeholder="تعداد اعضا "
              name="needyNumberOfMembers"
              value={props.needyNumberOfMembers}
            />
          </div>
          <div className="col-6 p-1">
            <Select
              options={props.options}
              styles={{
                fontFamily: "IRANSans",
              }}
              isClearable={true}
              placeholder="نسبت ..."
              onChange={props.changeSelect}
              value={props.selectedItem}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default NeedyForm;
