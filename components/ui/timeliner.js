import propTypes from 'prop-types';

// MUI IMPORTS
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function Timeliner({ position, items, color }) {
  const timelineItems = items.map((item, index) => {
    return (
      <TimelineItem key={item.key}>
        <TimelineSeparator>
          <TimelineDot />
          {index === items.length - 1 ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent color={color}><strong>{item.text}</strong></TimelineContent>
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
  items: propTypes.array.isRequired,
  color: propTypes.string,
}

Timeliner.defaultProps = {
  position: 'alternate',
  color: 'initial',
}

export default Timeliner
