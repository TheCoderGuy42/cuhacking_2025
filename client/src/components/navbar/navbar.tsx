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
import { Search, Filter, Clock, MapPin, Home } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";

interface NavBarProps {
  onSearch: (value: string) => void;
  onLocationChange: (value: string) => void;
  onMaxTimeChange: (value: number) => void;
}

function NavBar({ onSearch, onLocationChange, onMaxTimeChange }: NavBarProps) {
  const [searchValue, setSearchValue] = React.useState("");
  const [locationValue, setLocationValue] = React.useState("all");
  const [maxTimeValue, setMaxTimeValue] = React.useState(60);
  const [isFilterActive, setIsFilterActive] = React.useState(false);

  const handleApplyFilters = () => {
    onSearch(searchValue);
    onLocationChange(locationValue === "all" ? "" : locationValue);
    onMaxTimeChange(maxTimeValue);
    setIsFilterActive(
      searchValue !== "" || locationValue !== "all" || maxTimeValue !== 240
    );
  };

  const handleResetFilters = () => {
    setSearchValue("");
    setLocationValue("all");
    setMaxTimeValue(240);
    onSearch("");
    onLocationChange("");
    onMaxTimeChange(240);
    setIsFilterActive(false);
  };

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm border-b border-secondary/30 sticky top-0 z-50 px-4 py-2">
      <div className="flex items-center">
        <div className="ml-10 flex items-center justify-start ">
          <Home className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold text-xl text-primary">VolunteerHub</span>
        </div>

        <div className="m-auto flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-secondary/20 text-dark",
                    isFilterActive && "bg-secondary/30 font-medium"
                  )}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 p-5 w-[350px] rounded-xl border-secondary/30  bg-white shadow-lg">
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-md font-medium flex items-center text-dark">
                        <Search className="h-4 w-4 mr-2 text-primary" />
                        Search Opportunities
                      </label>
                      <Input
                        placeholder="Enter keywords..."
                        value={searchValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setSearchValue(e.target.value)
                        }
                        className="border-secondary/30 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-md font-medium flex items-center text-dark">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        Location
                      </label>
                      <Select
                        value={locationValue}
                        onValueChange={setLocationValue}
                      >
                        <SelectTrigger className="border-secondary/30 focus:ring-primary w-full">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="Ottawa - West">
                            Ottawa - West
                          </SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-md font-medium flex items-center justify-between text-dark">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          Maximum Travel Time
                        </div>
                        <span className="text-highlight font-semibold">
                          {maxTimeValue} min
                        </span>
                      </label>
                      <Slider
                        defaultValue={[maxTimeValue]}
                        max={240}
                        step={10}
                        onValueChange={(values) => setMaxTimeValue(values[0])}
                        className="py-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>10 min</span>
                        <span>2 hours</span>
                        <span>4 hours</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                        onClick={handleApplyFilters}
                      >
                        Apply Filters
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full border-secondary/30 text-dark hover:bg-secondary/20"
                        onClick={handleResetFilters}
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-secondary/20 text-dark"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-secondary/20 text-dark"
                  )}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/redeem">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-secondary/20 text-dark"
                    )}
                  >
                    Redeem
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end items-end">
          <Button
            variant="outline"
            className="mr-10 rounded-full border-secondary/30 text-dark hover:bg-secondary/20"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
