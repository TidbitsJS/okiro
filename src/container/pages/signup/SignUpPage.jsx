import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../animation/motion";
import ConnectWithUs from "../../../components/connect/ConnectWithUs";

const SignUpPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ConnectWithUs
        title="Get started with"
        subtitle="Okiro"
        btnName="continue"
        nameField={true}
        imageUrl="signup"
        textareaField={false}
        sign="signup"
      />
    </motion.div>
  );
};

export default SignUpPage;
