import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {
  backButtonStyle,
  formHeadingStyle,
  inputDivStyle,
  inputStyle,
  nextButtonStyle,
} from "~/constants/style";

type TFormValues = {
  recipientName: string;
  addressLine1: string;
  addressLine2: string;
  poBox: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
  billingCountry: string;
};

export function BillingInfoForm() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h3 className={formHeadingStyle}>Step 3: Billing Information</h3>
      <div className={inputDivStyle}>
        <label htmlFor="recipientName">Recipient Name</label>
        <input
          autoFocus
          id="recipientName"
          {...register("recipientName")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="addressLine1">Address Line 1</label>
        <input
          id="addressLine1"
          {...register("addressLine1")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="addressLine2">Address Line 2</label>
        <input
          id="addressLine2"
          {...register("addressLine2")}
          className={inputStyle}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="poBox">PO Box</label>
        <input id="poBox" {...register("poBox")} className={inputStyle} />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="district">District</label>
        <input
          id="district"
          {...register("district")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          {...register("city")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="state">State</label>
        <input
          id="state"
          {...register("state")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          {...register("zipCode")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="billingCountry">Country</label>
        <input
          id="billingCountry"
          {...register("billingCountry")}
          className={inputStyle}
          required={true}
        />
      </div>

      <div className="flex gap-4 justify-end mt-4">
        <button
          type="button"
          onClick={onHandleBack}
          className={backButtonStyle}
        >
          Back
        </button>
        <button className={nextButtonStyle}>Next</button>
      </div>
    </form>
  );
}
