import React, { useState } from 'react';
import { Title, Widget, FeedbackArea } from './FeedbackApp.styled.js';
import { FeedbackOptions } from './FeedbackOption.js';
import { Statistics } from './Statistic.js';
import { Notification } from './Notification.js';

const FeedbackApp = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;
  };

  const isFeedbackGiven = countTotalFeedback() > 0;

  return (
    <Widget>
      <FeedbackArea>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
        <section>
          <Title>Statistic:</Title>
          {isFeedbackGiven ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </section>
      </FeedbackArea>
    </Widget>
  );
};

export default FeedbackApp;
