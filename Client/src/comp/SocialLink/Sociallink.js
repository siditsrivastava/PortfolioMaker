import React, { useState } from "react";
import { socialmediaSchema } from "../schemas";

const Sociallink = () => {
  const [socialLink, setSocialLink] = useState({
    github: "",
    linkedin: "",
    x: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleOpen = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setSocialLink({ ...socialLink, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await socialmediaSchema.validate(socialLink, { abortEarly: false });
      console.log(socialLink);
      setSocialLink({
        github: "",
        linkedin: "",
        x: "",
      });
      alert("successfully");
    } catch (err) {
      const newError = {};
      err.inner.forEach((err) => {
        newError[err.path] = err.message;
      });

      setError(newError);
    }
  };
  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="form-title">
            <h3>
              Social Media
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
              {show ? (
                <>
                  <div className="formbold-input-flex">
                    <div>
                      <label htmlFor="Github" className="formbold-form-label">
                        Github
                      </label>
                      <input
                        type="github"
                        className="form-control"
                        id="validationTooltip04"
                        placeholder="github"
                        name="github"
                        autoComplete="off"
                        // maxLength={200}
                        onChange={(e) => handleInput(e)}
                        value={socialLink.github}
                      />
                      {error.github && (
                        <div className="error">{error.github}</div>
                      )}
                    </div>
                  </div>

                  <div className="formbold-mb-3">
                    <label htmlFor="dob" className="formbold-form-label">
                      LinkedIn
                    </label>
                    <input
                      type="linkedin"
                      className="form-control"
                      id="linkedin"
                      placeholder="linkedIn"
                      name="linkedin"
                      autoComplete="off"
                      onChange={(e) => handleInput(e)}
                      value={socialLink.linkedin}
                    />
                    {error.linkedin && (
                      <div className="error">{error.linkedin}</div>
                    )}
                  </div>
                  <div className="formbold-mb-3">
                    <label htmlFor="dob" className="formbold-form-label">
                      X
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="x"
                      placeholder="x "
                      name="x"
                      autoComplete="off"
                      onChange={(e) => handleInput(e)}
                      value={socialLink.x}
                    />
                    {error.x && <div className="error">{error.x}</div>}
                  </div>

                  <button className="formbold-btn">ADD</button>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sociallink;
