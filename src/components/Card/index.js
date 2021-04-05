import ExperienceCard from "./ExperienceCard";
import ExpertCard from "./ExpertCard";
import EmptyCard from "./EmptyCard";
import UpcomingExperienceCard from "./UpcomingExperienceCard";
import Normal from "./Normal";

export const Card = ({ type, data, ...props }) => {
  switch (type) {
    case "experience":
      return <ExperienceCard cardDetails={data} {...props} />;
    case "upcomingExperience":
      return <UpcomingExperienceCard cardDetails={data} {...props} />;
    case "expert":
      return <ExpertCard cardDetails={data} {...props} />;
    case "normalExperience":
      return <Normal cardDetails={data} {...props} />;
    case "empty":
      return <EmptyCard cardDetails={data} {...props} />;
    default:
      return <ExperienceCard cardDetails={data} {...props} />;
  }
};
