import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Card3DRotation from './components/Cards3d';
import Navbar from './components/NavBar.jsx';
import Ballpit from './components/Ballpit';
import Loading from "./components/Loading.jsx"

// Import assets
import MediaImg from './assets/Media_2.jpg';
import cultural from './assets/Cultural.jpg';
import hr from './assets/HR.jpg';
import fineArts from './assets/Fine_Arts.jpg';
import sports from './assets/sports.jpg';
import comdev from './assets/Community_dev.jpg';
import women from './assets/Women_Emp.jpg';
import lit from './assets/Literary.jpg';
import special from "./assets/Special_front.jpg"
import titleevent from "./assets/TitleEvent_front.jpg"

// Import Pages

import Rulebook from "./components/crate/SurpriseBox.jsx";
import Map from "./components/Map/Map.jsx";
// import Contact from "./pages/Contact";
// import Developers from "./pages/Developers";

//importing bac images of cards
import Mediaback from './assets/Mediaback.webp';
import Culturalback from './assets/Culturalback.webp';
import HRback from './assets/HRback.webp';
import FRback from './assets/FRback.webp';
import Sportsback from './assets/Sportsback.webp';
import CDCback from './assets/CDCback.webp';
import WECback from './assets/WECback.webp';
import Literaryback from './assets/Literaryback.webp';
import Specialback from "./assets/Special_back.jpg"
import TitleEventback from "./assets/TitleEvent_back.jpg"

// import MediaClub from "./components/ClubEvents/Media/MediaClub";
import HRClub from "./components/ClubEvents/HR/HRClub";
import CulturalClub from "./components/ClubEvents/Cultural/CulturalClub";
import FineArtsClub from "./components/ClubEvents/FineArts/FineArtsClub";
import CommunityDevelopmentClub from "./components/ClubEvents/CommunityDevelopment/CommunityDevelopmentClub";
import SportsClub from "./components/ClubEvents/Sports/SportsClub";
import WomenEmpowermentClub from "./components/ClubEvents/WomenEmpowerment/WomenEmpowermentClub";
import LiteraryClub from "./components/ClubEvents/Literary/LiteraryClub";
import MediaClub from "./components/ClubEvents/Media/MediaClub.jsx";
import Specials from "./components/ClubEvents/Specials/Specials.jsx";
import TitleEvents from "./components/ClubEvents/TitleEvents/TitleEvents.jsx"

import { useState, useEffect } from "react";


import Event from "./components/ClubEvents/Events/event.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

