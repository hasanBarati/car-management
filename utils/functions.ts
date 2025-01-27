export function toPersianDate(gregorianDate) {
    console.log("gregorianDate",gregorianDate)
    return   new Date(gregorianDate).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    
  }
  