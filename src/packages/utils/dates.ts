import moment, { Moment, MomentInput } from "moment";

const eurDateRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsOptions = months.map((name, id) => ({
  id,
  name,
}));

const getDays = ({ month, year }: { month: number; year: number }) => {
  if ((!month && month != 0) || !year) return [];

  const _date = moment().month(month).year(year).startOf("month");

  return new Array(_date.daysInMonth())
    .fill(0)
    .map((_, index) => ({ id: index + 1, name: index + 1 }));
};

const getYears = () => {
  const start = moment().subtract(120, "years");

  return new Array(200).fill(0).map((_, index) => {
    const id = start.year() + index;

    return {
      id,
      name: id,
    };
  });
};

const getDateDictionaries = (value: string) => {
  const _date = value ? moment(value) : moment();

  const month = _date.month();
  const year = _date.year();

  const days = getDays({ month, year });
  const years = getYears();

  return {
    days,
    years,
    months: monthsOptions,
  };
};

export { getDateDictionaries, months, eurDateRegex };
