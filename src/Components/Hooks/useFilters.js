import { useMemo, useState, useEffect } from "react";

export default function useFilters(
  data,
  {
    typeKey = "type",
    dateKey = "date",
    externalSelectedYear,
    externalSelectedType
  } = {}
) {
  const [selectedYear, setSelectedYear] = useState(externalSelectedYear || "");
  const [selectedType, setSelectedType] = useState(externalSelectedType || "");

  useEffect(() => {
    setSelectedYear(externalSelectedYear || "");
  }, [externalSelectedYear]);

  useEffect(() => {
    setSelectedType(externalSelectedType || "");
  }, [externalSelectedType]);

  const years = useMemo(() => (
    [...new Set(data.map(item => new Date(item[dateKey]).getFullYear()))].map(String)
  ), [data, dateKey]);

  const types = useMemo(() => (
    [...new Set(data.flatMap(item =>
      Array.isArray(item[typeKey]) ? item[typeKey] : [item[typeKey]]
    ))].filter(Boolean)
  ), [data, typeKey]);

  const filtered = useMemo(() => (
    data.filter(item => {
      const itemYear = new Date(item[dateKey]).getFullYear().toString();
      const yearMatch = selectedYear === "" || selectedYear === itemYear;
      const itemType = item[typeKey];
      const typeMatch = selectedType === "" || (
        Array.isArray(itemType) ? itemType.includes(selectedType) : itemType === selectedType
      );
      return yearMatch && typeMatch;
    })
  ), [data, selectedYear, selectedType, dateKey, typeKey]);

  return {
    filtered,
    years,
    types,
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType
  };
}