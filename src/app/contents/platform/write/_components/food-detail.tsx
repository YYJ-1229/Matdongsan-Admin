import { Checkbox } from "@/components/FormElements/checkbox";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import Link from "next/link";

export function FoodDetail() {
  return (
    <ShowcaseSection title="제철 음식 상세" className="!p-6.5">
      <form action="#">
        <InputGroup
          label="제철시기"
          type="text"
          placeholder=""
          className="mb-4.5"
        />

        <InputGroup
          label="주요산지"
          type="text"
          placeholder=""
          className="mb-4.5"
        />

        <TextAreaGroup label="효능" className="mb-4.5" placeholder="" />

        <TextAreaGroup label="구입요령" className="mb-4.5" placeholder="" />

        <TextAreaGroup label="손질요령" className="mb-4.5" placeholder="" />

        <InputGroup
          label="시세 단위"
          type="text"
          placeholder="EX) 10개"
          className="mb-4.5"
        />
      </form>
    </ShowcaseSection>
  );
}
