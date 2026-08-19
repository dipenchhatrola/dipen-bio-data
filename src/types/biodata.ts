export type DecorativeSymbol = 'ganesha' | 'swastik' | 'om' | 'ek-onkar' | 'none';

export type ThemeOption = 'classic-blue' | 'royal-gold' | 'crimson-red' | 'emerald' | 'monochrome';

export interface BioData {
  title: string;
  symbol: DecorativeSymbol;
  theme: ThemeOption;
  personalDetails: {
    name: string;
    dob: string;
    height: string;
    weight: string;
    education: string;
    occupation: string;
    income: string;
    photoUrl: string;
  };
  familyBackground: {
    father: string;
    fatherOccupation: string;
    mother: string;
    motherOccupation: string;
    elderSister: string;
    youngerSister?: string;
    brother?: string;
    native: string;
  };
  maternalFamily: {
    uncles: string[];
    fatherMaternal: string;
    motherMaternal: string;
  };
  residentialAddress: string[];
  propertyDetails: string[];
  contactDetails: {
    father: string;
    uncle: string;
    self?: string;
  };
}
