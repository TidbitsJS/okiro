import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../animation/motion";
import ConnectWithUs from "../../../components/connect/ConnectWithUs";

const SubscribePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ConnectWithUs
        title="Contact us"
        btnName="send message"
        nameField={true}
        imageUrl="contact"
        textareaField={true}
      />
    </motion.div>
  );
};

export default SubscribePage;
