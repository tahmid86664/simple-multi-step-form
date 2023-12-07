import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import {
  backButtonStyle,
  formHeadingStyle,
  inputDivFlexRowStyle,
  inputDivStyle,
  inputStyle,
  nextButtonStyle,
} from "~/constants/style";

type TFormValues = {
  nameTitle: string;
  fisrName: string;
  middleName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  nationality: string;
  dob: string;
  idCardFront: File;
  idCardBack: File;
  idIssuingCountry: string;
  idIssuingDate: string;
  idExpDate: string;
  passportFront: File;
  passportBack: File;
  passportIssuingCountry: string;
  passportIssuingDate: string;
  passportExpDate: string;
};

export function ContactPersonInfoForm() {
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
      <h3 className={formHeadingStyle}>Step 4: Contact Person Information</h3>
      <div className={inputDivStyle}>
        <label htmlFor="name">Name</label>
        <div className={inputDivFlexRowStyle}>
          <input
            autoFocus
            id="nameTitle"
            {...register("nameTitle")}
            className={`${inputStyle} w-1/6`}
            defaultValue={"Mr"}
            required={true}
            placeholder="Mr"
          />
          <input
            id="fisrName"
            {...register("fisrName")}
            className={`${inputStyle} w-1/3`}
            required={true}
            placeholder="first name"
          />
          <input
            id="middleName"
            {...register("middleName")}
            className={`${inputStyle} w-1/3`}
            placeholder="middle name"
          />
          <input
            id="lastName"
            {...register("lastName")}
            className={`${inputStyle} w-1/3`}
            placeholder="last name"
          />
        </div>
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          className={inputStyle}
          required={true}
          placeholder="email"
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="phone">Phone</label>
        <div className={inputDivFlexRowStyle}>
          <input
            id="countryCode"
            {...register("countryCode")}
            className={`${inputStyle} w-1/6`}
            defaultValue={"+88"}
            required={true}
            placeholder="+88"
          />
          <input
            id="phone"
            {...register("phone")}
            className={`${inputStyle} flex-1`}
            placeholder="phone number"
            required={true}
          />
        </div>
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="nationality">Nationality</label>
        <input
          id="nationality"
          {...register("nationality")}
          className={inputStyle}
          required={true}
          placeholder="nationality"
        />
      </div>
      <div className={inputDivStyle}>
        <label htmlFor="dob">Date of birth</label>
        <input
          type="date"
          id="dob"
          {...register("dob")}
          className={inputStyle}
          required={true}
        />
      </div>
      {/* ID card info */}
      <div className={inputDivStyle}>
        <label htmlFor="idCard">Identity Card</label>
        <div className={inputDivFlexRowStyle}>
          <input
            id="idIssuingCountry"
            {...register("idIssuingCountry")}
            className={`${inputStyle} w-1/3`}
            required={true}
            placeholder="issuing country"
          />
          <input
            type="date"
            id="idIssuingDate"
            {...register("idIssuingDate")}
            className={`${inputStyle} w-1/3`}
            placeholder="issuing date"
            required={true}
          />
          <input
            type="date"
            id="idExpDate"
            {...register("idExpDate")}
            className={`${inputStyle} w-1/3`}
            placeholder="expiry date"
            required={true}
          />
        </div>
        <div className={inputDivFlexRowStyle}>
          <div className={`${inputDivStyle} w-1/2`}>
            <label htmlFor="idCard">Front</label>
            <input
              type="file"
              id="idCardFront"
              {...register("idCardFront")}
              className={`${inputStyle} `}
              required={true}
            />
          </div>
          <div className={`${inputDivStyle} w-1/2`}>
            <label htmlFor="idCard">Back</label>
            <input
              type="file"
              id="idCardBack"
              {...register("idCardBack")}
              className={`${inputStyle} `}
              required={true}
            />
          </div>
        </div>
      </div>

      {/* passport info */}
      <div className={inputDivStyle}>
        <label htmlFor="passport">Passport</label>
        <div className={inputDivFlexRowStyle}>
          <input
            id="passportIssuingCountry"
            {...register("passportIssuingCountry")}
            className={`${inputStyle} w-1/3`}
            required={true}
            placeholder="issuing country"
          />
          <input
            type="date"
            id="passportIssuingDate"
            {...register("passportIssuingDate")}
            className={`${inputStyle} w-1/3`}
            placeholder="issuing date"
            required={true}
          />
          <input
            type="date"
            id="passportExpDate"
            {...register("passportExpDate")}
            className={`${inputStyle} w-1/3`}
            placeholder="expiry date"
            required={true}
          />
        </div>
        <div className={inputDivFlexRowStyle}>
          <div className={`${inputDivStyle} w-1/2`}>
            <label htmlFor="idCard">Front</label>
            <input
              type="file"
              id="passportFront"
              {...register("passportFront")}
              className={`${inputStyle} `}
              required={true}
            />
          </div>
          <div className={`${inputDivStyle} w-1/2`}>
            <label htmlFor="idCard">Back</label>
            <input
              type="file"
              id="passportBack"
              {...register("passportBack")}
              className={`${inputStyle} `}
              required={true}
            />
          </div>
        </div>
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
