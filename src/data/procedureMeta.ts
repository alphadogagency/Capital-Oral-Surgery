import type { SitePhotoKey } from "./sitePhotos";

// Per-page settings for the shared procedure template. Page copy itself lives
// in procedures.json (the practice's approved wording).

/** Browser titles: one pattern, with the service and the city. */
export const procedureTitles: Record<string, string> = {
  "replacing-missing-teeth": "Dental Implants in Topeka, KS | Capital Oral Surgery",
  "single-tooth-implant": "Single Tooth Implant in Topeka, KS | Capital Oral Surgery",
  "full-mouth-dental-implants": "Full Mouth Dental Implants in Topeka, KS | Capital Oral Surgery",
  "immediate-implants": "Immediate Dental Implants in Topeka, KS | Capital Oral Surgery",
  "implant-dentures": "Implant Dentures in Topeka, KS | Capital Oral Surgery",
  "zygomatic-implants": "Zygomatic Implants in Topeka, KS | Capital Oral Surgery",
  "bone-grafting-for-implants": "Bone Grafting for Implants in Topeka, KS | Capital Oral Surgery",
  "after-implant-placement": "After Implant Placement | Capital Oral Surgery, Topeka, KS",
  "cost-of-dental-implants": "Cost of Dental Implants in Topeka, KS | Capital Oral Surgery",
  "dental-implants-faq": "Dental Implants FAQ | Capital Oral Surgery, Topeka, KS",
  "wisdom-teeth-removal": "Wisdom Teeth Removal in Topeka, KS | Capital Oral Surgery",
  "impacted-wisdom-teeth": "Impacted Wisdom Teeth in Topeka, KS | Capital Oral Surgery",
  "after-extraction-of-wisdom-teeth": "After Wisdom Teeth Removal | Capital Oral Surgery, Topeka, KS",
  "bone-grafting": "Bone Grafting in Topeka, KS | Capital Oral Surgery",
  "about-bone-grafting": "About Bone Grafting | Capital Oral Surgery, Topeka, KS",
  "jaw-bone-health": "Jaw Bone Health | Capital Oral Surgery, Topeka, KS",
  "jaw-bone-loss-and-deterioration": "Jaw Bone Loss and Deterioration | Capital Oral Surgery, Topeka",
  "ridge-augmentation": "Ridge Augmentation in Topeka, KS | Capital Oral Surgery",
  "sinus-lift": "Sinus Lift in Topeka, KS | Capital Oral Surgery",
  "socket-preservation": "Socket Preservation in Topeka, KS | Capital Oral Surgery",
  "tooth-extractions": "Tooth Extractions in Topeka, KS | Capital Oral Surgery",
  "pre-prosthetic-surgery": "Pre-Prosthetic Surgery in Topeka, KS | Capital Oral Surgery",
  tmj: "TMJ Treatment in Topeka, KS | Capital Oral Surgery",
  "oral-pathology": "Oral Pathology in Topeka, KS | Capital Oral Surgery",
  "3d-imaging": "3D Cone Beam CT Imaging in Topeka, KS | Capital Oral Surgery",
  anesthesia: "Anesthesia & IV Sedation in Topeka, KS | Capital Oral Surgery",
  "nitrous-oxide": "Nitrous Oxide Sedation in Topeka, KS | Capital Oral Surgery",
};

