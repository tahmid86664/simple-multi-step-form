import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";
import TextInput from "./TextInput";
import Button from "./Button";

type TFormValues = {
  brandName: string;
  aboutBrand: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  logoFileId: string;
  logoFIle: File;
};

export function BrandInfoForm() {
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
        Step 5: Brand Information
      </h3>
      <TextInput
        propertyName={"brandName"}
        label={"Brand Name"}
        isRequired={true}
        isAutofocus={true}
        placeholder={"Enter brand name"}
        register={register}
        key={"brandName"}
      />
      <TextInput
        propertyName={"aboutBrand"}
        label={"About Your Brand"}
        isRequired={true}
        placeholder={"Short description about your brand"}
        register={register}
        key={"aboutBrand"}
      />
      <TextInput
        propertyName={"website"}
        label={"Brand Website"}
        isRequired={false}
        placeholder={"Enter website url"}
        register={register}
        key={"website"}
      />
      <TextInput
        propertyName={"facebook"}
        label={"Facebook"}
        isRequired={false}
        placeholder={"Enter facebook url"}
        register={register}
        key={"facebook"}
      />
      <TextInput
        propertyName={"instagram"}
        label={"Instagram"}
        isRequired={false}
        placeholder={"Enter instagram url"}
        register={register}
        key={"instagram"}
      />
      <TextInput
        propertyName={"linkedin"}
        label={"Linkedin"}
        isRequired={false}
        placeholder={"Enter linkedin url"}
        register={register}
        key={"linkedin"}
      />
      <TextInput
        propertyName={"twitter"}
        label={"Twitter"}
        isRequired={false}
        placeholder={"Enter twitter url"}
        register={register}
        key={"twitter"}
      />
      <div className={`${"flex gap-1 flex-col mb-2"}`}>
        <label htmlFor="logoFIle">Brand Logo</label>
        <input
          type="file"
          id="logoFIle"
          {...register("logoFIle")}
          className={`${"border h-11 px-4 rounded-md focus:outline-zinc-500"} `}
          required={true}
        />
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
