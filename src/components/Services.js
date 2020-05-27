import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Here are some fun Non-Alcoholic Mocktails you can enjoy this summer and not regret the next day! Enjoy the cocktails without the alcohol!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "The 180 km Sunshine Coast Trail, called Canada's longest hut to hut hiking trail, links sections of gorgeous old growth forest together. Huts are free.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Don’t Forget the Free Shuttle Service to Get From the Airport to Your Hotel",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beers",
        info:
          "The strongest beer in the world is back and it's aptly named Snake Venom. Here's what you need to know about the beer and where to get it.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
