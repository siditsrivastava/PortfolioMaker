import React, { useState } from "react";

const Resume = () => {
  const [userResume, setUserResume] = useState(null);
  const [show, setShow] = useState(false);
  const [error , setError] = useState()

  const handleInput = (e) => {
    setUserResume(e.target.files[0])
    setError("")
  };

  const handleOpen = () => {
    setShow(!show);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!userResume){
     setError("Please Provide the Resume")
    }
    try{
      const formData = new FormData()
      formData.append('file' , userResume)
      const response = await fetch('http://localhost:3000/resume',{
        method:"POST",
        body:formData
      })

      const result = await response.jSON();
      console.log(result);
      setUserResume(null);

    }catch(err){
      console.log(err);
      setError(err.message);
    }
    
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Resume
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
            <form onSubmit={onSubmit} method="POST">
              {show ? (
                <>
                  <div className="formbold-input-flex mt-4">
                    <div>
                      <label
                        htmlFor="Resume"
                        className="formbold-form-label"
                      ></label>
                      <input
                        type="file"
                        className="form-control"
                        id="validationTooltip04"
                        placeholder="Resume"
                        autoComplete="off"
                        // value={userSummary.summary}
                        onChange={handleInput}
                      />
                    {error && <div className="error">{error}</div>}
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

export default Resume;
