import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    qualification: '',
    degree: '',
    workExperience: '',
    email: '',
    phone: '',
    achievements: '',
    projects: '',
    education: '',
    interests: '',
    languages: '',
    summary: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    profileImage: null,
  });
  console.log(resumeData);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleImageChange = (e) => {
    setResumeData({ ...resumeData, profileImage: URL.createObjectURL(e.target.files[0]) });
  };

  const handleDownload = () => {
    const input = document.getElementById('resume-preview');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex justify-between h-screen w-full bg-gray-100">
      {/* Left Section - Input Fields */}
      <div className="w-1/2 bg-white h-full p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form className="space-y-4">
          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium">Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 border rounded"
              placeholder="Enter your full name"
              onChange={handleChange}
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-sm font-medium">Qualification</label>
            <input
              type="text"
              name="qualification"
              className="w-full p-2 border rounded"
              placeholder="Enter your qualification"
              onChange={handleChange}
            />
          </div>

          {/* College Degree */}
          <div>
            <label className="block text-sm font-medium">College Degree</label>
            <input
              type="text"
              name="degree"
              className="w-full p-2 border rounded"
              placeholder="Enter your college degree"
              onChange={handleChange}
            />
          </div>

          {/* Work Experience */}
          <div>
            <label className="block text-sm font-medium">Work Experience</label>
            <textarea
              name="workExperience"
              className="w-full p-2 border rounded"
              placeholder="Enter your work experience"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-sm font-medium">Achievements</label>
            <textarea
              name="achievements"
              className="w-full p-2 border rounded"
              placeholder="Enter your achievements"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Projects */}
          <div>
            <label className="block text-sm font-medium">Projects</label>
            <textarea
              name="projects"
              className="w-full p-2 border rounded"
              placeholder="Enter your projects"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-medium">Education</label>
            <input
              type="text"
              name="education"
              className="w-full p-2 border rounded"
              placeholder="Enter your education"
              onChange={handleChange}
            />
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium">Interests</label>
            <input
              type="text"
              name="interests"
              className="w-full p-2 border rounded"
              placeholder="Enter your interests"
              onChange={handleChange}
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium">Languages</label>
            <input
              type="text"
              name="languages"
              className="w-full p-2 border rounded"
              placeholder="Enter languages you speak"
              onChange={handleChange}
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium">Summary</label>
            <textarea
              name="summary"
              className="w-full p-2 border rounded"
              placeholder="Enter a brief summary about yourself"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Social Media Links */}
          <div>
            <label className="block text-sm font-medium">Social Media Links</label>
            <input
              type="text"
              name="github"
              className="w-full p-2 border rounded"
              placeholder="GitHub Profile"
              onChange={handleChange}
            />
            <input
              type="text"
              name="linkedin"
              className="w-full p-2 border rounded"
              placeholder="LinkedIn Profile"
              onChange={handleChange}
            />
            <input
              type="text"
              name="facebook"
              className="w-full p-2 border rounded"
              placeholder="Facebook Profile"
              onChange={handleChange}
            />
            <input
              type="text"
              name="instagram"
              className="w-full p-2 border rounded"
              placeholder="Instagram Profile"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      {/* Right Section - CV Preview */}
      <div className="w-1/2 bg-gray-300 h-full p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <div id="resume-preview" className="bg-white p-4 rounded shadow space-y-4">
          {resumeData.profileImage && (
            <img
              src={resumeData.profileImage}
              alt="Profile"
              className="h-32 w-32 object-cover rounded-full mb-4"
            />
          )}
          <h3 className="text-xl font-semibold">{resumeData.fullName}</h3>
          <p className="text-gray-600"><strong>Qualification:</strong> {resumeData.qualification || 'Rahul Sah'}</p>
          <p className="text-gray-600"><strong>College Degree:</strong> {resumeData.degree}</p>
          <p className="text-gray-600"><strong>Work Experience:</strong> {resumeData.workExperience}</p>
          <p className="text-gray-600"><strong>Email:</strong> {resumeData.email}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {resumeData.phone}</p>
          <p className="text-gray-600"><strong>Achievements:</strong> {resumeData.achievements}</p>
          <p className="text-gray-600"><strong>Projects:</strong> {resumeData.projects }</p>
          <p className="text-gray-600"><strong>Education:</strong> {resumeData.education }</p>
          <p className="text-gray-600"><strong>Interests:</strong> {resumeData.interests }</p>
          <p className="text-gray-600"><strong>Languages:</strong> {resumeData.languages }</p>
          <p className="text-gray-600"><strong>Summary:</strong> {resumeData.summary }</p>
          {/* Social Media Links */}
          <p className="text-gray-600"><strong>Social Media:</strong></p>
          <ul className="list-disc pl-4">
            {resumeData.github && <li><a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></li>}
            {resumeData.linkedin && <li><a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a></li>}
            {resumeData.facebook && <li><a href={resumeData.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a></li>}
            {resumeData.instagram && <li><a href={resumeData.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500">Instagram</a></li>}
          </ul>
        </div>

        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleDownload}>
            Download PDF
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

