import React, { useState } from "react";
import "./Secondpage.css";
import { educationSchema } from "../schemas";
// import Third from "./Third";
import Experience from "../Experience/Experience";
import Sociallink from "../SocialLink/Sociallink";
import Skill from "../Skills/Skill";
import Summary from "../Summary/Summary";
import Resume from "../Resume/Resume";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Project from "../Project/Project";

const Secondpage = () => {
  let id = 1;
  const [educationData, setEducationData] = useState([
    {
      id: id++,
      university: "",
      course: "",
      specification: "",
      startingDate: "",
      endingDate: "",
      grade: "",

    },
  ]);
  const [error, setErrors] = useState({});
  const [show, setShow] = useState(true);

  let value, name;

  const handleInput = (e, index) => {
    name = e.target.name;
    value = e.target.value;

    const lists = [...educationData];
    lists[index][name] = value;
    setEducationData(lists);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (
      //   !educationData.university ||
      //   !educationData.course ||
      //   !educationData.specification ||
      //   !educationData.startingDate ||
      //   !educationData.endingDate
      // ) {
      //   toast("Please Provide the data ");
      // } else {
      // await educationSchema.validate(educationData, { abortEarly: false });
      // toast("Submit Successfully");
      console.log(educationData);
      // }
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error, index) => {
        newErrors[`${error.path}_${index}`] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleOpen = () => {
    setShow(!show);
  };

  // let id = 0;
  const addmore = () => {
    setEducationData([
      ...educationData,
      {
        id: id++,
        university: "",
        course: "",
        specification: "",
        startingDate: "",
        endingDate: "",
        grade: "",
      },
    ]);
    // setAddMore((prevElements) => [...prevElements, newForm]);
  };

  const removecard = (index) => {
    const list = [...educationData];
    list.splice(index, 1);
    setEducationData(list);
  };

  return (
    <>
      <ToastContainer />
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Education
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
            <p> Details like course, university, and more, help recruiters identify your educational background</p>        
            </div>
          <br></br>
          <div className="education-content">
            <form
              action=""
              method="POST"
              onSubmit={onSubmit}
              validationschema={educationSchema} >
              {show
                ? educationData.map((item, i) => {
                    return (
                      <>
                        <div className="formbold-input-flex">
                          <div>
                            <label
                              htmlFor="firstname"
                              className="formbold-form-label"
                            >
                              University / Institute
                            </label>
                            <input
                              type="university"
                              className="form-control"
                              id="university"
                              name="university"
                              autoComplete="off"
                              placeholder="University / Institute"
                              value={educationData.university}
                              onChange={(e) => handleInput(e, i)}
                            />
                            {error.university && (
                              <div className="error">
                                {error[`university${i}`]}
                              </div>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="lastname"
                              className="formbold-form-label"
                            >
                              Course
                            </label>
                            <input
                              type="course"
                              className="form-control"
                              id="validationTooltip04"
                              placeholder="course"
                              name="course"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={educationData.course}
                            />
                            {error.course && (
                              <div className="error">{error[`course${i}`]}</div>
                            )}
                          </div>
                        </div>

                        <div className="formbold-input-flex">
                          <div>
                            <label
                              htmlFor="email"
                              className="formbold-form-label"
                            >
                              Specification
                            </label>
                            <input
                              type="course"
                              className="form-control"
                              id="validationTooltip04"
                              placeholder="specification"
                              name="specification"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={educationData.specification}
                            />
                            {error.specification && (
                              <div className="error">
                                {error[`specification${i}`]}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Starting Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            // closeCalendar="false"
                            placeholder="startind Date"
                            name="startingDate"
                            autoComplete="off"
                            onChange={(e) => handleInput(e, i)}
                            value={educationData.startingDate}
                          />
                          {error.startingDate && (
                            <div className="error">
                              {error[`startingDate${i}`]}
                            </div>
                          )}
                        </div>
                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Ending Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="endDate"
                            placeholder="endDate"
                            name="endingDate"
                            autoComplete="off"
                            onChange={(e) => handleInput(e, i)}
                            value={educationData.endingDate}
                          />
                          {error.endingDate && (
                            <div className="error">
                              {error[`endingDate${i}`]}
                            </div>
                          )}
                        </div>
                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Course Type
                          </label>
                          <div className="formbold-input-flex pr-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="coursetype"
                                id="exampleRadios1"
                                onChange={(e) => handleInput(e, i)}
                                value="fullTime"
                                // checked
                              />
                              Full Time
                            </div>
                            <div className="form-check ">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="coursetype"
                                id="exampleRadios1"
                                onChange={(e) => handleInput(e, i)}
                                value="partTime"
                              />
                              Part Time
                            </div>
                            <div className="form-check ">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="coursetype"
                                id="exampleRadios1"
                                onChange={(e) => handleInput(e, i)}
                                value="distance Learning"
                              />
                              Distance Learning / Correspondence
                            </div>
                          </div>
                        </div>
                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Grade
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="grade"
                            name="grade"
                            placeholder="Cgpa / Marks / Percentage"
                            autoComplete="off"
                            onChange={(e) => handleInput(e, i)}
                            value={educationData.grade}
                          />
                          {error.grade && (
                            <div className="error">{error[`grade${i}`]}</div>
                          )}
                        </div>
                        <button className="formbold-btn">ADD</button>

                        {educationData.length !== 1 && (
                          <p
                            id="addMoreEducationSection"
                            onClick={(i) => removecard(i)}
                            className="btn"
                          >
                            Remove
                          </p>
                        )}

                        {educationData.length - 1 === i && (
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

      <Experience />
      <Project/>
      <Sociallink />
      <Skill />
      <Summary />
      <Resume />
    </>
  );
};

export default Secondpage;
