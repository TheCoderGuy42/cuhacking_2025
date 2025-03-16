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
  distance: number;
};

interface TodoListProps {
  searchTerm: string;
  locationFilter: string;
  maxTime: number;
}

function TodoList({ searchTerm, locationFilter, maxTime }: TodoListProps) {
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
      distance: 1200,
    },
    {
      id: 2,
      title: "Graphic Designer",
      orginization: "Creative Commons",
      orginizationTypes: "Arts and Culture",
      volunteerTypes: "Design, Digital Media",
      commitment: "Flexible",
      location: "Remote",
      applicationDeadline: "May 15, 2025",
      website: "https://example.com",
      distance: 3600, // 1 hour
    },
    {
      id: 3,
      title: "Community Organizer",
      orginization: "Local Initiatives",
      orginizationTypes: "Community Development",
      volunteerTypes: "Event Planning, Outreach",
      commitment: "Long term (more than 6 months)",
      location: "Ottawa - West",
      applicationDeadline: "June 1, 2025",
      website: "https://example.org",
      distance: 7200, // 2 hours
    },
  ]);

  const retrievePosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Return just the data, not the entire response
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["postsData"],
    queryFn: retrievePosts,
    // Disable automatic refetching to prevent promise errors
    refetchOnWindowFocus: false,
    retry: false,
  });

  // Only run this effect once when data is first loaded
  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Don't add API data for now to avoid cluttering the UI
      // Uncomment this if you want to add API data
      // setTodos(prevTodos => [...prevTodos, ...data.slice(0, 3).map(post => ({
      //   id: post.id + 100,
      //   title: post.title,
      //   orginization: `API Post #${post.id}`,
      //   orginizationTypes: "API Data",
      //   volunteerTypes: "External Content",
      //   commitment: "From API",
      //   location: "Remote",
      //   applicationDeadline: "N/A",
      //   website: "https://jsonplaceholder.typicode.com",
      //   distance: Math.floor(Math.random() * 3600),
      // }))]);
    }
  }, [data]);

  // Filter todos based on search term, location, and max time
  const filteredTodos = todos.filter((todo) => {
    // Filter by search term
    const matchesSearch =
      searchTerm === "" ||
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.orginization.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by location
    const matchesLocation =
      locationFilter === "" || todo.location === locationFilter;

    // Filter by time
    const todoTimeInMinutes = Math.ceil(todo.distance / 60);
    const matchesTime = todoTimeInMinutes <= maxTime;

    return matchesSearch && matchesLocation && matchesTime;
  });

  if (isLoading)
    return <div className="text-center py-8">Fetching posts...</div>;
  if (error)
    return (
      <div className="text-center py-8">
        An error occurred: {(error as Error).message}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      {filteredTodos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">
            No opportunities match your filters.
          </p>
          <p className="text-sm text-gray-400">
            Try adjusting your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredTodos.map((todo) => (
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
              distance={todo.distance}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
