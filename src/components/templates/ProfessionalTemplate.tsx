import { ResumeData } from "@/pages/Builder";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  data: ResumeData;
}

export const ProfessionalTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="w-full h-full flex" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <div className="w-1/3 p-6 text-white" style={{ background: '#1e293b' }}>
        {data.personalInfo.profilePicture && (
          <img
            src={data.personalInfo.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 mx-auto border-4 border-white"
          />
        )}

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 pb-2 border-b border-gray-400">Contact</h3>
          <div className="space-y-2 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && data.skills[0] !== "" && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 pb-2 border-b border-gray-400">Skills</h3>
            <div className="space-y-1 text-sm">
              {data.skills.map((skill, index) => skill && <div key={index}>• {skill}</div>)}
            </div>
          </div>
        )}

        {/* Hobbies */}
        {data.hobbies.length > 0 && data.hobbies[0] !== "" && (
          <div>
            <h3 className="text-lg font-bold mb-3 pb-2 border-b border-gray-400">Hobbies</h3>
            <div className="space-y-1 text-sm">
              {data.hobbies.map((hobby, index) => hobby && <div key={index}>• {hobby}</div>)}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white text-gray-800">
        <h1 className="text-4xl font-bold mb-1" style={{ color: '#1e293b' }}>
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="h-1 w-20 mb-6" style={{ background: '#7c3aed' }}></div>

        {/* Education */}
        {data.education.some((e) => e.degree || e.institution) && (
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#1e293b' }}>
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                {edu.degree && <div className="font-semibold text-lg">{edu.degree}</div>}
                {edu.institution && <div className="text-gray-600">{edu.institution}</div>}
                {edu.year && <div className="text-sm text-gray-500">{edu.year}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {data.experience.some((e) => e.position || e.company) && (
          <div>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wide" style={{ color: '#1e293b' }}>
              Work Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                {exp.position && <div className="font-semibold text-lg">{exp.position}</div>}
                {exp.company && <div className="text-gray-600">{exp.company}</div>}
                {exp.duration && <div className="text-sm text-gray-500 mb-1">{exp.duration}</div>}
                {exp.description && <div className="text-sm text-gray-700">{exp.description}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
