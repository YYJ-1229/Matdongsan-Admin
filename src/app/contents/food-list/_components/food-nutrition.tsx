import InputGroup from "@/components/FormElements/InputGroup";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function FoodNutrition() {
  return (
    <ShowcaseSection title="영양성분" className="!p-6.5">
      <form action="#">
        <div>
          <label className="text-body-sm font-medium text-dark dark:text-white">
            기준단위
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputGroup
              label=""
              type="text"
              placeholder="무게"
              className="mb-4.5"
            />
            <Select
              label=""
              placeholder="단위"
              className="mb-4.5"
              items={[
                { label: "g", value: "g" },
                { label: "kg", value: "kg" },
                { label: "통", value: "container" },
                { label: "묶음", value: "bundle" },
              ]}
            />
          </div>
        </div>

        <InputGroup
          label="에너지"
          type="text"
          placeholder="kcal"
          className="mb-4.5"
        />

        <InputGroup
          label="탄수화물"
          type="text"
          placeholder="g"
          className="mb-4.5"
        />

        <InputGroup
          label="식이섬유"
          type="text"
          placeholder="g"
          className="mb-4.5"
        />

        <InputGroup label="당" type="text" placeholder="g" className="mb-4.5" />

        <InputGroup
          label="단백질"
          type="text"
          placeholder="g"
          className="mb-4.5"
        />

        <InputGroup
          label="지방"
          type="text"
          placeholder="g"
          className="mb-4.5"
        />
      </form>
    </ShowcaseSection>
  );
}
