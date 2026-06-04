import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamForm from "../../components/team/TeamForm";
import { getSingleTeam, updateTeam } from "../../services/teamService";
import { buildFormData } from "../../utils/buildFormData";

const TeamEdit = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const [form, setForm] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        shortBio: "",
        about: "",
        location: "",
        experience: "",
        skills: [],
        socialLinks: {
            facebook: "",
            twitter: "",
            linkedin: "",
            instagram: "",
        },
    });

    // GET SINGLE TEAM
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await getSingleTeam(id);
                const data = res.data.data;
                console.log("FULL RESPONSE:", res);
                setForm({
                    name: data.name || "",
                    designation: data.designation || "",
                    email: data.email || "",
                    phone: data.phone || "",
                    shortBio: data.shortBio || "",
                    about: data.about || "",
                    location: data.location || "",
                    experience: data.experience || "",
                    skills: Array.isArray(data.skills)
                        ? data.skills
                        : JSON.parse(data.skills || "[]"),
                    socialLinks: {
                        facebook: data.socialLinks?.facebook || "",
                        twitter: data.socialLinks?.twitter || "",
                        linkedin: data.socialLinks?.linkedin || "",
                        instagram: data.socialLinks?.instagram || "",
                    },
                });

            } catch (error) {
                console.log("FETCH TEAM ERROR:", error);
            }
        };

        fetchTeam();
    }, [id]);



    // UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const formData = buildFormData(form);

            if (file) {
                formData.append("image", file);
            }
          
            await updateTeam(id, formData);

            alert("Updated Successfully");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <TeamForm
            form={form}
            setForm={setForm}
            loading={loading}
            submitText="Update Team"
            onSubmit={handleSubmit}
            onImageChange={(e) => setFile(e.target.files[0])}
            onChange={(e) =>
                setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                })
            }
        />
    );
};

export default TeamEdit;