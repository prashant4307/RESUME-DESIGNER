import { ResumeData } from "@/pages/Builder";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  data: ResumeData;
}

export const CreativeTemplate = ({ data }: TemplateProps) => {
  return (
    <div className="w-full h-full bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header with gradient */}
      <div className="p-8 text-white" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)' }}>
        <div className="flex items-center gap-6">
          {data.personalInfo.profilePicture && (
            <img
              src={data.personalInfo.profilePicture}
              alt="Profile"
              className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-lg"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {data.personalInfo.fullName || "Your Name"}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
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
      </div>

      <div className="p-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            {data.experience.some((e) => e.position || e.company) && (
              <div>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b-2"
                  style={{ color: '#7c3aed', borderColor: '#7c3aed' }}
                >
                  Experience
                </h2>
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-4 pl-4 border-l-2" style={{ borderColor: '#c026d3' }}>
                    {exp.position && (
                      <div className="font-bold text-lg" style={{ color: '#1e293b' }}>
                        {exp.position}
                      </div>
                    )}
                    {exp.company && <div className="text-gray-600 font-medium">{exp.company}</div>}
                    {exp.duration && (
                      <div className="text-sm mb-1" style={{ color: '#c026d3' }}>
                        {exp.duration}
                      </div>
                    )}
                    {exp.description && <div className="text-sm text-gray-700">{exp.description}</div>}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {data.education.some((e) => e.degree || e.institution) && (
              <div>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b-2"
                  style={{ color: '#7c3aed', borderColor: '#7c3aed' }}
                >
                  Education
                </h2>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-3 pl-4 border-l-2" style={{ borderColor: '#c026d3' }}>
                    {edu.degree && (
                      <div className="font-bold" style={{ color: '#1e293b' }}>
                        {edu.degree}
                      </div>
                    )}
                    {edu.institution && <div className="text-gray-600">{edu.institution}</div>}
                    {edu.year && (
                      <div className="text-sm" style={{ color: '#c026d3' }}>
                        {edu.year}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            {data.skills.length > 0 && data.skills[0] !== "" && (
              <div>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b-2"
                  style={{ color: '#7c3aed', borderColor: '#7c3aed' }}
                >
                  Skills
                </h2>
                <div className="space-y-2">
                  {data.skills.map(
                    (skill, index) =>
                      skill && (
                        <div
                          key={index}
                          className="p-2 rounded text-sm font-medium"
                          style={{ background: '#f3e8ff', color: '#7c3aed' }}
                        >
                          {skill}
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {/* Hobbies */}
            {data.hobbies.length > 0 && data.hobbies[0] !== "" && (
              <div>
                <h2
                  className="text-2xl font-bold mb-4 pb-2 border-b-2"
                  style={{ color: '#7c3aed', borderColor: '#7c3aed' }}
                >
                  Hobbies
                </h2>
                <div className="space-y-2 text-sm text-gray-700">
                  {data.hobbies.map((hobby, index) => hobby && <div key={index}>• {hobby}</div>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
