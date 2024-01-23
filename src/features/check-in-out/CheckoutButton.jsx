import { useCheckout } from "../check-in-out/useCheckout";
import Button from "../../ui/Button";
/* eslint-disable */
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      sizes="small"
      variation="primary"
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
