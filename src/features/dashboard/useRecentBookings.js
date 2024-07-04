import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getBookingsAfterDate } from "../../services/apiBookings";

export const useRecentBookings = () => {
  const [searchParams] = useSearchParams();

  const numDays = Number(searchParams.get("last")) || 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["booking", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading, numDays };
};
