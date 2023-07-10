"use client";

import JSTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";

JSTimeAgo.addDefaultLocale(en);
JSTimeAgo.addLocale(en);

const TimeAgo = ({ date }: { date: Date }) => {
  return <ReactTimeAgo date={date} locale="en-US" />;
};

export default TimeAgo;
