import React from "react";
import dermis_care from "../assets/portfolio/dermis_care.png";
import urbanac_service from "../assets/portfolio/urbanac_service.png";
import roobai from "../assets/portfolio/roobai.png";
import foods_order from "../assets/portfolio/foods_order.png";
import Porfolio from "../assets/portfolio/portfolio.png";
import music_player from "../assets/portfolio/music_player.png"

const Portfolio = () => {
  const card = [
    {
      id: 1,
      title: " Hair Transplant Clinic",
      img: dermis_care,
      content:
        "The Hair Transplant clinic website's full conception, design, and upkeep fell within my purview. This include defining the website's goals and objectives in collaboration with the client, creating the user interface and experience, creating the content and functionality, and making sure the website is safe and easily accessible.        ",
        url: "https://dermiscare.in/"
    },

  {
    id: 2,
    title: " Ac Service (Landing page)",
    img: urbanac_service,
    content:
      "Technology: HTML, CSS, Bootstrap, PHP and my Responsibilities: Designed and developed an AC service landing page, demonstrating expertise in web development and creating a compelling online presence for the service.",
      url: "https://urbanacservice.in/"
  },
  {
    id: 3,
    title: " Roobai (Affiliate Marketing)",
    img: roobai,
    content:
      "Technology: HTML, CSS, Bootstrap, PHP, MYSQL and My Responsibilities: I was responsible for the overall design, development, and maintenance of the company's website. This includes working with the Product Manager to define the website's goals and objectives, designing the website's user interface and user experience, developing the website's content and functionality, and ensuring the website is secure and accessible. ",
      url:"https://roobai.com/"
  },
  {
    id: 4,
    title: " Food order",
    img: foods_order,
    content:
      "To further develop my skills in React and state management, I created a food order website with functionalities such as adding to cart, removing from cart, clearing the cart, changing the quantity of products added to cart, and displaying the total price at checkout. I used Redux for state management, learning about the store, slice, dispatching actions, and using hooks such as useReducer, useContext, and useSelector.It also includes the search functionality.The state of the cart and display the total price at checkout.The site is responsive and optimized for mobile devices, ensuring that users can easily order food on the go.Overall, building this Food order website was a valuable learning experience that helped me to develop my skills in React, Redux, and state management.      ",
      url: "https://food-order-gopikannan.netlify.app/"
  },
  {
    id: 5,
    title: " Music Player",
    img: music_player,
    content:
      "A music player with routing and strapi integration. It has features like listening song, songs recommendations. It also displays relevant song data like artist name. Used basic hooks such as useState and useEffect to manage state and render data.      ",
     
  },
  {
    id: 6,
    title: " Personal Portfolio",
    img: Porfolio,
    content:
      "To showcase my skills as a front-end developer and to gain experience with React, I created a portfolio website that utilizes components and a single-page application architecture. The site is fully responsive.I used React components to create a dynamic and interactive user experience, allowing visitors to easily navigate between sections and learn more about my background, experience, and projects.One of the key features of the portfolio website is the email JS library, which allows visitors to send me messages directly from the site. This adds a level of interactivity and convenience, and demonstrates my knowledge of integrating third-party libraries into a project.Overall, building this portfolio website was an important step in my development as a front-end developer, as it allowed me to gain experience with React, components, and single-page applications.      ",
      url:"https://portfolio-gopikannan.netlify.app/"
  },
  ];

  return (
    <div
      name="Portfolio"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white   p-4 mx-auto  md:px-[80px]  flex flex-col justify-center"
    >
      <p className="text-4xl font-bold ">
        <u>Portfolio</u>
      </p>
      <p className="py-6 text-lg md:text-xl ">
        Check out some of my work right here
      </p>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6 px-12 sm:px-0">
        {card.map(({ id, title, img, content, url}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4 ">
              <h4 className="text-xl font-semibold text-blue-600 mb-2  ">{title}</h4>
              <p className="mb-2 leading-normal overflow-y-scroll h-[114px] scrollbar-hide">{content}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                <a href={url} target="_blank" rel="noreferrer">Live Url </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
