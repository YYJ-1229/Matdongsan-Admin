import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function FoodInfo() {
  return (
    <ShowcaseSection title="제철 음식 정보" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="한국어 이름"
            type="text"
            placeholder=""
            className="w-full xl:w-1/2"
            required
          />

          <InputGroup
            label="영어 이름"
            type="text"
            placeholder=""
            className="w-full xl:w-1/2"
            required
          />
        </div>

        <InputGroup
          label="타이틀"
          type="text"
          placeholder=""
          className="mb-4.5"
          required
        />

        <InputGroup
          label="색상"
          type="text"
          placeholder="EX) #FF0000"
          className="mb-4.5"
        />

        <InputGroup
          type="file"
          fileStyleVariant="style1"
          label="이미지 파일"
          placeholder="Attach file"
          className="mb-4.5"
        />

        <div className="mb-4.5">
          <DatePickerOne label="공개일자" />
        </div>

        <TextAreaGroup label="음식 소개글" placeholder="" />
      </form>
    </ShowcaseSection>
  );
}
