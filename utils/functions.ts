export function toPersianDate(gregorianDate) {

    return   new Date(gregorianDate).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    
  }
  