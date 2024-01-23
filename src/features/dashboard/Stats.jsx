/* eslint-disable */
import { formatCurrency } from "../../utils/helpers";

import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, booking) => {
    return (acc += booking.totalPrice);
  }, 0);
  const check = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, el) => (acc += el.numNights), 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={check}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100)}
      />
    </>
  );
}

export default Stats;
