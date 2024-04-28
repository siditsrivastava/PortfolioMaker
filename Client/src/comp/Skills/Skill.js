import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skiil = () => {
  const [skillLists, setSkillLists] = useState("");
  const [show, setShow] = useState(false);
  const [userSkills, setUserSkills] = useState([]);
  const [userAllSkills, setUserAllSkills] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setSkillLists(value);
  };

  const onSubmits = (e) => {
    e.preventDefault();
      setUserAllSkills(userSkills);
      alert("Skills submitted successfully.");
  };
  useEffect(() => {
    console.log({Skills: userAllSkills});
  }, [userAllSkills]);

  const handleOpen = () => {
    setShow(!show);
  };

  const saveSkills = () => {
    if (skillLists.length === 0) {
      alert("Please provide a skill.");
    } else {
      setUserSkills([...userSkills, skillLists]);
      setSkillLists(""); // Clear input after saving
    }
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Skills
              <span className="addEducation">
                <button className="addbtn btn" onClick={handleOpen}>
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
            <form onSubmit={onSubmits}>
              {show && (
                <>
                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="Github" className="formbold-form-label">
                        Skills
                      </label>
                      <div className="skills-card">
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltip04"
                          placeholder="Add your skills"
                          autoComplete="off"
                          value={skillLists}
                          onChange={handleInput}
                        />
                        <span>
                          <button className="btn" type="button" onClick={saveSkills}>
                            Add
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user_skills">
                    <ul>
                      {userSkills.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <button type="submit" className="formbold-btn">
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skiil;

