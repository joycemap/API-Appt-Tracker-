var React = require("react");
const Layout = require("./Layout.jsx");

class Edit extends React.Component {
  render() {
    console.log("in edit form");

    let url = `/appt/edit/${this.props.apptData.id}?_method=PUT`;
    console.log(this.props);

    return (
      <Layout
        cookieLogin={this.props.cookieLogin}
        cookieUserId={this.props.cookieUserId}
      >
        <h1>Edit this appointment</h1>
        <div class="cards">
          <form method="POST" action={url}>
            <div class="form-group">
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
                  .join(" ")}
              </p>
              <input
                class="form-control"
                type="date"
                name="date"
                value={this.props.apptData.date}
              />
              <p>
                <strong>Time:</strong> {this.props.apptData.time.slice(0, -3)}
              </p>
              <input
                class="form-control"
                type="time"
                name="time"
                value={this.props.apptData.time}
              />
              <p>
                <strong>Location:</strong> {this.props.apptData.location}
              </p>
              <input
                class="form-control"
                type="text"
                name="location"
                value={this.props.apptData.location}
              />
              <p>
                <strong>Doctor:</strong> {this.props.apptData.doctor}
              </p>
              <input
                class="form-control"
                type="text"
                name="doctor"
                value={this.props.apptData.doctor}
              />
              <p>
                <strong>Notes:</strong> {this.props.apptData.notes}
              </p>
              <input
                class="form-control"
                type="text"
                name="notes"
                value={this.props.apptData.notes}
              />{" "}
              <br></br>
              <div class="form-group">
                <input class="btn btn-primary" type="submit" value="Edit" />
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
