"use client";


import Tag from "@/src/components/atoms/tag";
import { useItineraryStore } from "@/src/core/stores/itinerary";
import { IconBrush, IconFish } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PreferencesPage() {
  const route = useRouter();

  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const setGroupType = useItineraryStore((state) => state.setGroupType);
  const setActivities = useItineraryStore((state) => state.setActivities);

  const handleSubmit = () => {
    setGroupType(selectedGroup);
    setActivities(selectedActivities);
    route.push("/itinerary/result");
  };

  return (
    <>
      <title>Preferences</title>
      <section className="flex-col flex ">
        <div className="flex flex-col gap-10 mt-4">
          <div className="">
            <h1>Tailor your adventure to your tastes</h1>
            <p className="text-gray-500 mt-3 text-sm font-medium">
              Select your travel preferences to customize your trip plan.
            </p>
          </div>

          <div className="">
            <h1 className="text-2xl">Your travel group type</h1>
            <div className="flex flex-wrap gap-3 mt-6">
              <Tag
                icon={<IconBrush />}
                text="Solo"
                value="solo"
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />

              <Tag
                icon={<IconBrush />}
                text="Friends"
                value="friends"
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />

              <Tag
                icon={<IconBrush />}
                text="Family"
                value="family"
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl">Activities you find most enjoyable</h1>
            <div className="flex flex-wrap gap-3 mt-6">
              <Tag
                icon={<IconFish />}
                text="Beach Vacation"
                value="beach"
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

              <Tag
                icon={<IconBrush />}
                text="Solo"
                value="Solo"
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

              <Tag
                icon={<IconBrush />}
                text="Solo"
                value="Solo2"
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

              <Tag
                icon={<IconBrush />}
                text="Friends"
                value="friend2"
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

              <Tag
                icon={<IconBrush />}
                text="Solo"
                value="solo4"
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />
            </div>
          </div>
        </div>
        <span className="grow"></span>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white rounded-2xl text-center p-3 mt-4"
        >
          Next
        </button>
      </section>
    </>
  );
}
