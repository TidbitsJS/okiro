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
        title="Subscribe to new"
        subtitle="posts"
        nameField={true}
        btnName="subscribe"
        imageUrl="subscribe"
        textareaField={false}
      />
    </motion.div>
  );
};

export default SubscribePage;
