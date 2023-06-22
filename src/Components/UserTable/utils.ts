import { User } from "../../types/types";

export const sortByCountry = (data: User[]) => {
  return data.sort((a, b) => {
    if (a.location.country < b.location.country) {
      return -1;
    }
    if (a.location.country > b.location.country) {
      return 1;
    }
    return 0;
  });
}