import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import KeyHighlights from '../components/KeyHighlights';
import EventAgenda from '../components/EventAgenda';
import Description from '../components/Description';
import WhatToExpect from '../components/WhatToExpect';
import SupportLetters from '../components/SupportLetters';
import GuestsOfHonour from '../components/GuestsOfHonour';
import AdvisoryBoard from '../components/AdvisoryBoard';
import EventSpeakers from '../components/EventSpeakers';
import EventPartners from '../components/EventPartners';
import MediaPartners from '../components/MediaPartners';
import UpcomingEvents from '../components/UpcomingEvents';
import Footer from '../components/Footer';
import HonourableGuests from '../components/HonourableGuests';
import VideoHighlight from '../components/VideoHighlight';
import { agendaDetails, boardMembers, descriptionDetails, eventPartners, eventSpeakers, galleryImages, guestsOfHonour, heroSection, honourableGuests, keyHighlights, mediaPartners, supportLetterSection, videoHighlight, whatToExpect, upcomingEvents, previousEvents } from '../data/nyc';
import PastEvents from '../components/PastEvents';

function LGLSNyc() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero heroSection={heroSection} />
            <UpcomingEvents upcomingEvents={upcomingEvents} />

      <KeyHighlights keyHighlights={keyHighlights} />
      <EventAgenda agendaDetails={agendaDetails} date={descriptionDetails.date} location={descriptionDetails.location} />
      <Description images={galleryImages} descriptionDetails={descriptionDetails} />
      <WhatToExpect expectations={whatToExpect} />
      <SupportLetters supportLetterSection={supportLetterSection} />
      <GuestsOfHonour guestsOfHonour={guestsOfHonour} />
      <HonourableGuests honourableGuests={honourableGuests} />
      <AdvisoryBoard members={boardMembers} />
      <EventSpeakers speakers={eventSpeakers} />
      <EventPartners partners={eventPartners} />
      <MediaPartners mediaPartners={mediaPartners} />
      <PastEvents pastEvents={previousEvents} />
      <VideoHighlight videoHighlight={videoHighlight} />
      <Footer />
    </div>
  );
}

export default LGLSNyc;
