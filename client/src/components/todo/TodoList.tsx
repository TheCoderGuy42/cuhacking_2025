import TodoPost from "./TodoPost";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: number;
  title: string;
  orginization: string;
  orginizationTypes: string;
  volunteerTypes: string;
  commitment: string;
  location: string;
  applicationDeadline: string;
  website: string;
};

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Web Developer & Research Assistant",
      orginization: "@ Spill The Code",
      orginizationTypes: "Education, Children, Youth and Family",
      volunteerTypes:
        "Arts, Crafts and Photography, Communications and Marketing",
      commitment: "Short term (less than 6 months)",
      location: "Ottawa - West",
      applicationDeadline: "April 30, 2025",
      website: "TO BE DETERMINED",
    },
  ]);

  const retrievePosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["postsData"],
    queryFn: retrievePosts,
  });

  // Process API data and add to todos when data is available
  useEffect(() => {
    if (data && Array.isArray(data)) {
      // The API data is already in the correct Todo format, just add it to existing todos
      setTodos((prevTodos) => [...prevTodos, ...data]);
    }
  }, [data]);

  const addTodo = (json: string) => {
    try {
      const newTodo = JSON.parse(json) as Todo;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Failed to parse todo JSON:", error);
    }
  };

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        {todos.map((todo) => (
          <TodoPost
            key={todo.id}
            id={todo.id}
            title={todo.title}
            orginization={todo.orginization}
            orginizationTypes={todo.orginizationTypes}
            volunteerTypes={todo.volunteerTypes}
            commitment={todo.commitment}
            location={todo.location}
            applicationDeadline={todo.applicationDeadline}
            website={todo.website}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
