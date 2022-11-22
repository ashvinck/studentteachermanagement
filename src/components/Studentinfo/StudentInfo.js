import React from 'react';
import "./Studentinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditStudentInfo } from './Edit Student Info';



export const StudentInfo = ({ stuinfo, setStuInfo }) => {
    let temp = [...stuinfo];
    return (
        <div className="card shadow mb-4">
            {/* Card Heading */}
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Student Info</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className='ta'> Sl No. </th>
                                <th className='ta'>Id</th>
                                <th className='ta'> Student </th>
                                <th className='ta'> Name </th>
                                <th className='ta'> Gender </th>
                                <th className='ta'> Address </th>
                                <th className='ta'> Date of Birth </th>
                                <th className='ta'> Progress </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stuinfo.map((data, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{data.Id}</td>
                                    <td className="py-1">
                                        <img className='table-img' s alt="user icon" src={data.Student} />
                                    </td>
                                    <td>{data.Name}</td>
                                    <td>{data.Gender}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.dob}</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success example" style={{ width: `${data.Progress}%` }} aria-valuenow="{data.Progress}" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <EditStudentInfo data={data} id={id} stuinfo={stuinfo} setStuInfo={setStuInfo} />
                                    </td>
                                    <td>
                                        <button className="btn Delete" onClick={() => {
                                            temp.splice(id, 1);
                                            setStuInfo(temp);
                                        }}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}