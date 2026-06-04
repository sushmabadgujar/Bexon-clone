import React from "react";

const TeamForm = ({
    form,
    loading,
    onChange,
    onImageChange,
    onSubmit,
    submitText,
    setForm
}) => {
    return (
        <div className="card border-0 shadow-sm">
            <div className="card-body p-4">

                <h5 className="mb-1">Team Member</h5>
                <p className="text-muted mb-4">
                    Manage team member information.
                </p>

                <form onSubmit={onSubmit}>

                    {/* IMAGE */}
                    <div className="mb-3">
                        <label className="form-label">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            onChange={onImageChange}
                        />
                    </div>

                    <div className="row">

                        {/* BASIC INFO */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Name</label>
                            <input name="name" value={form.name} onChange={onChange} className="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Designation</label>
                            <input name="designation" value={form.designation} onChange={onChange} className="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email</label>
                            <input name="email" value={form.email} onChange={onChange} className="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Phone</label>
                            <input name="phone" value={form.phone} onChange={onChange} className="form-control" />
                        </div>

                        {/* LOCATION + EXPERIENCE */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Location</label>
                            <input name="location" value={form.location} onChange={onChange} className="form-control" />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Experience</label>
                            <input name="experience" value={form.experience} onChange={onChange} className="form-control" />
                        </div>

                    </div>

                    {/* BIO */}
                    <div className="mb-3">
                        <label className="form-label">Short Bio</label>
                        <textarea
                            rows="3"
                            name="shortBio"
                            value={form.shortBio}
                            onChange={onChange}
                            className="form-control"
                        />
                    </div>

                    {/* SOCIAL LINKS */}
                    <h6 className="mt-4">Social Links</h6>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <input
                                name="facebook"
                                placeholder="Facebook URL"
                                value={form.socialLinks?.facebook || ""}
                                onChange={(e) =>
                                    onChange({
                                        target: {
                                            name: "socialLinks",
                                            value: {
                                                ...form.socialLinks,
                                                facebook: e.target.value
                                            }
                                        }
                                    })
                                }
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                name="twitter"
                                placeholder="Twitter URL"
                                value={form.socialLinks?.twitter || ""}
                                onChange={(e) =>
                                    onChange({
                                        target: {
                                            name: "socialLinks",
                                            value: {
                                                ...form.socialLinks,
                                                twitter: e.target.value
                                            }
                                        }
                                    })
                                }
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                name="linkedin"
                                placeholder="LinkedIn URL"
                                value={form.socialLinks?.linkedin || ""}
                                onChange={(e) =>
                                    onChange({
                                        target: {
                                            name: "socialLinks",
                                            value: {
                                                ...form.socialLinks,
                                                linkedin: e.target.value
                                            }
                                        }
                                    })
                                }
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                name="instagram"
                                placeholder="Instagram URL"
                                value={form.socialLinks?.instagram || ""}
                                onChange={(e) =>
                                    onChange({
                                        target: {
                                            name: "socialLinks",
                                            value: {
                                                ...form.socialLinks,
                                                instagram: e.target.value
                                            }
                                        }
                                    })
                                }
                                className="form-control"
                            />
                        </div>

                    </div>
                    <div className="mb-3">
                        <h6 className="mt-4">Professional Skills</h6>

                        <div className="row">
                           {Array.isArray(form.skills) && form.skills?.filter(Boolean)?.map((skill, index) => (

                                <div className="col-md-6 mb-3" key={index}>

                                    <div className="p-3 border rounded">

                                        {/* Skill Name */}
                                        <input
                                            type="tex"
                                            placeholder="Skill Name"
                                            value={skill.name}
                                            onChange={(e) => {
                                                const updated = [...form.skills];
                                                updated[index].name = e.target.value;
                                                setForm({ ...form, skills: updated });
                                            }}
                                            className="form-control mb-2"
                                            readOnly={true}
                                        />

                                        {/* Slider + Percentage */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={skill.percentage ?? 0}
                                            onChange={(e) => {
                                                const updated = [...form.skills];
                                                updated[index].percentage = Number(e.target.value);
                                                setForm({ ...form, skills: updated });
                                            }}
                                            className="form-range"
                                        />

                                        <strong>{skill.percentage ?? 0}%</strong>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger mt-2"
                                        onClick={() => {
                                            const updated = form.skills.filter((_, i) => i !== index);
                                            setForm({ ...form, skills: updated });
                                        }}
                                    >
                                        Remove
                                    </button>

                                    {/* </div> */}
                                </div>

                            ))}
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="text-end">
                        <button
                            type="submit"
                            className="btn btn-dark"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : submitText}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default TeamForm;