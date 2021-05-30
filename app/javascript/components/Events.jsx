import React from "react";
import { Link } from "react-router-dom";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      done: false,
    };
  }

  componentDidMount() {
    const url = "/api/v1/events/index";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => this.setState({ events: response }))
      .then(() => this.setState({ done: true }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { events } = this.state;
    const allEvents = events
      .filter(
        (event) =>
          this.props.user_id == 1 || event.user_id == this.props.user_id
      )
      .map((event) => (
        <div class="list-group">
          <a class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{event.name}</h5>
              <small class="text-muted">by user {event.user_id}</small>
            </div>
            <p class="mb-1">{event.summary}</p>
            <div class="d-flex w-100 justify-content-between">
              <small class="text-muted">
                <button type="button" class="btn btn-outline-dark">
                  Tag 1
                </button>
                <button type="button" class="btn btn-outline-dark">
                  Tag 2
                </button>
                <button type="button" class="btn btn-outline-dark">
                  Tag 3
                </button>
              </small>
              <Link to={`/event/${event.id}`} className="btn custom-button">
                View Event
              </Link>
            </div>
          </a>
        </div>
      ));
    const noEvent = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No such event yet. Why not <Link to="/event">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">List of events</h1>
            <p className="lead text-muted">Learning web development again</p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/event" className="btn custom-button">
                Create New Event
              </Link>
            </div>
            <div className="row" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch'
          }}>
              {events.length > 0 ? allEvents : this.state.done ? noEvent : null}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}

export default Events;
