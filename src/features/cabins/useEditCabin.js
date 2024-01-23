import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { creatEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => creatEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfull edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
