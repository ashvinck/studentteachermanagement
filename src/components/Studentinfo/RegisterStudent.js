import React from 'react';
import "./Studentinfo.css";

export const RegisterStudent = ({ stuinfo, setStuInfo }) => {
    let tempObj = {};

    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.target.reset();
        setStuInfo([...stuinfo, tempObj])
    }

    return (
        <div className="Register-container">
            <div className="card shadow mb-4">
                {/* Card Heading */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Register a Student</h6>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                        {/* ID */}
                        <div className="col-md-2 position-relative">
                            <label for="validationTooltip01" className="form-label">ID</label>
                            <input type="number" className="form-control" id="validationTooltip01" onChange={(evt) => { tempObj.Id = evt.target.value }} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Display URL */}
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label">Image URL</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => { tempObj.Student = evt.target.value }} required />
                            <div className="invalid-tooltip">
                                Please provide a valid URL.
                            </div>
                        </div>
                        {/* Name */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip02" className="form-label">Name</label>
                            <input type="text" className="form-control" id="validationTooltip02" onChange={(evt) => { tempObj.Name = evt.target.value }} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Gender */}
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip04" className="form-label">Gender</label>
                            <select className="form-select" id="validationTooltip04" onChange={(evt) => { tempObj.Gender = evt.target.value }} required>
                                <option selected disabled value="">Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <div className="invalid-tooltip">
                                Please select a Gender.
                            </div>
                        </div>
                        {/* Address */}
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label">Address</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => { tempObj.Address = evt.target.value }} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Address.
                            </div>
                        </div>
                        {/* Date of Birth */}
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip03" className="form-label">Date oF Birth</label>
                            <input type="text" className="form-control" id="validationTooltip03" placeholder="25-08-2000" onChange={(evt) => { tempObj.dob = evt.target.value }} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Date of Birth.
                            </div>
                        </div>
                        {/* Progress bar */}
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip05" className="form-label">Progress</label>
                            <input type="number" className="form-control" id="validationTooltip05" onChange={(evt) => { tempObj.Progress = evt.target.value }} required />
                            <div className="invalid-tooltip">
                                Please provide a valid Progress Number.
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}