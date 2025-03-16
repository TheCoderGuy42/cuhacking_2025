import * as React from "react";
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Slider } from "../../components/ui/slider";
import { Button } from "../../components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "../../components/ui/input";

interface NavBarProps {
  onSearch: (value: string) => void;
  onLocationChange: (value: string) => void;
  onMaxTimeChange: (value: number) => void;
}

function NavBar({ onSearch, onLocationChange, onMaxTimeChange }: NavBarProps) {
  const [searchValue, setSearchValue] = React.useState("");
  const [locationValue, setLocationValue] = React.useState("all");
  const [maxTimeValue, setMaxTimeValue] = React.useState(60);

  const handleApplyFilters = () => {
    onSearch(searchValue);
    onLocationChange(locationValue === "all" ? "" : locationValue);
    onMaxTimeChange(maxTimeValue);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Login</NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 w-[300px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <Input
                  placeholder="Search opportunities..."
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchValue(e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Select value={locationValue} onValueChange={setLocationValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="Ottawa - West">Ottawa - West</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Max Time: {maxTimeValue} minutes
                </label>
                <Slider
                  defaultValue={[maxTimeValue]}
                  max={240}
                  step={10}
                  onValueChange={(values) => setMaxTimeValue(values[0])}
                />
              </div>

              <Button className="w-full" onClick={handleApplyFilters}>
                Apply Filters
              </Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavBar;
