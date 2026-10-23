import sedationEquipment from "../assets/practice/medical-gas-equipment.jpg";
import scanDetail from "../assets/practice/imaging-detail.jpg";
import teamConversation from "../assets/practice/team-conversation.jpg";
import patientComfort from "../assets/practice/patient-comfort.jpg";
import welcomeConversation from "../assets/practice/welcome-conversation.jpg";
import patientSupport from "../assets/practice/patient-support.jpg";
import team from "../assets/practice/team-at-capital.jpg";
import preparation from "../assets/practice/patient-preparation.jpg";
import welcome from "../assets/practice/patient-welcome.jpg";
import reception from "../assets/practice/reception-conversation.jpg";
import coordinator from "../assets/practice/care-coordinator.jpg";
import imaging from "../assets/practice/3d-imaging-scanner.jpg";
import consultation from "../assets/practice/patient-consultation.jpg";
import conversation from "../assets/practice/patient-conversation.jpg";
import planning from "../assets/practice/care-planning.jpg";
import entrance from "../assets/practice/capital-office-exterior.jpg";

// Client-supplied gallery photos; descriptions do not imply specific procedures.
export const practicePhotos = {
  // Gallery original: 3H6A9796.jpg
  team: { src: team, alt: "Capital Oral Surgery team outside the office entrance", position: "50% 50%" },
  // Gallery original: 3H6A9970.jpg
  preparation: { src: preparation, alt: "A Capital Oral Surgery team member helping a patient get comfortable", position: "50% 45%" },
  // Gallery original: 3H6A9913.jpg
  welcome: { src: welcome, alt: "A patient being welcomed at the Capital Oral Surgery reception desk", position: "50% 50%" },
  // Gallery original: 3H6A9942.jpg
  reception: { src: reception, alt: "Capital Oral Surgery team members talking at reception", position: "50% 50%" },
  // Gallery original: 3H6A9965.jpg
  coordinator: { src: coordinator, alt: "A smiling Capital Oral Surgery team member at the reception desk", position: "50% 60%" },
  // Gallery original: 3H6A9719.jpg
  imaging: { src: imaging, alt: "Dental imaging scanner at Capital Oral Surgery", position: "50% 55%" },
  // Gallery original: 3H6A0030.jpg
  consultation: { src: consultation, alt: "A Capital Oral Surgery team member reviewing information with a patient", position: "50% 50%" },
  // Gallery original: 3H6A0007.jpg
  conversation: { src: conversation, alt: "A Capital Oral Surgery team member speaking with a seated patient", position: "50% 50%" },
  // Gallery original: 3H6A9922.jpg
  planning: { src: planning, alt: "A patient discussing paperwork with a Capital Oral Surgery team member", position: "50% 55%" },
  // Gallery original: 3H6A0094.jpg
  entrance: { src: entrance, alt: "Exterior entrance to the Capital Oral Surgery office building", position: "50% 50%" },
  // Gallery original: 3H6A9713.jpg
  sedationEquipment: { src: sedationEquipment, alt: "Medical gas cylinder, gauge and tubing at Capital Oral Surgery", position: "50% 50%" },
  // Gallery original: 3H6A9723.jpg
  scanDetail: { src: scanDetail, alt: "Capital Oral Surgery imaging scanner reflected in a wall mirror", position: "50% 50%" },
  // Gallery original: 3H6A9813.jpg
  teamConversation: { src: teamConversation, alt: "Capital Oral Surgery team members talking outside the office", position: "50% 52%" },
  // Gallery original: 3H6A9976.jpg
  patientComfort: { src: patientComfort, alt: "A patient smiling while a Capital Oral Surgery team member adjusts her bib", position: "60% 48%" },
  // Gallery original: 3H6A9908.jpg
  welcomeConversation: { src: welcomeConversation, alt: "A Capital Oral Surgery team member welcoming a patient at reception", position: "50% 50%" },
  // Gallery original: 3H6A9954.jpg
  patientSupport: { src: patientSupport, alt: "A Capital Oral Surgery team member smiling while speaking with a patient at the front desk", position: "54% 45%" },
} as const;
