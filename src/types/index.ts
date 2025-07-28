export type Member = {
  name: string;
  designation: string[];
  image: string;
  linkedin: string;
  youtube: string;
  website: string;
  instagram: string;
  type?: string;
};

export type DescriptionDetails = {
  title: string;
  date: string;
  location: string;
  contactNumber: string;
  ticketPrice: string;
  ticketLink: string;
  description: string[];
};

export type Session = {
    time: string;
    title: string;
    description: string;
}

export type Agenda = {
    title: string;
    sessions: Session[];
}

export type Partner = {
    name: string;
    logo: string;
    website: string;
}

export type HeroSection = {
  date: string;
  location: string;
  timerCountdownEndDateTimeStamp: string;
  supportedBy: string[];
  backgroundImages: string[];
}

export type KeyHighlight = {
  icon: React.ElementType;
  number: number;
  label: string;
  color: string;
  key: string;
}

export type SupportLetter = {
  title: string;
  image: string;
  description: string;
}

export type SupportLetterSection = {
  title: string;
  supportLetters: SupportLetter[];
  endText: string;
}

export type VideoHighlight = {
  title: string;
  description: string;
  videoLink: string;
  backgroundImage: string;
}

export type WhatToExpect = {
  title: string;
  description: string;
  icon: React.ElementType;
}

export type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  route: string;
}