import React, { useState } from "react";
import { summarySchema } from "../schemas";

const Summary = () => {
  const [userSummary, setUserSummary] = useState({
    summary: "",
  });
  const [show, setShow] = useState(false);
  const [summaryChar, setSummaryChar] = useState(0)
  const [error , setError] = useState({})

  const handleOpen = () => {
    setShow(!show);
  };

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserSummary({ ...userSummary, [name]: value });

    setSummaryChar(e.target.value.split('').length)

    

  };

  const onSubmit = async(e) => {
    try{
      e.preventDefault();
      await summarySchema.validate(userSummary , {abortEarly:false})
      console.log(userSummary);
      setUserSummary({
          summary:''
      })
    }catch(err){
     let newError={}
        err.inner.forEach(err => {
          newError[err.path] = err.message
        });
      setError(newError)
    }
   
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Summary
              <span className="addEducation">
                <button className=" addbtn btn" onClick={handleOpen}>
                  {show ? (
                    <i className="fa-solid fa-x"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </button>
              </span>
            </h3>
          </div>

          <div className="education-content">
            <form onSubmit={onSubmit}>
              {show ? (
                <>
                  <div className="formbold-input-flex mt-4">
                  <div>
                    <label
                      htmlFor="Github"
                      className="formbold-form-label"
                    ></label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="validationTooltip04"
                      placeholder="Summary"
                      autoComplete="off"
                      rows={5}
                      value={userSummary.summary}
                      onChange={handleInput}
                      name="summary"
                      maxLength={300}
                      minLength={200}
                    />
                     <p className="limit">{`${summaryChar}/300`}</p>
                     {error.summary && (
                      <div className="error">{error.summary}</div>
                    )}
                  </div>
                  </div>
                 
                  <button type="submit" className="formbold-btn">
                    Submit
                  </button>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
