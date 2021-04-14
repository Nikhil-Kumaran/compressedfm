import groq from 'groq';

export const sponsorQuery = groq`*[_type == "sponsor" && associatedEmails match $email] {
  title,
  logo,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[],
  "episodes": *[_type=='episode' && references(^._id)]{ 
    title
    audioPath
  }
}[0]`;

export const guestQuery = groq`*[_type == "guest" && guestEmail == $email] {
  firstName,
  lastName,
  guestEmail,
  "episodes": *[_type=='episode' && references(^._id)]{ 
    title
    audioPath
  }
}[0]`;