/** Name and one-line description used when a page is listed on another page. */
export const procedureLinks: Record<string, { name: string; line: string }> = {
  "replacing-missing-teeth": { name: "Replacing missing teeth", line: "Compare every way to replace a tooth." },
  "single-tooth-implant": { name: "Single tooth implant", line: "One tooth, no reshaping of its neighbors." },
  "full-mouth-dental-implants": { name: "Full mouth dental implants", line: "A full arch of fixed teeth on implants." },
  "immediate-implants": { name: "Immediate implants", line: "Placed when the tooth is removed." },
  "implant-dentures": { name: "Implant dentures", line: "Dentures that attach to implants." },
  "zygomatic-implants": { name: "Zygomatic implants", line: "For severe bone loss in the upper jaw." },
  "bone-grafting-for-implants": { name: "Bone grafting for implants", line: "Rebuilding bone for a solid base." },
  "after-implant-placement": { name: "After implant placement", line: "What recovery looks like." },
  "cost-of-dental-implants": { name: "Cost of dental implants", line: "What shapes the cost of treatment." },
  "dental-implants-faq": { name: "Dental implants FAQ", line: "Answers to common implant questions." },
  "wisdom-teeth-removal": { name: "Wisdom teeth removal", line: "When and why to remove them." },
  "impacted-wisdom-teeth": { name: "Impacted wisdom teeth", line: "When there is no room for them to come in." },
  "after-extraction-of-wisdom-teeth": { name: "After wisdom tooth extraction", line: "What to expect while you heal." },
  "bone-grafting": { name: "Bone grafting", line: "Rebuilding jawbone where it has thinned." },
  "about-bone-grafting": { name: "About bone grafting", line: "The graft materials we use." },
  "jaw-bone-health": { name: "Jaw bone health", line: "Keeping the jaw strong over time." },
  "jaw-bone-loss-and-deterioration": { name: "Jaw bone loss", line: "Why the jawbone shrinks." },
  "ridge-augmentation": { name: "Ridge augmentation", line: "Restoring the jaw ridge after an extraction." },
  "sinus-lift": { name: "Sinus lift", line: "Adding bone in the upper back jaw." },
  "socket-preservation": { name: "Socket preservation", line: "Protecting bone when a tooth is removed." },
  "tooth-extractions": { name: "Tooth extractions", line: "Gentle removal when a tooth cannot be saved." },
  "pre-prosthetic-surgery": { name: "Pre-prosthetic surgery", line: "Preparing the mouth for dentures." },
  tmj: { name: "TMJ treatment", line: "Help for jaw pain, clicking and locking." },
  "oral-pathology": { name: "Oral pathology", line: "Diagnosis of sores, patches and lumps." },
  "3d-imaging": { name: "3D imaging", line: "Precise 3D images of your jaw." },
  anesthesia: { name: "Anesthesia", line: "Options to keep you comfortable." },
  "nitrous-oxide": { name: "Nitrous oxide", line: "Light, adjustable relaxation." },
};

type ClusterKey = "implants" | "wisdom" | "bone" | "surgery" | "comfort";

export const clusters: Record<ClusterKey, { eyebrow: string; heading: string; photo: SitePhotoKey; pages: string[] }> = {
  implants: {
    eyebrow: "Dental implants",
    heading: "<span>More on</span><br>dental implants.",
    photo: "brightRoom",
    pages: ["single-tooth-implant", "full-mouth-dental-implants", "immediate-implants", "implant-dentures", "zygomatic-implants", "bone-grafting-for-implants", "replacing-missing-teeth", "cost-of-dental-implants", "dental-implants-faq"],
  },
  wisdom: {
    eyebrow: "Wisdom teeth",
    heading: "<span>More on</span><br>wisdom teeth.",
    photo: "teamPatientRoom",
    pages: ["wisdom-teeth-removal", "impacted-wisdom-teeth", "after-extraction-of-wisdom-teeth", "tooth-extractions", "anesthesia", "nitrous-oxide"],
  },
  bone: {
    eyebrow: "Bone grafting",
    heading: "<span>Bone grafting</span><br>and jaw health.",
    photo: "roomMonitors",
    pages: ["bone-grafting", "about-bone-grafting", "socket-preservation", "ridge-augmentation", "sinus-lift", "bone-grafting-for-implants", "jaw-bone-health", "jaw-bone-loss-and-deterioration"],
  },
  surgery: {
    eyebrow: "Oral surgery",
    heading: "<span>Other procedures</span><br>we perform.",
    photo: "surgicalChairRoom",
    pages: ["tooth-extractions", "wisdom-teeth-removal", "pre-prosthetic-surgery", "tmj", "oral-pathology", "replacing-missing-teeth", "bone-grafting"],
  },
  comfort: {
    eyebrow: "Comfort and technology",
    heading: "<span>Comfort and</span><br>technology.",
    photo: "roomWide",
    pages: ["anesthesia", "nitrous-oxide", "3d-imaging", "wisdom-teeth-removal", "tooth-extractions", "replacing-missing-teeth"],
  },
};

