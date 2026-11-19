// Willian’s proposed procedure-page FAQs (03-copy-to-approve.md / c9-data.js).
// These are NEW clinical statements that the practice has not approved yet, so
// they stay switched off. Flip SHOW_PENDING_FAQS to true once approved (edit any
// answers the practice changes first); FAQPage schema follows automatically.
export const SHOW_PENDING_FAQS = true;

export const pendingProcedureFaqs: Record<string, { q: string; a: string }[]> = {
  "single-tooth-implant": [
    {
      "q": "How long does a single implant take?",
      "a": "Placing one implant can take as little as 30 minutes. The jawbone usually heals for three to four months before the final crown is attached."
    },
    {
      "q": "Does a single tooth implant hurt?",
      "a": "The area is numbed and sedation is available. Most patients describe mild soreness for a few days, managed with over-the-counter medication and ice."
    },
    {
      "q": "Is an implant better than a bridge?",
      "a": "An implant replaces the tooth without reshaping the healthy teeth beside it and helps preserve the jawbone. Your surgeon will review which option fits your mouth."
    },
    {
      "q": "Will I have a gap while it heals?",
      "a": "Usually not. A temporary tooth can often be worn while the implant heals."
    }
  ],
  "full-mouth-dental-implants": [
    {
      "q": "How many implants do I need for a full arch?",
      "a": "It depends on your jawbone and the type of restoration. Many full-arch options use four to six implants per jaw."
    },
    {
      "q": "Can I replace my dentures with implants?",
      "a": "Often, yes. Implants can secure your teeth so they no longer slip, and your surgeon will check whether your bone can support them."
    },
    {
      "q": "Do I need bone grafting first?",
      "a": "Some patients do. A 3D scan shows whether there is enough bone, and grafting can rebuild it when needed."
    },
    {
      "q": "How long does treatment take?",
      "a": "Surgery is usually done in one visit, then the bone heals for several months before the final teeth are completed."
    }
  ],
  "immediate-implants": [
    {
      "q": "What is an immediate implant?",
      "a": "An implant placed at the same visit the tooth is removed, instead of waiting months for the socket to heal first."
    },
    {
      "q": "Am I a candidate?",
      "a": "It depends on infection, bone quality, and how stable the implant is at placement. A consultation and 3D imaging answer this."
    },
    {
      "q": "Does it shorten treatment?",
      "a": "It can. Immediate implants may reduce the wait for the final restoration to six to eight weeks for some patients."
    },
    {
      "q": "Is it safe to place an implant right away?",
      "a": "When the site is healthy and the implant is stable, yes. Your surgeon monitors healing before the final tooth is attached."
    }
  ],
  "implant-dentures": [
    {
      "q": "How are implant dentures different from regular dentures?",
      "a": "They attach to implants, so they stay in place when you eat and speak instead of resting on the gums."
    },
    {
      "q": "Are implant dentures removable?",
      "a": "Some snap in and out for cleaning, others are fixed in place. Your plan depends on your bone and your goals."
    },
    {
      "q": "Can I use my current denture?",
      "a": "Sometimes an existing denture can be modified to attach to implants. Your dentist will review it with you."
    },
    {
      "q": "Will I have teeth on the day of surgery?",
      "a": "Temporary teeth may be placed the day of surgery in many cases."
    }
  ],
  "zygomatic-implants": [
    {
      "q": "Who are zygomatic implants for?",
      "a": "Patients with severe bone loss in the upper jaw who have been told they cannot have regular implants or need extensive grafting."
    },
    {
      "q": "Do zygomatic implants avoid bone grafting?",
      "a": "Often, yes. They anchor in the cheekbone, which can make grafting of the upper jaw unnecessary."
    },
    {
      "q": "Is the procedure done in one surgery?",
      "a": "In many cases treatment is completed in a single surgery, guided by 3D planning."
    },
    {
      "q": "How do I know if I qualify?",
      "a": "A consultation with 3D imaging shows your bone levels and whether this approach fits your case."
    }
  ],
  "bone-grafting-for-implants": [
    {
      "q": "Why would I need a bone graft before an implant?",
      "a": "An implant needs enough bone width, height, and density to stay stable. Grafting rebuilds bone where it has thinned."
    },
    {
      "q": "Does bone grafting hurt?",
      "a": "It is done with local anesthetic and sedation is available. Soreness afterward is usually mild and short-lived."
    },
    {
      "q": "How long before I can get my implant?",
      "a": "It depends on the graft. Some implants are placed at the same visit, others after several months of healing."
    },
    {
      "q": "Where does the graft material come from?",
      "a": "It can come from your own bone, a tissue bank, or synthetic materials. Your surgeon will explain the best choice for you."
    }
  ],
  "cost-of-dental-implants": [
    {
      "q": "How much do dental implants cost?",
      "a": "It depends on how many teeth are replaced, whether grafting is needed, and the final restoration. You get an exact plan at your consultation."
    },
    {
      "q": "Does insurance cover implants?",
      "a": "Coverage varies widely. Our team can help you understand your benefits before treatment."
    },
    {
      "q": "Are there payment options?",
      "a": "Yes. Payment options may help make care manageable. Ask our team at your consultation."
    },
    {
      "q": "Why do implants cost more than a bridge or denture?",
      "a": "Implants replace the root as well as the tooth, help preserve the jawbone, and are designed to last a very long time."
    }
  ],
  "wisdom-teeth-removal": [
    {
      "q": "When should wisdom teeth be removed?",
      "a": "Often in the late teens or early twenties, before the roots are fully formed. Earlier removal usually means easier healing."
    },
    {
      "q": "Do all wisdom teeth need to come out?",
      "a": "No. A 3D scan and exam show whether yours have room to come in healthy or are likely to cause problems."
    },
    {
      "q": "Will I be asleep?",
      "a": "Several anesthesia options are available, from local anesthetic to IV sedation. Your surgeon helps you choose."
    },
    {
      "q": "How long is recovery?",
      "a": "Most people feel better within a few days. Swelling and soreness usually peak in the first two to three days."
    }
  ],
  "impacted-wisdom-teeth": [
    {
      "q": "What does impacted mean?",
      "a": "The tooth cannot come in normally because there is not enough room, so it stays partly or fully under the gum or bone."
    },
    {
      "q": "Do impacted wisdom teeth always cause pain?",
      "a": "Not always. They can still cause infection, cysts, or damage to nearby teeth without obvious symptoms."
    },
    {
      "q": "Is removal harder when a tooth is impacted?",
      "a": "It can take a little more time when bone covers the tooth. 3D imaging helps plan a precise, gentle removal."
    },
    {
      "q": "Should I remove them if they do not hurt?",
      "a": "Your surgeon will look at their position and risk. Many impacted teeth are best removed before problems start."
    }
  ],
  "after-extraction-of-wisdom-teeth": [
    {
      "q": "How long will I bleed?",
      "a": "Light oozing for the first day is normal. Bite gently on gauze and replace it as needed."
    },
    {
      "q": "When can I eat normally?",
      "a": "Start with soft, cool foods and add more as you feel comfortable, usually over several days."
    },
    {
      "q": "When does swelling go down?",
      "a": "Swelling usually peaks in two to three days, then improves. Ice helps early on and warm compresses later."
    },
    {
      "q": "When should I call the office?",
      "a": "Call if bleeding will not slow, pain gets worse after a few days, or you have a fever. We are here to help."
    }
  ],
  "bone-grafting": [
    {
      "q": "What is a bone graft?",
      "a": "A procedure that adds bone or bone-like material where the jaw has thinned, so it can support teeth or implants."
    },
    {
      "q": "Why does the jawbone shrink?",
      "a": "After a tooth is lost, the bone that held it is no longer stimulated and slowly resorbs. Gum disease and injury can also cause loss."
    },
    {
      "q": "Does bone grafting hurt?",
      "a": "It is done with local anesthetic and sedation is available. Most patients have mild soreness for a few days."
    },
    {
      "q": "How long does a graft take to heal?",
      "a": "Usually several months, depending on the size of the graft and the area treated."
    }
  ],
  "about-bone-grafting": [
    {
      "q": "What materials are used for bone grafts?",
      "a": "Your own bone, tissue-bank bone, or synthetic and specialty materials. Each has advantages depending on the site."
    },
    {
      "q": "Is tissue-bank bone safe?",
      "a": "Yes. It is carefully screened and processed before use."
    },
    {
      "q": "Which material is best for me?",
      "a": "It depends on how much bone is needed and where. Your surgeon will recommend an option at your consultation."
    },
    {
      "q": "What is guided regeneration?",
      "a": "A membrane is placed over the graft to protect it and help new bone form in the right place."
    }
  ],
  "jaw-bone-health": [
    {
      "q": "How do I keep my jawbone healthy?",
      "a": "Replace missing teeth in time, keep your gums healthy, and keep up with regular dental care."
    },
    {
      "q": "Why do missing teeth affect the jawbone?",
      "a": "Tooth roots stimulate the bone. Without them, the bone gradually shrinks."
    },
    {
      "q": "Can lost jawbone be rebuilt?",
      "a": "Often, yes. Bone grafting can restore width and height so teeth or implants can be supported."
    },
    {
      "q": "Do dentures protect the jawbone?",
      "a": "Not on their own. Implants are the only replacement that stimulates the bone like a natural root."
    }
  ],
  "jaw-bone-loss-and-deterioration": [
    {
      "q": "What causes jawbone loss?",
      "a": "Tooth loss, gum disease, long-term denture or bridge wear, and facial injury are the most common causes."
    },
    {
      "q": "How do I know if I have bone loss?",
      "a": "A 3D scan shows bone height and width precisely. Loose dentures or a sunken look can also be signs."
    },
    {
      "q": "Can bone loss be treated?",
      "a": "Yes. Bone grafting, ridge augmentation, or a sinus lift can rebuild bone in many cases."
    },
    {
      "q": "Can bone loss be prevented?",
      "a": "Replacing teeth promptly and treating gum disease early help protect the bone."
    }
  ],
  "ridge-augmentation": [
    {
      "q": "What is ridge augmentation?",
      "a": "A graft that rebuilds the width or height of the jaw ridge after a tooth is removed."
    },
    {
      "q": "When is it needed?",
      "a": "When the ridge has shrunk too much to support an implant or a natural-looking restoration."
    },
    {
      "q": "Is it done at the same time as the extraction?",
      "a": "It can be. In other cases it is done later as a separate procedure."
    },
    {
      "q": "How long before an implant can be placed?",
      "a": "Usually after several months of healing, once the new bone is solid."
    }
  ],
  "sinus-lift": [
    {
      "q": "What is a sinus lift?",
      "a": "A procedure that adds bone in the upper back jaw by gently lifting the sinus membrane and placing graft material below it."
    },
    {
      "q": "Why would I need one?",
      "a": "The bone under the sinus is often too thin to hold an implant, especially after a tooth has been missing for some time."
    },
    {
      "q": "Does a sinus lift hurt?",
      "a": "It is done with local anesthetic and sedation is available. Most patients have mild swelling and soreness for a few days."
    },
    {
      "q": "When can the implant be placed?",
      "a": "Sometimes at the same visit, otherwise after several months of healing."
    }
  ],
  "socket-preservation": [
    {
      "q": "What is socket preservation?",
      "a": "Placing graft material in the socket right after a tooth is removed, so the bone keeps its shape."
    },
    {
      "q": "Why is it done?",
      "a": "Without it, the socket can lose bone as it heals, which makes a future implant harder."
    },
    {
      "q": "Does it add time to my extraction?",
      "a": "Only a few minutes, and it is done at the same visit."
    },
    {
      "q": "When can I get an implant?",
      "a": "Usually after several months, once the graft has healed."
    }
  ],
  "tooth-extractions": [
    {
      "q": "When does a tooth need to be removed?",
      "a": "When it is badly decayed, broken beyond repair, affected by advanced gum disease, or impacted."
    },
    {
      "q": "Does an extraction hurt?",
      "a": "The area is fully numbed and sedation is available. You may feel pressure, but not pain."
    },
    {
      "q": "How long does healing take?",
      "a": "The gum usually heals in one to two weeks. The bone underneath continues to heal for several months."
    },
    {
      "q": "Should I replace the tooth?",
      "a": "Usually, yes. Replacing it helps protect your bite and jawbone. Socket preservation can keep options open."
    }
  ],
  "pre-prosthetic-surgery": [
    {
      "q": "What is pre-prosthetic surgery?",
      "a": "Minor procedures that smooth or reshape the bone and gums so dentures fit comfortably and stay stable."
    },
    {
      "q": "Who needs it?",
      "a": "Patients getting new dentures or partials whose bone ridges, extra bone, or gum tissue would affect the fit."
    },
    {
      "q": "Is it painful?",
      "a": "It is done with local anesthetic and sedation is available. Soreness afterward is usually mild."
    },
    {
      "q": "How long before I can wear my denture?",
      "a": "Your surgeon and dentist will plan timing together, usually after the tissue has healed."
    }
  ],
  "tmj": [
    {
      "q": "What are the signs of a TMJ problem?",
      "a": "Jaw pain or stiffness, clicking or locking, headaches, and changes in how your teeth fit together."
    },
    {
      "q": "What causes TMJ disorders?",
      "a": "Clenching or grinding, injury, arthritis, or bite problems can all contribute."
    },
    {
      "q": "Does TMJ always need surgery?",
      "a": "No. Many patients improve with conservative care. Surgery is considered only when other treatment has not helped."
    },
    {
      "q": "When should I see an oral surgeon?",
      "a": "If jaw pain, locking, or limited opening is affecting daily life or not improving."
    }
  ],
  "oral-pathology": [
    {
      "q": "What should I look out for?",
      "a": "Red or white patches, a sore that does not heal within two weeks, lumps or thickened tissue, and trouble swallowing."
    },
    {
      "q": "Does a mouth sore mean cancer?",
      "a": "Most do not. Any sore or patch that lasts more than two weeks should still be checked."
    },
    {
      "q": "What happens at the appointment?",
      "a": "Your surgeon examines the area and may recommend a biopsy to get a clear diagnosis."
    },
    {
      "q": "Is a biopsy painful?",
      "a": "The area is numbed first. Most patients feel only mild soreness afterward."
    }
  ],
  "3d-imaging": [
    {
      "q": "What is cone beam CT?",
      "a": "A 3D scan that shows your teeth, jaw, nerves, and sinuses in detail, focused on your area of concern."
    },
    {
      "q": "Is the scan safe?",
      "a": "Cone beam CT uses a focused field of view and is designed to keep radiation exposure low."
    },
    {
      "q": "How long does it take?",
      "a": "The scan itself takes less than a minute."
    },
    {
      "q": "Why does my surgeon need a 3D scan?",
      "a": "It allows precise planning for implants, wisdom teeth, and other procedures, so treatment is more predictable."
    }
  ],
  "anesthesia": [
    {
      "q": "What anesthesia options are available?",
      "a": "Local anesthetic, nitrous oxide with local anesthetic, and office-based IV sedation or general anesthesia."
    },
    {
      "q": "Who decides which option I get?",
      "a": "You and your surgeon choose together, based on the procedure, your health, and your comfort level."
    },
    {
      "q": "Is IV sedation safe?",
      "a": "Our oral surgeons are trained to provide anesthesia in the office and monitor you throughout."
    },
    {
      "q": "Do I need someone to drive me home?",
      "a": "Yes, after IV sedation or general anesthesia you will need a responsible adult to drive you home."
    }
  ],
  "nitrous-oxide": [
    {
      "q": "What does nitrous oxide feel like?",
      "a": "Most people feel relaxed and calm, sometimes a little tingly, while staying awake."
    },
    {
      "q": "How quickly does it wear off?",
      "a": "Within minutes after the gas is turned off, with no lingering hangover."
    },
    {
      "q": "Can I drive after nitrous oxide?",
      "a": "Usually, yes, once it has worn off. Your team will confirm before you leave."
    },
    {
      "q": "Is nitrous oxide right for me?",
      "a": "It is helpful for mild to moderate anxiety or a strong gag reflex. Your surgeon will review your health history."
    }
  ]
};
