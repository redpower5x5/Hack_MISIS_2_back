import { useEffect, useState } from "react";
import { DateRange, TagOption } from "../types/types";
import { getOneYearDateRange } from "../utils/utils";
import useTags from "../redux/hooks/useTags";

export const useFilters = () => {
  const { tags, loadTags } = useTags();
  const defaultTags = tags.map((tag) => ({ label: tag, value: tag }));

  const [datesFilter, setDatesFilter] = useState<DateRange>(
    getOneYearDateRange()
  );
  const [tagsFilter, setTagsFilter] = useState<TagOption[]>(defaultTags);

  const [search, setSearch] = useState("");

  const handleDatesFilterChange = (dates: DateRange) => {
    setDatesFilter(dates);
  };

  const handleTagsFilterChange = (tags: TagOption[]) => {
    setTagsFilter(tags);
  };

  const handleClearFilters = () => {
    setDatesFilter(getOneYearDateRange());
    setTagsFilter(defaultTags);
    setSearch("");
  };

  const handleSearchChange = (q: string) => {
    setSearch(q);
  };

  useEffect(() => {
    loadTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    defaultTags,
    datesFilter,
    tagsFilter,
    search,
    onDatesFilterChange: handleDatesFilterChange,
    onTagsFilterChange: handleTagsFilterChange,
    onClearFilters: handleClearFilters,
    onSearchChange: handleSearchChange,
  };
};