export const pageCluster: Record<string, ClusterKey> = {
  "replacing-missing-teeth": "implants",
  "single-tooth-implant": "implants", "full-mouth-dental-implants": "implants", "immediate-implants": "implants", "implant-dentures": "implants",
  "zygomatic-implants": "implants", "bone-grafting-for-implants": "implants", "after-implant-placement": "implants", "cost-of-dental-implants": "implants", "dental-implants-faq": "implants",
  "wisdom-teeth-removal": "wisdom", "impacted-wisdom-teeth": "wisdom", "after-extraction-of-wisdom-teeth": "wisdom",
  "bone-grafting": "bone", "about-bone-grafting": "bone", "jaw-bone-health": "bone", "jaw-bone-loss-and-deterioration": "bone", "ridge-augmentation": "bone", "sinus-lift": "bone", "socket-preservation": "bone",
  "tooth-extractions": "surgery", "pre-prosthetic-surgery": "surgery", tmj: "surgery", "oral-pathology": "surgery",
  "3d-imaging": "comfort", anesthesia: "comfort", "nitrous-oxide": "comfort",
};

/** Pages whose cards describe a real sequence, so each row is labelled Step 1, 2, 3. */
export const sequencePages = ["single-tooth-implant", "implant-dentures", "zygomatic-implants", "sinus-lift", "socket-preservation", "ridge-augmentation"];

/** Pages that describe a procedure (used only for MedicalProcedure schema). */
export const procedureNames: Record<string, string> = {
  "single-tooth-implant": "Single tooth dental implant",
  "full-mouth-dental-implants": "Full mouth dental implants",
  "immediate-implants": "Immediate dental implant placement",
  "implant-dentures": "Implant-supported dentures",
  "zygomatic-implants": "Zygomatic implants",
  "bone-grafting-for-implants": "Bone grafting for dental implants",
  "wisdom-teeth-removal": "Wisdom teeth removal",
  "bone-grafting": "Jaw bone grafting",
  "ridge-augmentation": "Ridge augmentation",
  "sinus-lift": "Sinus lift",
  "socket-preservation": "Socket preservation",
  "tooth-extractions": "Tooth extraction",
  "pre-prosthetic-surgery": "Pre-prosthetic surgery",
};

// Section photos come from the rooms and equipment set so they do not repeat
// the team-with-patient hero photos.
const overrides: Record<string, [SitePhotoKey, SitePhotoKey]> = {
  "3d-imaging": ["procedureRoom", "brightRoom"],
  anesthesia: ["wallFlowmeter", "surgicalChair"],
  "nitrous-oxide": ["sedationEquipment", "wallFlowmeter"],
  "zygomatic-implants": ["equipmentCart", "brightRoom"],
  "about-bone-grafting": ["clinicalSupplies", "roomMonitors"],
};
const poolA: SitePhotoKey[] = ["brightRoom", "procedureRoom", "roomWide", "surgicalChairRoom", "roomMonitors", "surgicalChair", "equipmentCart"];
const poolB: SitePhotoKey[] = ["clinicalSupplies", "surgicalChair", "equipmentCart", "wallFlowmeter", "roomMonitors", "roomWide", "procedureRoom"];
const rooms: SitePhotoKey[] = ["brightRoom", "roomWide", "roomMonitors", "surgicalChairRoom", "surgicalChair", "procedureRoom"];

export function sectionPhotos(slug: string): { overview: SitePhotoKey; benefits: SitePhotoKey; related: SitePhotoKey } {
  const order = Object.keys(procedureLinks);
  const index = Math.max(0, order.indexOf(slug));
  let pair = overrides[slug];
  if (!pair) {
    const a = poolA[index % poolA.length];
    let k = (index + 3) % poolB.length;
    while (poolB[k] === a) k = (k + 1) % poolB.length;
    pair = [a, poolB[k]];
  }
  const cluster = clusters[pageCluster[slug] ?? "surgery"];
  const related = [cluster.photo, ...rooms].find((key) => !pair.includes(key)) ?? cluster.photo;
  return { overview: pair[0], benefits: pair[1], related };
}
