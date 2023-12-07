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
  iban: string;
  swiftCode: string;
  accountNumber: string;
};

export function BankInfoForm() {
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
      <h3 className={formHeadingStyle}>Step 2: Bank Information</h3>
      <div className={inputDivStyle}>
        <label htmlFor="iban">IBAN</label>
        <input
          autoFocus
          id="iban"
          {...register("iban")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="swiftCode">Swift Code</label>
        <input
          id="swiftCode"
          {...register("swiftCode")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="accountNumber">Account Number</label>
        <input
          id="accountNumber"
          {...register("accountNumber")}
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
