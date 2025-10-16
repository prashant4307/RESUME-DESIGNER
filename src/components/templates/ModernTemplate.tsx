import { ResumeData } from "@/pages/Builder";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  data: ResumeData;
}

export const ModernTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="w-full h-full p-8 font-sans text-gray-800" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex items-start gap-6 mb-6">
        {data.personalInfo.profilePicture && (
          <img
            src={data.personalInfo.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4"
            style={{ borderColor: '#7c3aed' }}
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#7c3aed' }}>
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {data.personalInfo.phone}
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {data.personalInfo.location}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-1 mb-6" style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #c026d3 100%)' }}></div>

      {/* Education */}
      {data.education.some((e) => e.degree || e.institution) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#7c3aed' }}>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              {edu.degree && <div className="font-semibold">{edu.degree}</div>}
              {edu.institution && <div className="text-gray-600">{edu.institution}</div>}
              {edu.year && <div className="text-sm text-gray-500">{edu.year}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {data.experience.some((e) => e.position || e.company) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#7c3aed' }}>Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              {exp.position && <div className="font-semibold">{exp.position}</div>}
              {exp.company && <div className="text-gray-600">{exp.company}</div>}
              {exp.duration && <div className="text-sm text-gray-500 mb-1">{exp.duration}</div>}
              {exp.description && <div className="text-sm text-gray-700">{exp.description}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && data.skills[0] !== "" && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: '#7c3aed' }}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              skill && (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ background: 'linear-gradient(90deg, #7c3aed 0%, #c026d3 100%)' }}
                >
                  {skill}
                </span>
              )
            ))}
          </div>
        </div>
      )}

      {/* Hobbies */}
      {data.hobbies.length > 0 && data.hobbies[0] !== "" && (
        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: '#7c3aed' }}>Hobbies</h2>
          <div className="text-sm text-gray-700">
            {data.hobbies.filter(h => h).join(" • ")}
          </div>
        </div>
      )}
    </div>
  );
};
