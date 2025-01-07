import { type ReactNode } from "react";

interface PreferencesLayoutProps {
  children: ReactNode;
  group: ReactNode;
  activities: ReactNode;
}

export default function PreferencesLayout({
  children,
  group,
  activities,
}: PreferencesLayoutProps) {
  return (
    <div>
      {children}
      <div className="px-4">
        <div className="pt-10">
          <h1 className="text-2xl text-gray-800">Your travel group type</h1>
          {group}
        </div>
        <div className="pt-10">
          <h1 className="text-2xl text-gray-800">
            Activities you find most enjoyable
          </h1>
          {activities}
        </div>
      </div>
    </div>
  );
}
