"use client";

import { type ReactNode, useState } from "react";
import Tag from "../../atoms/tag";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useItineraryStore } from "@/src/core/stores/itinerary";

export interface TagParams {
  text: string;
  icon: ReactNode;
}

interface TagsListProps {
  data: TagParams[];
  paramKey: string;
  searchParams: {
    [key: string]: string;
  };
}

export default function TagsList({
  data,
  searchParams,
  paramKey,
}: TagsListProps) {
  const { push } = useRouter();

  const [tags, setTags] = useState<string[]>([]);

  const handleSelectTag = (value: string) => {
    setTags((prev) => {
      const index = prev.indexOf(value);
      if (index === -1) {
        const tags = [...prev, value];
        const url = `/itinerary/preferences?search=${searchParams.search}&budget=${searchParams.budget}&duration=${searchParams.duration}&${paramKey}=${tags}`;
        push(url);
        return tags;
      }
      const filtredTags = prev.filter((item) => item !== value);
      return filtredTags;
    });
  };

  return (
    <div className="flex flex-wrap gap-3 pt-6">
      {data.map((tag, index) => (
        <Tag
          icon={tag.icon}
          text={tag.text}
          key={tag.text + index}
          onClick={() => handleSelectTag(tag.text)}
          selected={tags.includes(tag.text)}
        />
      ))}
    </div>
  );
}
