import { getIcon } from "@/assets/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ChargerManagementHeader() {
  return (
    <header className="flex items-center justify-between gap-2">
      <BreadcrumbTitle />
      <div className="flex items-center gap-4">
        <SelectComponent />
        <SearchBarwithSelect />
        <FilterButton />
        <ActionIcons />
      </div>
    </header>
  );
}

const BreadcrumbTitle = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href="#">{getIcon("home", "size-4")}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="hidden md:block" />
      <BreadcrumbItem>
        <BreadcrumbPage>Charger Management</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

const SelectComponent = () => (
  <Select defaultValue="vendor">
    <SelectTrigger>
      <SelectValue placeholder="Select vendor" />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectLabel>Vendors</SelectLabel>
        <SelectItem value="vendor">Vendor</SelectItem>
        <SelectItem value="vendor-1">Vendor 1</SelectItem>
        <SelectItem value="vendor-2">Vendor 2</SelectItem>
        <SelectItem value="vendor-3">Vendor 3</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

const SearchBarwithSelect = () => (
  <div
    className={cn(
      "flex items-center justify-between gap-3",
      "w-84 px-3 py-1",
      "h-9 rounded-md",
      "border border-input",
      "bg-transparent dark:bg-input/30",
      "shadow-xs",
      "focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
      "transition-[color,box-shadow]"
    )}
  >
    <div className="flex flex-1 items-center gap-2">
      {getIcon("search", "size-4")}
      <Input
        variant="unstyled"
        defaultValue="Charger/Hub"
        placeholder="Search..."
        className="h-full"
      />
    </div>
    <Select defaultValue="all">
      <SelectTrigger variant="unstyled" className="h-full">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
          <SelectItem value="option-3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

const FilterButton = () => (
  <Button variant="outline">{getIcon("filter_list", "size-4")}Filter</Button>
);

const ActionIcons = () => {
  const icons = ["notification", "help", "add_button"];

  return (
    <div className="flex items-center gap-4">
      {icons.map((icon) => (
        <div key={icon} className="cursor-pointer">
          {getIcon(icon, "size-6.5 text-[#ADB7D2]")}
        </div>
      ))}
    </div>
  );
};
