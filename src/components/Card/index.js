import ExperienceCard from "./ExperienceCard";
import ExpertCard from "./ExpertCard";
import UpcomingExperienceCard from "./UpcomingExperienceCard";

export const Card = ({ type, data }) => {
  switch (type) {
    case "experience":
      return <ExperienceCard cardDetails={data} />;
    case "upcomingExperience":
      return <UpcomingExperienceCard cardDetails={data} />;
    case "expert":
      return <ExpertCard cardDetails={data} />;
    default:
      return <ExperienceCard cardDetails={data} />;
  }
};
