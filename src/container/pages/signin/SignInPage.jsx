import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../animation/motion";
import ConnectWithUs from "../../../components/connect/ConnectWithUs";

const SignInPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ConnectWithUs
        title="Sign in to Okiro"
        btnName="send login link"
        nameField={false}
        imageUrl="signin"
        textareaField={false}
        sign="signin"
      />
    </motion.div>
  );
};

export default SignInPage;