import Footer from "./components/Footer.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simulate loading delay
  }, []);

  if (loading) return <Loading />;

  {/* CDC */ }
  const carnivalFest = {
    title: "Carnival Fest – The Ultimate Treasure Mystery Challenge!",
    description:
      "Join the intrigue of our Treasure Mystery event! Decode clues, and solve the ultimate hint. Whether you're a seasoned sleuth or new to the game, immerse yourself in suspense and strategy. Gather your team, crack the case, and unravel the mystery!",
    backgroundImage: "/carnival_fest.webp",
    type: "Team",
    amount: 500,
    teamSize: "4",
    rules: [
      " There will be a total of 6 rounds.",
      " The coordinators will provide detailed rules for each round on the spot before the commencement of that specific round. A demo will also be shown.",
      " All rounds from the start will follow an elimination format.",
      " The use of mobile phones is strictly prohibited throughout the event.",
      " Participants are required to keep and preserve any materials provided by the coordinators.",
      " All participants must be present at the venue at least 30 minutes before the event begins.",
      " Multiple teams from the same college are welcome and encouraged to join.",
      " The decisions made by the coordinators are final.",
    ],
    dateTime: "3rd April, 10:00 AM",
    venue: "Portico",
    registration: "Online (First 60 entries will be considered)",
    teamsPerCollege: "Unlimited",
    contact: "Naveen Kittali-7022868058",
    eventLink: "https://forms.gle/8VwXMa5B455GaMs19"
  };

  const fightOfCarnivalRivals = {
    title: "Fight of Carnival Rivals (BGMI)",
    description:
      "Prepare for an immersive dive into the high-tech warfields of BGMI, where cutting-edge technology meets multiplayer action. Gear up for an event like no other, as we combine the adrenaline-pumping gameplay of BGMI with futuristic elements that will blow your mind!",
    backgroundImage: "/fight_of_carnival_rivals_bgmi.webp",
    type: "Team",
    amount: 500,
    teamSize: "4",
    rules: [
      "**Qualification:**",
      " 2 matches will be played (Maps: Erangel and Miramar).",

      "**Finals:**",
      " A total of 3 matches will be played.",
      " The first two maps will be Erangel and Miramar.",
      " The third map will be chosen based on voting (Erangel, Miramar, or Vikendi).",

      "**General Rules:**",
      " Earphones are compulsory.",
      " Only smartphones are allowed; no tablets, emulators, or additional gaming devices.",
      " No substitute players are allowed.",
      " If any team is caught cheating, they will be immediately disqualified.",
      " The team with the maximum number of points at the end of all matches will be declared the winner."
    ],
    dateTime: "3rd April, 10:00 AM",
    venue: "CS Department Classroom",
    registration: "Online (First 74 entries will be considered)",
    teamsPerCollege: "Unlimited",
    contact: "Naveen Kittali-7022868058",
    eventLink: "https://forms.gle/2bTHHrBTV4Weo3z49"
  };

  const clashOfValoMasters = {
    title: "Clash of Valo Masters (Valorant)",
    description:
      "Join us for an epic showdown in Valorant at our college fest! Form teams, strategize, and battle it out in intense matches. Whether you're a seasoned player or new to the game, this event promises adrenaline-fueled action and fierce competition. Don't miss out on the chance to prove your skills and claim victory in the Valorant Showdown!",
    backgroundImage: "/clash_of_valo_masters.webp",
    type: "Team",
    amount: 500,
    teamSize: "5 (plus 1 substitute)",
    rules: [
      " It will be a knockout tournament.",
      " Players should carry their own setup: laptops, keyboards, headsets, mouse pad, and mouse.",
      " Each team's roster will be allowed to have 5 main players and 1 substitute.",
      " College identity cards are compulsory.",
      " Once the tournament starts, you cannot replace any player.",
      " A substitute player may only be added before the game starts.",
      " The substitute player cannot be part of any other team's roster in the tournament.",
      " Matches will be played in a 5v5 format.",
      " Maps will be decided based on a voting system.",
      " All matches will be 'Best of One' in a single-elimination bracket (Knockout Tournament).",
      " Only one cross-entry college player is allowed per team. This player will not earn GC points for their college; GC points will be awarded to the other 5 members of the team.",
      " Team leader (only 1 member per team) must provide a WhatsApp number during registration to be added to the tournament group for further updates.",
      " The Coordinator's decision is final.",

      "**In-Game Custom Options:**",
      " Map: To be played from the map pool based on voting.",
      " Mode: Standard.",
      " Allow Cheats: Off.",
      " Tournament Mode: On.",
      " Overtime: Win by Two: On."
    ],
    dateTime: "3rd April, 9:00 AM",
    venue: "CS Lab",
    registration: "Online (First 40 entries will be considered)",
    teamsPerCollege: "Unlimited",
    contact: "Naveen Kittali-7022868058",
    eventLink: "https://forms.gle/ht55LkVisw2y4LdQ9"
  };


  {/* Dance */ }
  const celestialCypherWestern = {
    title: "Celestial Cypher: Western (Solo Dance-Showdown)",
    description:
      "Dance is a superpower within us all, but only a few dare to unleash its magic. From energetic thumkas to graceful footwork, every move mesmerizes and tells a story. When fueled by passion, dance captivates, bringing the stage to life. We can't wait to experience this enchantment!",
    backgroundImage: "/celestial_cypher_western.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Tracks must be submitted in pen drives (strictly in MP3 format) in ready-to-play condition.",
      " Classical routines are not allowed.",
      " Dance must be performed on western songs, though fusion performances are allowed.",
      " Stage cleanliness and discipline should be maintained.",
      " Participants must report on time; failure to do so will result in disqualification."
    ],
    rounds: [
      {
        name: "Screening",
        details: [
          " Time limit: 1-2 minutes.",
          " The elimination round will be held in a closed room."
        ]
      },
      {
        name: "Final Battle",
        details: [
          " This is an on-the-spot face-off round.",
          " Participants will get 25-30 seconds to showcase their best dance moves to randomly played music.",
          " The decision of the judges will be final and binding."
        ]
      }
    ],
    dateTime: "3rd April, 10:45 AM",
    venue: "Auditorium & Portico",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "JaySancheti-9883066256",
    eventLink: "https://forms.gle/3TWxdBof3AwhcVky9"
  };

  const talaTarangClassical = {
    title: "Tala Tarang: Classical (Solo Dance - Classical)",
    description:
      "Immerse yourself in the rich traditions of classical dance, where every movement tells a story. From elegant mudras to rhythmic footwork, let your performance captivate and inspire the audience!",
    backgroundImage: "/tala_tarang_classical.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Time limit: 3-5 minutes.",
      " Tracks must be submitted in pen drives (strictly in MP3 format) in ready-to-play condition.",
      " Only classical routines and music are allowed.",
      " Stage cleanliness and discipline should be maintained.",
      " Participants must report on time; failure to do so will result in disqualification."
    ],
    rounds: [
      {
        name: "Main Performance",
        details: [
          " Single round of classical dance performance.",
          " Judging will be based on technique, expressions, rhythm, and adherence to classical style."
        ]
      }
    ],
    dateTime: "5th April, 10:45 AM",
    venue: "Amphi Stage",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "JaySancheti-9883066256",
    eventLink: "https://forms.gle/uH2Yj4Jadi244rzD7"
  };

  const shadowWaltz = {
    title: "The Shadow Waltz (Duet Dance)",
    description:
      "A mesmerizing duet dance competition where rhythm and chemistry take center stage. Perform with your partner, adapt to the music, and let your moves tell a story!",
    backgroundImage: "/shadow_waltz_duet.webp",
    type: "Duet",
    amount: 400,
    teamSize: "2",
    rules: [
      " Tracks must be submitted in pen drives (strictly in MP3 format) in ready-to-play condition.",
      " Classical routines are not allowed. However, fusion performances are allowed.",
      " No extra marks will be allocated for the use of props.",
      " Stage cleanliness and discipline should be maintained.",
      " Participants must report on time; failure to do so will result in disqualification."
    ],
    rounds: [
      {
        name: "Screening",
        details: [
          " Time limit: 2-3 minutes.",
          " The elimination round will be held in a closed room."
        ]
      },
      {
        name: "Finals",
        details: [
          " Time limit: 3-5 minutes.",
          " The performance must include the sequence performed in the elimination round.",
          " The decision of the judges will be final and binding."
        ]
      }
    ],
    dateTime: "3rd April, 1:45 PM",
    venue: "Auditorium & Amphi Stage",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "JaySancheti-9883066256",
    eventLink: "https://forms.gle/XEAT6Y3VKR2NH2dw5"
  };

  const carnivalCadence = {
    title: "Carnival Cadence (Group Dance)",
    description:
      "A high-energy group dance competition where teams showcase their moves with style, passion, and synchronization. Let your group captivate the floor with expression and dance!",
    backgroundImage: "/carnival_cadence.webp",
    type: "Group",
    amount: 800,
    teamSize: "8-12",
    rules: [
      " Time limit: 5-7 minutes (including stage setup).",
      " Tracks must be submitted in pen drives (strictly in MP3 format) in ready-to-play condition.",
      " Teams comprising participants from different colleges will not be considered and will be disqualified.",
      " A minimum of 6 dancers must always be present on stage during the performance.",
      " Fusion is allowed.",
      " Usage of props is allowed but must be notified and approved by the coordinators in advance.",
      " Stage cleanliness and discipline should be maintained.",
      " Participants must report on time; failure to do so will result in disqualification."
    ],
    rounds: [
      {
        name: "Final Performance",
        details: [
          " One round of performance.",
          " Teams will be judged based on synchronization, expression, energy, and creativity.",
          " The decision of the judges will be final and binding."
        ]
      }
    ],
    dateTime: "4th April, 5:00 PM",
    venue: "Main Stage",
    registration: "Online",
    teamsPerCollege: "1",
    contact: "JaySancheti-9883066256",
    eventLink: "https://forms.gle/kUu4F7LXCJZjnBTX6"
  };



  {/* Music */ }
  const soloSingingEastern = {
    title: "Eclipsed Voices (Solo Singing - Eastern)",
    description:
      "An enchanting musical competition where talented singers showcase their voices through Eastern melodies. A celebration of Indian music, tradition, and pure vocal artistry.",
    backgroundImage: "/solo_singing_eastern.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Only the assigned code names of participants must be announced.",
      " The competition is strictly limited to Indian languages.",
      " No vulgarity or profanity will be entertained.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Technical requirements must be communicated to the coordinators in advance.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Screening",
        details: [
          " Time Limit: 3 minutes.",
          " Judging will be based solely on vocal quality.",
          " No karaoke, accompanists, self-played instruments, or tanpura box are allowed."
        ]
      },
      {
        name: "Finals",
        details: [
          " Time Limit: 6 minutes + 2 minutes (setup).",
          " Karaoke, accompanists, self-played instruments, and tanpura box are permitted.",
          " Tracks must be brought on a pen drive in MP3 format."
        ]
      }
    ],
    dateTime: "3rd April, 8:45 AM",
    venue: "Saptarishi Hall",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/k3c2bB3bQCaCtLTm8"
  };

  const soloSingingWestern = {
    title: "Twilight Tunes (Solo Singing - Western)",
    description:
      "Step into the world of Western music and showcase your vocal talent. Mesmerize the audience with your enchanting melodies and let your voice take center stage.",
    backgroundImage: "/solo_singing_western.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Only the assigned code names of participants must be announced.",
      " The competition is strictly limited to Western languages.",
      " No vulgarity or profanity will be tolerated.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Technical requirements must be communicated to the coordinators in advance.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Screening",
        details: [
          " Time Limit: 3 minutes.",
          " Judging will be based solely on vocal quality.",
          " No karaoke, accompanists, self-played instruments, or tanpura box are allowed."
        ]
      },
      {
        name: "Finals",
        details: [
          " Time Limit: 6 minutes + 2 minutes (setup).",
          " Karaoke, accompanists, self-played instruments, and tanpura box are permitted.",
          " Tracks must be brought on a pen drive in MP3 format."
        ]
      }
    ],
    dateTime: "3rd April, 11:15 AM",
    venue: "Saptarishi Hall",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/rawdahJRRAPmmmbK6"
  };

  const soloSingingIndianClassical = {
    title: "Raga Radiance (Solo Singing - Indian Classical)",
    description:
      "Celebrate the richness of Indian classical music by showcasing your mastery of Hindustani and Carnatic styles. Let your soulful rendition captivate the audience and judges in this prestigious competition.",
    backgroundImage: "/solo_singing_indian_classical.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Time Limit: 5 minutes + 2 minutes (setup).",
      " The competition is strictly limited to Indian Classical styles – Hindustani and Carnatic only.",
      " Film and folk songs are not allowed.",
      " Participants may be accompanied by one accompanist playing an Indian instrument.",
      " Electronic Tanpura is permitted, but backing tracks and karaoke are not.",
      " Only the assigned code names of participants must be announced.",
      " No vulgarity or profanity will be tolerated.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Technical requirements must be informed to the coordinators in advance.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Final Performance",
        details: [
          " Participants will perform their classical rendition in front of the judges.",
          " Performance should strictly adhere to Hindustani or Carnatic classical traditions.",
          " Accompanists are allowed with Indian instruments."
        ]
      }
    ],
    dateTime: "5th April, 8:45 AM",
    venue: "Amphi Stage",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/vFyURQpU6rFJEaqz5"
  };



  const soloInstrumentalPercussion = {
    title: "Celestial Rhythms (Solo Instrumental - Percussion)",
    description:
      "Rhythm is the heartbeat of music, and percussionists are its true architects. This event invites talented percussionists to showcase their mastery of rhythm and technique in an electrifying solo performance.",
    backgroundImage: "/solo_instrumental_percussion.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Time Limit: 4 minutes + 2 minutes for setup.",
      " The competition is strictly limited to percussion instruments such as Drums, Cajon, Congo, Tabla, etc.",
      " Only instrumental performances are allowed – no singing is permitted.",
      " Participants must bring their own instruments and accessories (cables, etc.).",
      " No backing tracks or accompanists are allowed.",
      " Only the assigned code names of participants must be announced.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Technical requirements must be informed to the coordinators one day in advance.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Final Performance",
        details: [
          " Participants will perform their percussion solo in front of the judges.",
          " Only live percussion instruments are allowed, without any accompaniment or backing tracks.",
          " Judges will evaluate based on rhythm, technique, and creativity."
        ]
      }
    ],
    dateTime: "5th April, 12:15 PM",
    venue: "Amphi Stage",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/m1KqqKrXWN8GFgY99"
  };

  const soloInstrumentalNonPercussion = {
    title: "Stellar Strings (Solo Instrumental - Non-Percussion)",
    description:
      "Music transcends words, and melodies speak where words fail. This event invites talented instrumentalists to showcase their skills with non-percussion instruments such as Guitar, Piano, Violin, and more.",
    backgroundImage: "/solo_instrumental_non_percussion.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " Time Limit: 4 minutes + 2 minutes for setup.",
      " The competition is restricted to non-percussion instruments such as Guitar, Piano, Violin, etc.",
      " Only instrumental performances are allowed – no singing is permitted.",
      " Participants must bring their own instruments and necessary accessories (cables, etc.).",
      " No backing tracks or accompanists are allowed.",
      " Only the assigned code names of participants must be announced.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Technical requirements must be informed to the coordinators one day in advance.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Final Performance",
        details: [
          " Participants will perform their instrumental solo in front of the judges.",
          " Only live non-percussion instruments are allowed, without any accompaniment or backing tracks.",
          " Judges will evaluate based on melody, technique, and overall performance."
        ]
      }
    ],
    dateTime: "5th April, 12:15 PM",
    venue: "Amphi Stage",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/dNG1N8enBGNqr6369"
  };

  const symphonicaUnplugged = {
    title: "Symphonica (Unplugged)",
    description:
      "Experience the magic of soulful melodies and an enchanting ambiance in this ultimate platform for musicians to showcase their creativity and passion for acoustic music.",
    backgroundImage: "/symphonica_unplugged.webp",
    type: "Group",
    amount: 800,
    teamSize: "4-8",
    rules: [
      " Time Limit: 6 minutes + 2 minutes for setup.",
      " Only acoustic instruments are allowed.",
      " Drums are not permitted.",
      " If using a piano, it must be set to Grand Piano mode only.",
      " A minimum of two songs must be performed.",
      " Use of karaoke or backing tracks is strictly prohibited.",
      " Exceeding the time limit will result in a 5% mark deduction per minute.",
      " Only the assigned code names of participants must be announced.",
      " Any form of vulgarity or profanity will not be tolerated.",
      " Technical requirements must be informed to the coordinators beforehand.",
      " The decision of the Judges and Event Coordinators is final."
    ],
    rounds: [
      {
        name: "Final Performance",
        details: [
          " Each team will perform at least two acoustic songs.",
          " The performance will be judged based on musicality, coordination, and creativity.",
          " No backing tracks or karaoke is allowed."
        ]
      }
    ],
    dateTime: "3rd April, 6:15 PM",
    venue: "Apple Garden",
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Prajwal Patil-9113581092",
    eventLink: "https://forms.gle/3Skbo7qATmLxKjWF8"
  };


  {/* Fine arts */ }
  const rangiloMatka = {
    title: "Rangilo Matka – Where Colors Meet Clay, Creativity Takes Flight!",
    description:
      "Unleash your artistic flair in this pot painting competition! Start with paper painting in Round 1 and progress to painting on clay pots in Round 2. Showcase your creativity, technique, and artistic vision in this colorful journey.",
    backgroundImage: "/rangilo_matka.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      "Round 1: Paper Painting",
      " Participants will be given a theme on the spot.",
      " Time limit: 60 minutes.",
      " Participants must bring their own paints, brushes, and materials.",
      " Paper will be provided.",
      "Round 2: Pot Painting (For Selected Participants)",
      " Only participants selected from Round 1 will advance to Round 2.",
      " Participants will paint on pots provided by the organizers.",
      " Time limit: 90 minutes.",
      " Judging criteria: Creativity, adherence to theme, and artistic execution.",
      "Vulgarity or inappropriate artwork will lead to disqualification.",
      "The decision of the judges will be final and binding."
    ],
    contact: "Akshay Naik-9902933893",
    eventLink: "https://forms.gle/Pa8JVHPFTxdy8y3w6"
  };

  const chitrakarMela = {
    title: "Chitrakar Mela – Where Every Stroke Tells a Story!",
    description:
      "Step into the world of colors and creativity! Chitrakar Mela is a thrilling multi-round art competition that challenges participants to bring their imagination to life. From themed paper painting to surprise challenges, this is the ultimate test of artistic skill and innovation.",
    backgroundImage: "/chitrakar_mela.webp",
    type: "Solo",
    amount: 400,
    teamSize: 2,
    rules: [
      "Round 1: Paper Painting",
      " Participants will be provided with a sheet of paper and basic materials.",
      " Time limit: 60 minutes.",
      " A theme will be given on the spot.",
      " Participants must bring their own paints, brushes, and additional materials.",
      "Round 2: Surprise Round",
      " Details of the round will be revealed at the event.",
      " Participants will be provided with necessary materials (if required).",
      " Time limit: 60 minutes.",
      "Round 3: Ultimate Creative Challenge",
      " A final surprise round to test creativity and skill.",
      " Details will be announced during the event.",
      " Time limit: 60 minutes.",
      "General Rules:",
      " Bonus points for originality in naming the artwork.",
      " Vulgarity or inappropriate artwork will lead to disqualification.",
      " The decision of the judges will be final and binding."
    ],
    contact: "Akshay Naik-9902933893",
    eventLink: "https://forms.gle/kKoZoGmNJtJRddxs9"
  };

  const jutonKaJalwa = {
    title: "Juton Ka Jalwa – Step Into Art, Walk With Creativity!",
    description:
      "Unleash your artistic talent on a whole new canvas—sneakers! Juton Ka Jalwa is a unique art competition where participants start with paper painting and, if selected, move on to sneaker painting. Let your creativity shine and turn sneakers into masterpieces!",
    backgroundImage: "/juton_ka_jalwa.webp",
    type: "Team",
    amount: 400,
    teamSize: 2 - 3,
    rules: [
      "Round 1: Paper Painting",
      " Participants will be given a theme on the spot.",
      " Time limit: 60 minutes.",
      " Participants must bring their own paints, brushes, and materials.",
      " Paper will be provided.",
      "Round 2: Sneaker Painting (For Selected Participants)",
      " Only participants selected from Round 1 will advance to Round 2.",
      " Participants will paint on sneakers provided by the organizers.",
      " Time limit: 90 minutes.",
      " Judging criteria: Creativity, adherence to theme, and artistic execution.",
      "General Rules:",
      " Vulgarity or inappropriate artwork will lead to disqualification.",
      " The decision of the judges will be final and binding."
    ],
    contact: "Akshay Naik-9902933893",
    eventLink: "https://forms.gle/2MkmhWQiQYcQkr6y8"
  };

  // HR


  const mockpress = {
    title: "The Addams Press (Mock-Press)",
    description:
      "Can you handle the heat when the mic goes live? Step into the thrilling world of media and entertainment! In this Circus of scandals, teams will take on the roles of celebrities and journalists—each with a mission. With fame on the line and the media in pursuit, will you control the narrative, or will the headlines write themselves? The stakes are high, and the spotlight is relentless—let the showdown begin.",
    backgroundImage: "/media.webp",
    type: "Team",
    amount: 300,
    teamSize: 2,
    rules: [
      "Each team has two members—one celebrity and one journalist (roles must be decided before the event).",
      "The round lasts 5 + 3 minutes (5 min for journalists and 3 min for judges).",
      "Journalists from all teams question the opposing team's celebrity, who must defend themselves.",
      "Additional rules will be announced on the spot.",
      "Use of any abusive or inappropriate words shall lead to immediate disqualification.",
      "Judging criteria: Confidence, Creativity, and Engagement.",
      "The judges' decision will be final and binding."
    ],
    contact: "Anusha Kudachi-9449252694",
    eventLink: "https://forms.gle/pvRw1VyUp6Z3MkcB6"
  };

  const jestersJoust = {
    title: "The Jester's Joust (Debate)",
    description:
      "Step right up to the carnival of the mind, where every word is a weapon and every argument a challenge. In this eerie realm, logic is twisted and ideas collide, pushing you to defend, confront, and captivate. Let your intellect shine and your wit cut through the darkness—here, only the sharpest minds will survive, and the game is never as it seems. Welcome to the carnival, where every turn brings new tests and every debate shifts the very fabric of truth.",
    backgroundImage: "/debate.webp",
    type: "Team",
    amount: 300,
    teamSize: 2,
    rules: [
      "The short film should not exceed 6 minutes in duration including titles and credits.",
      "Films should not have been previously published in any media.",
      "The video must be in MP4 or avi format.",
      "Include a short synopsis for the entry.",
      "Entries in other languages must have English subtitles.",
      "The registered teams will have to submit their work on google drive link which will be provided on the WhatsApp group before the given deadline.",
      "The theme for the movie will be released a week before on our social media platforms.",
      "The organizing committee’s decision will be final."
    ],
    contact: "Anusha Kudachi-9449252694",
    eventLink: "https://forms.gle/c6T222Yp9NGxrpta9"
  };

  const wickedAdCircus = {
    title: "The Wicked Ad Circus (Ad Mads)",
    description:
      "Think you can sell anything with creativity and persuasion? Ad Mad is your chance to prove it! Step into the world of advertising and showcase your marketing brilliance by crafting the most innovative and engaging ad for your chosen product.",
    backgroundImage: "/admad.webp", // Update with actual image path
    type: "Team",
    amount: 500, // Assuming no entry fee, update if needed
    teamSize: "3-6 members",
    rules: [

      "Teams must select their own product in advance and prepare an advertisement.",
      "Each team will get 3-5 minutes to present their ad.",
      "Ads can be in any language but must not contain offensive, discriminatory, or inappropriate material.",
      "Advertisements must not harm any language, religion, or race.",
      "Ideas and scripts must be original; copied content will lead to disqualification.",
      "Teams cannot use real company logos or trademarks in their ads.",
      "The judges’ decision will be final and binding."
    ],
    contact: "Anusha Kudachi-9449252694",
    eventLink: "https://forms.gle/qfEr1UAUFw3Qaahm6" // Replace with actual registration link
  };


  {/* Literary */ }
  const whispersOfLiteraryMystery = {
    title: "Whispers of Literary Mystery",
    description:
      "A thrilling event that blends suspenseful stories, writing contests, fun mystery games, and interactive storytelling. Participants will unravel literary mysteries, solve riddles, and engage in exciting challenges.",
    backgroundImage: "/whispers_literary_mystery.webp",
    type: "Group",
    amount: 400,
    teamSize: "2",
    rules: [
      " Use of unfair means will result in immediate disqualification.",
      " Use of inappropriate language, gestures, or signs is strictly prohibited.",
      " Participants must report to the venue 15 minutes before the event starts.",
      " Additional rules, gameplay details, and instructions will be briefed on the spot at the venue.",
      " All rounds are elimination rounds, and the number of qualifying teams will depend on participation.",
      " The decision of the judges will be final."
    ],
    rounds: [
      {
        name: "Round 1: Word Maze",
        details: [
          " Participants will navigate through a challenging word-based puzzle.",
          " Teams must solve the maze within the given time to qualify for the next round."
        ]
      },
      {
        name: "Round 2: Fun Trivia",
        details: [
          " A thrilling literary trivia round to test participants’ knowledge of mysteries, literature, and famous authors.",
          " Teams with the highest scores will advance to the final round."
        ]
      },
      {
        name: "Round 3: Surprise Round",
        details: [
          " Details of this round will be revealed on the spot.",
          " Expect an exciting and unpredictable challenge!"
        ]
      }
    ],
    dateTime: [
      { round: "Round 1", date: "3rd April", time: "9:30 AM", venue: "CV Seminar Hall" },
      { round: "Round 2", date: "4th April", time: "9:30 AM", venue: "Auditorium" },
      { round: "Round 3", date: "4th April", time: "2:00 PM", venue: "Auditorium" }
    ],
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Venkatesh-8792333620",
    eventLink: "https://forms.gle/eV2TjEZKDQpm1Gbu8"
  };

  const freakshowFaceOff = {
    title: "Freakshow Face-Off",
    description:
      "Step right up to the most electrifying showdown under the Eclipsed Circus! In this high-energy roast battle, two contenders go head-to-head, armed with sharp wit and ruthless comebacks. Whether you’re the Ringmaster of Roasts or just a Jester in Training, only the sharpest tongue will survive this Carnival Carnage. The stage is set like a twisted carnival—where the only rule is to entertain! Will you be the fearless showstopper or just another clown getting roasted?",
    backgroundImage: "/freakshow_faceoff.webp",
    type: "Group",
    amount: 400,
    teamSize: "2-3",
    rules: [
      " Participants must arrive at the venue 15 minutes before the event starts.",
      " Additional rules will be briefed on the spot.",
      " No low blows—insults should be witty, not personal or offensive.",
      " Any use of foul language, gestures, or inappropriate signs will result in penalties or immediate disqualification.",
      " The decision of the judges will be final."
    ],
    rounds: [
      {
        name: "Single Round: Roast Battle",
        details: [
          " Participants engage in a battle of wit and humor.",
          " The goal is to entertain while maintaining a balance between humor and respect.",
          " Expect surprises and twists in the competition."
        ]
      }
    ],
    dateTime: [
      { round: "Roast Battle", date: "5th April", time: "10:00 AM", venue: "Auditorium" }
    ],
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Venkatesh-8792333620",
    eventLink: "https://forms.gle/eZ25xyDUrkQ7BJHi6"
  };

  const ringmastersRiddleRun = {
    title: "Ringmaster’s Riddle Run",
    description:
      "Step into the grand arena of wit and wisdom—welcome to Ringmaster's Riddle Run! A thrilling battle of minds where comics, mythology, sports, literature, cinema, and music collide in a whirlwind of riddles and revelations. Are you ready to take the challenge and prove your mastery?",
    backgroundImage: "/ringmasters_riddle_run.webp",
    type: "Group",
    amount: 400,
    teamSize: "2",
    rules: [
      " Participants must arrive at the venue 10 minutes before the event starts.",
      " Any form of plagiarism or use of technology during the event will result in disqualification.",
      " The top 6 teams from Round 1 will qualify for the final round.",
      " Additional rules regarding Round 2 will be briefed on the spot."
    ],
    rounds: [
      {
        name: "Round 1: Eliminator",
        details: [
          " A quiz covering topics like comics, mythology, sports, literature, cinema, and music.",
          " The top 6 teams will proceed to the final round."
        ]
      },
      {
        name: "Round 2: Rapid-Fire",
        details: [
          " A fast-paced round with 20 questions.",
          " Participants have 10 seconds to answer each question.",
          " Additional rules will be announced at the venue."
        ]
      }
    ],
    dateTime: [
      { round: "Eliminator", date: "3rd April", time: "12:15 AM", venue: "Auditorium" },
      { round: "Final (Rapid-Fire)", date: "3rd April", time: "3:00 PM", venue: "Auditorium" }
    ],
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Venkatesh-8792333620",
    eventLink: "https://forms.gle/7Z3sXQQ1S9pmDJdT9"
  };

  const kuchAlfaazHamareBhi = {
    title: "Kuch Alfaaz Hamare Bhi",
    subtitle: "Where Words Ignite the Stage",
    description:
      "Step into the poetic heart of the carnival! This is a celebration of rhythm and expression, where poets craft verses from vivid imagery and spontaneous themes. With two thrilling rounds—only the finest wordsmith will claim the title of Shahenshah-e-Kavita. Let your words shine and your voice lead the Mehfil!",
    backgroundImage: "/kuch_alfaaz_hamare_bhi.webp",
    type: "Solo",
    amount: 200,
    teamSize: "1",
    rules: [
      " No language barrier—participants can choose any language.",
      " Participants must arrive at the venue 10 minutes before the event starts.",
      " Plagiarism or use of technology during the event will result in disqualification.",
      " Additional rules will be briefed at the venue.",
      " The judge's decision is final and binding."
    ],
    rounds: [
      {
        name: "Round 1",
        details: [" Participants perform their prepared poetry pieces."]
      },
      {
        name: "Round 2: The Final Showdown",
        details: [
          " Participants will be tested on spontaneity, wit, creativity, and expression.",
          " This round will determine the ultimate winner."
        ]
      }
    ],
    dateTime: [
      { round: "Round 1", date: "3rd April", time: "11:00 AM", venue: "BM Seminar Hall" },
      { round: "Final Round", date: "4th April", time: "11:00 AM", venue: "BM Seminar Hall" }
    ],
    registration: "Online",
    teamsPerCollege: "Unlimited",
    contact: "Venkatesh-8792333620",
    eventLink: "https://forms.gle/Mh4t6KTHnYmHbxuG8"
  };


  {/* WEC */ }
  const loneStarSpotlight = {
    title: "Lone Star Spotlight (Mono Acting Competition)",
    description:
      "Showcase your acting prowess, versatility, and storytelling skills in this solo performance event. A perfect stage for drama enthusiasts to unleash their creativity and display their talent in the dramatic arts.",
    backgroundImage: "/monoacting.webp", // Update with actual image path
    type: "Solo",
    amount: 200, // Assuming no entry fee, update if needed
    teamSize: 1,
    rules: [

      "The time limit is 10 minutes.",
      "Participants can enact multiple characters.",
      "Performances can be in English, Hindi, Marathi, or Kannada.",
      "Exceeding the time limit will result in a 5% score deduction per extra minute.",
      "Profanity or vulgarity will lead to point deductions at the judges’ discretion.",
      "Cell phones and written materials are not allowed once the event begins.",
      "Props and costumes are allowed.",
      "Performances with controversial characters or linguistic discrimination will not be accepted.",
      "Pre-recorded voices and music are not permitted.",
      "Judging will be based on acting skills, dialogue delivery, and overall impact.",
      "The judges’ decisions are final and cannot be challenged.",
      "Any additional rules will be announced at the event."
    ],
    contact: "Mansi Patil-8317491367",
    eventLink: "https://forms.gle/6Jg3kYDJBfkHYJSN8" // Replace with actual registration link
  };

  const facePainting = {
    title: "“Carnival Canvas”-(Face Painting Competition)",
    description:
      "Unleash your creativity! From intricate patterns to bold designs, let your imagination run wild and showcase the essence of artistic expression. Whether you’re a seasoned artist or a beginner, this is your chance to express yourself through vibrant colors and unique designs.",
    backgroundImage: "/face_painting.webp",
    type: "Team",
    amount: 400,
    teamSize: 2,
    rules: [
      "Time Limit: 90 minutes.",
      "Theme will be announced on the spot.",
      "Use of cell phones or reference materials is strictly prohibited.",
      "One participant will be the artist, and the other will be the model.",
      "The model cannot assist the artist in any way.",
      "Participants must bring their own materials (paints, brushes, pens, etc.).",
      "No prior markings or outline designs on the model will be accepted.",
      "Judging will be based on creativity and how well the theme is portrayed.",
      "The judges’ decision is final and cannot be disputed."
    ],
    contact: "Mansi Patil-8317491367",
    eventLink: "https://forms.gle/rxofETUznTw6hfnJ6"
  };


  const nukkadNatak = {
    title: "“Echoes of the Street”(Nukkad Natak)",
    description:
      "Hello, drama enthusiasts! It’s time to transform your passion for acting into powerful performances that echo with purpose. This is your chance to use theatre as a tool for social change and redefine storytelling beyond words and thoughts.",
    backgroundImage: "/nukkad_natak.webp",
    type: "Team",
    amount: 800,
    teamSize: "10-15",
    rules: [
      "The play must convey a social message.",
      "Pre-recorded voices and music are not allowed.",
      "Revealing or mentioning the name of your college will lead to immediate disqualification.",
      "Performances can be in English, Hindi, Kannada, or Marathi.",
      "Teams must bring their own props; organizers will not provide any.",
      "The performance must be confined within the designated area.",
      "Any unforeseen situations will be handled by the judges, whose decisions are final and cannot be disputed."
    ],
    contact: "Mansi Patil-8317491367",
    eventLink: "https://forms.gle/LXj5vgHY4eYbhqVt9"
  };



  /*const firelessCooking = {
    title: "Fireless Cooking Competition – “Flavors on Parade”",
    description:
      "Show off your culinary skills without the need for fire! From refreshing salads to delicious no-cook dishes, let your creativity shine as you craft flavorful and innovative recipes. Whether you’re a food enthusiast or a budding chef, this is your chance to impress with your presentation, taste, and originality.",
    backgroundImage: "/fireless_cooking.webp",
    type: "Team",
    amount: 0,
    teamSize: 2,
    rules: [
      "Time Limit: 60 minutes.",
      "No use of fire or electric cooking appliances (e.g., induction, microwave, toaster, etc.).",
      "Participants must bring their own ingredients and utensils required for preparation.",
      "Only 2 pre-cooked ingredients (like boiled potatoes, pre-cut vegetables, etc.) are allowed.",
      "Dishes must be prepared on the spot within the given time.",
      "Judging will be based on presentation, taste, creativity, and hygiene.",
      "The judges’ decision is final and cannot be disputed."
    ],
    contact: "1234567890",
    eventLink: "https://example.com/fireless-cooking-register"
  };*/


  // Media Club 


  const carnivalChronicles = {
    title: "Carnival Chronicles (Short Film)",
    description:
      "Step into the vibrant world of the carnival, where colours, excitement, and stories collide! The Carnival Fest short film competition invites filmmakers to capture the magic, mystery, and joy of carnival celebrations. From dazzling parades to thrilling rides, this competition calls for creative, dynamic films that showcase the energy, wonder, and diversity of carnival festivities. Whether you focus on the characters, the spectacle, or the behind-the-scenes moments, let your film transport the audience into a world of imagination, joy, and festivity.",
    backgroundImage: "/shortfilm.webp",
    type: "Team",
    amount: 600,
    teamSize: 7,
    rules: [
      "The short film should not exceed 6 minutes in duration including titles and credits.",
      "Films should not have been previously published in any media.",
      "The video must be in MP4 or AVI format.",
      "Include a short synopsis for the entry.",
      "Entries in other languages must have English subtitles.",
      "The registered teams will have to submit their work on a Google Drive link which will be provided on the WhatsApp group before the given deadline.",
      "The theme for the movie will be released a week before on our social media platforms.",
      "The organizing committee’s decision will be final."
    ],
    // judgingCriteria: [
    //   "Direction",
    //   "Acting",
    //   "Editing",
    //   "Cinematography",
    //   "Story",
    //   "Audio"
    // ],
    contact: "Aryan Patil-9606739893",
    eventLink: "https://forms.gle/peZFjTHb7kbZqxS38"
  };

  const snapshotSpectacle = {
    title: "Snapshot Spectacle (Photography)",
    description:
      "Capture the vibrant energy and colorful spirit of the carnival through your lens! The Carnival Fest photography competition invites photographers to showcase the lively moments, dazzling costumes, joyful faces, and captivating scenes of carnival celebrations. Whether it’s a close-up of a mask, the excitement of a parade, or the lights and movement of carnival rides, we encourage you to explore the magic and chaos of this festive experience. Your photos should reflect the essence of carnival — its energy, colors, and the stories unfolding in every corner.",
    backgroundImage: "/photography.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      "Photos must be in JPG or JPEG file format.",
      "Minimal photo editing is permissible, but altering the photograph is not allowed.",
      "We assume that every photo submission is legitimate. However, if a photo is suspected of alteration, it will be rejected.",
      "The final decision rests with the Organizing Committee.",
      "Photographs should not have been previously published in any media.",
      "The registered participants will have to submit their work on a Google Drive link which will be provided on the WhatsApp group before the given deadline.",
      "The theme for the event will be given on the spot."
    ],
    // judgingCriteria: [
    //   "Creativity",
    //   "Technical Skills Displayed",
    //   "Theme Representation"
    // ],
    contact: "Aryan Patil-9606739893",
    eventLink: "https://forms.gle/MUmsfZm1tsAiV81D6"
  };

  const reelRhapsody = {
    title: "Reel Rhapsody (Reel Making)",
    description:
      "Get ready to bring the carnival to life through your creativity! The Carnival Fest reel making competition invites creators to capture the high-energy, vibrant moments of carnival celebrations in short, engaging reels. Whether it’s the excitement of the rides, the joy of the crowd, or the beauty of the colorful costumes, your reel should highlight the thrill and magic of the carnival experience. Use music, fast-paced edits, and unique angles to transport your audience into the heart of the festivities and showcase the unforgettable atmosphere of the carnival!",
    backgroundImage: "/reelmaking.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      "The reel should be between 15 to 60 seconds long.",
      "All footage and audio must be original. Use only royalty-free music or content you have the rights to.",
      "Submit your reel in vertical format (9:16 aspect ratio), perfect for platforms like Instagram Reels.",
      "Keep your reel family-friendly with no explicit or inappropriate material.",
      "The registered participants will have to submit their work on a Google Drive link which will be provided on the WhatsApp group before the given deadline."
    ],
    // judgingCriteria: [
    //   "Creativity",
    //   "Relevance to the theme",
    //   "Visual appeal"
    // ],
    contact: "Aryan Patil-9606739893",
    eventLink: "https://forms.gle/KSRcarTzKbxjG68P7"
  };

  // Sports

  const carnivalSurvival = {
    title: "Carnival Survival (Squid Games)",
    description:
      "An Indian version of Squid Game featuring traditional childhood games with high-stakes twists. Each task will test physical skill, strategy, and survival. Teams must navigate through five unique challenges, blending agility, precision, and endurance. The team that completes all tasks in the shortest time emerges victorious!",
    backgroundImage: "/carnival-survival.webp",
    type: "Team",
    amount: 800,
    teamSize: 5,
    rules: [
      "Each team must have a minimum of 2 girls.",
      "There will be a total of 5 tasks.",
      "All participants are required to be present at the venue at least 30 minutes before the event begins.",
      "The decisions made by the coordinators are final.",
      "ID cards are compulsory.",
      "A rope is tied among teammates, and only one game is played at a time.",
      "Each player must participate in one task, meaning five tasks for five members.",
      "The team that completes all the tasks in the shortest time is the winner.",
      "The rules for each task will be explained during the game."
    ],
    // tasks: [
    //   {
    //     name: "Spinning Top (Bugari)",
    //     description: "Players wrap a thin rope around a bugari top, release it onto the floor, and must catch it in their hand while it spins."
    //   },
    //   {
    //     name: "Gong-gi (Handai)",
    //     description: "Players must catch pebbles or plastic stones through a series of levels, ending with all five landing on the back of their hand and catching them all to complete the game."
    //   },
    //   {
    //     name: "Marble",
    //     description: "Players take turns shooting marbles by stretching a marble taut in their forefinger and releasing it to hit another marble."
    //   },
    //   {
    //     name: "Cup Pyramid",
    //     description: "Players must stack 10 cups into a pyramid shape (4-3-2-1 levels) as quickly as possible, then take it down while performing 15 pushups before restacking."
    //   },
    //   {
    //     name: "Juggling-Football",
    //     description: "Players must juggle a football, keeping it in the air using parts of their body other than their hands or arms."
    //   }
    // ],
    contact: "Shreyash Kalmath-8660579723",
    eventLink: "https://forms.gle/HKgupPSNZ53vS73j6"
  };


  // Title-Events

  const mrMsInvento = {
    title: "Mr. & Ms. Invento",
    description:
      "Do you have what it takes to be the ultimate showstopper of the carnival? Mr. and Miss Invento is the crown jewel of the carnival! This event demands charm, wit, and unshakable resilience. Contestants must dazzle, adapt, and conquer every twist that comes their way. Only the boldest will rise above the spectacle—do you have what it takes to be the Ringmaster of this grand show?",
    backgroundImage: "/mr-ms-invento.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      "Teams per college: Unlimited",
      "The event consists of 3 rounds.",
      "All participants must be present at the venue at least 30 minutes before the event begins.",
      "The decisions made by the coordinators are final.",
      "ID cards are compulsory.",
      "Each round will test different skills, including critical thinking, endurance, and confidence.",
      "The details of each round will be disclosed during the event."
    ],
    contact: "Prashant Uppar-8050018611",
    eventLink: "https://forms.gle/nwcbipnwkHYoB81MA"
  };

  const muscleMonarch = {
    title: "Muscle Monarch - Best Physique",
    description:
      "A competition to crown the ultimate physique champion. Contestants will showcase their strength, aesthetics, and discipline to prove they are the true Muscle Monarch!",
    backgroundImage: "/muscle-monarch.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      "Teams per college: Unlimited",
      "All competitors must wear proper bodybuilding shorts during the competition.",
      "Shorts should be above the knee and provide adequate coverage.",
      "No logos or designs that promote brands or sponsors are allowed.",
      "All participants must carry a valid College ID for verification purposes.",
      "Photocopies or digital copies of IDs will not be accepted. Only original IDs are valid.",
      "The use of anabolic steroids, performance-enhancing drugs, or banned substances is strictly prohibited.",
      "Any competitor found using such substances will face immediate disqualification.",
      "Competitors must bring their own body paint or tanning products.",
      "The competition will have multiple qualification rounds based on different judging criteria.",
      "Judges will evaluate participants in each round, and only the top performers will proceed to the final round.",
      "Any form of misconduct, unsportsmanlike behavior, or failure to follow instructions will lead to immediate disqualification.",
      "The event organizers reserve the right to amend rules and make final decisions in case of disputes."
    ],

    contact: "Shreyash Kalmath-8660579723",
    eventLink: "https://forms.gle/u2tA33e9GFQBVyvY6"
  };



  // Specials

  const grandMasquerade = {
    title: "The Grand Masquerade – Unmask Your Style, Steal the Spotlight! (Solo Fashion)",
    description:
      "Step into the enchanting world of fashion and mystery! The Grand Masquerade challenges participants to embody the essence of circus glamour with bold designs, dramatic silhouettes, and breathtaking performances. Can you own the stage and steal the show?",
    backgroundImage: "/grand_masquerade.webp",
    type: "Solo",
    amount: 200,
    teamSize: 1,
    rules: [
      'The theme for the event is "Circus Spectacle".',
      " Theme Description: Participants must take inspiration from the dazzling world of the circus, incorporating elements of ringmasters, acrobats, clowns, and trapeze artists into their high-fashion looks.",
      " Bold stripes, ruffles, dramatic silhouettes, and playful accessories are encouraged.",
      " Time limit: 1+1 minutes (including setup and performance).",
      " Participants must carry their tracks on a pen drive and submit them in advance.",
      " Vulgarity or obscenity will lead to disqualification.",
      " Use of fireworks, water, or party props is strictly prohibited.",
      " Negative marking will be applied if participants exceed the time limit.",
      " The decision of the judges will be final and binding."
    ],
    contact: "Akshay Naik-9902933893",
    eventLink: "https://forms.gle/tTMH4DKgKYe6rxgi6"
  };

  const revelryOfWarriors = {
    title: "Revelry of Warriors – Where Fashion Meets Valor, and Style Meets Strength! (Group Fashion Show)",
    description:
      "Step into the arena where the fierceness of warriors meets the flamboyance of a carnival! Revelry of Warriors is a group fashion show that blends theatrical storytelling with high-fashion aesthetics. Choose between Warriors of the World or Carnival of Dreams and create an unforgettable spectacle of strength and style!",
    backgroundImage: "/revelry_of_warriors.webp",
    type: "Group",
    amount: 800,
    teamSize: "10-15 (including backstage crew)",
    rules: [
      "Teams can choose either 'Warriors of the World' or 'Carnival of Dreams' as their theme.",
      " Time limit: 10-12 minutes (performance time).",
      " Background tracks are mandatory and must be submitted in advance.",
      " The backstage crew must not exceed 2 people and must be declared before the event.",
      " Use of water, fire, or fireworks (including party poppers) will lead to disqualification.",
      " Points will be deducted for vulgarity or deviation from fashion-related choreography.",
      " An additional 2 minutes are allowed for setup. Negative marking if exceeded.",
      " The decision of the judges will be final and binding.",
      "Elimination Round (For Group Fashion Show):",
      " The Elimination Round will be conducted online.",
      " Teams must submit a video of their entire sequence (with costumes and props) to the event coordinators on/before 26th March.",
      " Teams must also submit a write-up containing information about the theme, duration, number of participants, and props used.",
      " Late submissions will be disqualified."
    ],
    contact: "Akshay Naik-9902933893",
    eventLink: "https://forms.gle/uttDhT6p8N9LBRg16"
  };

  const greatCircusRun = {
    title: "The Great Circus Run",
    description:
      "Step right up and join the most epic game of the year! This thrilling adventure combines problem-solving, teamwork, and excitement, all set against the vibrant backdrop of a circus. Solve a series of challenges and puzzles to race towards victory. Are you ready for the ultimate test of wit, creativity, and determination?",
    backgroundImage: "/circusrun.webp",
    type: "Team",
    amount: 400,
    teamSize: 2,
    rules: [
      "The game will consist of a series of challenges and puzzles.",
      "Each challenge must be completed in the specified order.",
      "Participants can ask for hints, but each hint will incur a time penalty.",
      "Challenges cannot be skipped or bypassed.",
      "The first team to complete all challenges wins.",
      "Participants must respect the venue, staff, and other participants.",
      "Any form of cheating will result in disqualification."
    ],
    contact: "Chetan Bharmannavar - 9731340577",
    eventLink: "https://forms.gle/Mt2d1BsjppTMjBkZ6"
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="container">
            <Banner />
            <div className='titleCards'>
              <Card3DRotation frontTitle="Media Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={MediaImg} backImage={Mediaback} link="media-club" />
              <Card3DRotation frontTitle="HR Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={hr} backImage={HRback} link="/hr-club" />
              <Card3DRotation frontTitle="Cultural Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={cultural} backImage={Culturalback} link="/cultural-club" />
              <Card3DRotation frontTitle="Fine Arts" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={fineArts} backImage={FRback} link="/fineArts-club" />
              <Card3DRotation frontTitle="Community Development Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={comdev} backImage={CDCback} link="/community-development-club" />
              <Card3DRotation frontTitle="Sports Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={sports} backImage={Sportsback} link="/sports-club" />
              <Card3DRotation frontTitle="Women Empowerment Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={women} backImage={WECback} link="/women-empowerment-club" />
              <Card3DRotation frontTitle="Literary Club" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={lit} backImage={Literaryback} link="/literary-club" />
              <Card3DRotation frontTitle="Specials" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={special} backImage={Specialback} link="/specials" />
              <Card3DRotation frontTitle="Title Events" frontText="Click for details" backTitle="Go To Events Page" backText="Rules" frontImage={titleevent} backImage={TitleEventback} link="/title-events" />

            </div>
          </div>
        } />

        {/* Other Pages */}
        <Route path="/rulebook" element={<Rulebook />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/developers" element={<Developers />} /> */}

        <Route path="/media-club" element={<MediaClub />} />
        <Route path="/hr-club" element={<HRClub />} />
        <Route path="/cultural-club" element={<CulturalClub />} />
        <Route path="/fineArts-club" element={<FineArtsClub />} />
        <Route path="/community-development-club" element={<CommunityDevelopmentClub />} />
        <Route path="/sports-club" element={<SportsClub />} />
        <Route path="/women-empowerment-club" element={<WomenEmpowermentClub />} />
        <Route path="/literary-club" element={<LiteraryClub />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/title-events" element={<TitleEvents />} />


        <Route path="/CommunityDevelopment-events/Carnival-Fest" element={<Event event={carnivalFest} />} />
        <Route path="/CommunityDevelopment-events/Fight-Of-Carnival-Rivals" element={<Event event={fightOfCarnivalRivals} />} />
        <Route path="/CommunityDevelopment-events/Clash-Of-Valo-Masters" element={<Event event={clashOfValoMasters} />} />

        <Route path="/CulturalClub-events/Celestial-Cypher:Western-(SoloDance-Showdown)" element={<Event event={celestialCypherWestern} />} />
        <Route path="/CulturalClub-events/Tala-Tarang:Classical(SoloDance-Classical)" element={<Event event={talaTarangClassical} />} />
        <Route path="/CulturalClub-events/The-Shadow-Waltz-(DuetDance)" element={<Event event={shadowWaltz} />} />
        <Route path="/CulturalClub-events/Carnival-Cadence-(GroupDance)" element={<Event event={carnivalCadence} />} />
        <Route path="/CulturalClub-events/Solo-Singing-Eastern" element={<Event event={soloSingingEastern} />} />
        <Route path="/CulturalClub-events/Solo-Singing-Western" element={<Event event={soloSingingWestern} />} />
        <Route path="/CulturalClub-events/Solo-Singing-IndianClassical" element={<Event event={soloSingingIndianClassical} />} />
        <Route path="/CulturalClub-events/Solo-Instrumental-Percussion" element={<Event event={soloInstrumentalPercussion} />} />
        <Route path="/CulturalClub-events/Solo-Instrumental-Non-Percussion" element={<Event event={soloInstrumentalNonPercussion} />} />
        <Route path="/CulturalClub-events/Symphonica-(Unplugged)" element={<Event event={symphonicaUnplugged} />} />

        <Route path="/FineArts-events/Rangilo-Matka–Where-Colors-Meet-Clay,Creativity-Takes-Flight!" element={<Event event={rangiloMatka} />} />
        <Route path="/FineArts-events/Chitrakar-Mela–Where-Every-Stroke-Tells-a-Story!" element={<Event event={chitrakarMela} />} />
        <Route path="/FineArts-events/Juton-Ka-Jalwa–Step-Into-Art,Walk-With-Creativity!" element={<Event event={jutonKaJalwa} />} />

        <Route path="/HumanResource-events/The-Addams-Press-(Mock-Press)" element={<Event event={mockpress} />} />
        <Route path="/HumanResource-events/The-Jester's-Joust-(Debate)" element={<Event event={jestersJoust} />} />
        <Route path="/HumanResource-events/The-Wicked-Ad-Circus-(Ad-Mad)" element={<Event event={wickedAdCircus} />} />

        <Route path="/Literary-events/Whispers-of-Literary-Mystery" element={<Event event={whispersOfLiteraryMystery} />} />
        <Route path="/Literary-events/Freakshow-Face-Off" element={<Event event={freakshowFaceOff} />} />
        <Route path="/Literary-events/Ringmaster’s-Riddle-Run" element={<Event event={ringmastersRiddleRun} />} />
        <Route path="/Literary-events/Kuch-Alfaaz-Hamare-Bhi" element={<Event event={kuchAlfaazHamareBhi} />} />

        <Route path="/WomenEmpowerment-events/Lone-Star-Spotlight-(Mono-Acting-Competition)" element={<Event event={loneStarSpotlight} />} />
        <Route path="/WomenEmpowerment-events/Face-Painting-Competition–(Carnival-Canvas)" element={<Event event={facePainting} />} />
        <Route path="/WomenEmpowerment-events/Nukkad-Natak–(Echoes-of-the-Street)" element={<Event event={nukkadNatak} />} />
        {/* <Route path="/WomenEmpowerment-events/Fireless-Cooking-Competition–(Flavors-on-Parade)" element={<Event event={firelessCooking} />} /> */}

        <Route path="/Media-club/Carnival-Chronicles-(Short-Film)" element={<Event event={carnivalChronicles} />} />
        <Route path="/Media-club/Snapshot-Spectacle-(Photography)" element={<Event event={snapshotSpectacle} />} />
        <Route path="/Media-club/Reel-Rhapsody-(Reel-Making)" element={<Event event={reelRhapsody} />} />

        <Route path="/Sports-events/Carnival-Survival-(Squid-Games)" element={<Event event={carnivalSurvival} />} />

        <Route path="/Specials/The-Great-Circus-Run" element={<Event event={greatCircusRun} />} />
        <Route path="/Specials/The-Grand-Masquerade–Unmask-Your-Style,Steal-the-Spotlight!" element={<Event event={grandMasquerade} />} />
        <Route path="/Specials/Revelry-of-Warriors–Where-Fashion-Meets-Valor,and-Style-Meets-Strength!" element={<Event event={revelryOfWarriors} />} />

        <Route path="/title-events/Mr.& Ms.Invento" element={<Event event={mrMsInvento} />} />
        <Route path="/title-events/Muscle-monarch-(Best-Physique)" element={<Event event={muscleMonarch} />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
