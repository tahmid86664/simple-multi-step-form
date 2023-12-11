import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";

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
      <h3 className={"text-xl font-semibold mb-4"}>
        Step 3: Billing Information
      </h3>
      <TextInput
        propertyName={"recipientName"}
        label={"Recipient Name"}
        isRequired={true}
        isAutofocus={true}
        placeholder={"Enter recipient name"}
        register={register}
        key={"recipientName"}
      />
      <TextInput
        propertyName={"addressLine1"}
        label={"Address Line 1"}
        isRequired={true}
        placeholder={"Enter billing address"}
        register={register}
        key={"addressLine1"}
      />
      <TextInput
        propertyName={"addressLine2"}
        label={"Address Line 2"}
        isRequired={true}
        placeholder={"address line 2"}
        register={register}
        key={"addressLine2"}
      />
      <TextInput
        propertyName={"poBox"}
        label={"PO Box"}
        isRequired={true}
        placeholder={"Enter PO box"}
        register={register}
        key={"poBox"}
      />
      <TextInput
        propertyName={"district"}
        label={"District"}
        isRequired={true}
        placeholder={"District"}
        register={register}
        key={"district"}
      />
      <TextInput
        propertyName={"city"}
        label={"City"}
        isRequired={true}
        placeholder={"city"}
        register={register}
        key={"city"}
      />
      <TextInput
        propertyName={"state"}
        label={"State"}
        isRequired={true}
        placeholder={"State"}
        register={register}
        key={"state"}
      />
      <TextInput
        propertyName={"zipCode"}
        label={"Zip Code"}
        isRequired={true}
        placeholder={"Zip Code"}
        register={register}
        key={"zipCode"}
      />
      <TextInput
        propertyName={"zipCode"}
        label={"Zip Code"}
        isRequired={true}
        placeholder={"Zip Code"}
        register={register}
        key={"zipCode"}
      />
      <TextInput
        propertyName={"billingCountry"}
        label={"Country"}
        isRequired={true}
        placeholder={"Country"}
        register={register}
        key={"billingCountry"}
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
