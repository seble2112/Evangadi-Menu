import { Component } from 'react'
import "./FoodItems.css";
import SingleFood from '../SingleFood/SingleFood';
import menu from "../Constantes/Data"
export default class FoodItems extends Component {
  render() {
    return (
      <div className="foods-container">
        {/* <SingleFood
          imglink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="TIMATIM SELAXA (ቲማቲም ሰላጣ)"
          price="$5.99"
          description="Timatim Salata refers to a type of fresh Ethiopian tomato salad
            that’s also popular in Eritrea. It’s made with diced tomatoes,
            minced onions, and finely chopped peppers dressed with a mixture of
            berbere spices, olive oil, vinegar, and lemon juice."
        />

        <SingleFood
          imglink="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          title="TIBS (ጥብስ)"
          price="$25.99"
          description=" Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
            one of the most popular dishes among Ethiopians. It comes in a
            variety of forms, varying in type, size or shape of the cuts of meat
            used, and can range from hot to mild or contain..."
        />

        <SingleFood
          imglink="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"
          title="KITFO (ክትፎ) "
          price="$25.99"
          description=" Made from the leanest meat, kitfo is viewed as a big treat by
            ordinary Ethiopians, while its nutritional powers are also praised.
            Similar to French steak tartare, the meat is minced and warmed in a
            pan with a little butter, mitmita (a stronger version of berbere)..."
        /> */}


     {menu?.map((item)=>{
    const {img, title,price,desc, category} = item;
    return (
      <SingleFood
      //key={id}
        img={img}
        title={title}
        price={price}
        desc={desc.length >250? desc.slice(0, 250) + "..." : desc}
        category={category}

      />
    );

})} 




      </div>
    );
  }
}

  //map syntax
// {menu.map((item)=>{
//   const {id, img, title, price, desc, category} = item;
//   return (
//     <SingleFood
//       key={id}

// })}

//to slice the description to 250 characters
//  desc={desc.length > 250 ? desc.slice(0, 250) + "..." : desc}