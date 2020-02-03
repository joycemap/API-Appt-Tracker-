var React = require("react");
const Layout = require("./Layout.jsx");

class Delete extends React.Component {
  render() {
    console.log("in delete form");

    let url = `/appt/${this.props.apptData.id}?_method=delete`;

    return (
      <Layout
        cookieLogin={this.props.cookieLogin}
        cookieUserId={this.props.cookieUserId}
      >
        <h1>Confirm delete appointment</h1>
        <form method="POST" action={url}>
          <input type="hidden" name="id" value={this.props.apptData.id} />
          <input
            type="hidden"
            name="user_id"
            value={this.props.apptData.user_id}
          />
          <p>
            <strong>Date:</strong>{" "}
            {this.props.apptData.date
              .toString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}{" "}
            <br />
          </p>
          <p>
            <strong>Time:</strong> {this.props.apptData.time.slice(0, -3)}{" "}
            <br />
          </p>
          <p>
            <strong>Location:</strong> {this.props.apptData.location} <br />
          </p>
          <p>
            <strong>Doctor:</strong> {this.props.apptData.doctor} <br />
          </p>
          <p>
            <strong>Notes:</strong> {this.props.apptData.notes} <br />
          </p>
          <div class="form-group">
            <input class="btn btn-danger" type="submit" value="Delete" />
          </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Delete;
