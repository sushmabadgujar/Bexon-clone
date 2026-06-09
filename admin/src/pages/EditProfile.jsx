import React, { useEffect, useState } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import { showSuccess, showError } from "../utils/toast"
const EditProfile = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
         profilePic: ""
    });
    console.log("API URL:", import.meta.env.VITE_API_URL);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("profile");

    // GET PROFILE
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/api/auth/profile",
                    { withCredentials: true }
                );

                setForm(res.data.user);
                // setPreview(res.data.user.profilePic);
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        const img = e.target.files[0];
        if (!img) return;
        setFile(img);

        // console.log("uploaded image is :",URL.createObjectURL(img))
        // setPreview(URL.createObjectURL(img));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // try {
        //     const formData = new FormData();
        //     formData.append("firstName", form.firstName);
        //     formData.append("lastName", form.lastName);
        //     formData.append("email", form.email);
        //     formData.append("bio", form.bio);

        //     if (file) {
        //         formData.append("profilePic", file);
        //     }
        //     console.log(file);
        //     await axios.put(
        //         "http://localhost:5000/api/auth/profile",
        //         formData,
        //         {
        //             withCredentials: true,
        //             headers: { "Content-Type": "multipart/form-data" },
        //         }
        //     );

        //     alert("Profile updated successfully");
        // } catch (err) {
        //     console.log(err);
        // } finally {
        //     setLoading(false);
        // }
        
   

    try {
        const formData = new FormData();
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
        formData.append("email", form.email);
        formData.append("bio", form.bio);

        if (file) {
            formData.append("profilePic", file);
        }

        const res = await axios.put(
            "http://localhost:5000/api/auth/profile",
            formData,
            {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        // 🔥 backend se updated user
        const updatedUser = res.data.user;

        // UI instantly update
        setForm(updatedUser);
        setPreview(updatedUser.profilePic);

        setFile(null);

        // alert("Profile updated successfully");
       showSuccess("Profile updated successfully");
    } catch (err) {
        console.log(err.response.data.message);
       const message =
        err?.response?.data?.message ||
        // err?.message ||
        "Something went wrong";

    showError(message);
    } finally {
        setLoading(false);
    }    };

    return (
        <div className="container py-4">

            {/* HEADER */}
            {/* <h3 className="fw-bold">Settings</h3>
            <p className="text-muted">
                Manage your account settings and preferences.
            </p> */}

            {/* TABS */}
            <div className="d-flex gap-2 mb-4">
                <button
                    onClick={() => setActiveTab("profile")}
                    className={`btn btn-sm ${activeTab === "profile" ? "btn-dark" : "btn-light"
                        }`}
                >
                    Profile
                </button>

                <button
                    onClick={() => setActiveTab("preferences")}
                    className="btn btn-light btn-sm"
                >
                    Preferences
                </button>

                <button
                    onClick={() => setActiveTab("appearance")}
                    className="btn btn-light btn-sm"
                >
                    Appearance
                </button>
            </div>

            {/* CARD */}
            <div className="card border-0 shadow-sm p-4">

                <h5 className="mb-1">Profile</h5>
                <p className="text-muted mb-4">
                    Update your personal information
                </p>

                {/* AVATAR SECTION */}
                <div className="d-flex align-items-center gap-3 mb-4">

                    <img    
                        src={
        form.profilePic
            ? `${import.meta.env.VITE_API_URL}${form.profilePic}`
            : "/default-avatar.png"
    }
                        alt="avatar"
                        style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #eee",
                        }}
                    />

                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                            className="form-control form-control-sm"
                        />
                        <small className="text-muted">
                            JPG, PNG or GIF. Max 2MB
                        </small>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="form-label">First Name</label>
                            <input
                                name="firstName"
                                value={form.firstName || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Last Name</label>
                            <input
                                name="lastName"
                                value={form.lastName || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="col-12 mb-3">
                            <label className="form-label">Email</label>
                            <input
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>

                        <div className="col-12 mb-3">
                            <label className="form-label">Bio</label>
                            <textarea
                                name="bio"
                                value={form.bio || ""}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                            />
                        </div>

                    </div>

                    {/* BUTTON */}
                    <div className="text-end">
                        <button
                            type="submit"
                            className="btn btn-dark px-4"
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default EditProfile;