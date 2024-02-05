import { Btns, BtnStats } from './FeedbackApp.styled.js';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btns>
      {options.map(option => (
        <BtnStats key={option} onClick={() => onLeaveFeedback(option)}>
          {option[0].toUpperCase() + option.slice(1)}
        </BtnStats>
      ))}
    </Btns>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};