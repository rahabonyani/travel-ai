"use client";

import Tag from "@/src/components/atoms/tag";
import { IconBrush } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function GroupPage() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [tags, setTags] = useState<string[]>([]);

  const handleSelectTag = (value: string) => {
    setTags((prev) => {
      const index = prev.indexOf(value);
      if (index === -1) {
        const tags = [...prev, value];
        return tags;
      }
      const filtredTags = prev.filter((item) => item !== value);
      return filtredTags;
    });
  };

  const handlePushQuery = (tags: string[]) => {
    const url = `/itinerary/preferences?search=${searchParams.get(
      "search"
    )}&budget=${searchParams.get("budget")}&duration=${searchParams.get(
      "duration"
    )}&groupType=${tags}&activities=${
      searchParams.get("activities") ? searchParams.get("activities") : ""
    }`;
    push(url);
  };

  useEffect(() => {
    handlePushQuery(tags);
  }, [tags]);

  return (
    <div className="flex flex-wrap gap-3 pt-6">
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Solo"
        onClick={() => handleSelectTag("solo")}
        selected={tags.includes("solo")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Friend"
        onClick={() => handleSelectTag("friend")}
        selected={tags.includes("friend")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Family"
        onClick={() => handleSelectTag("family")}
        selected={tags.includes("family")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Couple"
        onClick={() => handleSelectTag("couple")}
        selected={tags.includes("couple")}
      />
    </div>
  );
}
