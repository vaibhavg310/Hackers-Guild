import { useState } from "react";
import "./upload-submission-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addSubmission } from "../../store/submission/submission.action";
import { selectSubmissionList } from "../../store/submission/submission.selector";

export const UploadSubmissionForm = () => {
  const initialValue = {
    title: "",
    summary: "",
    description: "",
    coverImage: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    githubLink: "",
    otherLink: "",
  };

  const [formValues, setFormValues] = useState(initialValue);

  const validateImage = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
            if (img.width < 250 || img.height < 250) {
                reject("Image size should be greater than 360x360");
            } else {
                resolve(file);
            }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "file") {
      validateImage(e.target.files[0])
        .then((res) => {
          setFormValues({ ...formValues, [name]: res });
        })
        .catch((err) => {
          alert("Image size should be greater than 360x360");
        });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmissionToList(formValues);
    // console.log(formValues);
  };

  const dispatch = useDispatch();
  const submissionList = useSelector(selectSubmissionList);
  const addSubmissionToList = (submission) =>
    dispatch(addSubmission(submission, submissionList));

  return (
    <div className="upload-submission-form-container">
      <div className="upload-submission-form">
        <div className="upload-submission-form-header">
          <h1>New Hackathon Submission</h1>
        </div>
        <div className="upload-submission-form-body">
          <form onSubmit={handleSubmit}>
            <div className="upload-submission-form-body-input">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formValues.title}
                placeholder="Title of your submission"
                onChange={handleChange}
                required
              />
            </div>
            <div className="upload-submission-form-body-input">
              <label htmlFor="summary">Summary</label>
              <textarea
                name="summary"
                id="summary"
                cols="30"
                rows="10"
                value={formValues.summary}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="upload-submission-form-body-input">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="40"
                rows="10"
                value={formValues.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="upload-submission-form-body-input">
              <label htmlFor="coverImage">Cover Image</label>
              <input
                type="file"
                name="coverImage"
                id="coverImage"
                onChange={handleChange}

                required
              />
            </div>
            <div className="upload-submission-form-body-input">
              <label htmlFor="hackathonName">Hackathon name</label>
              <input
                type="text"
                name="hackathonName"
                id="hackathonName"
                value={formValues.hackathonName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="upload-submission-form-hackathon-date">
              <div className="upload-submission-form-body-input">
                <label htmlFor="hackathonStartDate">Hackathon Start Date</label>
                <input
                  type="date"
                  name="hackathonStartDate"
                  id="hackathonStartDate"
                  value={formValues.hackathonStartDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="upload-submission-form-body-input">
                <label htmlFor="hackathonEndDate">Hackathon End Date</label>
                <input
                  type="date"
                  name="hackathonEndDate"
                  value={formValues.hackathonEndDate}
                  id="hackathonEndDate"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="upload-submission-form-body-input">
              <label htmlFor="githubLink">Github Repository</label>
              <input
                type="text"
                name="githubLink"
                id="githubLink"
                value={formValues.githubLink}
                onChange={handleChange}
                required
              />
            </div>

            <div className="upload-submission-form-body-input">
              <label htmlFor="otherLink">Other Link</label>
              <input
                type="text"
                name="otherLink"
                value={formValues.otherLink}
                id="otherLink"
                onChange={handleChange}
              />
            </div>

            <div className="upload-submission-form-footer">
              <button
                className="upload-submission-button"
              >
                Upload Submission
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
