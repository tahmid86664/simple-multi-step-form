import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";

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
      <h3 className={"text-xl font-semibold mb-4"}>
        Step 4: Contact Person Information
      </h3>
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="name">Name</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            autoFocus
            id="nameTitle"
            {...register("nameTitle")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/6`}
            defaultValue={"Mr"}
            required={true}
            placeholder="Mr"
          />
          <input
            id="fisrName"
            {...register("fisrName")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            required={true}
            placeholder="first name"
          />
          <input
            id="middleName"
            {...register("middleName")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="middle name"
          />
          <input
            id="lastName"
            {...register("lastName")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="last name"
          />
        </div>
      </div>
      <TextInput
        propertyName={"email"}
        label={"email"}
        isRequired={true}
        placeholder={"Enter email"}
        register={register}
        key={"email"}
      />
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="phone">Phone</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="countryCode"
            {...register("countryCode")}
            className={
              "border h-11 px-4 rounded-md focus:outline-zinc-500 w-1/6"
            }
            defaultValue={"+88"}
            required={true}
            placeholder="+88"
          />
          <input
            id="phone"
            {...register("phone")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} flex-1`}
            placeholder="phone number"
            required={true}
          />
        </div>
      </div>
      <TextInput
        propertyName={"nationality"}
        label={"nationality"}
        isRequired={true}
        placeholder={"Enter nationality"}
        register={register}
        key={"nationality"}
      />
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="dob">Date of birth</label>
        <input
          type="date"
          id="dob"
          {...register("dob")}
          className={"border h-11 px-4 rounded-md focus:outline-zinc-500"}
          required={true}
        />
      </div>

      {/* ID card info */}
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="idCard">Identity Card</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="idIssuingCountry"
            {...register("idIssuingCountry")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            required={true}
            placeholder="issuing country"
          />
          <input
            type="date"
            id="idIssuingDate"
            {...register("idIssuingDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="issuing date"
            required={true}
          />
          <input
            type="date"
            id="idExpDate"
            {...register("idExpDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="expiry date"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="idCard">Front</label>
            <input
              type="file"
              id="idCardFront"
              {...register("idCardFront")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={true}
            />
          </div>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="idCard">Back</label>
            <input
              type="file"
              id="idCardBack"
              {...register("idCardBack")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={false}
            />
          </div>
        </div>
      </div>

      {/* passport info */}
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="passport">Passport</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="passportIssuingCountry"
            {...register("passportIssuingCountry")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            required={false}
            placeholder="issuing country"
          />
          <input
            type="date"
            id="passportIssuingDate"
            {...register("passportIssuingDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="issuing date"
            required={false}
          />
          <input
            type="date"
            id="passportExpDate"
            {...register("passportExpDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/3`}
            placeholder="expiry date"
            required={false}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="idCard">Front</label>
            <input
              type="file"
              id="passportFront"
              {...register("passportFront")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={false}
            />
          </div>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="idCard">Back</label>
            <input
              type="file"
              id="passportBack"
              {...register("passportBack")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={false}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end mt-4">
        <Button
          buttonType="back"
          buttonText="Back"
          onClickHandler={onHandleBack}
        />
        <Button buttonType="next" buttonText="Next" />
      </div>
    </form>
  );
}
