import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      minGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  const handleUpdate = (e, field) => {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minNights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxNights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minGuestPerBooking")}
          defaultValue={minGuestPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
