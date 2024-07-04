import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUpdateCabin } from "../../services/apiCabins";

export const useUpdateCabin = () => {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCabin } = useMutation({
    mutationFn: ({ newCabin, id }) => createUpdateCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin succesfully updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateCabin };
};
