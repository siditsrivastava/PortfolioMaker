import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  let id = 1;

  const [error, setError] = useState([]);
  const [show, setShow] = useState(true);
  const [textareachar, setTextareaChar] = useState(0);
  const [checked, setChecked] = useState(false);
  const [experienceData, setExperienceData] = useState([
    {
      id: id++,
      companyName: "",
      position: "",
      profileSummary: "",
      joiningDate: "",
      leavingDate: "",
      currentWorking: false,
    },
  ]);

  let value, name;

  const handleInput = (e, index) => {
    name = e.target.name;
    value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked; // Set value as checked state
    }
    setChecked(!checked);
    const lists = [...experienceData];
    lists[index][name] = value;
    setExperienceData(lists);
  };

  const handleTextarea = (e, index) => {
    name = e.target.name;
    value = e.target.value;
    const lists = [...experienceData];
    lists[index][name] = value;
    setExperienceData(lists);
    setTextareaChar(e.target.value.split("").length);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await educationSchema.validate({experienceData}, { abortEarly: false });
      console.log(experienceData);
      setExperienceData([
        {
          id: id++,
          companyName: "",
          position: "",
          profileSummary: "",
          joiningDate: "",
          leavingDate: "",
          currentWorking: false,
        },
        ...experienceData.slice(1),
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleOpen = () => {
    setShow(!show);
  };

  const addmore = () => {
    setExperienceData([
      ...experienceData,
      {
        id: id++,
        companyName: "",
        position: "",
        profileSummary: "",
        startingDate: "",
        endingDate: "",
        currentWorking: false,
      },
    ]);
  };

  const removecard = (i) => {
    const list = [...experienceData];
    list.splice(i, 1);
    setExperienceData(list);
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Experience
              <span className="addEducation">
                <button
                  className="addbtn btn"
                  onClick={handleOpen}
                  id="addEducation"
                >
                  {show ? (
                    <i className="fa-solid fa-x"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </button>
              </span>
            </h3>
          </div>
          <br></br>
          <div className="education-content">
            <form
              action=""
              method="POST"
              onSubmit={onSubmit}
              //   validationschema={educationSchema}
            >
              {show
                ? experienceData.map((item, i) => {
                    return (
                      <>
                        <div className="formbold-input-flex" key={Math.round()}>
                          <div>
                            <label
                              htmlFor="firstname"
                              className="formbold-form-label"
                            >
                              Company Name
                            </label>
                            <input
                              type="companyName"
                              className="form-control"
                              id="companyName"
                              name="companyName"
                              autoComplete="off"
                              placeholder="Company Name"
                              value={experienceData.companyName}
                              onChange={(e) => handleInput(e, i)}
                            />
                            {error.companyName && (
                              <div className="error">
                                {error.companyName[i]}
                              </div>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="lastname"
                              className="formbold-form-label"
                            >
                              Position
                            </label>
                            <input
                              type="position"
                              className="form-control"
                              id="validationTooltip04"
                              placeholder="Position"
                              name="position"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={experienceData.position}
                            />
                            {error.position && (
                              <div className="error">{error.position[i]}</div>
                            )}
                          </div>
                        </div>

                        <div className="formbold-mb-3">
                          <label
                            htmlFor="email"
                            className="formbold-form-label"
                          >
                            Profile Summary
                          </label>
                          <textarea
                            type="profileSummary"
                            className="form-control"
                            id="validationTooltip04"
                            placeholder="Profile Summary"
                            name="profileSummary"
                            autoComplete="off"
                            maxLength={200}
                            onChange={(e) => handleTextarea(e, i)}
                            value={experienceData.profileSummary}
                          />
                          <p className="limit">{`${textareachar} / 200`}</p>
                        </div>

                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Joining Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            placeholder="startind Date"
                            name="joiningDate"
                            autoComplete="off"
                            onChange={(e) => handleInput(e, i)}
                            value={experienceData.joiningDate}
                          />
                          {error.joiningDate && (
                            <div className="error">{error.joiningDate[i]}</div>
                          )}
                        </div>
                        <div className="formbold-mb-3 ">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="currentWorking"
                              onChange={(e) => handleInput(e, i)}
                            />
                            Currently Working
                          </div>
                        </div>

                        {checked === false ? (
                          <div className="formbold-mb-3">
                            <label
                              htmlFor="dob"
                              className="formbold-form-label"
                            >
                              Leaving Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="leavingDate"
                              placeholder="endDate"
                              name="leavingDate"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={experienceData.leavingDate}
                            />
                            {error.leavingDate && (
                              <div className="error">{error.leavingDate}</div>
                            )}
                          </div>
                        ) : (
                          <div className="formbold-mb-3">
                            <label
                              htmlFor="dob"
                              className="formbold-form-label"
                            >
                              Leaving Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="leavingDate"
                              placeholder="endDate"
                              name="leavingDate"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={experienceData.leavingDate}
                              disabled
                            />
                            {error.leavingDate && (
                              <div className="error">{error.leavingDate}</div>
                            )}
                          </div>
                        )}

                        <button className="formbold-btn">ADD</button>

                        {experienceData.length !== 1 && (
                          <p
                            id="addMoreEducationSection"
                            onClick={(i) => removecard(i)}
                            className="btn"
                          >
                            Remove
                          </p>
                        )}

                        {experienceData.length - 1 === i && (
                          <p
                            id="addMoreEducationSection"
                            onClick={addmore}
                            className="btn"
                          >
                            Add More
                          </p>
                        )}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </>
                    );
                  })
                : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
