import { useState } from "react";
import Section from "../../ui/general/Section";
import SectionHeader from "../../reusable/SectionHeader";

import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    function handleFormChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function handleSubmit(event) {
        alert(
            "Form Data Entered: " +
                formData.fullName +
                formData.email +
                formData.message
        );
        event.preventDefault();
    }

    return (
        <>
            <Section id="contact" className="contact-section">
                <SectionHeader
                    name="Contact"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente"
                />
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-form-field">
                            <label
                                className="form-field-label"
                                htmlFor="fullName"
                            >
                                Name
                            </label>
                            <input
                                required
                                id="name"
                                type="text"
                                name="fullName"
                                placeholder="Enter Your Name"
                                value={formData.fullName}
                                onChange={handleFormChange}
                                className="form-field-input"
                            />
                        </div>
                        <div className="contact-form-field">
                            <label className="form-field-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                required
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className="form-field-input"
                            />
                        </div>
                        <div className="contact-form-field">
                            <label
                                className="form-field-label"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows="10"
                                cols="30"
                                placeholder="Enter Your Message"
                                value={formData.message}
                                onChange={handleFormChange}
                                className="form-field-input"
                            ></textarea>
                        </div>
                        <button className="submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </Section>
        </>
    );
}

export default Contact;
