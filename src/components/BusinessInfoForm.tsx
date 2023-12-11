import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";

type TFormValues = {
  companyName: string;
  companyLegalName: string;
  licenseType: string;
  licenseNumber: string;
  taxNumber: string;
  country: string;
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
      <h3 className={"text-xl font-semibold mb-4"}>
        Step 1: Company Information
      </h3>
      <TextInput
        propertyName={"companyName"}
        label={"Company Name"}
        isRequired={true}
        isAutofocus={true}
        placeholder={"Enter your company name"}
        register={register}
        key={"companyName"}
      />
      <TextInput
        propertyName={"companyLegalName"}
        label={"Company Legal Name"}
        isRequired={true}
        placeholder={"Enter your company legal name"}
        register={register}
        key={"companyLegalName"}
      />
      <TextInput
        propertyName={"licenseType"}
        label={"License Type"}
        isRequired={true}
        placeholder={"Enter license type"}
        register={register}
        key={"licenseType"}
      />
      <TextInput
        propertyName={"licenseNumber"}
        label={"License Number"}
        isRequired={true}
        placeholder={"Enter license number"}
        register={register}
        key={"licenseNumber"}
      />
      <TextInput
        propertyName={"taxNumber"}
        label={"Tax Number"}
        isRequired={true}
        placeholder={"Enter tax number"}
        register={register}
        key={"taxNumber"}
      />
      <TextInput
        propertyName={"country"}
        label={"Country"}
        isRequired={true}
        placeholder={"Enter country"}
        register={register}
        key={"country"}
      />

      <Button buttonType={"next"} buttonText={"Next"} onClickHandler={null} />
    </form>
  );
}
