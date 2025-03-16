import { ExternalLink, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import React from "react";

interface TodoPostProp {
  id: number;
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  commitment: string;
  location: string;
  applicationDeadline: string;
  website: string;
  distance: number; // Distance in seconds
}

const TodoPost = ({
  id,
  title,
  orginization,
  orginizationTypes,
  volunteerTypes,
  commitment,
  location,
  applicationDeadline,
  website,
  distance,
}: TodoPostProp) => {
  const handleWebsiteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (website !== "TO BE DETERMINED") {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const formatDistance = (seconds: number): { value: number; unit: string } => {
    const minutes = Math.ceil(seconds / 60);

    if (minutes < 60) {
      return { value: minutes, unit: "min" };
    } else if (minutes < 1440) {
      const hours = Math.ceil(minutes / 60);
      return { value: hours, unit: "hr" };
    } else {
      const days = Math.ceil(minutes / 1440);
      return { value: days, unit: "day" };
    }
  };

  const truncateText = (text: string, maxLength: number = 80): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const { value, unit } = formatDistance(distance);

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md relative w-full">
      {/* Time badge */}
      <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-md text-xs font-medium flex items-center shadow-sm z-10">
        <Clock className="mr-1 h-3 w-3" />
        {value} {unit}
        {value !== 1 && unit === "day" ? "s" : ""}
      </div>

      <CardHeader className="pb-2 pt-6">
        <h2 className="text-xl font-bold text-primary line-clamp-2 min-h-[3.5rem]">
          {title}
        </h2>
        <p className="text-sm font-medium text-muted-foreground">
          {orginization}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px] shrink-0">
              Organization Types:
            </span>
            <span
              className="text-muted-foreground line-clamp-2 flex-1"
              title={orginizationTypes}
            >
              {orginizationTypes}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px] shrink-0">
              Volunteer Types:
            </span>
            <span
              className="text-muted-foreground line-clamp-2 flex-1"
              title={volunteerTypes}
            >
              {volunteerTypes}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px] shrink-0">
              Commitment:
            </span>
            <span
              className="text-muted-foreground line-clamp-2 flex-1"
              title={commitment}
            >
              {commitment}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px] shrink-0">
              Location:
            </span>
            <span
              className="text-muted-foreground line-clamp-1 flex-1"
              title={location || "Remote"}
            >
              {location || "Remote"}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px] shrink-0">
              Deadline:
            </span>
            <span
              className="text-muted-foreground line-clamp-1 flex-1"
              title={applicationDeadline}
            >
              {applicationDeadline}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleWebsiteClick}
          disabled={website === "TO BE DETERMINED"}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          {website === "TO BE DETERMINED" ? "Coming Soon" : "Visit Website"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoPost;
