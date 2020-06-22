import React from "react";
import moment from "moment-jalaali";
let THE_DATE = Date.now();

class GetDate extends React.Component {
  clockInterval = "";
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
    };
  }
  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  getTheDate = (getDate) => {
    let theCDate = new Date(getDate);
    const Dayy = `${theCDate.getFullYear()}-${
      theCDate.getMonth() + 1
    }-${theCDate.getDate()}`;

    return moment(Dayy, ["YYYY-M-D"]).format("jYYYY/jM/jD");
  };
  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  handleDate = () => {
    const date = new Date();
    let hours = this.formatTime(date.getHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds });
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className="d-flex justify-content-around" style={{ marginRight: 15, marginLeft: 15, marginTop: 8 }}>
      

        {this.state.hours === "" ? (
          <p style={{ fontFamily: "IRANSans" }}>00:00:00</p>
        ) : (
          <p style={{ fontFamily: "IRANSans", width:76,display:'inline-block' }}>
            {hours}:{minutes}:{seconds}
          </p>
        )}
          <p
          style={{
            fontFamily: "IRANSans",
            marginRight: 14,
            marginLeft: 14,
            whiteSpace: "nowrap",
          }}
        >
          {this.getTheDate(THE_DATE)}
        </p>

        <p style={{ fontFamily: "IRANSans" }}> :  امروز</p>
      </div>
    );
  }
}

export default GetDate;
