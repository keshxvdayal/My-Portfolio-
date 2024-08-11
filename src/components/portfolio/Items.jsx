import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import { links } from "../../Data";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, links, timeline, github } = projectItem;

        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
            <a href={links} className="link">
              <img src={img} alt="" className="portfolio__img" />
              </a>
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <h5 className="portfolio__category">TimeLine</h5>
            <p className="portfolio__timeline">{timeline}</p>
            <h5 className="portfolio__category">Github</h5>
            <a href={github} className="link">
            <p className="portfolio__description">{github}</p>
            </a>

            <a href={links} className="link">
              Live Preview
              <FaArrowRight className="link__icon" href={links} />
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
