import XLSX from "xlsx";

const exportDataToXlsx = ({ filename }) => {
  const data = [
    { index: 1, name: "apple", price: "1,200" },
    { index: 2, name: "grape", price: "3,500" },
    { index: 3, name: "strawberry", price: "5,500" },
  ];
  const worksheet = XLSX.utils.json_to_sheet(data); // excel sheet하단의 worksheet에 해당
  const new_workbook = XLSX.utils.book_new(); // excel 파일에 해당
  XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS"); // excelsheet를 excel파일에 넣음
  XLSX.writeFile(new_workbook, filename + ".xlsx");
};

exportDataToXlsx();
