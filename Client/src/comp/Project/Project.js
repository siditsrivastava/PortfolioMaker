import React, { useState } from "react";
import './Project.css'

const Project = () => {
  let id = 1;

  const teamsize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const projectRole = [
    "Domain Expert ",
    "Sr Project Leader",
    "Solution Architect",
    "Quality Analyst",
    "Database Architect / DBA",
    "Network / System Administrator",
    "Project Leader",
    "Module Leader",
    "Sr. Programmer",
    "Programmer",
    "Test Engineer",
    "Other",
  ];

  const [error, setError] = useState([]);
  const [show, setShow] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [textareachar, setTextareaChar] = useState(0);
  const [workingStatus, setWorkingStatus] = useState(false);
  const [projectData, setProjectData] = useState([
    {
      id: id++,
      projectName: "",
      client: "",
      projectStarting: "",
      projectComplete: "",
      projectDetails: "",
      projectLocation: "",
      projectTeamSize: "",
      projectRole: "",
      // roleDescription :""
    },
  ]);

  let value, name;

  const handleInput = (e, index) => {
    name = e.target.name;
    value = e.target.value;
    const lists = [...projectData];
    lists[index][name] = value;
    setProjectData(lists);
    
  };

  const handleTextarea = (e, index) => {
    name = e.target.name;
    value = e.target.value;

    const lists = [...projectData];
    lists[index][name] = value;
    setProjectData(lists);
    setWorkingStatus(!workingStatus);
    setTextareaChar(e.target.value.split("").length);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await educationSchema.validate({experienceData}, { abortEarly: false });
      console.log(projectData);
      setProjectData([
        {
          id: id++,
          projectName: "",
          client: "",
          projectStarting: "",
          projectComplete: "",
          projectDetails: "",
          projectLocation: "",
        },
        // ...projectData.slice(1),
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleOpen = () => {
    setShow(!show);
  };

  const addmore = () => {
    setProjectData([
      ...projectData,
      {
        id: id++,
        projectName: "",
        client: "",
        projectStarting: "",
        projectComplete: "",
        projectDetails: "",
        projectLocation: "",
      },
    ]);
  };

  const removecard = (i) => {
    const list = [...projectData];
    list.splice(i, 1);
    setProjectData(list);
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Project
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
            <p>
              Stand out for employers by adding details about projects you have
              done in college, internships, or at work
            </p>
          </div>
          <br></br>
          <div className="education-content">
            <form action="" method="POST" onSubmit={onSubmit}>
              {show
                ? projectData.map((item, i) => {
                    return (
                      <>
                        <div className="formbold-mb-3" key={Math.round()}>
                          <div>
                            <label
                              htmlFor="firstname"
                              className="formbold-form-label"
                            >
                              Project Name
                            </label>
                            <input
                              type="projectName"
                              className="form-control"
                              id="projectName"
                              name="projectName"
                              autoComplete="off"
                              placeholder="Project Name"
                              value={projectData.projectName}
                              onChange={(e) => handleInput(e, i)}
                              required
                            />
                            {/* {error.companyName && (
                              <div className="error">
                                {error.companyName[i]}
                              </div>
                            )} */}
                          </div>
                        </div>

                        <div className="formbold-mb-3">
                          <div>
                            <label
                              htmlFor="client"
                              className="formbold-form-label"
                            >
                              {/* Tag this project with your employment/education */}
                              Client
                            </label>
                            <input
                              type="client"
                              className="form-control"
                              id="validationTooltip04"
                              placeholder="Enter your Name"
                              name="client"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={projectData.client}
                              required
                            />
                            {/* {error.position && (
                              <div className="error">{error.position[i]}</div>
                            )} */}
                          </div>
                        </div>
                        <div className="formbold-input-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="workingStatus"
                              id="exampleRadios1"
                              onChange={(e) => handleTextarea(e, i)}
                              value="workedTill"
                              required
                            />
                            Working Till
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="workingStatus"
                              id="exampleRadios1"
                              onChange={(e) => handleTextarea(e, i)}
                              value="finished"
                              required
                              //   check={workingStatus}
                            />
                            Finished
                          </div>
                        </div>
                        <div className="formbold-input-flex">
                          <div>
                            <label
                              htmlFor="email"
                              className="formbold-form-label"
                            >
                              Starting From
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="validationTooltip04"
                              name="projectStarting"
                              autoComplete="off"
                              onChange={(e) => handleInput(e, i)}
                              value={projectData.projectStarting}
                              required
                            />
                          </div>
                          {workingStatus === false ? (
                            <>
                              <div>
                                <label
                                  htmlFor="dob"
                                  className="formbold-form-label"
                                >
                                  Completed Till
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="startDate"
                                  placeholder="Enter your Completed Date"
                                  name="projectComplete"
                                  autoComplete="off"
                                  onChange={(e) => handleInput(e, i)}
                                  value={projectData.projectComplete}
                                  required
                                  //   disabled
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <label
                                  htmlFor="dob"
                                  className="formbold-form-label"
                                >
                                  Completed Till
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="startDate"
                                  placeholder="Enter your Completed Date"
                                  name="projectComplete"
                                  autoComplete="off"
                                  disabled
                                  onChange={(e) => handleInput(e, i)}
                                  value={projectData.projectComplete}
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <div className="formbold-mb-3 ">
                          <label htmlFor="dob" className="formbold-form-label">
                            Details of Project
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            name="projectDetails"
                            value={projectData.projectDetails}
                            placeholder="Type here..."
                            maxLength={300}
                            required
                            onChange={(e) => handleTextarea(e, i)}
                          />
                          <p className="limit">{`${textareachar}/300`}</p>
                        </div>

                        <div className="formbold-mb-3">
                          <label htmlFor="dob" className="formbold-form-label">
                            Project Location
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="startDate"
                            placeholder="Project Location"
                            name="projectLocation"
                            autoComplete="off"
                            required
                            onChange={(e) => handleInput(e, i)}
                            value={projectData.projectLocation}
                          />
                          {/* {error.joiningDate && (
                            <div className="error">{error.joiningDate[i]}</div>
                          )} */}
                        </div>
                        {showMore ? (
                          <>
                            <div className="formbold-mb-3">
                              <label
                                htmlFor="projectsite"
                                className="formbold-form-label"
                              >
                                Project Site
                              </label>
                              <div className="formbold-input-flex">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="projectStatus"
                                    id="exampleRadios1"
                                    onChange={(e) => handleInput(e, i)}
                                    value="offSite"
                                  />
                                  Off Site
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="projectStatus"
                                    id="exampleRadios1"
                                    onChange={(e) => handleInput(e, i)}
                                    value="onSite"
                                  />
                                  On Site
                                </div>
                              </div>
                            </div>

                            <div className="formbold-mb-3">
                              <label className="formbold-form-label">
                                Team Size
                              </label>
                              <select
                                className="custom-select"
                                name="projectTeamSize"
                                id="teamsize"
                                placeholder="Select Team Size"
                                value={projectData.projectTeamSize}
                                onChange={(e) => handleInput(e, i)}
                              >
                                <option value="selected">Select Team Size</option>
                                {teamsize.map((items) => {
                                  return (
                                    <option value={items} key={items}>
                                      {items}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="formbold-mb-3">
                              <label className="formbold-form-label">
                                Role
                              </label>
                              <select
                                className="custom-select"
                                name="projectRole"
                                id="projectrole"
                                value={projectData.projectRole}
                                onChange={(e) => handleInput(e, i)}
                              >
                                <option value="selected">Select Your Role</option>
                                {projectRole.map((items) => {
                                  return (
                                    <option value={items} key={items}>
                                      {items}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </>
                        ) : null}
                        {showMore ? (
                          <div className="showMore">
                            <p
                              className="btn"
                              id="addMoreEducationSection"
                              onClick={() => {
                                setShowMore(!showMore);
                              }}
                            >
                              Hide More Details
                            </p>
                          </div>
                        ) : (
                          <div className="showMore">
                            <p
                              className="btn"
                              id="addMoreEducationSection"
                              onClick={() => {
                                setShowMore(!showMore);
                              }}
                            >
                              Show More Details
                            </p>
                          </div>
                        )}

                        <button className="formbold-btn">ADD</button>
                        {projectData.length !== 1 && (
                          <p
                            id="addMoreEducationSection"
                            onClick={(i) => removecard(i)}
                            className="btn"
                          >
                            Remove
                          </p>
                        )}

                        {projectData.length - 1 === i && (
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

export default Project;
