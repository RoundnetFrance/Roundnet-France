import propTypes from 'prop-types';

// MUI IMPORTS
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Timeliner({ position, items }) {
  const timelineItems = items.map((item, index) => {
    return (
      <TimelineItem key={item.key}>
        <TimelineSeparator>
          <TimelineDot />
          {index === items.length - 1 ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{item.text}</TimelineContent>
      </TimelineItem>
    )
  })

  return (
    <Timeline position={position}>
      {timelineItems}
    </Timeline>
  )
}

Timeliner.propTypes = {
  position: propTypes.string,
}

Timeliner.defaultProps = {
  position: 'alternate',
}

export default Timeliner
