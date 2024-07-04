import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../services/apiAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfully Logged in");
      navigate("/", { replace: true });
    },

    onError: () => toast.error("Provided email or password are incorrect"),
  });

  return { login, isLogging };
};
