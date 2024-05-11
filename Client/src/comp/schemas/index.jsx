import * as Yup from "yup";

export const schema = Yup.object({
  firstName: Yup.string().min(5).required(""),
  lastName: Yup.string().min(5).required(""),
  emailId: Yup.string().email().required(""),
  mobileNo: Yup.string().max(10).min(10).required(""),
  password: Yup.string().required(),
  gender: Yup.string().required(),

  // education section
});


export const educationSchema = 
Yup.object().shape({
    university: Yup.string().required(""),
    course: Yup.string().required(""),
    specification: Yup.string().required(""),
    startingDate: Yup.string().required(""),
    endingDate: Yup.string().required(""),
    grade: Yup.string().required(""),
  })
export const socialmediaSchema = 
Yup.object().shape({
    github: Yup.string().required(""),
    linkedin: Yup.string().required(""),
    x: Yup.string().required(""),
    
  })

export const summarySchema = Yup.object().shape({
  summary: Yup.string().max(300).min(200).required("")
})