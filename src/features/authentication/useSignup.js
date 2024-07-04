import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "../../services/apiAuth";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isSigningUp };
};
