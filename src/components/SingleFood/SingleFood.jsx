import { Component } from "react";
import "./SingleFood.css";

export default class SingleFood extends Component {
  render() {
    const {img, title, price, desc, category} = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={img} />
        </div>
        <p>{category}</p>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        
        <div className="food-desc">{desc}</div>
      </div>
    );
  }
}
