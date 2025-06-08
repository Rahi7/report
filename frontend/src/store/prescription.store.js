import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePrescriptionStore = create(
  persist(
    (set, get) => ({
      prescriptions: [],
      loading: false,
      error: null,

      // For doctors: Add prescription
      addPrescription: async (prescriptionData) => {
        set({ loading: true, error: null });

        const { aadhaar, diagnosis, treatment, remarks } = prescriptionData;
        if (![aadhaar, diagnosis, treatment, remarks].every(field => field?.trim())) {
          set({ loading: false });
          return { success: false, message: "All fields are required" };
        }

        try {
          const res = await fetch("/api/v1/doctors/addPrescription", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(prescriptionData),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data?.message || "Failed to add prescription");
          }

          set((state) => ({
            prescriptions: [...state.prescriptions, data.data],
            loading: false,
          }));

          return { success: true, message: "Prescription added successfully" };
        } catch (err) {
          set({ error: err.message, loading: false });
          return { success: false, message: err.message };
        }
      },

      // For patients: Get prescriptions from blockchain
      fetchPrescriptions: async (walletAddress) => {
        set({ loading: true, error: null });

        if (!walletAddress) {
          set({ loading: false });
          return { success: false, message: "Wallet address is required" };
        }
        console.log("🔍 Fetching for wallet:", walletAddress);
        console.log("⏳ Fetching prescriptions...");
        try {
          const res = await fetch("/api/v1/patients/getPrescriptions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ walletAddress }),
          });

          const data = await res.json();
          console.log("📦 API response data:", data);
          if (!res.ok) {
            throw new Error(data?.message || "Failed to fetch prescriptions");
          }

          set({ prescriptions: data.data, loading: false });
          return { success: true };
        } catch (err) {
          set({ error: err.message, loading: false });
          return { success: false, message: err.message };
        }
      },
//      fetchPrescriptions :async (walletAddress) => {
//    set({ loading: true, error: null });

//   try {
//     const res = await fetch("/api/v1/patients/getPrescriptions", {
//       method: "POST", // Must be POST
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ walletAddress }), // Send walletAddress in JSON body
//       credentials: "include", // Optional - if backend uses cookies/auth
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data?.message || "Failed to fetch prescriptions");
//     }

//     data = await fetch(...);
//       set({ prescriptions: data, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     } finally {
//     setLoading(false);
//   }
// },


      clearPrescriptions: () => set({ prescriptions: [] }),
    }),
    {
      name: "prescription-store", // LocalStorage key
      partialize: (state) => ({ prescriptions: state.prescriptions }), // optional: persist prescriptions only
    }
  )
);
