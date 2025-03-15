import TodoCard from "./TodoCard";

function TodoList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <TodoCard
          title="Web Developer & Research Assistant"
          orginization="@ Spill The Code"
          orginizationTypes="Education, Children, Youth and Family"
          volunteerTypes="Arts, Crafts and Photography, Communications and Marketing"
          commitment="Short term (less than 6 months)"
          location="Ottawa - West"
          applicationDeadline="April 30, 2025"
          website="TO BE DETERMINED"
        />
        <TodoCard
          title="Testing1"
          orginization="Testing2"
          orginizationTypes="Testing3"
          volunteerTypes="Testing4"
          commitment="testing5"
          location=""
          applicationDeadline="testing6"
          website="testing7"
        />
        <TodoCard
          title="Testing1"
          orginization="Testing2"
          orginizationTypes="Testing3"
          volunteerTypes="Testing4"
          commitment="testing5"
          location=""
          applicationDeadline="testing6"
          website="testing7"
        />
        <TodoCard
          title="Web Developer & Research Assistant"
          orginization="@ Spill The Code"
          orginizationTypes="Education, Children, Youth and Family"
          volunteerTypes="Arts, Crafts and Photography, Communications and Marketing"
          commitment="Short term (less than 6 months)"
          location="Ottawa - West"
          applicationDeadline="April 30, 2025"
          website="TO BE DETERMINED"
        />
        <TodoCard
          title="Testing1"
          orginization="Testing2"
          orginizationTypes="Testing3"
          volunteerTypes="Testing4"
          commitment="testing5"
          location=""
          applicationDeadline="testing6"
          website="testing7"
        />
        <TodoCard
          title="Testing1"
          orginization="Testing2"
          orginizationTypes="Testing3"
          volunteerTypes="Testing4"
          commitment="testing5"
          location=""
          applicationDeadline="testing6"
          website="testing7"
        />
      </div>
    </div>
  );
}

export default TodoList;
