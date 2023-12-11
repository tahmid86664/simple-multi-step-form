"use client";

import { useFormState } from "~/components/FormContext";
import { PasswordForm } from "~/components/PasswordForm";
import { BusinessInfoForm } from "~/components/BusinessInfoForm";
import { BankInfoForm } from "~/components/BankInfoForm";
import { BillingInfoForm } from "~/components/BillingInfoForm";
import { ContactPersonInfoForm } from "~/components/ContactPersonInfoForm";
import { BrandInfoForm } from "~/components/BrandInfoForm";
import { BusinessDocumentForm } from "~/components/BusinessDocumentForm";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <BusinessInfoForm />;
    case 2:
      return <BankInfoForm />;
    case 3:
      return <BillingInfoForm />;
    case 4:
      return <ContactPersonInfoForm />;
    case 5:
      return <BrandInfoForm />;
    case 6:
      return <BusinessDocumentForm />;
    default:
      return null;
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-full max-w-2xl  border  rounded-xl bg-white">
        <h1 className="text-center text-2xl font-semibold py-4 mb-4">
          Business Onboard Form
        </h1>
        <div className="space-y-6">
          <ActiveStepFormComponent />
        </div>
      </div>
    </main>
  );
}
