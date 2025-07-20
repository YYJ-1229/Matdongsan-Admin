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

        <div>
          <label className="text-body-sm font-medium text-dark dark:text-white">
            공개일자
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select
              label=""
              placeholder="Month"
              className="mb-4.5"
              items={[
                { label: "1월", value: "1" },
                { label: "2월", value: "2" },
                { label: "3월", value: "3" },
                { label: "4월", value: "4" },
                { label: "5월", value: "5" },
                { label: "6월", value: "6" },
                { label: "7월", value: "7" },
                { label: "8월", value: "8" },
                { label: "9월", value: "9" },
                { label: "10월", value: "10" },
                { label: "11월", value: "11" },
                { label: "12월", value: "12" },
              ]}
            />
            <Select
              label=""
              placeholder="Week"
              className="mb-4.5"
              items={[
                { label: "1주차", value: "1" },
                { label: "2주차", value: "2" },
                { label: "3주차", value: "3" },
                { label: "4주차", value: "4" },
                { label: "5주차", value: "5" },
              ]}
            />
          </div>
        </div>

        <TextAreaGroup label="음식 소개글" placeholder="" />
      </form>
    </ShowcaseSection>
  );
}
