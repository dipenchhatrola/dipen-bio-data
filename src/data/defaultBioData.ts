import { BioData } from '../types/biodata';

export const defaultBioData: BioData = {
  title: 'BIO DATA',
  symbol: 'ganesha',
  theme: 'classic-blue',
  personalDetails: {
    name: 'Dipen Amarshibhai Chhatrola',
    dob: '21st April, 2001',
    height: `5'6"`,
    weight: '55 kg',
    education: 'BCA, M.Sc.IT (Atmiya University)',
    occupation: 'Freelance Web Developer & Co-Founder, Ashtrixcode (50% Partnership)',
    income: '₹20,000 per month',
    photoUrl: '/dipen_photo.jpg',
  },
  familyBackground: {
    father: 'Mr. Amarshibhai Parsottambhai Chhatrola',
    fatherOccupation: 'Retired Govt. Employee',
    mother: 'Mrs. Madhuben Amarshibhai Chhatrola',
    motherOccupation: 'Homemaker',
    elderSister: 'Mrs. Dharaben Divyeshbhai Bhimani',
    native: 'Keshiya, Ta. Jodiya',
  },
  maternalFamily: {
    uncles: [
      'Mr. Prafulbhai Arjanbhai Bhalodiya (Vankiya)',
      'Mr. Hasmukhbhai Arjanbhai Bhalodiya',
    ],
    fatherMaternal: 'Mr. Bhagvanjibhai Bhensdadiya (Moti Banugar)',
    motherMaternal: 'Mr. Narshibhai Ratabhai Ranipa (Jambuda)',
  },
  residentialAddress: [
    'Balaji Park, Street No. 2, Opp. Bahucharaji Pan, Near Patidar Chowk, Sadhuvasvani Road, Yogi Nagar, Rajkot',
  ],
  propertyDetails: [
    'One 3BHK House, Rajkot',
    'One House, Keshiya',
    '8 Vigha Agricultural Land, Keshiya',
  ],
  contactDetails: {
    father: 'Amarshibhai Parsottambhai Chhatrola - +91 99256 53609',
    uncle: 'Prafullbhai Arjanbhai Bhalodiya - +91 98793 39682',
  },
};
