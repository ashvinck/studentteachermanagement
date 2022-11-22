import React, { useState } from "react";


export const HomeWork = () => {

    // Homework Array
    const AddHomework = [
        {
            id: 1,
            task: "Complete Techfest Project",
            deadline: "12-12-2022"
        },
        {
            id: 2,
            task: "Submit the presentation for RadioShow",
            deadline: "02-12-2022"
        },
        {
            id: 3,
            task: "Submit the Maths Assignment",
            deadline: "29-11-2022"
        }
    ]

    // Hooks for storing Array data
    const [work, setWork] = useState(AddHomework)
    const tempWork = {}; //for temporary assigning data

    // Submit Function
    const handleWorkSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        setWork([...work, tempWork]);
    }

    return (
        <div className="Homework">
            <div className="card shadow mb-4">
                {/* Card Heading */}
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Add Homework </h6>
                </div>
                <div className="card-body">
                    <form className="row g-3 needs-validation" novalidate onSubmit={handleWorkSubmit}>
                        {/* Provide the Task */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip01" className="form-label">Task</label>
                            <input type="text" className="form-control" id="validationTooltip01" onChange={(evt) => { tempWork.task = evt.target.value }} required />
                            <div className="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        {/* Provide the Deadline */}
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip03" className="form-label">Deadline</label>
                            <input type="text" className="form-control" id="validationTooltip03" onChange={(evt) => { tempWork.deadline = evt.target.value }} required />
                            <div className="invalid-tooltip">
                                Please provide a deadline.
                            </div>
                        </div>
                        {/* Submit Button  */}
                        <div className="col-md-4 position-relative">
                            <button className="btn Addbtn btn-primary" type="submit">Add HomeWork</button>
                        </div>
                    </form>
                    {/* Table for displaying data from above */}
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Task</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {work.map((todo, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{todo.task}</td>
                                        <td>{todo.deadline}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}