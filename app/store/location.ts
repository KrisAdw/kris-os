import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;

export interface Location {
    id: number | string;
    type?: string;
    name: string;
    icon: string;
    kind?: string;
    children?: Location[];
    position?: string;
    windowPosition?: string;
    fileType?: string;
    href?: string;
    imageUrl?: string;
    description?: string[];
    subtitle?: string;
    image?: string;
    canOpen?: boolean;
}

interface LocationState {
    activeLocation: Location | null;
    setActiveLocation: (location?: Location | null) => void;
    resetActiveLocation: () => void;
}

const useLocationStore = create<LocationState>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        setActiveLocation: (location = null) =>
            set((state) => {
                state.activeLocation = location;
            }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    }))
);

export default useLocationStore;