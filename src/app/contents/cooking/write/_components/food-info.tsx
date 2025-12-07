import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Button } from "@/components/ui-elements/button";
import { ModalTrigger } from "./modalTrigger";

export function FoodInfo() {
  return (
    <ShowcaseSection title="제철 요리 정보" className="!p-6.5">
      <form action="#"></form>
      <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
        <InputGroup
          label="제철요리 이름"
          type="text"
          placeholder=""
          className="w-full xl:w-1/2"
          required
        />

        <div className="gird">
          <label className="text-body-sm font-medium text-dark">
            제철음식 선택
            <span className="ml-1 select-none text-red">*</span>
          </label>

          <div className="mt-3 flex">
            <ModalTrigger />
            <InputGroup
              type="text"
              label=""
              placeholder=""
              className="!mt-0 w-full xl:w-1/2"
              required
            />
          </div>
        </div>

        <InputGroup
          type="file"
          fileStyleVariant="style1"
          label="이미지"
          placeholder="Attach file"
          className="mb-4.5"
          required
        />

        <Select
          label="노출상태"
          placeholder=""
          className="mb-4.5"
          items={[
            { label: "노출", value: "open" },
            { label: "비노출", value: "close" },
          ]}
        />

        <InputGroup
          label="총 득표수"
          type="text"
          placeholder=""
          value="23"
          className="w-full xl:w-1/2"
          disabled
        />
      </div>
    </ShowcaseSection>
  );
}
