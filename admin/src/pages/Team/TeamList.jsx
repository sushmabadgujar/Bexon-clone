import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTeam,getTeams } from "../../services/teamService";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { showSuccess, showError } from "../../utils/toast";

import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TeamEdit from "./TeamEdit";
const TeamList = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProgressColor = (percentage) => {
        if (percentage >= 80) return "#28a745"; // green
        if (percentage >= 60) return "#17a2b8"; // blue
        if (percentage >= 40) return "#ffc107"; // yellow
        return "#dc3545"; // red
    };
    const fetchTeams = async () => {
        try {
            const response = await getTeams();

            if (response.data.success) {
                setTeams(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching teams:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    const handleDelete = async (id) => {
        try {
            const confirmed = window.confirm(
                "Are you sure you want to delete this team member?"
            );

            if (!confirmed) return;

            await deleteTeam(id);

            showSuccess("Team member deleted successfully");

            fetchTeams(); // list refresh
        } catch (error) {
            showError(
                error?.response?.data?.message ||
                "Failed to delete team member"
            );
        }
    };
    return (
        <div className="card shadow-sm border-0">
            <div className="d-flex justify-content-between mt-3 p-3">
                <div><Link
                    to="/team/create"
                    className="btn btn-dark"
                >
                    Add Team Member
                </Link></div>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                {/* <th>Designation</th> */}
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Skills</th>
                                <th>Social Links</th>
                                {/* <th>Location</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teams.length > 0 ? (
                                teams.map((team) => (
                                    <tr key={team._id}>
                                        <td>
                                            <img
                                                src={`${import.meta.env.VITE_API_URL}${team.image}`}
                                                alt={team.name}
                                                width="50"
                                                height="50"
                                                className="rounded-circle"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </td>

                                        <td>{team.name}</td>
                                        {/* <td>{team.designation}</td> */}
                                        <td>{team.email || "-"}</td>
                                        <td>{team.phone || "-"}</td>
                                        <td style={{ minWidth: "220px" }}>
                                            {team.skills?.length ? (
                                                team.skills.map((skill, index) => (
                                                    <div key={index} className="mb-2">

                                                        <div className="d-flex justify-content-between">
                                                            <small>{skill.name}</small>
                                                            <small>{skill.percentage}%</small>
                                                        </div>

                                                        <div className="progress" style={{ height: "8px" }}>
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                style={{
                                                                    width: `${skill.percentage}%`,
                                                                    backgroundColor: getProgressColor(skill.percentage),
                                                                }}
                                                                aria-valuenow={skill.percentage}
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                            />
                                                        </div>

                                                    </div>
                                                ))
                                            ) : (
                                                "-"
                                            )}
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2 ">
                                                {team.socialLinks?.facebook && (
                                                    <a href={team.socialLinks.facebook} target="_blank" rel="noreferrer" className="text-black">
                                                        <FaFacebook />
                                                    </a>
                                                )}

                                                {team.socialLinks?.linkedin && (
                                                    <a href={team.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-black" >
                                                        <FaLinkedin />
                                                    </a>
                                                )}

                                                {team.socialLinks?.twitter && (
                                                    <a href={team.socialLinks.twitter} target="_blank" rel="noreferrer" className="text-black">
                                                        <FaTwitter />
                                                    </a>
                                                )}

                                                {team.socialLinks?.instagram && (
                                                    <a href={team.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-black">
                                                        <FaInstagram />
                                                    </a>
                                                )}
                                            </div>
                                        </td>

                                        <td className="">
                                            <button className="btn btn-sm  me-2" onClick={() => navigate(`/edit/${team._id}`)}>
                                                Edit <BsPencilSquare className="ms-1" />
                                            </button>

                                            <button
                                                className="btn btn-sm btn-danger me-2"
                                                onClick={() => handleDelete(team._id)}
                                            >
                                                Delete
                                                <BsTrash className="ms-1" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No Team Members Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamList;