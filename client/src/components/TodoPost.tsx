interface cardProp {
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
}: cardProp) => {
  return (
    <>
      <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 bg-card">
        <div className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <p className="text-sm text-muted-foreground">
            <strong>Company</strong>: {orginization}
          </p>
          <div className="mt-2">
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Orginization Types</strong>: {orginizationTypes}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Volunteer Types</strong>: {volunteerTypes}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Commitment</strong>: {commitment}
            </p>
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Location</strong>: {location}
            </p>{" "}
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Application Deadline</strong>: {applicationDeadline}
            </p>{" "}
            <p className="text-base leading-relaxed break-words whitespace-normal overflow-wrap-normal line-clamp-1">
              <strong>Website</strong>: {website}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPost;
