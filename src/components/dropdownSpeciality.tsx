"use client";

import { specialities } from "@/api/data";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { doctorsData } from "@/api/data";
import { useDispatch } from "react-redux";
import { set } from "@/app/store/features/doctorsSlice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownSpeciality = () => {
  const [specials, setSpecials] = useState<
    Array<{ specialityName: string; checked: boolean }>
  >([]);

  const [searches, setSearches] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialState = specialities.map((speciality) => {
      return { specialityName: `${speciality}`, checked: false };
    });
    setSpecials(initialState);
    dispatch(set(doctorsData));
  }, []);

  const crossSearch = (filerSearch: string[], doctorSearch: string[]) => {
    return filerSearch
      .map((criteria) => doctorSearch.includes(criteria))
      .includes(true);
  };

  const filterData = (searchCriteria: string[]) => {
    if (searchCriteria.length < 1) {
      dispatch(set(doctorsData));
    } else {
      const filtered = doctorsData.filter((doctor) =>
        crossSearch(searchCriteria, doctor.speciality)
      );
      console.log(filtered);
      dispatch(set(filtered));
    }
  };

  const searchHandle = (criteria: string) => {
    let update = [];
    if (searches.indexOf(criteria) === -1) {
      setSearches([...new Set([...searches, criteria])]);
      update = [...new Set([...searches, criteria])];
      console.log([...new Set([...searches, criteria])]);
    } else {
      setSearches(searches.filter((search) => search !== criteria));
      console.log(searches.filter((search) => search !== criteria));
      update = searches.filter((search) => search !== criteria);
    }
    filterData(update);
  };

  const checkOption = (idx: number) => {
    const optionsUpdate = specials.map((speciality) =>
      speciality === specials[idx]
        ? { ...speciality, checked: !speciality.checked }
        : speciality
    );

    searchHandle(specials[idx].specialityName);

    setSpecials(optionsUpdate);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild tabIndex={0}>
        <Button
          aria-label="Book an Appointment"
          className="border-2 border-teal-500 bg-blue-50 text-slate-700 hover:bg-blue-100 hover: font-bold h-2.5 md:h-9 "
        >
          Speciality
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Specialities Available</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {specials.map(
          (speciality: { specialityName: string; checked: boolean }, index) => (
            <DropdownMenuItem
              aria-label="Speciality Option"
              tabIndex={2}
              className={speciality.checked ? "text-blue-500 font-bold" : ""}
              key={index}
              onClick={() => checkOption(index)}
            >
              {speciality.specialityName}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownSpeciality;
