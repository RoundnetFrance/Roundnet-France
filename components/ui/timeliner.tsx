import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import type { FC } from "react";

interface TimelinerProps {
  position?: "left" | "right" | "alternate";
  items: { key: string; text: string }[];
  color?: string;
}

const Timeliner: FC<TimelinerProps> = ({
  position = "alternate",
  items,
  color = "initial",
}) => {
  const timelineItems = items.map((item, index) => {
    return (
      <TimelineItem key={item.key}>
        <TimelineSeparator>
          <TimelineDot />
          {index === items.length - 1 ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent color={color}>
          <strong>{item.text}</strong>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return <Timeline position={position}>{timelineItems}</Timeline>;
};

export default Timeliner;
