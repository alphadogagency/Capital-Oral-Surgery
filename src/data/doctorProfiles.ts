// Presentation fields for the doctor template. Every fact restates the
// biography in doctors.ts; nothing here adds a new credential or claim.
export type DoctorProfile = {
  first: string;
  last: string;
  tags: string[];
  facts: [string, string][];
  timeline: [string, string, string][];
  certifications: string[];
  /** schema.org credentials and schools, all named in the biography. */
  credentials: string[];
  alumniOf: string[];
};

export const doctorProfiles: Record<string, DoctorProfile> = {
  "patrick-lucaci": {
    first: "Dr. Patrick",
    last: "Lucaci",
    tags: ["DDS, MD", "Oral surgeon in Topeka, KS"],
    facts: [
      ["Board-certified", "Oral and maxillofacial surgery"],
      ["Dental + medical", "Degrees in both, plus a general surgery residency"],
      ["4 countries", "Trained in Uganda, Northern Ireland, Sweden and the US"],
    ],
    timeline: [
      ["1999", "Bachelor of Dental Surgery", "Makerere University, with additional credits from Queen's University in Belfast and the Karolinska Institutet in Stockholm, Sweden"],
      ["2009", "Doctor of Dental Surgery", "University of Missouri-Kansas City"],
      ["2012", "Doctor of Medicine", "University of Missouri School of Medicine"],
      ["2013", "General Surgery Residency", "University of Missouri-Kansas City"],
      ["2015", "Certificate in Oral and Maxillofacial Surgery", "UMKC School of Medicine"],
    ],
    certifications: ["ACLS", "BLS", "PALS", "ATLS"],
    credentials: ["Doctor of Dental Surgery (DDS)", "Doctor of Medicine (MD)", "Certificate in Oral and Maxillofacial Surgery"],
    alumniOf: ["Makerere University", "University of Missouri-Kansas City", "University of Missouri School of Medicine"],
  },
  "owen-lonergan": {
    first: "Dr. Owen",
    last: "Lonergan",
    tags: ["MPH, DMD, MD", "Oral surgeon in Topeka, KS"],
    facts: [
      ["Board-certified", "Diplomate, American Board of Oral and Maxillofacial Surgery"],
      ["Dental + medical", "Plus a Master of Public Health"],
      ["Former faculty", "Clinical professor, UMKC School of Dentistry"],
    ],
    timeline: [
      ["College", "Bachelor of Science in Biology", "University of California, San Diego"],
      ["2010", "Doctor of Dental Medicine and Master of Public Health", "Arizona School of Dentistry and Oral Health and Arizona School of Health Sciences, Phoenix"],
      ["2014", "Doctor of Medicine", "University of Missouri-Kansas City College of Medicine"],
      ["2015", "General surgery", "University of Missouri-Kansas City"],
      ["2017", "Certification in oral surgery", "UMKC Oral & Maxillofacial Surgery Residency"],
    ],
    certifications: ["ACLS", "BLS"],
    credentials: ["Doctor of Dental Medicine (DMD)", "Master of Public Health (MPH)", "Doctor of Medicine (MD)", "Diplomate, American Board of Oral and Maxillofacial Surgery"],
    alumniOf: ["University of California, San Diego", "Arizona School of Dentistry and Oral Health", "University of Missouri-Kansas City College of Medicine"],
  },
};

/** Practice-wide procedures, with the homepage's own one-line descriptions. */
export const practiceProcedures = [
  { title: "Dental implants", text: "Permanent, natural-feeling tooth replacement.", href: "/services/replacing-missing-teeth/" },
  { title: "Wisdom teeth removal", text: "Gentle removal with sedation options.", href: "/services/wisdom-teeth-removal/" },
  { title: "Tooth extractions", text: "Routine and surgical extractions.", href: "/services/tooth-extractions/" },
  { title: "Bone grafting", text: "Preparing your jaw for implants.", href: "/services/bone-grafting/" },
  { title: "Oral pathology", text: "Diagnosis and treatment of oral lesions.", href: "/services/oral-pathology/" },
];
