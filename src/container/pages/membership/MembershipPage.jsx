import { motion } from "framer-motion";
import React from "react";
import { FaDollarSign } from "react-icons/fa";
import CustomButton from "../../../components/button/CustomButton";
import { pageVariants } from "../../../animation/motion";

import "./membershipPage.css";

const planData = [
  {
    type: "free",
    price: 0,
    features: [
      "Full access to posts for subscribers",
      "Weekly email newsletter",
      "No Advertising",
    ],
  },
  {
    type: "monthly",
    price: 7,
    features: [
      "Full access to all premium posts",
      "Weekly email newsletter",
      "Support independent publishing",
      "Simple, secure card payment",
      "No Advertising",
    ],
  },
  {
    type: "yearly",
    price: 29,
    features: [
      "Full access to all premium posts",
      "Weekly email newsletter",
      "Support independent publishing",
      "Simple, secure card payment",
      "One easy payment instead of 12!",
      "No Advertising",
    ],
  },
];

const PlanCard = ({ plan: { type, price, features } }) => {
  return (
    <div className="okiro__membership-plans_div-card">
      <div className="okiro__membership-plans_div-card_type">{type}</div>
      <div className="okiro__membership-plans_div-card_amount">
        <h1>
          {" "}
          <span>
            <FaDollarSign fontSize={34} />
          </span>
          {price}
        </h1>
      </div>
      <div className="okiro__membership-plans_div-card_content">
        {features.map((feature, index) => (
          <p key={feature + index}>{feature}</p>
        ))}
      </div>
      <div className="okiro__membership-plans_div-card_button">
        <CustomButton title="Subscribe now" />
      </div>
    </div>
  );
};

const MembershipPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="okiro__membership"
    >
      <div className="okiro__membership-welcome">
        <div className="okiro__membership-welcome_text">
          <h3>Membership</h3>
          <svg
            role="img"
            viewBox="0 0 136 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"></path>
          </svg>
          <p>
            Unlock full access to Okiro and see the entire library of
            subscribers-only content & updates
          </p>
        </div>
      </div>

      <div className="okiro__membership-plans">
        <h3>Choose your plan</h3>
        <div className="okiro__membership-plans_div">
          {planData.map((plan, index) => (
            <PlanCard plan={plan} key={plan.type + index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MembershipPage;
