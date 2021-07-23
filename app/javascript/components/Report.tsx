import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
  match: {
    params: any;
  };
  history: any;
  location: any;
  user_id: number;
  role: string;
};

type State = {
  report: any;
  user: any;
  event: any;
  done: boolean;
};

class Report extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      report: null,
      user: null,
      event: null,
      done: false,
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const url = `/api/v1/report/show/${id}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((result) => {
        this.setState({
          report: result.report,
          user: result.user,
          event: result.event,
          done: true,
        });
      })
      .catch(() => this.props.history.push("/"));
  };

  render = () => {
    if (this.state.done) {
      return (
        <>
          <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
              <div className="overlay bg-dark position-absolute" />
              <div>
                <h1 className="display-4 position-relative text-white">
                  Report ID: {this.state.report.id}
                </h1>
                <br />
              </div>
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <h4>Reported by: </h4>
                  {this.state.user.name}
                  <br />
                  <br />
                  <h4>Email: </h4>
                  {this.state.user.email}
                </div>
                <div className="col-sm-12 col-lg-7">
                  <h4>Details:</h4>
                  <div style={{ whiteSpace: "pre-line" }}>
                    {this.state.report.details}
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <h4>Actions:</h4>
                  <Link
                    to={`/event/${this.state.report.event_id}`}
                    className="btn custom-button"
                  >
                    View Event
                  </Link>
                </div>
                <br />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };
}

export default Report;