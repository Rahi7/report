import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDoctorStore = create(
  persist(
    (set, get) => ({
      doctors: [],
      user: null,
      loading: false,
      error: null,

      setDoctors: (doctors) => set({ doctors }),

      createDoctors: async (newDoctor) => {
        if (
          !newDoctor.fullName ||
          !newDoctor.email ||
          !newDoctor.licenseNumber ||
          !newDoctor.Specialization
        ) {
          return { success: false, message: "Please fill in all the fields" };
        }

        try {
          const res = await fetch("/api/v1/doctors/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newDoctor),
          });

          if (!res.ok) {
            const errorData = await res.json();
            return {
              success: false,
              message: errorData?.message || "Failed to create doctor profile",
            };
          }

          const data = await res.json();

          set((state) => ({ doctors: [...state.doctors, data.data] }));

          return { success: true, message: "Doctor profile created successfully" };
        } catch (error) {
          return {
            success: false,
            message: "An error occured while creating the doctor profile",
          };
        }
      },

      loginDoctor: async (email, password) => {
        set({ loading: true, error: null });

        try {
          const res = await fetch("/api/v1/doctors/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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

      //  fetchProfile: async () => {
      //   set({ loading: true, error: null });
      //   try {
      //     const res = await fetch("/api/v1/doctors/profile", {
      //       method: "GET",
      //       credentials: "include", // send cookies
      //     });
      //     const data = await res.json();

      //     if (!res.ok) {
      //       throw new Error(data?.message || "Failed to fetch profile");
      //     }

      //     set({ user: data.data, loading: false });
      //     return { success: true };
      //   } catch (err) {
      //     set({ error: err.message, loading: false, user: null });
      //     return { success: false, message: err.message };
      //   }
      // },


//       fetchProfile: async () => {
//   set({ loading: true, error: null });
//   try {
//     const res = await fetch("/api/v1/doctors/profile", {
//       method: "GET",
//       credentials: "include", // send cookies
//     });
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data?.message || "Failed to fetch profile");
//     }

//     set({ user: data.data.existedUser || data.data, loading: false });
//     return { success: true };
//   } catch (err) {
//     set({ error: err.message, loading: false, user: null });
//     return { success: false, message: err.message };
//   }
// },

fetchProfile: async () => {
  set({ loading: true, error: null });
  try {
    const res = await fetch("/api/v1/doctors/profile", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    console.log("Profile API response:", data, "status:", res.status);

    if (!res.ok) {
      throw new Error(data?.message || "Failed to fetch profile");
    }

    // Adjust this depending on the actual data shape:
    set({ user: data.data.existedUser || data.data, loading: false });
    return { success: true };
  } catch (err) {
    set({ error: err.message, loading: false, user: null });
    return { success: false, message: err.message };
  }
},


      logoutDoctor: async () => {
        try {
          await fetch("/api/v1/doctors/logout", {
            method: "POST",
          });

          set({ user: null });
        } catch (err) {
          console.error("Logout failed", err);
        }
      },
    }),
    {
      name: "doctor-store", // unique name for localStorage key
      partialize: (state) => ({ user: state.user }), // persist only user
    }
  )
);
