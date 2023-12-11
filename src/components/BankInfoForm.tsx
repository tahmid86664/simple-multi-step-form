import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";

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
      <h3 className={"text-xl font-semibold mb-4"}>Step 2: Bank Information</h3>
      <TextInput
        propertyName={"iban"}
        label={"IBAN"}
        isRequired={true}
        isAutofocus={true}
        placeholder={"Enter IBAN"}
        register={register}
        key={"iban"}
      />
      <TextInput
        propertyName={"swiftCode"}
        label={"Swift Code"}
        isRequired={true}
        placeholder={"Swift Code"}
        register={register}
        key={"swiftCode"}
      />
      <TextInput
        propertyName={"accountNumber"}
        label={"Account Number"}
        isRequired={true}
        placeholder={"Enter bank account number"}
        register={register}
        key={"accountNumber"}
      />

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
