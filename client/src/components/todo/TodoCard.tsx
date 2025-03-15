import React from "react";
import TodoPost from "./TodoPost.tsx";

interface TodoCardProps {
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  commitment: string;
  location: string;
  applicationDeadline: string;
  website: string;
}

const TodoCard: React.FC<TodoCardProps> = (props) => {
  return (
    <div className="inline-block w-full max-w-[350px] m-2.5 align-top">
      <TodoPost {...props} />
    </div>
  );
};

export default TodoCard;
