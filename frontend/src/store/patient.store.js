import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePatientStore = create(
  persist(
    (set, get) => ({
      patients: [],
      user: null,
      loading: false,
      error: null,

      setPatients: (patients) => set({ patients }),

      createPatients: async (newPatient) => {
        if (!newPatient.fullName || !newPatient.email || !newPatient.aadharNumber) {
          return { success: false, message: "Please fill in all the fields" };
        }

        try {
          const res = await fetch("/api/v1/patients/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPatient),
          });

          if (!res.ok) {
            const errorData = await res.json();
            return {
              success: false,
              message: errorData?.message || "Failed to create patient record",
            };
          }

          const data = await res.json();

          set((state) => ({ patients: [...state.patients, data.data] }));

          return { success: true, message: "Patient created successfully" };
        } catch (error) {
          return { success: false, message: "An error occured while creating the patient record" };
        }
      },

      loginPatient: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("/api/v1/patients/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data?.message || "Login failed");
          }

          set({ user: data.data.existedUser, loading: false });
          return { success: true };
        } catch (err) {
          set({ error: err.message, loading: false });
          return { success: false, message: err.message };
        }
      },

      logoutPatient: async () => {
        try {
          await fetch("/api/v1/patients/logout", {
            method: "POST",
          });

          set({ user: null });
        } catch (err) {
          console.error("Logout failed", err);
        }
      },
    }),
    {
      name: "patient-store", // unique name for localStorage key
      partialize: (state) => ({ user: state.user }), // persist only user
    }
  )
);
