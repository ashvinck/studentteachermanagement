import React, { useState } from 'react';
import "./Studentinfo.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const EditStudentInfo = ({ data, id, stuinfo, setStuInfo }) => {
    let tempObj = { ...data };
    let temp = [...stuinfo]; //to add stuinfo data to the temp array

    //Handle Submit button function
    const handleEditSubmit = (evt) => {
        evt.preventDefault();
        temp.splice(id, 1, tempObj);
        setStuInfo(temp);
        handleClose();
    };

    const [show, setShow] = useState(false); //modal hide / show for editing 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="EditStudentInfo">
            <button className="EditButton" onClick={handleShow} data-toggle="modal" data-target="#exampleModal"><FontAwesomeIcon icon={faPen} /></button>
            {/* Button trigger modal */}
            {/* Modal  */}
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Student Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation" novalidate onSubmit={handleEditSubmit}>
                                {/* ID */}
                                <div className="col-md-2 position-relative">
                                    <label for="validationTooltip01" className="form-label">ID</label>
                                    <input type="number" className="form-control" id="validationTooltip01" onChange={(evt) => { tempObj.Id = evt.target.value }} defaultValue={tempObj.Id} required />
                                    <div className="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                {/* Image URL */}
                                <div className="col-md-6 position-relative">
                                    <label for="validationTooltip03" className="form-label">Image URL</label>
                                    <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => { tempObj.Student = evt.target.value }} defaultValue={tempObj.Student} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid URL.
                                    </div>
                                </div>
                                {/* Name */}
                                <div className="col-md-4 position-relative">
                                    <label for="validationTooltip02" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="validationTooltip02" onChange={(evt) => { tempObj.Name = evt.target.value }} defaultValue={tempObj.Name} required />
                                    <div className="valid-tooltip">
                                        Looks good!
                                    </div>
                                </div>
                                {/* Gender */}
                                <div class="col-md-3 position-relative">
                                    <label for="validationTooltip04" class="form-label">Gender</label>
                                    <select class="form-select" id="validationTooltip04" onChange={(evt) => { tempObj.Gender = evt.target.value }} defaultValue={tempObj.Gender} required>
                                        <option selected disabled value="">Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                    <div class="invalid-tooltip">
                                        Please select a Gender.
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="col-md-6 position-relative">
                                    <label for="validationTooltip03" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => { tempObj.Address = evt.target.value }} defaultValue={tempObj.Address} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid Address.
                                    </div>
                                </div>
                                {/* Date of Birth */}
                                <div className="col-md-3 position-relative">
                                    <label for="validationTooltip03" className="form-label">Date oF Birth</label>
                                    <input type="text" className="form-control" id="validationTooltip03" placeholder="25-08-2000" onChange={(evt) => { tempObj.dob = evt.target.value }} defaultValue={tempObj.dob} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid Date of Birth.
                                    </div>
                                </div>
                                {/* Progress Bar */}
                                <div className="col-md-3 position-relative">
                                    <label for="validationTooltip05" className="form-label">Progress</label>
                                    <input type="number" className="form-control" id="validationTooltip05" onChange={(evt) => { tempObj.Progress = evt.target.value }} defaultValue={tempObj.Progress} required />
                                    <div className="invalid-tooltip">
                                        Please provide a valid Progress Number.
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleEditSubmit} data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}