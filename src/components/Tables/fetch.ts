import * as logos from "@/assets/logos";

import { QueryFunctionContext } from "@tanstack/react-query";

export async function getTopProducts() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    {
      image: "/images/product/product-01.png",
      name: "Apple Watch Series 7",
      category: "Electronics",
      price: 296,
      sold: 22,
      profit: 45,
    },
    {
      image: "/images/product/product-02.png",
      name: "Macbook Pro M1",
      category: "Electronics",
      price: 546,
      sold: 12,
      profit: 125,
    },
    {
      image: "/images/product/product-03.png",
      name: "Dell Inspiron 15",
      category: "Electronics",
      price: 443,
      sold: 64,
      profit: 247,
    },
    {
      image: "/images/product/product-04.png",
      name: "HP Probook 450",
      category: "Electronics",
      price: 499,
      sold: 72,
      profit: 103,
    },
  ];
}

export async function getInvoiceTableData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1400));

  return [
    {
      name: "Free package",
      price: 0.0,
      date: "2023-01-13T18:00:00.000Z",
      status: "Paid",
    },
    {
      name: "Standard Package",
      price: 59.0,
      date: "2023-01-13T18:00:00.000Z",
      status: "Paid",
    },
    {
      name: "Business Package",
      price: 99.0,
      date: "2023-01-13T18:00:00.000Z",
      status: "Unpaid",
    },
    {
      name: "Standard Package",
      price: 59.0,
      date: "2023-01-13T18:00:00.000Z",
      status: "Pending",
    },
  ];
}

export async function getFoodList(
  context: QueryFunctionContext<[string, string?]>,
) {
  const [, search] = context.queryKey; // queryKey에서 search 추출

  const params = new URLSearchParams();
  if (search) params.append("search", search);
  // Fake delay
  //await new Promise((resolve) => setTimeout(resolve, 1500));

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/v1/foods/100/info`,
  //   {
  //     method: "GET",
  //   },
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch food review");
  // }

  //return res.json();

  return [
    {
      seq: 1,
      name: "옥수수",
      openWeek: "2025년도 8월 4주차",
      openDate: "2025-08-18",
      status: "Y",
      userID: "admin",
      finalUpdate: "2025-08-08 12:44:44",
    },
    {
      seq: 1,
      name: "옥수수",
      openWeek: "2025년도 8월 4주차",
      openDate: "2025-08-18",
      status: "Y",
      userID: "admin",
      finalUpdate: "2025-08-08 12:44:44",
    },
    {
      seq: 1,
      name: "옥수수",
      openWeek: "2025년도 8월 4주차",
      openDate: "2025-08-18",
      status: "Y",
      userID: "admin",
      finalUpdate: "2025-08-08 12:44:44",
    },
    {
      seq: 1,
      name: "옥수수",
      openWeek: "2025년도 8월 4주차",
      openDate: "2025-08-18",
      status: "Y",
      userID: "admin",
      finalUpdate: "2025-08-08 12:44:44",
    },
  ];
}

export async function getTopChannels() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    {
      name: "Google",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.google,
    },
    {
      name: "X.com",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.x,
    },
    {
      name: "Github",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.github,
    },
    {
      name: "Vimeo",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.vimeo,
    },
    {
      name: "Facebook",
      visitors: 3456,
      revenues: 4220,
      sales: 3456,
      conversion: 2.59,
      logo: logos.facebook,
    },
  ];
}
