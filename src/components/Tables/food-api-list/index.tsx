import { getFoodList } from "../fetch";
import { useQuery } from "@tanstack/react-query";

export default async function FoodApiList() {
  const { data, isLoading } = useQuery({
    queryKey: ["foods"], // search가 queryKey에 들어감
    queryFn: getFoodList,
  });

  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2">번호</th>
            <th className="px-4 py-2">음식명</th>
            <th className="px-4 py-2">공개주차</th>
            <th className="px-4 py-2">공개일자</th>
            <th className="px-4 py-2">노출</th>
            <th className="px-4 py-2">등록자</th>
            <th className="px-4 py-2">최종 업데이트일시</th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, i) => (
            <tr key={food.seq + i} className="border-b">
              <td className="px-4 py-2">{food.seq}</td>
              <td className="px-4 py-2">{food.name}</td>
              <td className="px-4 py-2">{food.openWeek}</td>
              <td className="px-4 py-2">{food.openDate}</td>
              <td className="px-4 py-2">{food.status}</td>
              <td className="px-4 py-2">{food.userID}</td>
              <td className="px-4 py-2">{food.finalUpdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
