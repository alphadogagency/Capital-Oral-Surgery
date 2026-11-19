import type { ImageMetadata } from "astro";
import { practicePhotos } from "./practicePhotos";

import exterior from "../assets/homepage/visit-exterior.webp";
import frontDesk from "../assets/homepage/visit-reception.webp";
import waitingRoom from "../assets/homepage/visit-waiting.webp";
import procedureRoom from "../assets/homepage/visit-procedure.webp";
import coneBeamScanner from "../assets/homepage/cone-beam-scanner.webp";
import equipmentCart from "../assets/homepage/implant-planning.webp";
import sedationEquipment from "../assets/homepage/sedation-equipment.webp";
import brightRoom from "../assets/homepage/implant-room.webp";

import buildingFront from "../assets/site/office-building-front.webp";
import checkInDesk from "../assets/site/check-in-desk.webp";
import waitingSeating from "../assets/site/waiting-room-seating.webp";
import roomMonitors from "../assets/site/procedure-room-chair-monitors.webp";
import teamWithPatient from "../assets/site/team-member-with-patient.webp";
import clinicalSupplies from "../assets/site/clinical-supplies.webp";
import hallway from "../assets/site/hallway-seating.webp";
import teamPatientRoom from "../assets/site/team-member-patient-room.webp";
import wallFlowmeter from "../assets/site/wall-gas-flowmeter.webp";
import roomWide from "../assets/site/procedure-room-wide.webp";
import surgicalChairRoom from "../assets/site/surgical-chair-room.webp";
import roomEquipment from "../assets/site/procedure-room-equipment.webp";
import teamGreetingPatient from "../assets/site/team-member-greeting-patient.webp";
import surgicalChair from "../assets/site/surgical-chair.webp";

export type SitePhoto = { src: ImageMetadata; alt: string; position: string };

// Office photography from the practice's Kaptured Moments gallery, hosted with
// the site. Descriptions say what is pictured and do not imply a procedure.
export const sitePhotos = {
  ...practicePhotos,
  gasCylinder: practicePhotos.sedationEquipment,
  exterior: { src: exterior, alt: "The Capital Oral Surgery building at 2445 SW Wanamaker Rd in Topeka", position: "50% 60%" },
  buildingFront: { src: buildingFront, alt: "The front of the Capital Oral Surgery building", position: "50% 55%" },
  frontDesk: { src: frontDesk, alt: "The front desk at Capital Oral Surgery", position: "50% 50%" },
  checkInDesk: { src: checkInDesk, alt: "The check-in desk at Capital Oral Surgery", position: "50% 50%" },
  waitingRoom: { src: waitingRoom, alt: "The waiting room at Capital Oral Surgery", position: "50% 60%" },
  waitingSeating: { src: waitingSeating, alt: "Seating in the Capital Oral Surgery waiting room", position: "50% 55%" },
  hallway: { src: hallway, alt: "A hallway and seating area at Capital Oral Surgery", position: "50% 50%" },
  procedureRoom: { src: procedureRoom, alt: "A procedure room at Capital Oral Surgery", position: "50% 55%" },
  brightRoom: { src: brightRoom, alt: "A bright procedure room at Capital Oral Surgery in Topeka", position: "45% 50%" },
  roomWide: { src: roomWide, alt: "A procedure room with a surgical chair at Capital Oral Surgery", position: "50% 50%" },
  roomMonitors: { src: roomMonitors, alt: "A procedure room with the surgical chair and monitors", position: "50% 55%" },
  roomEquipment: { src: roomEquipment, alt: "A procedure room ready for a patient", position: "50% 55%" },
  surgicalChair: { src: surgicalChair, alt: "A surgical chair in a Capital Oral Surgery procedure room", position: "50% 50%" },
  surgicalChairRoom: { src: surgicalChairRoom, alt: "A surgical chair beside the counter in a procedure room", position: "50% 50%" },
  equipmentCart: { src: equipmentCart, alt: "Equipment in a Capital Oral Surgery procedure room", position: "22% 40%" },
  coneBeamScanner: { src: coneBeamScanner, alt: "The cone beam CT scanner at Capital Oral Surgery", position: "50% 45%" },
  sedationEquipment: { src: sedationEquipment, alt: "Nitrous oxide sedation equipment at Capital Oral Surgery", position: "50% 45%" },
  wallFlowmeter: { src: wallFlowmeter, alt: "A wall-mounted gas flowmeter in a procedure room", position: "50% 45%" },
  clinicalSupplies: { src: clinicalSupplies, alt: "Jars of applicators, tongue depressors and gauze on a counter", position: "50% 50%" },
  teamWithPatient: { src: teamWithPatient, alt: "A Capital Oral Surgery team member with a patient in a procedure room", position: "55% 40%" },
  teamPatientRoom: { src: teamPatientRoom, alt: "A team member talking with a patient seated in a procedure room", position: "50% 45%" },
  teamGreetingPatient: { src: teamGreetingPatient, alt: "A team member smiling at a patient in a procedure room", position: "60% 40%" },
} satisfies Record<string, SitePhoto>;

export type SitePhotoKey = keyof typeof sitePhotos;
