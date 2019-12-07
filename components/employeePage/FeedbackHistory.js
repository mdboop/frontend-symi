/* eslint-disable react/prop-types */
//TODO make this a functional component
export default class FeedbackHistory extends React.Component {

  render() {
    return (
      <div>
        <p className="title">Feedback History</p>

        <div className="feedback-history-sub">
          <span>Feedback ▾</span> <span>Date Added ▾</span> <span>Status ▾</span>
        </div>
        {this.props.feedbacks.map((item, i) => {
          return (
            <div key={i} className="feedback-history">
              <div className="feedback-string">
                I feel {item.feeling.toUpperCase()} about{' '}
                {item.about.input.toUpperCase()} because{' '}
                {item.note.toUpperCase()}.
              </div>
              <div className="date-added">
                (Added
                {item.dateAdded})
              </div>
              <div className="status">
                {item.status}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
