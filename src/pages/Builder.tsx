import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileImage, FileText, Upload } from "lucide-react";
import { ModernTemplate } from "@/components/templates/ModernTemplate";
import { ProfessionalTemplate } from "@/components/templates/ProfessionalTemplate";
import { CreativeTemplate } from "@/components/templates/CreativeTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    profilePicture: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    duration: string;
    description: string;
  }>;
  skills: string[];
  hobbies: string[];
}

const Builder = () => {
  const [activeTemplate, setActiveTemplate] = useState<"modern" | "professional" | "creative">("modern");
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      profilePicture: "",
    },
    education: [{ degree: "", institution: "", year: "" }],
    experience: [{ position: "", company: "", duration: "", description: "" }],
    skills: [],
    hobbies: [],
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          ...resumeData,
          personalInfo: {
            ...resumeData.personalInfo,
            profilePicture: reader.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: "", institution: "", year: "" }],
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { position: "", company: "", duration: "", description: "" }],
    });
  };

  const downloadAsPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    toast.loading("Generating PDF...");
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.personalInfo.fullName || "resume"}.pdf`);
      
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate PDF");
    }
  };

  const downloadAsPNG = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    toast.loading("Generating PNG...");
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `${resumeData.personalInfo.fullName || "resume"}.png`;
          link.click();
          URL.revokeObjectURL(url);
          toast.success("PNG downloaded successfully!");
        }
      });
    } catch (error) {
      toast.error("Failed to generate PNG");
    }
  };

  const renderTemplate = () => {
    switch (activeTemplate) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "professional":
        return <ProfessionalTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ResumeForge
          </h1>
          <div className="flex gap-2">
            <Button onClick={downloadAsPDF} variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button onClick={downloadAsPNG} style={{ background: "var(--gradient-primary)" }}>
              <FileImage className="mr-2 h-4 w-4" />
              Download PNG
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Choose Template</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant={activeTemplate === "modern" ? "default" : "outline"}
                    onClick={() => setActiveTemplate("modern")}
                    className="h-auto py-8"
                  >
                    Modern
                  </Button>
                  <Button
                    variant={activeTemplate === "professional" ? "default" : "outline"}
                    onClick={() => setActiveTemplate("professional")}
                    className="h-auto py-8"
                  >
                    Professional
                  </Button>
                  <Button
                    variant={activeTemplate === "creative" ? "default" : "outline"}
                    onClick={() => setActiveTemplate("creative")}
                    className="h-auto py-8"
                  >
                    Creative
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profilePicture">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    {resumeData.personalInfo.profilePicture && (
                      <img
                        src={resumeData.personalInfo.profilePicture}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    )}
                    <Label htmlFor="profilePicture" className="cursor-pointer">
                      <div className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-secondary transition-colors">
                        <Upload className="h-4 w-4" />
                        Upload Photo
                      </div>
                      <Input
                        id="profilePicture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        personalInfo: { ...resumeData.personalInfo, fullName: e.target.value },
                      })
                    }
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          personalInfo: { ...resumeData.personalInfo, email: e.target.value },
                        })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) =>
                        setResumeData({
                          ...resumeData,
                          personalInfo: { ...resumeData.personalInfo, phone: e.target.value },
                        })
                      }
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={resumeData.personalInfo.location}
                    onChange={(e) =>
                      setResumeData({
                        ...resumeData,
                        personalInfo: { ...resumeData.personalInfo, location: e.target.value },
                      })
                    }
                    placeholder="New York, NY"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-2 p-4 border rounded-lg">
                    <Input
                      value={edu.degree}
                      onChange={(e) => {
                        const newEducation = [...resumeData.education];
                        newEducation[index].degree = e.target.value;
                        setResumeData({ ...resumeData, education: newEducation });
                      }}
                      placeholder="Degree"
                    />
                    <Input
                      value={edu.institution}
                      onChange={(e) => {
                        const newEducation = [...resumeData.education];
                        newEducation[index].institution = e.target.value;
                        setResumeData({ ...resumeData, education: newEducation });
                      }}
                      placeholder="Institution"
                    />
                    <Input
                      value={edu.year}
                      onChange={(e) => {
                        const newEducation = [...resumeData.education];
                        newEducation[index].year = e.target.value;
                        setResumeData({ ...resumeData, education: newEducation });
                      }}
                      placeholder="Year"
                    />
                  </div>
                ))}
                <Button onClick={addEducation} variant="outline" className="w-full">
                  Add Education
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-2 p-4 border rounded-lg">
                    <Input
                      value={exp.position}
                      onChange={(e) => {
                        const newExperience = [...resumeData.experience];
                        newExperience[index].position = e.target.value;
                        setResumeData({ ...resumeData, experience: newExperience });
                      }}
                      placeholder="Position"
                    />
                    <Input
                      value={exp.company}
                      onChange={(e) => {
                        const newExperience = [...resumeData.experience];
                        newExperience[index].company = e.target.value;
                        setResumeData({ ...resumeData, experience: newExperience });
                      }}
                      placeholder="Company"
                    />
                    <Input
                      value={exp.duration}
                      onChange={(e) => {
                        const newExperience = [...resumeData.experience];
                        newExperience[index].duration = e.target.value;
                        setResumeData({ ...resumeData, experience: newExperience });
                      }}
                      placeholder="Duration (e.g., 2020 - 2023)"
                    />
                    <Textarea
                      value={exp.description}
                      onChange={(e) => {
                        const newExperience = [...resumeData.experience];
                        newExperience[index].description = e.target.value;
                        setResumeData({ ...resumeData, experience: newExperience });
                      }}
                      placeholder="Description"
                    />
                  </div>
                ))}
                <Button onClick={addExperience} variant="outline" className="w-full">
                  Add Experience
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={resumeData.skills.join(", ")}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      skills: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                  placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                  rows={3}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={resumeData.hobbies.join(", ")}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      hobbies: e.target.value.split(",").map((h) => h.trim()),
                    })
                  }
                  placeholder="Enter hobbies separated by commas (e.g., Photography, Reading, Travel)"
                  rows={3}
                />
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  id="resume-preview"
                  className="bg-white shadow-lg"
                  style={{ aspectRatio: "210/297" }}
                >
                  {renderTemplate()}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
