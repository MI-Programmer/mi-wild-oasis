import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { logout as logoutApi } from "../../services/apiAuth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Successfully logged out");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { logout, isLoggingOut };
};
