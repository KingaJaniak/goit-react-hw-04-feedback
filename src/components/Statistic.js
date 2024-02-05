import { Stats, TextP } from './FeedbackApp.styled.js';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <TextP>Good: {good}</TextP>
      <TextP>Neutral: {neutral}</TextP>
      <TextP>Bad: {bad}</TextP>
      <TextP>Total: {total}</TextP>
      <TextP>Good total feedback: {positivePercentage}%</TextP>
    </Stats>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
