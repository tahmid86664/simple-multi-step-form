import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {
  formHeadingStyle,
  inputDivStyle,
  inputStyle,
  nextButtonStyle,
} from "~/constants/style";

type TFormValues = {
  companyName: string;
  companyLegalName: string;
  licenseType: string;
  licenseNumber: string;
  taxNumber: string;
  country: string;
  // commercialReg: any;
};

export function BusinessInfoForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h3 className={formHeadingStyle}>Step 1: Company Information</h3>
      <div className={inputDivStyle}>
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          {...register("companyName")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="companyLegalName">Company Legal Name</label>
        <input
          id="companyLegalName"
          {...register("companyLegalName")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="licenseType">License Type</label>
        <input
          id="licenseType"
          {...register("licenseType")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="licenseNumber">License Number</label>
        <input
          id="licenseNumber"
          {...register("licenseNumber")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="taxNumber">Tax Number</label>
        <input
          id="taxNumber"
          {...register("taxNumber")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          {...register("country")}
          className={inputStyle}
          required={true}
        />
      </div>
      <div className="flex justify-end">
        <button className={nextButtonStyle}>Next</button>
      </div>
    </form>
  );
}
