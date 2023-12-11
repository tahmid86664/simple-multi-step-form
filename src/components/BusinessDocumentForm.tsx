import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";
import { useState } from "react";
import JsonDisplay from "./JsonDisplay";

type TFormValues = {
  commercialReg: File;
  commercialRegFileId: string;
  commercialRegNum: string;
  commercialRegIssueCountry: string;
  commercialRegIssueDate: string;
  commercialRegExpDate: string;
  commercialLicense: File;
  commercialLicenseFileId: string;
  commercialLicenseNum: string;
  commercialLicenseIssueCountry: string;
  commercialLicenseIssueDate: string;
  commercialLicenseExpDate: string;
  trademark: File;
  trademarkFileId: string;
  trademarkNum: string;
  trademarkIssueCountry: string;
  trademarkIssueDate: string;
  trademarkExpDate: string;
};

export function BusinessDocumentForm() {
  const [isCreated, setCreated] = useState(false);

  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setCreated(true);
  };

  return isCreated ? (
    <div>
      <p>Account created successfully</p>
      <JsonDisplay jsonData={formData} />
    </div>
  ) : (
    <form
      className="flex gap-1 flex-col"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h3 className={"text-xl font-semibold mb-4"}>Step 6: Bank Information</h3>

      {/* Commercial Reg info */}
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="idCard">Commercial Registration</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="commercialRegNum"
            {...register("commercialRegNum")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            required={true}
            placeholder="Registration number"
          />
          <input
            id="commercialRegIssueCountry"
            {...register("commercialRegIssueCountry")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issuing country"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <input
            type="date"
            id="commercialRegIssueDate"
            {...register("commercialRegIssueDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issue date"
            required={true}
          />
          <input
            type="date"
            id="commercialRegExpDate"
            {...register("commercialRegExpDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Expiry date"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="commercialReg">
              Commercial Registration Document (PDF)
            </label>
            <input
              type="file"
              id="commercialReg"
              {...register("commercialReg")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={true}
            />
          </div>
        </div>
      </div>

      {/* Commercial License info */}
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="idCard">Commercial License</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="commercialLicenseNum"
            {...register("commercialLicenseNum")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            required={true}
            placeholder="License number"
          />
          <input
            id="commercialLicenseIssueCountry"
            {...register("commercialLicenseIssueCountry")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issuing country"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <input
            type="date"
            id="commercialLicenseIssueDate"
            {...register("commercialLicenseIssueDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issue date"
            required={true}
          />
          <input
            type="date"
            id="commercialLicenseExpDate"
            {...register("commercialLicenseExpDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Expiry date"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="commercialLicense">
              Commercial License Document (PDF)
            </label>
            <input
              type="file"
              id="commercialLicense"
              {...register("commercialLicense")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={true}
            />
          </div>
        </div>
      </div>

      {/* Trademark info */}
      <div className={"flex gap-1 flex-col mb-2"}>
        <label htmlFor="idCard">Trademark</label>
        <div className={"flex gap-1 flex-row"}>
          <input
            id="trademarkNum"
            {...register("trademarkNum")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            required={true}
            placeholder="Trademark number"
          />
          <input
            id="trademarkIssueCountry"
            {...register("trademarkIssueCountry")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issuing country"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <input
            type="date"
            id="trademarkIssueDate"
            {...register("trademarkIssueDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Issue date"
            required={true}
          />
          <input
            type="date"
            id="trademarkExpDate"
            {...register("trademarkExpDate")}
            className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} w-1/2`}
            placeholder="Expiry date"
            required={true}
          />
        </div>
        <div className={"flex gap-1 flex-row"}>
          <div className={`${"flex gap-1 flex-col mb-2"} w-1/2`}>
            <label htmlFor="trademark">Trademark Document (PDF)</label>
            <input
              type="file"
              id="trademark"
              {...register("trademark")}
              className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
              required={true}
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
        <Button buttonType="create" buttonText="Create Business" />
      </div>
    </form>
  );
}
