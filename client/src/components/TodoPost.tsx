"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

interface TodoCardProp {
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  commitment: string;
  location: string;
  applicationDeadline: string;
  website: string;
}

const TodoPost = ({
  title,
  orginization,
  orginizationTypes,
  volunteerTypes,
  commitment,
  location,
  applicationDeadline,
  website,
}: TodoCardProp) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
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
            <span className="font-semibold min-w-[130px]">
              Organization Types:
            </span>
            <span className="text-muted-foreground line-clamp-1 flex-1">
              {orginizationTypes}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px]">
              Volunteer Types:
            </span>
            <span className="text-muted-foreground line-clamp-1 flex-1">
              {volunteerTypes}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px]">Commitment:</span>
            <span className="text-muted-foreground line-clamp-1 flex-1">
              {commitment}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px]">Location:</span>
            <span className="text-muted-foreground line-clamp-1 flex-1">
              {location || "Remote"}
            </span>
          </div>

          <div className="flex gap-2 items-start">
            <span className="font-semibold min-w-[130px]">Deadline:</span>
            <span className="text-muted-foreground line-clamp-1 flex-1">
              {applicationDeadline}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(website, "_blank")}
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
