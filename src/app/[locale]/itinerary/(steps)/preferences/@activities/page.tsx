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
        return [...prev, value];
      }
      return prev.filter((item) => item !== value);
    });
  };

  const handlePushQuery = (tags: string[]) => {
    const url = `/itinerary/preferences?search=${searchParams.get(
      "search"
    )}&budget=${searchParams.get("budget")}&duration=${searchParams.get(
      "duration"
    )}&groupType=${
      searchParams.get("groupType") ? searchParams.get("groupType") : ""
    }&activities=${tags}`;
    push(url);
  };

  useEffect(() => {
    handlePushQuery(tags);
  }, [tags]);

  return (
    <div className="flex flex-wrap gap-3 pt-6">
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Romantic"
        onClick={() => handleSelectTag("Romantic")}
        selected={tags.includes("Romantic")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Beach Vacation"
        onClick={() => handleSelectTag("Beach Vacation")}
        selected={tags.includes("Beach Vacation")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Nightlife"
        onClick={() => handleSelectTag("Nightlife")}
        selected={tags.includes("Nightlife")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Adventure"
        onClick={() => handleSelectTag("Adventure")}
        selected={tags.includes("Adventure")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Shopping"
        onClick={() => handleSelectTag("Shopping")}
        selected={tags.includes("Shopping")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Art Gallery"
        onClick={() => handleSelectTag("Art Gallery")}
        selected={tags.includes("Art Gallery")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Relaxation"
        onClick={() => handleSelectTag("Relaxation")}
        selected={tags.includes("Relaxation")}
      />
      <Tag
        icon={<IconBrush className="w-4 h-4" />}
        text="Historical"
        onClick={() => handleSelectTag("Historical")}
        selected={tags.includes("Historical")}
      />
    </div>
  );
}
