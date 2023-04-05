import { Route, Routes } from "react-router-dom";
import { EditSubmissionForm } from "../components/edit-submission-form/edit-submission-form.component";

export const EditFormRoute = () => {
  return (
  <Routes>
      <Route path=":id" element={<EditSubmissionForm />} />
  </Routes>
  );
}