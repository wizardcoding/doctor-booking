import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownSchedule = ({
  options,
  setDate,
  date,
}: {
  options: string[];
  setDate: (s: string) => void;
  date: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="cursor-pointer pointer hover:font-bold">
          {date ? date : "Select Date"}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Dates Available</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((date, index) => (
          <DropdownMenuItem
            className="cursor-pointer hover:font-bold"
            key={index}
            onClick={() => {
              setDate(date);
            }}
          >
            {date}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSchedule;
