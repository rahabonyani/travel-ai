import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Itinerary {
  [key: string]: string | number | string[];
  city: string;
  budget: number;
  duration: number;
  groupType: string[];
  activities: string[];
}

interface ItineraryState {
  itinerary: Itinerary;
  setCity: (by: string) => void;
  setBudget: (by: number) => void;
  setDuration: (by: number) => void;
  setGroupType: (by: string[]) => void;
  setActivities: (by: string[]) => void;
}

export const useItineraryStore = create<ItineraryState>()(
  persist(
    (set) => ({
      itinerary: {
        city: "",
        budget: NaN,
        duration: NaN,
        groupType: [],
        activities: [],
      },
      setCity: (city) =>
        set((state) => ({ itinerary: { ...state.itinerary, city } })),
      setBudget: (budget) =>
        set((state) => ({ itinerary: { ...state.itinerary, budget } })),
      setDuration: (duration) =>
        set((state) => ({
          itinerary: { ...state.itinerary, duration },
        })),
      setGroupType: (groupType) =>
        set((state) => ({
          itinerary: { ...state.itinerary, groupType: groupType },
        })),
      setActivities: (activities) =>
        set((state) => ({
          itinerary: { ...state.itinerary, activities },
        })),
    }),
    { name: "itineraryStore" }
  )
);
