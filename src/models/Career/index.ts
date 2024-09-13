export type Career = {
  companyLogo: ImageMetadata;
  companyName: string;
  summary: string;
  position: string;
  performances: CarrerPerformance[];
  workingDay: [Date, Date | null];
};

export type CarrerPerformance = {
  title: string;
  content: string;
};
