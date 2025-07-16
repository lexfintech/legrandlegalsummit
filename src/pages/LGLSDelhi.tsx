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
// import UpcomingEvents from './components/UpcomingEvents';
// import Signup from './components/Signup';
import Footer from '../components/Footer';
import HonourableGuests from '../components/HonourableGuests';
import VideoHighlight from '../components/VideoHighlight';

function LGLSDelhi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <KeyHighlights />
      <EventAgenda />
      <Description />
      <WhatToExpect />
      <SupportLetters />
      <GuestsOfHonour />
      <HonourableGuests />
      <AdvisoryBoard />
      <EventSpeakers />
      <EventPartners />
      <MediaPartners />
      {/* <UpcomingEvents /> */}
      {/* <Signup /> */}
      <VideoHighlight />
      <Footer />
    </div>
  );
}

export default LGLSDelhi;
