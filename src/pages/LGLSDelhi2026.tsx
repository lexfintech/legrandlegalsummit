import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import KeyHighlights from '../components/KeyHighlights';
import EventAgenda from '../components/EventAgenda';
import WhatToExpect from '../components/WhatToExpect';
import GuestsOfHonour from '../components/GuestsOfHonour';
import AdvisoryBoard from '../components/AdvisoryBoard';
import EventSpeakers from '../components/EventSpeakers';
import EventPartners from '../components/EventPartners';
import MediaPartners from '../components/MediaPartners';
import UpcomingEvents from '../components/UpcomingEvents';
import Footer from '../components/Footer';
import HonourableGuests from '../components/HonourableGuests';
import VideoHighlight from '../components/VideoHighlight';
import {
  boardMembers,
  eventPartners,
  eventSpeakers,
  guestsOfHonour,
  heroSection,
  honourableGuests,
  keyHighlights,
  mediaPartners,
  videoHighlight,
  whatToExpect,
  upcomingEvents,
  navItems,
  ticketLink,
  agendaSection,
  pastEvents,
} from '../data/delhi2026';
import PastEvents from '../components/PastEvents';

function LGLSDelhi2026() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar navItems={navItems} ticketLink={ticketLink} />
      <Hero heroSection={heroSection} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <KeyHighlights keyHighlights={keyHighlights} />
      <EventAgenda agendaSection={agendaSection} />
      <WhatToExpect expectations={whatToExpect} />
      <GuestsOfHonour guestsOfHonour={guestsOfHonour} />
      <HonourableGuests honourableGuests={honourableGuests} />
      <AdvisoryBoard members={boardMembers} />
      <EventSpeakers speakers={eventSpeakers} />
      <EventPartners partners={eventPartners} />
      <MediaPartners mediaPartners={mediaPartners} />
      <PastEvents pastEvents={pastEvents} />
      <VideoHighlight videoHighlight={videoHighlight} />
      <Footer />
    </div>
  );
}

export default LGLSDelhi2026;
