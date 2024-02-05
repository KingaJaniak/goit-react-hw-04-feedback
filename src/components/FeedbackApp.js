import { useState } from 'react';
import { Title, Widget, FeedbackArea } from './FeedbackApp.styled.js';
import { FeedbackOptions } from './FeedbackOption.js';
import { Statistics } from './Statistic.js';
import { Notification } from './Notification.js';

const FeedbackApp = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeed = countTotalFeedback();
    return totalFeed === 0 ? 0 : (state.good / totalFeed) * 100;
  };
  const feedbackOptionsProps = {
    options: ['good', 'neutral', 'bad'],
    onLeaveFeedback: handleFeedback,
  };

  const statisticsProps = {
    good: state.good,
    neutral: state.neutral,
    bad: state.bad,
    total: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
  };
  const isFeedbackGiven = countTotalFeedback() > 0;

  return (
    <Widget>
      <FeedbackArea>
        <Title>Please leave feedback</Title>
        <FeedbackOptions {...feedbackOptionsProps} />
        <section>
          <Title>Statistic:</Title>
          {isFeedbackGiven ? (
            <Statistics {...statisticsProps} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </section>
      </FeedbackArea>
    </Widget>
  );
};

export default FeedbackApp;
