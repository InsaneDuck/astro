import moment from "moment/moment";

export function formatTimeToDuration(isoTime: moment.MomentInput) {
  const currentTime = moment();
  const providedTime = moment(isoTime);

  const timeDifference = currentTime.diff(providedTime);
  const duration = moment.duration(timeDifference).abs();

  if (duration.asSeconds() < 60) {
    return Math.floor(duration.asSeconds()) + "sec";
  } else if (duration.asMinutes() < 60) {
    return Math.floor(duration.asMinutes()) + "min";
  } else if (duration.asHours() < 24) {
    return Math.floor(duration.asHours()) + "h";
  } else if (duration.asDays() < 30) {
    return Math.floor(duration.asDays()) + "d";
  } else if (duration.asMonths() < 12) {
    return Math.floor(duration.asMonths()) + "M";
  } else {
    return Math.floor(duration.asYears()) + "y";
  }
}
