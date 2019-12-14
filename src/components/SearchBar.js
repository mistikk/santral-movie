import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [currentValue, setCurrentValue] = useState("");

  const dispatch = useDispatch();

  const _onClick = () => {
    dispatch({ type: "movie/request" });
    fetch(`https://www.omdbapi.com/?s=${currentValue}&apikey=4a3b711b`).then(
      result => {
        result.json().then(res => {
          dispatch({ type: "movie/success", data: res.Search });
        });
      }
    );
  };

  const _onChange = event => {
    setCurrentValue(event.target.value);
  };
  return (
    <Fragment>
      <input onChange={_onChange} />
      <button onClick={_onClick}>Search</button>
    </Fragment>
  );
};

// class SearchBarClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentValue: ""
//     };
//   }

//   _onClick = () => {
//     const { currentValue } = this.state;
//     console.log("currentValue Class Component :", currentValue);
//   }

//   _onChange = (event) => {
//     this.setState({ currentValue: event.target.value });
//   }

//   render() {
//     return (
//       <Fragment>
//         <input onChange={this._onChange} />
//         <button onClick={this._onClick}>Search</button>
//       </Fragment>
//     );
//   }
// }


// export default connect()(SearchBar);
export default SearchBar;
